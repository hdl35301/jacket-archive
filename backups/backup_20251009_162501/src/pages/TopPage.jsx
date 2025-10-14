// src/pages/TopPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  brands,
  makers,
  styles,
  countries,
  periods,
  models,
} from "../data";

export default function TopPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  // 🔧 修正版：プルダウン共通描画関数（配列のみ修正）
  const renderSelect = (label, options, selectedValue, onChange) => (
    <div key={label} className="flex items-center space-x-2">
      <label className="w-24 text-gray-700 text-sm">{label}</label>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1 w-48"
      >
        {/* ✅ 常に先頭は「未指定」 */}
        <option key={`${label}-undefined`} value="">
          未指定
        </option>
        {options
          // 「入力する」を除外して「不明」を末尾に
          .filter((opt) => opt.name !== "入力する")
          .sort((a, b) =>
            a.name === "不明" ? 1 : b.name === "不明" ? -1 : 0
          )
          .map((option) => (
            <option key={`${label}-${option.id}`} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );

  const handleSearch = () => {
    console.log("検索条件:", {
      keyword,
      selectedBrand,
      selectedMaker,
      selectedStyle,
      selectedCountry,
      selectedPeriod,
    });
    navigate("/models");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold mb-4">Jacket Archive</h1>

      {/* フリーワード検索 */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="キーワード検索..."
          className="border rounded px-2 py-1 w-80"
        />
      </div>

      {/* タグ検索ブロック */}
      <section className="border-t pt-4">
        <h2 className="font-semibold text-gray-700 mb-2">タグ検索</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {renderSelect("ブランド", brands, selectedBrand, setSelectedBrand)}
          {renderSelect("メーカー", makers, selectedMaker, setSelectedMaker)}
          {renderSelect("スタイル", styles, selectedStyle, setSelectedStyle)}
          {renderSelect("国", countries, selectedCountry, setSelectedCountry)}
          {renderSelect("年代", periods, selectedPeriod, setSelectedPeriod)}
        </div>

        {/* ✅ 検索ボタン（共通化） */}
        <div className="mt-4">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            検索
          </button>
        </div>
      </section>

      {/* ✅ 最近追加されたモデル枠 */}
      <section className="border-t pt-6">
        <h2 className="text-lg font-semibold mb-2">最近追加されたモデル</h2>
        <ul className="list-disc pl-6">
          {models.slice(0, 5).map((m) => (
            <li key={m.id}>
              <button
                onClick={() => navigate(`/models/${m.id}`)}
                className="text-blue-600 hover:underline"
              >
                {m.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
