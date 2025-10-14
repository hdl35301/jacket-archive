// ============================================================
// updateAll.js  (Full Overwrite Only / Safe Maintenance Version)
// ============================================================
// 繝ｫ繝ｼ繝ｫ:
// 繝ｻ蜈ｨ繝輔ぃ繧､繝ｫ繝輔Ν荳頑嶌縺榊ｰら畑・亥ｷｮ蛻・峩譁ｰ遖∵ｭ｢・・// 繝ｻ讀懈渊邉ｻ・・outer讀懷・繝ｻTailwind遒ｺ隱阪↑縺ｩ・峨・繝舌ャ繝∝・縺ｫ蟋比ｻｻ
// 繝ｻ繝舌ャ繧ｯ繧｢繝・・菴懈・縺ｨ繝輔Ν荳頑嶌縺榊・逅・・縺ｿ螳滓命
// 繝ｻnewContent / 譁・ｭ怜・鄂ｮ謠・/ 蟾ｮ蛻・ｧ｣譫舌Ο繧ｸ繝・け縺ｯ遖∵ｭ｢
// ------------------------------------------------------------

const fs = require("fs");
const path = require("path");

console.log("============================================================");
console.log("[updateAll] RUNNING FILE:", __filename);
console.log("Project Root:", process.cwd());
console.log("Mode: FULL OVERWRITE (no differential updates)");
console.log("============================================================");

// === 繝代せ螳夂ｾｩ ===
const srcDir = path.join(__dirname, "../src");
const pagesDir = path.join(srcDir, "pages");
const appFile = path.join(srcDir, "App.jsx");

// === 繝舌ャ繧ｯ繧｢繝・・菴懈・ ===
const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
const backupDir = path.join(__dirname, `../backups/update_${timestamp}`);
fs.mkdirSync(backupDir, { recursive: true });

try {
  if (fs.existsSync(pagesDir)) {
    fs.cpSync(pagesDir, path.join(backupDir, "pages"), { recursive: true });
    console.log("笨・Backup created for: /src/pages");
  } else {
    console.warn("笞 Missing: /src/pages (skipped backup)");
  }

  if (fs.existsSync(appFile)) {
    fs.copyFileSync(appFile, path.join(backupDir, "App.jsx"));
    console.log("笨・Backup created for: App.jsx");
  } else {
    console.warn("笞 Missing: App.jsx (skipped backup)");
  }

  console.log("Backup directory:", backupDir);
} catch (err) {
  console.error("笶・Backup failed:", err.message);
  process.exit(1);
}

// === 荳頑嶌縺榊・逅・ｼ亥・螳ｹ縺ｯ繝舌ャ繝∫ｵ檎罰縺ｧ謖ｿ蜈･・・===
console.log("売 Starting full overwrite update...");
console.log("・医ヰ繝・メ縺ｫ繧医ｋ謨ｴ蜷域ｧ讀懈渊貂医∩縲ゆｸ頑嶌縺榊ｯｾ雎｡縺ｯ /src/pages 縺ｨ App.jsx 縺ｮ縺ｿ・・);

// 螳滄圀縺ｮ繝輔ぃ繧､繝ｫ荳頑嶌縺阪・ update_process.bat / update_code_only.bat 縺ｫ繧医ｊ陦後ｏ繧後ｋ縲・// 縺薙％縺ｧ縺ｯ繝舌ャ繧ｯ繧｢繝・・縺ｨ荳頑嶌縺榊多莉､縺ｮ縺ｿ菫晄戟縺励∝ｷｮ蛻・Ο繧ｸ繝・け縺ｯ螳悟・謗帝勁縲・
console.log("笨・Update completed safely (no differential logic).");
console.log("============================================================");
