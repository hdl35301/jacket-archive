// ===============================
// src/data/periods.js
// ===============================

export const periods = [
  { id: "p0", name: "不明" },
  { id: "p1", name: "入力する" },
  { id: "p2", name: "1920年代初期" },
  { id: "p3", name: "1920年代後期" },
  { id: "p4", name: "1930年代初期" },
  { id: "p5", name: "1930年代中期" },
  { id: "p6", name: "1930年代後期" },
  { id: "p7", name: "1940年代初期" },
  { id: "p8", name: "1940年代中期" },
  { id: "p9", name: "1940年代後期" },
  { id: "p10", name: "1950年代初期" },
  { id: "p11", name: "1950年代中期" },
  { id: "p12", name: "1950年代後期" },
  { id: "p13", name: "1960年代初期" },
  { id: "p14", name: "1960年代中期" },
  { id: "p15", name: "1960年代後期" },
  { id: "p16", name: "1970年代初期" },
  { id: "p17", name: "1970年代中期" },
  { id: "p18", name: "1970年代後期" },
];

// 単一取得関数
export function getPeriodById(id) {
  return periods.find((p) => p.id === id);
}
