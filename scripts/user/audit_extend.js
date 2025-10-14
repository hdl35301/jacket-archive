// ============================================================
// audit_extend.js
// ============================================================
// 目的: audit_core の拡張監査フェーズ
// - プロジェクト固有の追加チェック（Tailwind, Router, data整合性など）
// - export 名は runAuditExtend 固定（audit_core.js が import）
// ------------------------------------------------------------

import fs from "fs";

export function runAuditExtend() {
  console.log("[audit_extend] running extended audit...");

  // ============================================================
  // 1. Tailwind バージョン確認
  // ============================================================
  try {
    const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const tailwindVer = pkg.dependencies?.tailwindcss || pkg.devDependencies?.tailwindcss;
    if (!tailwindVer || !tailwindVer.includes("3.4.13")) {
      throw new Error(`TailwindCSS version mismatch: expected 3.4.13, got ${tailwindVer || "none"}`);
    }
    console.log(`[audit_extend] ✓ TailwindCSS version OK (${tailwindVer})`);
  } catch (err) {
    console.error(`[audit_extend:tailwind] ${err.message}`);
    process.exit(1);
  }

  // ============================================================
  // 2. Router チェック (App.jsx に BrowserRouter がないこと)
  // ============================================================
  try {
    const app = fs.readFileSync("src/App.jsx", "utf8");
    if (/BrowserRouter|HashRouter/i.test(app)) {
      throw new Error("Router detected inside App.jsx (must be only in main.jsx)");
    }
    console.log("[audit_extend] ✓ Router structure OK");
  } catch (err) {
    console.error(`[audit_extend:router] ${err.message}`);
    process.exit(1);
  }

  // ============================================================
  // 3. data ソース整合性確認 (src/data/*.js 構造チェック)
  // ============================================================
  try {
    const dataDir = "src/data";
    const files = fs.existsSync(dataDir) ? fs.readdirSync(dataDir) : [];
    const required = ["brands.js", "makers.js", "models.js", "photos.js", "styles.js", "countries.js", "periods.js"];
    for (const req of required) {
      if (!files.includes(req)) throw new Error(`Missing required data file: ${req}`);
    }
    console.log("[audit_extend] ✓ data structure OK");
  } catch (err) {
    console.error(`[audit_extend:data] ${err.message}`);
    process.exit(1);
  }

  console.log("[audit_extend] ✓ extended audit complete.\n");
  return true;
}
