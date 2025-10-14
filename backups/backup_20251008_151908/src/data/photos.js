// 蜀咏悄繝・・繧ｿ
export const photos = [
  { id: "p1", modelId: "mo1", url: "/images/j24.jpg", description: "Buco J-24 繝輔Ο繝ｳ繝医ン繝･繝ｼ" },
  { id: "p2", modelId: "mo2", url: "/images/racing.jpg", description: "Trojan Racing Jacket" },
];

export function getPhotosByModel(modelId) {
  return photos.filter((p) => p.modelId === modelId);
}
