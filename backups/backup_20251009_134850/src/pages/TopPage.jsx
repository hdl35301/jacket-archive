// ===============================
// src/pages/TopPage.jsx
// ===============================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { periods } from "../data/periods";
import { styles } from "../data/styles";
import { models } from "../data/models";

export default function TopPage() {
  const navigate = useNavigate();

  // ------------------------------
  // 状態管理
  // ------------------------------
  const [searchText, setSearchText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  // ------------------------------
  // 検索処理
  // ------------------------------
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchText) params.append("q", searchText);
    if (selectedBrand && selectedBrand !== "未指定") params.append("brand", selectedBrand);
    if (selectedMaker && selectedMaker !== "未指定") params.append("maker", selectedMaker);
    if (selectedPeriod && selectedPeriod !== "未指定") params.append("period", selectedPeriod);
    if (selectedStyle && selectedStyle !== "未指定") params.append("style", selectedStyle);

    navigate(`/models?${params.toString()}`);
  };

  // ------------------------------
  // プルダウン用配列（data/*.js から取得）
  // ------------------------------
  const brandsOptions = brands.map((b) => ({ id: b.id, name: b.name }));
  const makersOptions = makers.map((m) => ({ id: m.id, name: m.name }));
  const periodsOptions = periods.map((p) => ({ id: p.id, name: p.name }));
  const stylesOptions = styles.map((s) => ({ id: s.id, name: s.name }));

  // ------------------------------
  // JSX レンダリング
  // ------------------------------
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Leather Jacket Archive</h1>

      {/* =======================
          検索フォーム
      ======================= */}
      <section className="border p-4 rounded-md shadow">
        <h2 className="text-lg font-semibold mb-3">検索</h2>

        {/* フリーワード検索 */}
        <input
          type="text"
          placeholder="ブランド・モデル・キーワードで検索"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        {/* タグ検索 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block font-semibold mb-1">ブランド</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {brandsOptions.map((b) => (
                <option key={b.id || b.name} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">メーカー</label>
            <select
              value={selectedMaker}
              onChange={(e) => setSelectedMaker(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {makersOptions.map((m) => (
                <option key={m.id || m.name} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">年代</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {periodsOptions.map((p) => (
                <option key={p.id || p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">スタイル</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full border p-2 rounded"
            >
              {stylesOptions.map((s) => (
                <option key={s.id || s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-right mt-4">
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            検索
          </button>
        </div>
      </section>

      {/* =======================
          最近追加されたモデル
      ======================= */}
      <section>
        <h2 className="text-lg font-semibold mb-3">最近追加されたモデル</h2>
        <ul className="list-disc pl-6">
          {models.slice(0, 5).map((m) => (
            <li key={m.id}>
              <a
                href={`#/models/${m.id}`}
                className="text-blue-600 hover:underline"
              >
                {m.name}
              </a>{" "}
              （{m.period}）
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
