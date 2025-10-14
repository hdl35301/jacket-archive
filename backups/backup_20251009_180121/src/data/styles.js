// ===============================
// src/data/styles.js
// ===============================

// 可変データ（ユーザーが追加・編集可能）
export const styles = [
  { id: "s0", name: "不明" },
  { id: "s1", name: "入力する" },
  { id: "s2", name: "ライダースジャケット" },
  { id: "s3", name: "フライトジャケット" },
  { id: "s4", name: "スポーツジャケット" },
  { id: "s5", name: "カーコート" },
  { id: "s6", name: "ワークジャケット" },
  { id: "s7", name: "レザーベスト" },
  { id: "s8", name: "その他" }
];

// IDでスタイル名を取得
export function getStyleById(id) {
  const s = styles.find((x) => x.id === id);
  return s ? s.name : "不明";
}
