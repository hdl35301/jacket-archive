Write-Host "[INFO] diff_plan_generator.ps1 START"
# NodeのJS版があるなら呼び出し、無ければ安全に終了
$js = Join-Path $PSScriptRoot "diff_plan_generator.js"
if (Test-Path $js) {
  node $js
} else {
  Write-Host "[WARN] diff_plan_generator.js not found. Skipped."
}
Write-Host "[INFO] diff_plan_generator.ps1 END"
