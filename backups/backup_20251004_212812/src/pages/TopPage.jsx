import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
  const navigate = useNavigate();
  const [freeword, setFreeword] = useState("");
  const [brand, setBrand] = useState("荳肴・");
  const [maker, setMaker] = useState("荳肴・");
  const [region, setRegion] = useState("荳肴・");
  const [style, setStyle] = useState("荳肴・");
  const [eraStart, setEraStart] = useState("荳肴・");
  const [eraEnd, setEraEnd] = useState("荳肴・");

  const eras = [
    "荳肴・",
    "蜈･蜉帙☆繧・,
    "1920蟷ｴ莉｣蛻晄悄","1920蟷ｴ莉｣荳ｭ譛・,"1920蟷ｴ莉｣蠕梧悄",
    "1930蟷ｴ莉｣蛻晄悄","1930蟷ｴ莉｣荳ｭ譛・,"1930蟷ｴ莉｣蠕梧悄",
    "1940蟷ｴ莉｣蛻晄悄","1940蟷ｴ莉｣荳ｭ譛・,"1940蟷ｴ莉｣蠕梧悄",
    "1950蟷ｴ莉｣蛻晄悄","1950蟷ｴ莉｣荳ｭ譛・,"1950蟷ｴ莉｣蠕梧悄",
    "1960蟷ｴ莉｣蛻晄悄","1960蟷ｴ莉｣荳ｭ譛・,"1960蟷ｴ莉｣蠕梧悄",
    "1970蟷ｴ莉｣蛻晄悄","1970蟷ｴ莉｣荳ｭ譛・,"1970蟷ｴ莉｣蠕梧悄"
  ];

  const handleSearch = () => {
    console.log("讀懃ｴ｢:", { freeword, brand, maker, region, style, eraStart, eraEnd });
    navigate("/search-results");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* Freeword Search */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Freeword Search</h2>
        <input
          type="text"
          value={freeword}
          onChange={(e) => setFreeword(e.target.value)}
          placeholder="繧ｭ繝ｼ繝ｯ繝ｼ繝峨ｒ蜈･蜉・
          className="border p-2 w-full"
        />
      </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">讀懃ｴ｢</button>

      {/* Tag Search */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Tag Search</h2>
        <div className="flex flex-nowrap overflow-x-auto text-sm p-1 gap-2">
          <select value={brand} onChange={(e) => setBrand(e.target.value)} className="border p-2">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>繝悶Λ繝ｳ繝陰</option>
            <option>繝悶Λ繝ｳ繝隠</option>
          </select>

          <select value={maker} onChange={(e) => setMaker(e.target.value)} className="border p-2">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>繝｡繝ｼ繧ｫ繝ｼA</option>
            <option>繝｡繝ｼ繧ｫ繝ｼB</option>
          </select>

          <select value={region} onChange={(e) => setRegion(e.target.value)} className="border p-2">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>USA</option>
            <option>Europe</option>
          </select>

          <select value={style} onChange={(e) => setStyle(e.target.value)} className="border p-2">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>MC繧ｸ繝｣繧ｱ繝・ヨ</option>
            <option>繝輔Λ繧､繝医ず繝｣繧ｱ繝・ヨ</option>
          </select>

          <select value={eraStart} onChange={(e) => setEraStart(e.target.value)} className="border p-2">
            {eras.map((era, i) => (
              <option key={"start-" + i}>{era}</option>
            ))}
          </select>

          <select value={eraEnd} onChange={(e) => setEraEnd(e.target.value)} className="border p-2">
            {eras.map((era, i) => (
              <option key={"end-" + i}>{era}</option>
            ))}
          </select>
        </div>

        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 mt-4">
          讀懃ｴ｢
        </button>
      </div>

      {/* Brand / Maker List */}
      <div className="border p-4 mb-6">
        <button onClick={() => navigate("/brands")} className="bg-gray-200 px-4 py-2 mr-2">繝悶Λ繝ｳ繝我ｸ隕ｧ</button>
        <button onClick={() => navigate("/makers")} className="bg-gray-200 px-4 py-2">繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ</button>
      </div>

      {/* Recently Added Models */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Recently Added Models</h2>
        <p>譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν縺後％縺薙↓陦ｨ遉ｺ縺輔ｌ縺ｾ縺吶・/p>
      </div>
    </div>
  );
}
