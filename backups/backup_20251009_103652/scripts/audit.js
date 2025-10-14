// ===============================================
//  Jacket Archive - audit.js
//  Router / mockData / Tailwind / data integrity 監査スクリプト
//  UTF-8 エンコード専用
// ===============================================

import fs from "fs";
import path from "path";

console.log("=== audit.js ===");

// プロジェクトルート
const root = path.resolve("./");

// ログ出力用
let ok = [];
let ng = [];

// ファイルパス群
const appPath = path.join(root, "src", "App.jsx");
const mainPath = path.join(root, "src", "main.jsx");
const pkgPath = path.join(root, "package.json");
const topPagePath = path.join(root, "src", "pages", "TopPage.jsx");
const dataIndexPath = path.join(root, "src", "data", "index.js");
const mockPath = path.join(root, "src", "mockData.js");

// 共通関数
function checkFileContains(file, keyword, label, mustExist = true) {
  if (!fs.existsSync(file)) {
    ng.push(`✖ ${label} (${file} が存在しません)`);
    return;
  }
  const text = fs.readFileSync(file, "utf-8");
  const exists = text.includes(keyword);
  if (exists === mustExist) {
    ok.push(`✔ ${label}`);
  } else {
    ng.push(`✖ ${label}`);
  }
}

// === Router検出 ===
if (fs.existsSync(appPath)) {
  const appText = fs.readFileSync(appPath, "utf-8");
  if (appText.match(/Router|BrowserRouter|HashRouter/)) {
    ng.push("✖ App.jsx に Router が含まれています。Router は main.jsx のみで定義してください。");
  } else {
    ok.push("✔ App.jsx に Router は含まれていません。");
  }

  if (appText.includes('/makers')) {
    ok.push("✔ App.jsx に /makers ルートが存在します。");
  } else {
    ng.push("✖ App.jsx に /makers ルートが存在しません。");
  }
}

if (fs.existsSync(mainPath)) {
  const mainText = fs.readFileSync(mainPath, "utf-8");
  if (mainText.match(/Router|BrowserRouter|HashRouter/)) {
    ok.push("✔ main.jsx に Router が存在します。");
  } else {
    ng.push("✖ main.jsx に Router が存在しません。");
  }
}

// === mockData.js 削除確認 ===
if (fs.existsSync(mockPath)) {
  ng.push("✖ src/mockData.js が残っています。削除してください。");
} else {
  ok.push("✔ src/mockData.js が存在しません。");
}

// === Tailwind バージョン確認 ===
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  const tailwindVersion = pkg.devDependencies?.tailwindcss || pkg.dependencies?.tailwindcss;
  if (tailwindVersion === "^3.4.13" || tailwindVersion === "3.4.13") {
    ok.push("✔ package.json の tailwindcss は 3.4.13。");
  } else {
    ng.push("✖ package.json の tailwindcss が 3.4.13 ではありません。");
  }
}

// === data/index.js 存在確認 ===
if (fs.existsSync(dataIndexPath)) {
  ok.push("✔ src/data/index.js が存在します。");
} else {
  ng.push("✖ src/data/index.js が存在しません。");
}

// === TopPage import 確認 ===
if (fs.existsSync(topPagePath)) {
  const topText = fs.readFileSync(topPagePath, "utf-8");
  if (topText.includes("../data/periods")) {
    ok.push("✔ TopPage.jsx が ../data/periods から import しています。");
  } else if (topText.includes("periodPresets")) {
    ng.push("✖ TopPage.jsx の periodPresets import が不正です。");
  } else {
    ng.push("✖ TopPage.jsx に periodPresets / periods の import 定義が見つかりません。");
  }

  // ページ内 *Options 検出
  if (topText.match(/\w+Options\s*=/)) {
    ng.push("✖ ページ内に *Options 配列定義があります。data/*.js を使用してください。");
  } else {
    ok.push("✔ ページ内に *Options 配列定義はありません。");
  }
}

// === 結果出力 ===
console.log(ok.join("\n"));
if (ng.length > 0) {
  console.log("");
  console.log(ng.join("\n"));
  console.log("[ERROR] 監査に失敗しました。修正して再実行してください。");
  process.exit(1);
} else {
  console.log("");
  console.log("✅ すべての監査項目をパスしました。");
  process.exit(0);
}
