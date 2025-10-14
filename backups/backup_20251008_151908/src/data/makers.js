// src/data/makers.js
export const makers = [
  { id: "m1", name: "Buco (Joseph Buegeleisen Co.)", country: "USA" },
  { id: "m2", name: "Sears, Roebuck & Co.", country: "USA" },
  { id: "m3", name: "Harley-Davidson Motor Co.", country: "USA" },
  { id: "m4", name: "Windward Sportswear", country: "USA" },
  { id: "m5", name: "Leathertogs", country: "USA" }
];

// 指定したブランド／メーカーIDに関連するモデル取得
import { models } from "./models.js";

export function getModelsByMaker(makerId) {
  return models.filter(model => model.makerId === makerId);
}

export function getMakerById(makerId) {
  return makers.find(m => m.id === makerId);
}
