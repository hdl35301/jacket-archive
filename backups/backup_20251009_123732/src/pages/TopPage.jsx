// ===============================
// src/pages/TopPage.jsx
// ===============================

import React, { useState } from "react";
import { Link } from "react-router-dom";

// データ参照はすべて data/*.js から
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";
import { models } from "../data/models";

export default function TopPage() {
  // -------------------------------------
  // State 管理
  // -------------------------------------
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    maker: "",
    style: "",
    country: "",
    period: ""
  });

  // -------------------------------------
  // イベントハンドラ
  // -------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("検索条件:", { keyword, ...filters });
    // 今後ここにフィルタ処理追加
  };

  // -------------------------------------
  // JSX
  // -------------------------------------
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leather Jacket Archive</h1>

      {/* -------------------------------------
         検索フォーム
      ------------------------------------- */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">検索</h2>

        {/* フリーワード入力 */}
        <input
          type="text"
          placeholder="キーワードを入力"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border px-2 py-1 w-full mb-3"
        />

        {/* タグ検索 */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {/* ブランド */}
          <div>
            <label className="block text-sm font-medium mb-1">ブランド</label>
            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="border w-full px-2 py-1"
            >
              {brands
                .filter((b) => b.name !== "入力する")
                .map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
            </select>
          </div>

          {/* メーカー */}
          <div>
            <label className="block text-sm font-medium mb-1">メーカー</label>
            <select
              name="maker"
              value={filters.maker}
              onChange={handleChange}
              className="border w-full px-2 py-1"
            >
              {makers
                .filter((m) => m.name !== "入力する")
                .map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
            </select>
          </div>

          {/* スタイル */}
          <div>
            <label className="block text-sm font-medium mb-1">スタイル</label>
            <select
              name="style"
              value={filters.style}
              onChange={handleChange}
              className="border w-full px-2 py-1"
            >
              {styles
                .filter((s) => s.name !== "入力する")
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
            </select>
          </div>

          {/* 国 */}
          <div>
            <label className="block text-sm font-medium mb-1">国</label>
            <select
              name="country"
              value={filters.country}
              onChange={handleChange}
              className="border w-full px-2 py-1"
            >
              {countries
                .filter((c) => c.name !== "入力する")
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          {/* 年代 */}
          <div>
            <label className="block text-sm font-medium mb-1">年代</label>
            <select
              name="period"
              value={filters.period}
              onChange={handleChange}
              className="border w-full px-2 py-1"
            >
              {periods
                .filter((p) => p.name !== "入力する")
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* 検索ボタン（統一1個） */}
        <div className="mt-4 text-center">
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            検索
          </button>
        </div>
      </div>

      {/* -------------------------------------
         一覧ナビゲーション
      ------------------------------------- */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/brands"
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          ブランド一覧
        </Link>
        <Link
          to="/makers"
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          メーカー一覧
        </Link>
      </div>

      {/* -------------------------------------
         最近追加されたモデル
      ------------------------------------- */}
      <div>
        <h2 className="text-lg font-semibold mb-2">最近追加されたモデル</h2>
        <ul className="list-disc pl-5">
          {models.slice(-5).map((m) => (
            <li key={m.id}>
              <Link
                to={`/models/${m.id}`}
                className="text-blue-600 hover:underline"
              >
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
