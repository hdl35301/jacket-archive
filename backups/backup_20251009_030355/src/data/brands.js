// ===============================
// ブランドデータ（可変）
// ===============================
export const brands = [
  {
    id: "b1",
    name: "Buco",
    country: "アメリカ",
    description: "モーターサイクルジャケットで有名な老舗ブランド",
  },
  {
    id: "b2",
    name: "Trojan",
    country: "アメリカ",
    description: "レーシングジャケットで知られるブランド",
  },
  {
    id: "b3",
    name: "Sears",
    country: "アメリカ",
    description: "一般市場向けの量販ブランド",
  },
];

// ブランドIDで取得
export function getBrandById(brandId) {
  return brands.find((b) => b.id === brandId);
}

// 全ブランド取得
export function getBrands() {
  return brands;
}
