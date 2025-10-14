// ===============================
// モデルデータ（可変）
// ブランド／メーカーに紐づく
// ===============================
export const models = [
  { id: "mo1", brandId: "b1", makerId: "m1", name: "J-24", style: "ライダース", period: "1950年代初期", description: "Bucoの代表的ライダースジャケット" },
  { id: "mo2", brandId: "b2", makerId: "m2", name: "Racing Jacket", style: "スポーツ", period: "1940年代中期", description: "Trojan製のレーシングタイプ" },
  { id: "mo3", brandId: "b3", makerId: "m3", name: "Leather Sport", style: "スポーツ", period: "1930年代後期", description: "Searsのスポーツジャケット" },
];

// ブランドIDでモデルを取得
export function getModelsByBrand(brandId) {
  return models.filter((m) => m.brandId === brandId);
}

// メーカーIDでモデルを取得
export function getModelsByMaker(makerId) {
  return models.filter((m) => m.makerId === makerId);
}

// モデルIDで個別取得
export function getModelById(modelId) {
  return models.find((m) => m.id === modelId);
}
