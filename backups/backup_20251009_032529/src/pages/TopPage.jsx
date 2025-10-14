import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { periods } from "../data/periods";
import { styles } from "../data/styles";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  // 検索オプションの整形（“入力する”を除外、“未指定”先頭、“不明”末尾）
  const normalizeOptions = (list) => {
    const hasUnknown = list.includes("不明");
    const filtered = list.filter((v) => v !== "入力する" && v !== "不明");
    const sorted = filtered.sort((a, b) => a.localeCompare(b, "ja"));
    const result = ["未指定", ...sorted];
    if (hasUnknown) result.push("不明");
    return result;
  };

  const brandOptions = normalizeOptions(brands.map((b) => b.name));
  const makerOptions = normalizeOptions(makers.map((m) => m.name));
  const periodOptions = normalizeOptions(periods.map((p) => p.label || p.name));
  const styleOptions = normalizeOptions(styles.map((s) => s.name));

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword);
    if (selectedBrand && selectedBrand !== "未指定") params.set("brand", selectedBrand);
    if (selectedMaker && selectedMaker !== "未指定") params.set("maker", selectedMaker);
    if (selectedPeriod && selectedPeriod !== "未指定") params.set("period", selectedPeriod);
    if (selectedStyle && selectedStyle !== "未指定") params.set("style", selectedStyle);
    const query = params.toString();
    if (query) window.location.href = `/search?${query}`;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* ===== ブロック1：検索エリア ===== */}
      <section className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">フリーワード検索</h2>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="キーワードを入力"
          className="w-full border rounded p-2"
        />

        <h2 className="text-lg font-semibold mt-6 mb-2">タグ検索</h2>
        <div className="flex items-center gap-2 flex-nowrap overflow-x-auto whitespace-nowrap text-sm p-1">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border rounded p-1 w-40"
          >
            {brandOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          <select
            value={selectedMaker}
            onChange={(e) => setSelectedMaker(e.target.value)}
            className="border rounded p-1 w-40"
          >
            {makerOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border rounded p-1 w-32"
          >
            {periodOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>

          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="border rounded p-1 w-44"
          >
            {styleOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* 検索ボタン（共通一つ） */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6 block"
        >
          検索
        </button>
      </section>

      {/* ===== ブロック2：ブランド・メーカー一覧 ===== */}
      <section className="border p-4 mb-6">
        <div className="flex gap-4">
          <Link to="/brands" className="bg-gray-200 px-4 py-2 rounded">
            ブランド一覧
          </Link>
          <Link to="/makers" className="bg-gray-200 px-4 py-2 rounded">
            メーカー一覧
          </Link>
        </div>
      </section>

      {/* ===== ブロック3：最近追加されたモデル ===== */}
      <section className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">最近追加されたモデル</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link to="/models/mo1" className="text-blue-600 hover:underline">
              Buco J-24 (1950s, Horsehide)
            </Link>
          </li>
          <li>
            <Link to="/models/mo2" className="text-blue-600 hover:underline">
              Trojan 619 (1940s, Goatskin)
            </Link>
          </li>
          <li>
            <Link to="/models/mo3" className="text-blue-600 hover:underline">
              Sears Hercules (1930s, Cowhide)
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
