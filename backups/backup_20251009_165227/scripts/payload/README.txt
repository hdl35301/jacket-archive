scripts/payload は「コピペ元（ソース・オブ・トゥルース）」です。
ここに /src と同じ構造でファイルを置いてください（例：pages/TopPage.jsx など）。

実行例:
  node scripts\updateAll.js --check        # ドライラン（確認のみ）
  node scripts\updateAll.js                # フルコピー（TopPageは安全のため除外）
  ALLOW_TOP=1 node scripts\updateAll.js    # TopPage.jsx も含めてコピー

バックアップは /backups/copy_YYYYMMDD_HHMMSS/ に作成されます。
