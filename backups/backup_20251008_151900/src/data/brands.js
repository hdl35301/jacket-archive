// 繝悶Λ繝ｳ繝峨ョ繝ｼ繧ｿ
export const brands = [
  { id: "b1", name: "Buco", country: "繧｢繝｡繝ｪ繧ｫ" },
  { id: "b2", name: "Trojan", country: "繧｢繝｡繝ｪ繧ｫ" },
  { id: "b3", name: "Sears", country: "繧｢繝｡繝ｪ繧ｫ" },
];

export function getBrandById(id) {
  return brands.find((b) => b.id === id);
}
