import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPresetOptions } from "../data/adapters/presetAdapter";

export default function TopPage() {
  const { brands, makers, styles, countries, periods } = getPresetOptions();

  const [filters, setFilters] = useState({
    keyword: "",
    brand: "",
    maker: "",
    style: "",
    country: "",
    period: "",
  });

  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log("検索条件:", filters);
  };

  const renderDropdown = (label, options, keyName) => (
    <div className="flex flex-col w-full sm:w-auto">
      <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <select
        value={filters[keyName]}
        onChange={e => handleChange(keyName, e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 w-full text-gray-800"
      >
        {options.map(opt => (
          <option key={`${label}-${opt.id || "none"}`} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );

  // 🔽 共通セクションラッパー
  const Section = ({ title, children }) => (
    <section className="my-6">
      <h2 className="text-lg font-bold mb-3 border-b border-gray-300 pb-1">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );

  return (
    <div className="p-4">
      {/* ===== タイトル ===== */}
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Leather Jacket Archive
      </h1>

      {/* ===== 検索セクション ===== */}
      <Section title="検索">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="フリーワードで検索"
            value={filters.keyword}
            onChange={e => handleChange("keyword", e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-gray-800"
          />

          {/* タグ検索 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {renderDropdown("ブランド", brands, "brand")}
            {renderDropdown("メーカー", makers, "maker")}
            {renderDropdown("スタイル", styles, "style")}
            {renderDropdown("国", countries, "country")}
            {renderDropdown("年代", periods, "period")}
          </div>

          <button
            onClick={handleSearch}
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            検索
          </button>
        </div>
      </Section>

      {/* ===== ナビゲーション ===== */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Link
          to="/brands"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded border"
        >
          ブランド一覧
        </Link>
        <Link
          to="/makers"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded border"
        >
          メーカー一覧
        </Link>
      </div>

      {/* ===== 最近追加されたモデル ===== */}
      <Section title="最近追加されたモデル">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* 将来的に自動生成予定だが、現在は静的リンク保持 */}
          <Link
            to="/models/m1"
            className="block border p-3 rounded hover:bg-gray-50"
          >
            <h3 className="font-semibold">J-24（Buco）</h3>
            <p className="text-sm text-gray-600">1950年代 / アメリカ</p>
          </Link>
          <Link
            to="/models/m2"
            className="block border p-3 rounded hover:bg-gray-50"
          >
            <h3 className="font-semibold">Racing Jacket（Trojan）</h3>
            <p className="text-sm text-gray-600">1940年代 / アメリカ</p>
          </Link>
        </div>
      </Section>
    </div>
  );
}
