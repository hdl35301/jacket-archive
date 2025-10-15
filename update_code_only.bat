@echo off
chcp 65001 >nul
echo === Code Only Update Mode ===

REM ============================================================
REM [軽量更新バッチ]
REM PowerShell 7.5.3 対応版 / UTF-8 (BOMあり / CRLF)
REM ============================================================

setlocal enabledelayedexpansion
set WORKDIR=%~dp0
cd /d "%WORKDIR%"

echo [INFO] === update_core.js START (code-only) ===

:: 1. キャッシュ削除（軽量）
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite

:: 2. npm キャッシュクリーン軽度実行
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm cache verify | Out-Null"

:: 3. Tailwind v3.4.13 固定確認
pwsh -NoProfile -ExecutionPolicy Bypass -Command ^
  "if ((npm list tailwindcss | Select-String '3.4.13') -eq $null) { npm install tailwindcss@3.4.13 }"

:: 4. Router監査（scripts/core/audit_core.js に移動済み）
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/audit_core.js light"

:: 5. 差分適用（scripts/core/update_core.js に統合）
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/core/update_core.js --mode=code-only"

:: 6. Vite 起動
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm run dev"

echo [INFO] === update_core.js END ===
pause
endlocal
