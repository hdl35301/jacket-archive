# ============================================================
# git_auto_push.ps1
# PowerShell 7.5.3 対応 / UTF-8 BOMあり / CRLF
# ============================================================

if (-not $PSScriptRoot) { $PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path }

$ErrorActionPreference = "Stop"
$logPath = Join-Path $PSScriptRoot "..\..\logs\git_auto_push_log.txt"
$timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

"[$timestamp] [INFO] git_auto_push.ps1 START" | Out-File -FilePath $logPath -Encoding utf8 -Append

try {
    Set-Location (Join-Path $PSScriptRoot "..\..")

    $remote = git remote -v
    if (-not $remote) {
        "[$timestamp] [ERROR] No remote repository configured." | Out-File -FilePath $logPath -Encoding utf8 -Append
        exit 1
    }

    git push origin master | Out-File -FilePath $logPath -Encoding utf8 -Append

    if ($LASTEXITCODE -eq 0) {
        "[$timestamp] [INFO] Push successful to origin/master" | Out-File -FilePath $logPath -Encoding utf8 -Append
    } else {
        "[$timestamp] [WARN] Push may have failed. Exit code: $LASTEXITCODE" | Out-File -FilePath $logPath -Encoding utf8 -Append
    }

} catch {
    "[$timestamp] [ERROR] $($_.Exception.Message)" | Out-File -FilePath $logPath -Encoding utf8 -Append
}

"[$timestamp] [INFO] git_auto_push.ps1 END" | Out-File -FilePath $logPath -Encoding utf8 -Append
