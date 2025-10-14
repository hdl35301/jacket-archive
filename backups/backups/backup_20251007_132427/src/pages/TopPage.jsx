import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TopPage() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (!keyword.trim()) return;
    console.log("讀懃ｴ｢繝ｯ繝ｼ繝・", keyword);
  };

  // 蟷ｴ莉｣繝励Μ繧ｻ繝・ヨ・・920蟷ｴ莉｣蛻晄悄・・970蟷ｴ莉｣蠕梧悄・・  const yearPresets = [
    "1920蟷ｴ莉｣蛻晄悄", "1920蟷ｴ莉｣荳ｭ譛・, "1920蟷ｴ莉｣蠕梧悄",
    "1930蟷ｴ莉｣蛻晄悄", "1930蟷ｴ莉｣荳ｭ譛・, "1930蟷ｴ莉｣蠕梧悄",
    "1940蟷ｴ莉｣蛻晄悄", "1940蟷ｴ莉｣荳ｭ譛・, "1940蟷ｴ莉｣蠕梧悄",
    "1950蟷ｴ莉｣蛻晄悄", "1950蟷ｴ莉｣荳ｭ譛・, "1950蟷ｴ莉｣蠕梧悄",
    "1960蟷ｴ莉｣蛻晄悄", "1960蟷ｴ莉｣荳ｭ譛・, "1960蟷ｴ莉｣蠕梧悄",
    "1970蟷ｴ莉｣蛻晄悄", "1970蟷ｴ莉｣荳ｭ譛・, "1970蟷ｴ莉｣蠕梧悄",
  ];

  return (
    <div className="p-4">
      {/* 繧ｿ繧､繝医Ν */}
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 讀懃ｴ｢繝悶Ο繝・け */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">讀懃ｴ｢</h2>

        {/* 繝輔Μ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢ */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            繝輔Μ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            placeholder="繧ｭ繝ｼ繝ｯ繝ｼ繝峨ｒ蜈･蜉・.."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            讀懃ｴ｢
          </button>
        </div>

        {/* 繧ｿ繧ｰ讀懃ｴ｢ */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">繧ｿ繧ｰ讀懃ｴ｢</h3>
          <div className="flex flex-nowrap overflow-x-auto text-sm p-1 space-x-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1">繝悶Λ繝ｳ繝・/label>
              <select className="border rounded p-1 w-44">
                <option>驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                <option>Buco</option>
                <option>Trojan</option>
                <option>Beck</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">繝｡繝ｼ繧ｫ繝ｼ</label>
              <select className="border rounded p-1 w-44">
                <option>驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                <option>Joseph Buegeleisen Co.</option>
                <option>Taubers</option>
                <option>Langlitz Leathers</option>
              </select>
            </div>

            {/* 蟷ｴ莉｣・磯幕蟋九・邨ゆｺ・ｼ・*/}
            <div className="flex flex-col">
              <label className="text-sm mb-1">蟷ｴ莉｣・磯幕蟋具ｼ・/label>
              <select className="border rounded p-1 w-44">
                <option>驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {yearPresets.map((y, i) => (
                  <option key={`start-${i}`}>{y}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">蟷ｴ莉｣・育ｵゆｺ・ｼ・/label>
              <select className="border rounded p-1 w-44">
                <option>驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {yearPresets.map((y, i) => (
                  <option key={`end-${i}`}>{y}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">繧ｹ繧ｿ繧､繝ｫ</label>
              <select className="border rounded p-1 w-44">
                <option>驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                <option>繝ｩ繧､繝繝ｼ繧ｹ</option>
                <option>繝輔Λ繧､繝医ず繝｣繧ｱ繝・ヨ</option>
                <option>繧ｹ繝昴・繝・ず繝｣繧ｱ繝・ヨ</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={() => console.log("繧ｿ繧ｰ讀懃ｴ｢螳溯｡・)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            讀懃ｴ｢
          </button>
        </div>
      </div>

      {/* 繝悶Λ繝ｳ繝会ｼ上Γ繝ｼ繧ｫ繝ｼ荳隕ｧ・亥ｷｦ隧ｰ繧√・讀懃ｴ｢譫縺九ｉ驕ｩ蛻・↑菴咏區縺ゅｊ・・*/}
      <div className="border p-4 mb-6 mt-6">
        <div className="flex flex-nowrap gap-4">
          <Link
            to="/brands"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 text-center whitespace-nowrap"
          >
            繝悶Λ繝ｳ繝我ｸ隕ｧ
          </Link>
          <Link
            to="/makers"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 text-center whitespace-nowrap"
          >
            繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ
          </Link>
        </div>
      </div>

      {/* 譛霑題ｿｽ蜉繝｢繝・Ν */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν</h2>
        <p className="text-sm text-gray-500">繧ｳ繝ｳ繝・Φ繝・ｺ門ｙ荳ｭ...</p>
      </div>
    </div>
  );
}
