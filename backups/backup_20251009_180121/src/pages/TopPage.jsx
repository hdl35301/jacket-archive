// src/pages/TopPage.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// ===== データ統一: periodPresets → periods, 各配列を data/*.js から取得 =====
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { styles } from "../data/styles";
import { countries } from "../data/countries";
import { periods } from "../data/periods";
import { models } from "../data/models";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword);
    if (selectedBrand) params.set("brand", selectedBrand);
    if (selectedMaker) params.set("maker", selectedMaker);
    if (selectedStyle) params.set("style", selectedStyle);
    if (selectedCountry) params.set("country", selectedCountry);
    if (selectedPeriod) params.set("period", selectedPeriod);
    window.location.hash = `#/models?${params.toString()}`;
  };

  // ▼ オプション生成共通処理（“入力する”除外, 未指定→不明→ABC順）
  const normalizeOptions = (list) => {
    if (!Array.isArray(list)) return [];
    const filtered = list.filter((item) => item.name !== "入力する");
    const unspecified = filtered.find((x) => x.name === "未指定")
      ? []
      : [{ id: "", name: "未指定" }];
    const unknown = filtered.find((x) => x.name === "不明") ? [{ id: "unknown", name: "不明" }] : [];
    const middle = filtered.filter(
      (x) => x.name !== "未指定" && x.name !== "不明"
    );
    middle.sort((a, b) => a.name.localeCompare(b.name, "ja"));
    return [...unspecified, ...middle, ...unknown];
  };

  // ▼ 各プルダウンに適用（data/*.js 参照）
  const brandOptions = useMemo(() => normalizeOptions(brands), []);
  const makerOptions = useMemo(() => normalizeOptions(makers), []);
  const styleOptions = useMemo(() => normalizeOptions(styles), []);
  const countryOptions = useMemo(() => normalizeOptions(countries), []);
  const periodOptions = useMemo(() => normalizeOptions(periods), []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Jacket Archive</h1>

      <div className="mb-4 flex gap-2">
        <Link to="/brands" className="px-3 py-2 border rounded hover:bg-gray-50">
          ブランド一覧
        </Link>
        <Link to="/makers" className="px-3 py-2 border rounded hover:bg-gray-50">
          メーカー一覧
        </Link>
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">フリーワード検索</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="例：Buco J-24"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="border p-3 mb-6">
        <div className="text-base mb-2">タグ検索</div>
        <div className="flex flex-wrap gap-3">
          <select
            className="border rounded px-2 py-2"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {brandOptions.map((opt, i) => (
              <option key={`b-${i}`} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-2 py-2"
            value={selectedMaker}
            onChange={(e) => setSelectedMaker(e.target.value)}
          >
            {makerOptions.map((opt, i) => (
              <option key={`m-${i}`} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-2 py-2"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            {styleOptions.map((opt, i) => (
              <option key={`s-${i}`} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-2 py-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countryOptions.map((opt, i) => (
              <option key={`c-${i}`} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-2 py-2"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periodOptions.map((opt, i) => (
              <option key={`p-${i}`} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <button
            onClick={handleSearch}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            検索
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">最近追加されたモデル</h2>
        <ul className="list-disc pl-5">
          {models.slice(0, 5).map((m) => (
            <li key={m.id}>
              <Link to={`/models/${m.id}`} className="text-blue-600 hover:underline">
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
