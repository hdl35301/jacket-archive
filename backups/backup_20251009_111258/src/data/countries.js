// ===============================
// 国データ（可変）
// ===============================
export const countries = [
  { id: "c0", name: "不明" },
  { id: "c1", name: "入力する" },
  { id: "c2", name: "アメリカ" },
  { id: "c3", name: "日本" },
  { id: "c4", name: "イギリス" },
  { id: "c5", name: "ドイツ" },
];

// IDで国名取得
export function getCountryName(id) {
  const c = countries.find((x) => x.id === id);
  return c ? c.name : "不明";
}
