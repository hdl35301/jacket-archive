// src/data/models.js
import { makers } from "./makers.js";
import { brands } from "./brands.js";

export const models = [
  {
    id: "mo1",
    brandId: "b1",
    makerId: "m1",
    name: "Buco J-24",
    period: "1950年代中期",
    style: "ダブルライダース",
    country: "USA"
  },
  {
    id: "mo2",
    brandId: "b2",
    makerId: "m2",
    name: "Sears Hercules",
    period: "1940年代後期",
    style: "シングルライダース",
    country: "USA"
  },
  {
    id: "mo3",
    brandId: "b3",
    makerId: "m3",
    name: "Harley Cycle Champ",
    period: "1950年代初期",
    style: "ダブルライダース",
    country: "USA"
  }
];

// ユーティリティ
export function getModelsByBrand(brandId) {
  return models.filter(model => model.brandId === brandId);
}

export function getModelById(modelId) {
  return models.find(m => m.id === modelId);
}
