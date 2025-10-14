// src/pages/TopPage.jsx
// ===============================
// ✅ 恒久ルール準拠・テンプレ由来なし完全版
// ・検索UI（フリーワード＋タグ検索）
// ・「入力する」は除外
// ・ブランド／メーカーに「不明」を追加
// ・プルダウン見出しあり（横並び）
// ・最近追加されたモデル（動的リンク付き）
// ===============================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";
import { models } from "../data/models";

export default function TopPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  // 「入力する」を除外・「不明」を末尾に
  const filterOptions = (list) => {
    const filtered = list.filter((item) => item.name !== "入力する");
    const unknown = filtered.find((item) => item.name === "不明");
    const others = filtered.filter((item) => item.name !== "不明");
    return unknown ? [...others, unknown] : others;
  };

  const handleSearch = () => {
    console.log("検索条件:", {
      keyword,
      brand: selectedBrand,
      maker: selectedMaker,
      style: selectedStyle,
      country: selectedCountry,
      period: selectedPeriod,
    });
    navigate("/brands"); // 暫定遷移（今後統合予定）
  };

  const renderDropdown = (label, options, value, onChange) => (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 text-sm"
      >
        <option value="">未指定</option>
        {filterOptions(options).map((option) => (
          <option key={`${label}-${option.id || option.name}`} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="p-4">
      {/* タイトル */}
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 検索ブロック */}
      <section className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Search</h2>

        {/* フリーワード */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">フリーワード検索</label>
          <input
            type="text"
            placeholder="例：Buco J-24"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        {/* タグ検索 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">タグ検索</h3>
          <div className="flex flex-nowrap overflow-x-auto space-x-3 p-1 text-sm">
            {renderDropdown("ブランド", brands, selectedBrand, setSelectedBrand)}
            {renderDropdown("メーカー", makers, selectedMaker, setSelectedMaker)}
            {renderDropdown("スタイル", styles, selectedStyle, setSelectedStyle)}
            {renderDropdown("地域", countries, selectedCountry, setSelectedCountry)}
            {renderDropdown("年代", periods, selectedPeriod, setSelectedPeriod)}
          </div>
        </div>

        {/* 検索ボタン */}
        <div className="mt-4">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            検索
          </button>
        </div>
      </section>

      {/* ブランド／メーカー一覧ボタン */}
      <section className="border p-4 mb-6">
        <div className="flex justify-around">
          <button
            onClick={() => navigate("/brands")}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
          >
            ブランド一覧
          </button>
          <button
            onClick={() => navigate("/makers")}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
          >
            メーカー一覧
          </button>
        </div>
      </section>

      {/* 最近追加されたモデル */}
      <section className="border p-4">
        <h2 className="text-lg font-semibold mb-4">最近追加されたモデル</h2>
        <ul className="list-disc pl-6 space-y-1">
          {models
            .slice()
            .reverse()
            .slice(0, 5)
            .map((model) => (
              <li
                key={model.id}
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate(`/models/${model.id}`)}
              >
                {model.name}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
