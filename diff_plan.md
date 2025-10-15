# 🧩 diff_plan.md（Leather / Jacket Archive 共通仕様）

> ⚠️ このファイルは ChatGPT が生成し、Cursor が参照して **最小diffを適用するための唯一の設計書** です。  
> 手動編集禁止。全ての更新はここに仕様を明記してから行うこと。

---

## 🧠 基本情報

| 項目 | 内容 |
|------|------|
| **対象プロジェクト** | Leather Archive / Jacket Archive |
| **生成元** | ChatGPT (GPT-5) |
| **差分適用者** | Cursor (Claude 3.5 Sonnet) |
| **環境基準** | PowerShell 7.5.3／Node.js 22.19.0／TailwindCSS 3.4.13 固定 |
| **コード形式** | UTF-8 LF（.bat のみ BOMあり CRLF） |

---

## 🧾 1. 目的
> この更新の目的・背景を簡潔に明示する。

---

## 🧱 2. 対象ファイル一覧

| ファイルパス | 種別 | 更新内容 |
|---------------|--------|-----------|
| (例) src/pages/TopPage.jsx | JSX | 検索UI修正 |
| (例) src/data/models.js | JS | データ構造更新 |

---

## ⚙️ 3. 差分内容要約（概要レベル）
> コードそのものではなく、「どう変えるか」を記述。

---

## 🧩 4. 監査要件（audit_core / audit_extend）
| チェック項目 | 合格条件 |
|---------------|-----------|
| Router構成 | main.jsxのみBrowserRouterを保持 |
| TailwindCSS | v3.4.13固定 |
| Data構造 | 可変データ7種に統一 |
| mockData | 禁止 |
| presets構成 | UI制御専用 |
| export形式 | 統一必須 |

---

## 💾 5. 更新方式（Cursor用指示）
- diff形式: git apply互換（Binary禁止）
- バックアップ: backups\YYYYMMDD_HHMMSS_ファイル名
- エンコード: UTF-8 LF

---

## 🧩 6. 更新後手順
```bash
cmd /c update_code_only.bat
```

---

## ✅ 7. 最終チェックリスト
| 項目 | 状態 |
|------|------|
| diff_plan.md生成 | ☑ |
| 差分適用 | ☑ |
| pre/post監査 | ☑ |
| backup保存 | ☑ |
| Git commit | ☑ |
