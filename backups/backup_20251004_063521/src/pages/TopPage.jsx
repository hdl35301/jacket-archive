import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopPage() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("荳肴・");
  const [maker, setMaker] = useState("荳肴・");
  const [style, setStyle] = useState("荳肴・");
  const [region, setRegion] = useState("荳肴・");
  const [periodStart, setPeriodStart] = useState("");
  const [periodEnd, setPeriodEnd] = useState("");

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (brand && brand !== "荳肴・") query.set("brand", brand);
    if (maker && maker !== "荳肴・") query.set("maker", maker);
    if (style && style !== "荳肴・") query.set("style", style);
    if (region && region !== "荳肴・") query.set("region", region);
    if (periodStart && periodEnd) {
      query.set("periodStart", periodStart);
      query.set("periodEnd", periodEnd);
    }
    navigate(`/models?${query.toString()}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      <div className="border p-4 mb-6">
        <h2 className="text-lg mb-2">Tag Search</h2>
        <div className="flex flex-col gap-2">
          <select value={brand} onChange={e => setBrand(e.target.value)} className="border p-1">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>Buco</option>
            <option>Sears</option>
          </select>
          <select value={maker} onChange={e => setMaker(e.target.value)} className="border p-1">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>LeatherTogs</option>
            <option>Trojan</option>
          </select>
          <select value={style} onChange={e => setStyle(e.target.value)} className="border p-1">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>繝ｩ繧､繝繝ｼ繧ｹ</option>
            <option>繝輔Λ繧､繝・/option>
          </select>
          <select value={region} onChange={e => setRegion(e.target.value)} className="border p-1">
            <option>荳肴・</option>
            <option>蜈･蜉帙☆繧・/option>
            <option>USA</option>
            <option>Japan</option>
          </select>
          <div className="flex gap-2">
            <input type="text" value={periodStart} onChange={e=>setPeriodStart(e.target.value)} placeholder="髢句ｧ・(萓・ 1950蠕梧悄)" className="border p-1 flex-1"/>
            <input type="text" value={periodEnd} onChange={e=>setPeriodEnd(e.target.value)} placeholder="邨ゆｺ・(萓・ 1960蛻晄悄)" className="border p-1 flex-1"/>
          </div>
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 mt-2">讀懃ｴ｢</button>
        </div>
      </div>
    </div>
  );
}
