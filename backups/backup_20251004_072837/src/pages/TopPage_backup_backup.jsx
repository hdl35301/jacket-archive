
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import NavButton from "../components/NavButton";

export default function TopPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const [filters, setFilters] = useState({
    brand: "",
    maker: "",
    period: "",
    country: "",
    style: ""
  });

  const handleSearch = () => {
    navigate("/search", { state: { keyword, filters } });
  };

  return (
    <div className="container mx-auto p-4">
      <TopNav />
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 繝・く繧ｹ繝域､懃ｴ｢ */}
      <input
        type="text"
        placeholder="繧ｭ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {/* 繧ｿ繧ｰ讀懃ｴ｢ */}
      <div className="flex flex-col gap-2 mb-4">
        <select
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="border p-2"
        >
          <option value="">繝悶Λ繝ｳ繝・/option>
          <option>Buco</option>
          <option>Trojan</option>
        </select>
        <select
          value={filters.maker}
          onChange={(e) => setFilters({ ...filters, maker: e.target.value })}
          className="border p-2"
        >
          <option value="">繝｡繝ｼ繧ｫ繝ｼ</option>
          <option>譚ｱ莠ｬ蟾･謌ｿ</option>
          <option>Langlitz</option>
        </select>
        <select
          value={filters.period}
          onChange={(e) => setFilters({ ...filters, period: e.target.value })}
          className="border p-2"
        >
          <option value="">蟷ｴ莉｣</option>
          <option>1930s</option>
          <option>1950s</option>
        </select>
        <select
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
          className="border p-2"
        >
          <option value="">蝨ｰ蝓・/option>
          <option>繧｢繝｡繝ｪ繧ｫ</option>
          <option>譌･譛ｬ</option>
        </select>
        <select
          value={filters.style}
          onChange={(e) => setFilters({ ...filters, style: e.target.value })}
          className="border p-2"
        >
          <option value="">繧ｹ繧ｿ繧､繝ｫ</option>
          <option>繝繝悶Ν繝ｩ繧､繝繝ｼ繧ｹ</option>
          <option>繧ｷ繝ｳ繧ｰ繝ｫ繝ｩ繧､繝繝ｼ繧ｹ</option>
        </select>
      </div>

      <NavButton onClick={handleSearch}>讀懃ｴ｢</NavButton>

      <div className="flex gap-4 mt-6">
        <NavButton onClick={() => navigate("/brands")}>繝悶Λ繝ｳ繝我ｸ隕ｧ</NavButton>
        <NavButton onClick={() => navigate("/makers")}>繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ</NavButton>
      </div>

      <section className="mt-6">
        <h2 className="text-lg font-bold mb-2">譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν</h2>
        <ul className="list-disc pl-6">
          <li>Buco J-24 (1950s, Horsehide)</li>
          <li>Trojan 619 (1940s, Goatskin)</li>
          <li>Sears Hercules (1930s, Cowhide)</li>
        </ul>
      </section>
    </div>
  );
}
