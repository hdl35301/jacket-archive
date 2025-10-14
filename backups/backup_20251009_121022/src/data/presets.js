// src/data/presets.js
// 各フォームUI構造ルール定義専用（データ共有はしない）

export const presetRules = {
  brand: { allowInput: true, allowTag: true },
  maker: { allowInput: true, allowTag: true },
  model: { allowInput: true, allowTag: true },
  photo: { allowInput: true, allowTag: false },
  style: { allowInput: true, allowTag: true },
  country: { allowInput: true, allowTag: true },
  period: { allowInput: true, allowTag: true }
};
