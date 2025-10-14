// ===============================
// src/data/styles.js
// ===============================

// 可変データ（ユーザーが追加・編集可能）
export const styles = [
  { id: "", name: "未指定" },
  { id: "s1", name: "ライダースジャケット" },
  { id: "s2", name: "フライトジャケット" },
  { id: "s3", name: "スポーツジャケット" },
  { id: "s4", name: "カーコート" },
  { id: "s5", name: "ワークジャケット" },
  { id: "s6", name: "レザーベスト" },
  { id: "s7", name: "その他" },
  { id: "s8", name: "不明" },
];

// IDでスタイル名を取得
export function getStyleById(styleId) {
  return styles.find((s) => s.id === styleId);
}