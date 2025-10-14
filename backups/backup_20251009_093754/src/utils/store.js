import { brands as defaultBrands } from "../data/brands";
import { makers as defaultMakers } from "../data/makers";
import { models as defaultModels } from "../data/models";
import { photos as defaultPhotos } from "../data/photos";

const read = (k, fallback) => {
  try {
    const raw = localStorage.getItem(k);
    if (!raw) return fallback;
    const val = JSON.parse(raw);
    if (!Array.isArray(val)) return fallback;
    return val;
  } catch {
    return fallback;
  }
};
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const mergeById = (base, override) => {
  const map = new Map(base.map(x => [x.id, x]));
  for (const item of override) map.set(item.id, { ...map.get(item.id), ...item });
  return Array.from(map.values());
};

export function getBrands()  { return mergeById(defaultBrands, read("brands", [])); }
export function getMakers()  { return mergeById(defaultMakers, read("makers", [])); }
export function getModels()  { return mergeById(defaultModels, read("models", [])); }
export function getPhotos()  { return mergeById(defaultPhotos, read("photos", [])); }

export function saveModel(upd) {
  const models = getModels();
  if (upd.id) {
    const idx = models.findIndex(m => m.id === upd.id);
    if (idx >= 0) models[idx] = { ...models[idx], ...upd };
    else models.push(upd);
  } else {
    const maxId = models.reduce((m, x) => Math.max(m, x.id || 0), 0);
    upd.id = maxId + 1;
    models.push(upd);
  }
  write("models", models);
  return upd.id;
}
