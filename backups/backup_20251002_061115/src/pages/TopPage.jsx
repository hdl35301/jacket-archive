import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* Freeword Search */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Freeword Search</h2>
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Enter keyword"
          className="border p-2 w-full"
        />
        <button
          onClick={() => navigate('/search?word=' + encodeURIComponent(searchWord))}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          Search
        </button>
      </div>

      {/* Tag Search */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Tag Search</h2>
        <div className="flex flex-nowrap overflow-x-auto text-sm p-1">
          <select className="border p-2 mr-2">
            <option>繝悶Λ繝ｳ繝・/option>
            <option>繝｡繝ｼ繧ｫ繝ｼ</option>
            <option>蟷ｴ莉｣</option>
            <option>蝨ｰ蝓・/option>
            <option>繧ｹ繧ｿ繧､繝ｫ</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2">Search</button>
        </div>
      </div>

      {/* Brand / Maker */}
      <div className="border p-4 mb-6">
        <button
          onClick={() => navigate('/brands')}
          className="bg-blue-500 text-white px-4 py-2 mr-4"
        >
          繝悶Λ繝ｳ繝我ｸ隕ｧ
        </button>
        <button
          onClick={() => navigate('/makers')}
          className="bg-blue-500 text-white px-4 py-2"
        >
          繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ
        </button>
      </div>

      {/* Recently Added Models */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Recently Added Models</h2>
        <p>・医％縺薙↓譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν繧定｡ｨ遉ｺ莠亥ｮ夲ｼ・/p>
      </div>
    </div>
  );
}
