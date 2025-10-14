// src/data/adapters/presetAdapter.js
import { brands } from "../brands";
import { makers } from "../makers";
import { styles } from "../styles";
import { countries } from "../countries";
import { periods } from "../periods";

function normalizeOptions(list) {
  if (!Array.isArray(list)) return [];
  const unique = Array.from(new Map(list.map(i => [i.id, i])).values());

  const unspecified = unique.find(x => x.name === "未指定");
  const normal = unique.filter(x => !["未指定", "不明", "入力する"].includes(x.name));
  const unknown = unique.find(x => x.name === "不明");
  const manual = unique.find(x => x.name === "入力する");

  return [
    ...(unspecified ? [unspecified] : []),
    ...normal.sort((a, b) => a.name.localeCompare(b.name, "ja")),
    ...(unknown ? [unknown] : []),
    ...(manual ? [manual] : []),
  ];
}

export function getPresetOptions() {
  return {
    brands: normalizeOptions(brands),
    makers: normalizeOptions(makers),
    styles: normalizeOptions(styles),
    countries: normalizeOptions(countries),
    periods: normalizeOptions(periods),
  };
}
