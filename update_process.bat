@echo off
chcp 65001 >nul
echo === Full Update Mode ===

REM ============================================================
REM [環境構築 & フル上書き更新バッチ]
REM PowerShell 7.5.3 対応版 / UTF-8 (BOMなし) 出力
REM ============================================================

setlocal enabledelayedexpansion
set WORKDIR=%~dp0
cd /d "%WORKDIR%"

echo [INFO] === update_core.js START (full rebuild) ===

:: 1. 既存環境クリーンアップ
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite

:: 2. npm キャッシュクリア & 再インストール
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm cache clean --force | Out-Null"
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm install --prefer-offline | Out-Null"

:: 3. Tailwind v3.4.13 固定確認
pwsh -NoProfile -ExecutionPolicy Bypass -Command "if ((npm list tailwindcss | Select-String '3.4.13') -eq $null) { npm install tailwindcss@3.4.13 }"

:: 4. 監査・Router検出
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/audit_core.js full"

:: 5. updateAll.js 実行（フル上書き）
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/update_core.js full"

:: 6. Vite 起動
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm run dev"

echo [INFO] === update_core.js END ===
pause
endlocal
