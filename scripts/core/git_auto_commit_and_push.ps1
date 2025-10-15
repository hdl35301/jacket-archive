# ============================================================
# git_auto_commit_and_push.ps1
# PowerShell 7.5.3 対応 / UTF-8 BOMあり / CRLF
# ------------------------------------------------------------
# 目的:
#   - 自動コミットと自動プッシュを一括実行
#   - logs/git_auto_commit_and_push_log.txt に詳細を記録
# ============================================================

$ErrorActionPreference = "Stop"
$logPath = Join-Path $PSScriptRoot "..\..\logs\git_auto_commit_and_push_log.txt"
$timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")

# ログ開始
"[$timestamp] [INFO] git_auto_commit_and_push.ps1 START" | Out-File -FilePath $logPath -Encoding utf8 -Append

# Gitリポジトリルートに移動
Set-Location (Join-Path $PSScriptRoot "..\..")

try {
    # 変更確認
    $status = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($status)) {
        "[$timestamp] [INFO] No changes to commit." | Out-File -FilePath $logPath -Encoding utf8 -Append
    }
    else {
        # ステージング
        git add . | Out-File -FilePath $logPath -Encoding utf8 -Append

        # コミット
        $msg = "[auto] diff applied and pushed at $timestamp"
        git commit -m $msg | Out-File -FilePath $logPath -Encoding utf8 -Append
    }

    # プッシュ
    git push origin master | Out-File -FilePath $logPath -Encoding utf8 -Append
    if ($LASTEXITCODE -eq 0) {
        "[$timestamp] [INFO] Push successful to origin/master" | Out-File -FilePath $logPath -Encoding utf8 -Append
    } else {
        "[$timestamp] [WARN] Push may have failed. Check above logs." | Out-File -FilePath $logPath -Encoding utf8 -Append
    }

} catch {
    "[$timestamp] [ERROR] $($_.Exception.Message)" | Out-File -FilePath $logPath -Encoding utf8 -Append
}

"[$timestamp] [INFO] git_auto_commit_and_push.ps1 END" | Out-File -FilePath $logPath -Encoding utf8 -Append
