// ===============================
// 写真データ（可変）
// モデルに紐づく
// ===============================
export const photos = [
  { id: "p1", modelId: "mo1", url: "/images/j24_front.jpg", caption: "J-24 フロントビュー" },
  { id: "p2", modelId: "mo1", url: "/images/j24_back.jpg", caption: "J-24 バックビュー" },
  { id: "p3", modelId: "mo2", url: "/images/racing_front.jpg", caption: "Trojan Racing Jacket" },
];

// モデルIDで写真を取得
export function getPhotosByModel(modelId) {
  return photos.filter((p) => p.modelId === modelId);
}

// 写真IDで単体取得
export function getPhotoById(photoId) {
  return photos.find((p) => p.id === photoId);
}
