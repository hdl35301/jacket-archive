@echo off
chcp 65001 >nul
echo === Copy-Paste Verification Mode ===

REM ============================================================
REM [コピペ検証バッチ]
REM PowerShell 7.5.3 対応版 / UTF-8 (BOMあり / CRLF)
REM ============================================================

setlocal enabledelayedexpansion
set WORKDIR=%~dp0
cd /d "%WORKDIR%"

echo [INFO] === copy-paste verification START ===

:: 1. バックアップ作成
if not exist backups mkdir backups
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/update_core.js --mode=backup"

:: 2. キャッシュ削除（軽量）
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm cache verify | Out-Null"

:: 3. Tailwind v3.4.13 固定確認
pwsh -NoProfile -ExecutionPolicy Bypass -Command ^
  "if ((npm list tailwindcss | Select-String '3.4.13') -eq $null) { npm install tailwindcss@3.4.13 }"

:: 4. Router監査
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/audit_core.js light"

:: 5. コピペ手動確認メッセージ
echo [NOTICE] 手動で貼り替えたコードを検証中。update_core.js は実行しません。

:: 6. 開発サーバ起動
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm run dev"

echo [INFO] === copy-paste verification END ===
pause
endlocal
