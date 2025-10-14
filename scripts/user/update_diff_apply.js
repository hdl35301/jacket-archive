// ============================================================
// update_diff_apply.js (Safe Differential Patch Executor)
// ============================================================
// - scripts/diffs/*.diff を順に適用
// - CRLF/LF・空白差を無視して安全適用
// - 事前BOM除去 + バックアップ + 冪等チェック
// ============================================================

import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function log(msg) {
  console.log(`[update_diff_apply] ${msg}`);
}

function containsForbiddenTokens(text) {
  const tokens = ["periodPresets", "template", "overwrite"];
  return tokens.some((t) => text.includes(t));
}

function preBackup(targetPath) {
  if (!fs.existsSync(targetPath)) return;
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const backupsRoot = path.join(__dirname, "../../backups");
  fs.mkdirSync(backupsRoot, { recursive: true });
  const dest = path.join(backupsRoot, `${ts}_${path.basename(targetPath)}`);
  fs.copyFileSync(targetPath, dest);
  log(`Backup created: ${path.relative(path.join(__dirname, "../.."), dest)}`);
}

function stripBomIfAny(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    let txt = fs.readFileSync(filePath, "utf8");
    if (txt.charCodeAt(0) === 0xFEFF) {
      txt = txt.replace(/^\uFEFF/, "");
      fs.writeFileSync(filePath, txt, "utf8");
      log(`BOM removed: ${path.relative(path.join(__dirname, "../.."), filePath)}`);
    }
  } catch {}
}

function applyDiffFile(diffPath) {
  const rootDir = path.join(__dirname, "../..");
  const rel = path.relative(rootDir, diffPath);

  const diffContent = fs.readFileSync(diffPath, "utf8");
  if (!diffContent.trim()) {
    log("Empty diff file, skipping.");
    return { applied: false };
  }

  if (containsForbiddenTokens(diffContent)) {
    throw new Error(`Forbidden token found in ${rel}`);
  }

  // 抽出ターゲット
  const targets = [];
  for (const line of diffContent.split("\n")) {
    if (line.startsWith("+++ b/")) {
      const p = line.replace("+++ b/", "").trim();
      if (p !== "/dev/null") targets.push(path.join(rootDir, p));
    }
  }

  // 事前バックアップ + 事前BOM除去（← NEW）
  for (const t of targets) {
    preBackup(t);
    stripBomIfAny(t);
  }

  // 冪等チェック（空白差無視 + recount）
  const common = ["--ignore-whitespace", "--ignore-space-change", "--recount"];
  const check = spawnSync("git", ["apply", "--check", ...common, rel], {
    cwd: rootDir, shell: true, encoding: "utf8",
  });

  if (check.status !== 0) {
    const reverseCheck = spawnSync("git", ["apply", "--reverse", "--check", ...common, rel], {
      cwd: rootDir, shell: true, encoding: "utf8",
    });
    if (reverseCheck.status === 0) {
      log(`Already applied: ${rel}`);
      return { applied: false, alreadyApplied: true };
    }
    throw new Error(`git apply check failed: ${rel}`);
  }

  // 適用（空白差無視 + recount）
  const apply = spawnSync("git", ["apply", rel, ...common, "--whitespace=nowarn"], {
    cwd: rootDir, shell: true, encoding: "utf8",
  });
  if (apply.status !== 0) {
    throw new Error(`git apply failed: ${rel}`);
  }

  // 適用後も最終BOM掃除
  for (const t of targets) stripBomIfAny(t);

  log(`✓ Applied: ${rel}`);
  return { applied: true };
}

export function runDiffApply() {
  log("Starting diff application...");
  const diffsDir = path.join(__dirname, "../diffs");
  if (!fs.existsSync(diffsDir)) {
    log("No diffs directory found.");
    return;
  }
  const files = fs.readdirSync(diffsDir).filter(f => f.endsWith(".diff") || f.endsWith(".patch"));
  if (files.length === 0) {
    log("No diff files found.");
    return;
  }
  for (const diffFile of files) {
    const diffPath = path.join(diffsDir, diffFile);
    log(`Applying ${diffPath}...`);
    try {
      const result = applyDiffFile(diffPath);
      if (result.applied) {
        log(`✓ Applied: ${diffFile}`);
      } else if (result.alreadyApplied) {
        log(`Already applied: ${diffFile}`);
      } else {
        log(`Cannot apply ${diffFile} (already applied or invalid).`);
      }
    } catch (err) {
      log(`ERROR applying ${diffFile}: ${err.message}`);
    }
  }
  log("Diff application completed.");
}
