@echo off
chcp 65001 >nul
echo === Full Update Mode ===

REM ============================================================
REM [フル更新バッチ]
REM PowerShell 7.5.3 対応版 / UTF-8 (BOMあり / CRLF)
REM ============================================================

setlocal enabledelayedexpansion
set WORKDIR=%~dp0
cd /d "%WORKDIR%"

echo [INFO] === update_core.js START (full) ===

:: 1. バックアップ作成
if not exist backups mkdir backups
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/update_core.js --mode=backup"

:: 2. クリーンアップ
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm cache clean --force"

:: 3. 再インストール
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm install"

:: 4. Tailwind v3.4.13 固定確認
pwsh -NoProfile -ExecutionPolicy Bypass -Command ^
  "if ((npm list tailwindcss | Select-String '3.4.13') -eq $null) { npm install tailwindcss@3.4.13 }"

:: 5. 監査＋更新
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/audit_core.js full"
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/update_core.js --mode=full"

:: 6. 開発サーバ起動
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm run dev"

echo [INFO] === update_core.js END ===
pause
endlocal
