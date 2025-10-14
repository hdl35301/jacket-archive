@echo off
chcp 65001 >nul
echo === CopyPaste Verification Mode ===

REM ============================================================
REM [手動貼り替え確認用バッチ]
REM PowerShell 7.5.3 対応版 / UTF-8 (BOMなし)
REM ============================================================

setlocal enabledelayedexpansion
set WORKDIR=%~dp0
cd /d "%WORKDIR%"

echo [INFO] === update_core.js START (copypaste verify) ===

:: 1. 軽量キャッシュ削除
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite

:: 2. npm verify
pwsh -NoProfile -ExecutionPolicy Bypass -Command "npm cache verify | Out-Null"

:: 3. Tailwind v3.4.13 確認
pwsh -NoProfile -ExecutionPolicy Bypass -Command "if ((npm list tailwindcss | Select-String '3.4.13') -eq $null) { npm install tailwindcss@3.4.13 }"

:: 4. Router監査（update_core.js 実行なし）
pwsh -NoProfile -ExecutionPolicy Bypass -Command "node scripts/audit_core.js verify"

echo [INFO] Skipping update_core.js (manual copy mode)
echo [INFO] === update_core.js END ===
pause
endlocal
