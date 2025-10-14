import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TagInput from "../components/TagInput";

export default function TopPage() {
  const navigate = useNavigate();
  const [freeword, setFreeword] = useState("");
  const [tags, setTags] = useState([]);

  const presets = {
    brand: ["荳肴・", "蜈･蜉帙☆繧・, "Buco", "Sears", "Trojan"],
    maker: ["荳肴・", "蜈･蜉帙☆繧・, "LeatherCo", "VintageWorks"],
    era: ["荳肴・", "蜈･蜉帙☆繧・, "1930s", "1940s", "1950s"],
    region: ["荳肴・", "蜈･蜉帙☆繧・, "USA", "Europe", "Japan"],
    style: ["荳肴・", "蜈･蜉帙☆繧・, "Double Rider", "Flight", "Car Coat"]
  };

  const handleSearch = () => {
    navigate("/search", { state: { freeword, tags } });
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
          className="border p-2 w-full"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Tag Search */}
      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Tag Search</h2>
        <div className="flex flex-nowrap overflow-x-auto text-sm p-1">
          <TagInput label="Brand" options={presets.brand} onChange={(val) => setTags([...tags, { type: "brand", value: val }])} />
          <TagInput label="Maker" options={presets.maker} onChange={(val) => setTags([...tags, { type: "maker", value: val }])} />
          <TagInput label="Era" options={presets.era} onChange={(val) => setTags([...tags, { type: "era", value: val }])} />
          <TagInput label="Region" options={presets.region} onChange={(val) => setTags([...tags, { type: "region", value: val }])} />
          <TagInput label="Style" options={presets.style} onChange={(val) => setTags([...tags, { type: "style", value: val }])} />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Brand / Maker List */}
      <div className="border p-4 mb-6">
        <button
          className="bg-gray-200 px-4 py-2 mr-2"
          onClick={() => navigate("/brands")}
        >
          繝悶Λ繝ｳ繝我ｸ隕ｧ
        </button>
        <button
          className="bg-gray-200 px-4 py-2"
          onClick={() => navigate("/makers")}
        >
          繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ
        </button>
      </div>
    </div>
  );
}
