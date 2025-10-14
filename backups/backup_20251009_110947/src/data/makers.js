// src/data/makers.js
// メーカーデータ（可変・ユーザー追加可能）
// 構造統一仕様: 不明→入力する→既定データ（ABC順）
// 他の data/*.js と形式を完全統一

export const makers = [
  { id: "unknown", name: "不明" },
  { id: "custom", name: "入力する" },
  { id: "m1", name: "Beck Distributing Corp." },
  { id: "m2", name: "Harley-Davidson Motor Co." },
  { id: "m3", name: "Joseph Buegeleisen Co." },
  { id: "m4", name: "Sears Roebuck & Co." },
  { id: "m5", name: "Trojan Leather Co." }
];

export function getMakerById(id) {
  return makers.find(m => m.id === id);
}