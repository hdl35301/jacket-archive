# ============================================================
# git_auto_commit.ps1
# PowerShell 7.5.3 対応 / UTF-8 BOMあり / CRLF
# ============================================================

$ErrorActionPreference = "Stop"
$logPath = Join-Path $PSScriptRoot "..\..\logs\git_auto_commit_log.txt"
$timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

# ログ開始
"[$timestamp] [INFO] git_auto_commit.ps1 START" | Out-File -FilePath $logPath -Encoding utf8 -Append

# Gitリポジトリルートに移動
Set-Location (Join-Path $PSScriptRoot "..\..")

try {
    # ステージング
    git add . | Out-File -FilePath $logPath -Encoding utf8 -Append

    # コミットメッセージ生成
    $msg = "[auto] diff applied at $timestamp"
    git commit -m $msg | Out-File -FilePath $logPath -Encoding utf8 -Append

    # コミット成功確認
    if ($LASTEXITCODE -eq 0) {
        "[$timestamp] [INFO] Commit successful." | Out-File -FilePath $logPath -Encoding utf8 -Append
    } else {
        "[$timestamp] [WARN] Commit skipped or no changes detected." | Out-File -FilePath $logPath -Encoding utf8 -Append
    }

} catch {
    "[$timestamp] [ERROR] $($_.Exception.Message)" | Out-File -FilePath $logPath -Encoding utf8 -Append
}

"[$timestamp] [INFO] git_auto_commit.ps1 END" | Out-File -FilePath $logPath -Encoding utf8 -Append
