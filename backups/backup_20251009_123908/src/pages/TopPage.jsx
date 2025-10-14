// ===============================
// src/pages/TopPage.jsx（修正版）
// ===============================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    maker: "",
    style: "",
    country: "",
    period: "",
  });

  // 共通セレクト構築関数（恒久ルール準拠）
  const buildOptions = (data) => {
    const regular = data
      .filter((x) => x.name !== "入力する" && x.name !== "不明" && x.name !== "未指定")
      .sort((a, b) => a.name.localeCompare(b.name, "ja"));
    const unknown = data.filter((x) => x.name === "不明");
    return [
      <option key="empty" value="">
        未指定
      </option>,
      ...regular.map((x) => (
        <option key={x.id} value={x.id}>
          {x.name}
        </option>
      )),
      ...unknown.map((x) => (
        <option key={x.id} value={x.id}>
          {x.name}
        </option>
      )),
    ];
  };

  const handleSearch = () => {
    console.log("検索:", { keyword, filters });
  };

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        レザージャケットアーカイブ
      </h1>

      {/* 検索フォーム */}
      <section className="bg-white shadow p-6 rounded-lg space-y-4">
        {/* フリーワード */}
        <div>
          <label className="block text-sm font-bold mb-1">フリーワード検索</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="ブランド・モデル名などを入力"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* タグ検索 */}
        <div>
          <label className="block text-sm font-bold mb-2">タグ検索</label>
          <div className="flex flex-wrap gap-3">
            <div>
              <label className="block text-xs mb-1">ブランド</label>
              <select
                value={filters.brand}
                onChange={(e) => handleChange("brand", e.target.value)}
                className="border rounded px-2 py-1"
              >
                {buildOptions(brands)}
              </select>
            </div>

            <div>
              <label className="block text-xs mb-1">メーカー</label>
              <select
                value={filters.maker}
                onChange={(e) => handleChange("maker", e.target.value)}
                className="border rounded px-2 py-1"
              >
                {buildOptions(makers)}
              </select>
            </div>

            <div>
              <label className="block text-xs mb-1">スタイル</label>
              <select
                value={filters.style}
                onChange={(e) => handleChange("style", e.target.value)}
                className="border rounded px-2 py-1"
              >
                {buildOptions(styles)}
              </select>
            </div>

            <div>
              <label className="block text-xs mb-1">国</label>
              <select
                value={filters.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="border rounded px-2 py-1"
              >
                {buildOptions(countries)}
              </select>
            </div>

            <div>
              <label className="block text-xs mb-1">年代</label>
              <select
                value={filters.period}
                onChange={(e) => handleChange("period", e.target.value)}
                className="border rounded px-2 py-1"
              >
                {buildOptions(periods)}
              </select>
            </div>
          </div>
        </div>

        {/* 検索ボタン */}
        <div className="text-center pt-3">
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded"
          >
            検索
          </button>
        </div>
      </section>

      {/* 一覧ボタン群 */}
      <section className="flex justify-center gap-4 mt-6">
        <Link
          to="/brands"
          className="bg-gray-100 border px-4 py-2 rounded hover:bg-gray-200"
        >
          ブランド一覧
        </Link>
        <Link
          to="/makers"
          className="bg-gray-100 border px-4 py-2 rounded hover:bg-gray-200"
        >
          メーカー一覧
        </Link>
      </section>

      {/* 最近追加されたモデル枠 */}
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">最近追加されたモデル</h2>
        <p className="text-gray-600 text-sm">
          最新のモデル情報をここに表示予定です。
        </p>
      </section>
    </div>
  );
}
