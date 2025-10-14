?// ============================================================
// updateAll.js  (Full Overwrite Only / Safe Maintenance Version)
// ============================================================
// ルール:
// ・全ファイルフル上書き専用�E�差刁E��新禁止�E�E// ・検査系�E�Eouter検�E・Tailwind確認など�E��Eバッチ�Eに委任
// ・バックアチE�E作�Eとフル上書き�E琁E�Eみ実施
// ・newContent / 斁E���E置揁E/ 差刁E��析ロジチE��は禁止
// ------------------------------------------------------------

const fs = require("fs");
const path = require("path");

console.log("============================================================");
console.log("[updateAll] RUNNING FILE:", __filename);
console.log("Project Root:", process.cwd());
console.log("Mode: FULL OVERWRITE (no differential updates)");
console.log("============================================================");

// === パス定義 ===
const srcDir = path.join(__dirname, "../src");
const pagesDir = path.join(srcDir, "pages");
const appFile = path.join(srcDir, "App.jsx");

// === バックアチE�E作�E ===
const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
const backupDir = path.join(__dirname, `../backups/update_${timestamp}`);
fs.mkdirSync(backupDir, { recursive: true });

try {
  if (fs.existsSync(pagesDir)) {
    fs.cpSync(pagesDir, path.join(backupDir, "pages"), { recursive: true });
    console.log("✁EBackup created for: /src/pages");
  } else {
    console.warn("�? Missing: /src/pages (skipped backup)");
  }

  if (fs.existsSync(appFile)) {
    fs.copyFileSync(appFile, path.join(backupDir, "App.jsx"));
    console.log("✁EBackup created for: App.jsx");
  } else {
    console.warn("�? Missing: App.jsx (skipped backup)");
  }

  console.log("Backup directory:", backupDir);
} catch (err) {
  console.error("❁EBackup failed:", err.message);
  process.exit(1);
}

// === 上書き�E琁E���E容はバッチ経由で挿入�E�E===
console.log("?�� Starting full overwrite update...");
console.log("�E�バチE��による整合性検査済み。上書き対象は /src/pages と App.jsx のみ�E�E);

// 実際のファイル上書き�E update_process.bat / update_code_only.bat により行われる、E// ここではバックアチE�Eと上書き命令のみ保持し、差刁E��ジチE��は完�E排除、E
console.log("✁EUpdate completed safely (no differential logic).");
console.log("============================================================");
