// src/pages/TopPage.jsx
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
  const [selectedBrand, setSelectedBrand] = useState("未指定");
  const [selectedMaker, setSelectedMaker] = useState("未指定");
  const [selectedStyle, setSelectedStyle] = useState("未指定");
  const [selectedCountry, setSelectedCountry] = useState("未指定");
  const [selectedPeriod, setSelectedPeriod] = useState("未指定");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword.trim()) params.append("keyword", keyword);
    if (selectedBrand !== "未指定") params.append("brand", selectedBrand);
    if (selectedMaker !== "未指定") params.append("maker", selectedMaker);
    if (selectedStyle !== "未指定") params.append("style", selectedStyle);
    if (selectedCountry !== "未指定") params.append("country", selectedCountry);
    if (selectedPeriod !== "未指定") params.append("period", selectedPeriod);

    navigate(`/models?${params.toString()}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 検索セクション */}
      <section className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">検索</h2>

        {/* フリーワード検索 */}
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">フリーワード検索</h3>
          <input
            type="text"
            placeholder="キーワードを入力"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        {/* タグ検索 */}
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">タグ検索</h3>
          <div className="flex flex-nowrap overflow-x-auto text-sm p-1 gap-2">
            {/* ブランド */}
            <div>
              <label className="block text-sm font-semibold mb-1">ブランド</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="border p-2"
              >
                <option key="b-未指定">未指定</option>
                {brands
                  .filter((b) => b.name !== "入力する")
                  .map((b) => (
                    <option key={`b-${b.id}`} value={b.name}>
                      {b.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* メーカー */}
            <div>
              <label className="block text-sm font-semibold mb-1">メーカー</label>
              <select
                value={selectedMaker}
                onChange={(e) => setSelectedMaker(e.target.value)}
                className="border p-2"
              >
                <option key="m-未指定">未指定</option>
                {makers
                  .filter((m) => m.name !== "入力する")
                  .map((m) => (
                    <option key={`m-${m.id}`} value={m.name}>
                      {m.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* スタイル */}
            <div>
              <label className="block text-sm font-semibold mb-1">スタイル</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="border p-2"
              >
                <option key="s-未指定">未指定</option>
                {styles
                  .filter((s) => s.name !== "入力する")
                  .map((s) => (
                    <option key={`s-${s.id}`} value={s.name}>
                      {s.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* 国 */}
            <div>
              <label className="block text-sm font-semibold mb-1">国</label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="border p-2"
              >
                <option key="c-未指定">未指定</option>
                {countries
                  .filter((c) => c.name !== "入力する")
                  .map((c) => (
                    <option key={`c-${c.id}`} value={c.name}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* 年代 */}
            <div>
              <label className="block text-sm font-semibold mb-1">年代</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border p-2"
              >
                <option key="p-未指定">未指定</option>
                {periods
                  .filter((p) => p.name !== "入力する")
                  .map((p) => (
                    <option key={`p-${p.id}`} value={p.name}>
                      {p.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* 検索ボタン */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          検索
        </button>
      </section>

      {/* ブランド・メーカー一覧 */}
      <section className="border p-4 mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/brands")}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            ブランド一覧
          </button>
          <button
            onClick={() => navigate("/makers")}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            メーカー一覧
          </button>
        </div>
      </section>

      {/* 最近追加されたモデル */}
      <section className="border p-4">
        <h2 className="text-lg font-semibold mb-4">最近追加されたモデル</h2>
        <p className="text-gray-600">※最新登録されたモデルがここに表示されます</p>
      </section>
    </div>
  );
}
