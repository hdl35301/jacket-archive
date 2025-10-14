// src/pages/TopPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { periods } from "../data/periods";
import { countries } from "../data/countries";
import { styles } from "../data/styles";
import { models } from "../data/models";

export default function TopPage() {
  const navigate = useNavigate();
  const [freeword, setFreeword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (freeword.trim() !== "") params.append("q", freeword);
    if (selectedBrand) params.append("brand", selectedBrand);
    if (selectedMaker) params.append("maker", selectedMaker);
    if (selectedPeriod) params.append("period", selectedPeriod);
    if (selectedCountry) params.append("country", selectedCountry);
    if (selectedStyle) params.append("style", selectedStyle);

    navigate(`/brands?${params.toString()}`);
  };

  const handleBrandList = () => navigate("/brands");
  const handleMakerList = () => navigate("/makers");

  const recentModels = models.slice(-3);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 検索ブロック */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">検索</h2>

        {/* フリーワード検索 */}
        <label className="block text-lg font-semibold mb-2">フリーワード検索</label>
        <input
          type="text"
          value={freeword}
          onChange={(e) => setFreeword(e.target.value)}
          placeholder="キーワードを入力"
          className="border rounded p-2 w-full mb-4"
        />

        {/* タグ検索 */}
        <h2 className="text-lg font-semibold mb-2">タグ検索</h2>

        {/* ブランド */}
        <label className="block text-sm font-semibold mb-1">ブランド</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border rounded p-2 w-full mb-2"
        >
          <option value="">未指定</option>
          {brands
            .filter((b) => b.name !== "入力する")
            .map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
        </select>

        {/* メーカー */}
        <label className="block text-sm font-semibold mb-1">メーカー</label>
        <select
          value={selectedMaker}
          onChange={(e) => setSelectedMaker(e.target.value)}
          className="border rounded p-2 w-full mb-2"
        >
          <option value="">未指定</option>
          {makers
            .filter((m) => m.name !== "入力する")
            .map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
        </select>

        {/* 年代 */}
        <label className="block text-sm font-semibold mb-1">年代</label>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="border rounded p-2 w-full mb-2 bg-white text-black"
        >
          <option value="">未指定</option>
          {periods
            .filter((p) => p.name !== "入力する")
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
        </select>

        {/* 国 */}
        <label className="block text-sm font-semibold mb-1">国</label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border rounded p-2 w-full mb-2"
        >
          <option value="">未指定</option>
          {countries
            .filter((c) => c.name !== "入力する")
            .map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
        </select>

        {/* スタイル */}
        <label className="block text-sm font-semibold mb-1">スタイル</label>
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        >
          <option value="">未指定</option>
          {styles
            .filter((s) => s.name !== "入力する")
            .map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
        </select>

        {/* 検索ボタン */}
        <div className="text-center">
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSearch}
          >
            検索
          </button>
        </div>
      </div>

      {/* ブランド・メーカー一覧ボタン */}
      <div className="border p-4 mb-6">
        <button
          className="block w-full mb-3 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={handleBrandList}
        >
          ブランド一覧
        </button>
        <button
          className="block w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          onClick={handleMakerList}
        >
          メーカー一覧
        </button>
      </div>

      {/* 最近追加されたモデル */}
      <div className="border p-4">
        <h2 className="text-lg font-semibold mb-2">最近追加されたモデル</h2>
        {recentModels.map((model) => (
          <div key={model.id} className="mb-2">
            <p>{model.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
