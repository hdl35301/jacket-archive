import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate("/search?keyword=" + encodeURIComponent(keyword));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Freeword Search</h2>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          讀懃ｴ｢
        </button>
      </div>

      <div className="border p-4 mb-6">
        {/* Tag Search */}
        <h2 className="text-lg mb-2">Tag Search</h2>
        <div className="flex flex-nowrap overflow-x-auto text-sm p-1">
          <select className="border p-1 mr-2">
            <option>繝悶Λ繝ｳ繝・/option>
          </select>
          <select className="border p-1 mr-2">
            <option>繝｡繝ｼ繧ｫ繝ｼ</option>
          </select>
          <select className="border p-1 mr-2">
            <option>蟷ｴ莉｣</option>
          </select>
          <select className="border p-1 mr-2">
            <option>蝨ｰ蝓・/option>
          </select>
          <select className="border p-1">
            <option>繧ｹ繧ｿ繧､繝ｫ</option>
          </select>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          讀懃ｴ｢
        </button>
      </div>

      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν</h2>
        <p>縺薙％縺ｫ譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν荳隕ｧ縺悟・繧翫∪縺吶・/p>
      </div>
    </div>
  );
}
