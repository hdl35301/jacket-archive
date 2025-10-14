@echo off
chcp 65001 >nul
echo === Code Only Update Mode ===

setlocal enabledelayedexpansion
cd /d "%~dp0"

REM 1) 軽量キャッシュ削除（任意）
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite

REM 2) 監査→差分適用→再監査（すべて update_core.js がやる）
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/update_core.js --mode=code-only"

REM 3) 開発サーバ
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm run dev"

echo [INFO] === update_core (code-only) done ===
pause
endlocal
