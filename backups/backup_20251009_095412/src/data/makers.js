// ===============================
// メーカーデータ（可変）
// ===============================
export const makers = [
  { id: "m1", name: "Joseph Buegeleisen Co.", country: "アメリカ", description: "Buco製品を生産していたメーカー" },
  { id: "m2", name: "Trojan Leather", country: "アメリカ", description: "高品質レーシングジャケットを製造" },
  { id: "m3", name: "Sears Manufacturing", country: "アメリカ", description: "Searsブランド製品のOEM供給元" },
];

// IDでメーカーを取得
export function getMakerById(makerId) {
  return makers.find((m) => m.id === makerId);
}

// 全メーカー取得
export function getMakers() {
  return makers;
}
