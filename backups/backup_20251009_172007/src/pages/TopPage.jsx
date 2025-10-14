// src/pages/TopPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const handleSearch = () => {
    console.log("検索:", { keyword, selectedBrand, selectedMaker, selectedStyle, selectedCountry, selectedPeriod });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Leather Jacket Archive</h1>

      {/* フリーワード検索 */}
      <div className="mb-4">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="キーワードで検索"
          className="border rounded p-2 w-full"
        />
      </div>

      {/* タグ検索 */}
      <div className="mb-4 space-y-3">
        <label className="block font-semibold">タグ検索</label>

        {/* ブランド */}
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {brands.map((opt) => (
            <option key={`brand-${opt.id}`} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>

        {/* メーカー */}
        <select
          value={selectedMaker}
          onChange={(e) => setSelectedMaker(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {makers.map((opt) => (
            <option key={`maker-${opt.id}`} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>

        {/* スタイル */}
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {styles.map((opt) => (
            <option key={`style-${opt.id}`} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>

        {/* 国 */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {countries.map((opt) => (
            <option key={`country-${opt.id}`} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>

        {/* 年代 */}
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {periods.map((opt) => (
            <option key={`period-${opt.id}`} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>

        {/* 検索ボタン */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          検索
        </button>
      </div>

      {/* 一覧ボタン */}
      <div className="flex justify-start space-x-4 mb-6">
        <Link to="/brands" className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
          ブランド一覧
        </Link>
        <Link to="/makers" className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
          メーカー一覧
        </Link>
      </div>

      {/* 最近追加されたモデル */}
      <div>
        <h2 className="text-xl font-semibold mb-2">最近追加されたモデル</h2>
        <ul className="list-disc pl-5">
          <li>
            <Link to="/models/m1" className="text-blue-500 hover:underline">
              J-24 (Buco)
            </Link>
          </li>
          <li>
            <Link to="/models/m2" className="text-blue-500 hover:underline">
              Trojan Racer (Trojan)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
