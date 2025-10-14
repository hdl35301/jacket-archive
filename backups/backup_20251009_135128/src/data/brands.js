// src/data/brands.js
// ブランドデータ（可変・ユーザー追加可能）
// 構造統一仕様: 不明→入力する→既定データ（ABC順）
// 他の data/*.js と形式を完全統一

export const brands = [
  { id: "unknown", name: "不明" },
  { id: "custom", name: "入力する" },
  { id: "b1", name: "Beck" },
  { id: "b2", name: "Buco" },
  { id: "b3", name: "Harley-Davidson" },
  { id: "b4", name: "Sears" },
  { id: "b5", name: "Trojan" }
];

export function getBrandById(id) {
  return brands.find(b => b.id === id);
}