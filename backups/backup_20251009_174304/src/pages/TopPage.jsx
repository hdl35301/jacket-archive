// ===============================
// src/pages/TopPage.jsx
// ===============================
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";

export default function TopPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const handleSearch = () => {
    navigate(
      `/models?keyword=${keyword}&brand=${selectedBrand}&maker=${selectedMaker}&style=${selectedStyle}&country=${selectedCountry}&period=${selectedPeriod}`
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Jacket Archive</h1>

      {/* 検索フォーム */}
      <div className="max-w-2xl mx-auto mb-6">
        <label className="block text-sm font-medium mb-1">フリーワード検索</label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="例：Buco J-24"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border rounded p-2 flex-grow"
          />
        </div>

        {/* タグ検索 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">ブランド</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border rounded p-2 w-full"
            >
              {brands.map((b) => (
                <option key={`brand-${b.id || "unknown"}`} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">メーカー</label>
            <select
              value={selectedMaker}
              onChange={(e) => setSelectedMaker(e.target.value)}
              className="border rounded p-2 w-full"
            >
              {makers.map((m) => (
                <option key={`maker-${m.id || "unknown"}`} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">スタイル</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="border rounded p-2 w-full"
            >
              {styles.map((s) => (
                <option key={`style-${s.id || "unknown"}`} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">国</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border rounded p-2 w-full"
            >
              {countries.map((c) => (
                <option key={`country-${c.id || "unknown"}`} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">年代</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border rounded p-2 w-full"
            >
              {periods.map((p) => (
                <option key={`period-${p.id || "unknown"}`} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          検索
        </button>
      </div>

      {/* 最近追加されたモデル */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2 border-b pb-1">
          最近追加されたモデル
        </h2>
        <p className="text-sm text-gray-600">
          ここに最新モデルのリンクが表示されます。
        </p>
      </section>
    </div>
  );
}
