// src/pages/TopPage.jsx
import React, { useState } from "react";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";
import { Link } from "react-router-dom";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    style: "",
    country: "",
    period: "",
  });

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log("検索条件:", { keyword, ...filters });
  };

  return (
    <div className="p-6 space-y-8">
      {/* ✅ タイトル保持 */}
      <h1 className="text-3xl font-bold mb-6 text-left">Jacket Archive</h1>

      {/* ✅ フリーワード検索枠 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-left">検索</h2>
        <label className="block text-sm font-medium mb-2">フリーワード</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="ブランド・モデル・メーカー名など"
          className="border rounded px-3 py-2 w-full mb-6"
        />

        {/* ✅ タグ検索（スタイル / 国 / 年代） */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* スタイル */}
          <div>
            <label className="block text-sm font-medium mb-1">スタイル</label>
            <select
              value={filters.style}
              onChange={(e) => handleChange("style", e.target.value)}
              className="border rounded px-2 py-2 w-full"
            >
              {styles
                .filter((s) => s.name !== "入力する")
                .map((s) => (
                  <option key={`style-${s.id || "none"}`} value={s.id}>
                    {s.name}
                  </option>
                ))}
            </select>
          </div>

          {/* 国 */}
          <div>
            <label className="block text-sm font-medium mb-1">国</label>
            <select
              value={filters.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="border rounded px-2 py-2 w-full"
            >
              {countries
                .filter((c) => c.name !== "入力する")
                .map((c) => (
                  <option key={`country-${c.id || "none"}`} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* 年代 */}
          <div>
            <label className="block text-sm font-medium mb-1">年代</label>
            <select
              value={filters.period}
              onChange={(e) => handleChange("period", e.target.value)}
              className="border rounded px-2 py-2 w-full"
            >
              {periods
                .filter((p) => p.name !== "入力する")
                .map((p) => (
                  <option key={`period-${p.id || "none"}`} value={p.id}>
                    {p.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* ✅ 検索ボタン（位置変更なし） */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          検索
        </button>
      </div>

      {/* ✅ ブランド／メーカー一覧 */}
      <div className="flex justify-center gap-6">
        <Link
          to="/brands"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          ブランド一覧
        </Link>
        <Link
          to="/makers"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          メーカー一覧
        </Link>
      </div>

      {/* ✅ 最近追加されたモデル */}
      <section>
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          最近追加されたモデル
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              to="/models/mo1"
              className="text-blue-600 hover:underline"
            >
              Buco J-24
            </Link>
          </li>
          <li>
            <Link
              to="/models/mo2"
              className="text-blue-600 hover:underline"
            >
              Trojan Racer
            </Link>
          </li>
          <li>
            <Link
              to="/models/mo3"
              className="text-blue-600 hover:underline"
            >
              Sears Hercules
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
