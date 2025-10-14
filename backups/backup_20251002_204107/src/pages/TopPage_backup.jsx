import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopPage() {
  const navigate = useNavigate();

  const [kw, setKw] = useState('');
  const [brand, setBrand] = useState('');
  const [maker, setMaker] = useState('');
  const [period, setPeriod] = useState('');
  const [country, setCountry] = useState('');
  const [style, setStyle] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (kw) params.set('kw', kw);
    if (brand) params.set('brand', brand);
    if (maker) params.set('maker', maker);
    if (period) params.set('period', period);
    if (country) params.set('country', country);
    if (style) params.set('style', style);
    navigate('/search?' + params.toString());
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 讀懃ｴ｢・医ヵ繝ｪ繝ｼ繝ｯ繝ｼ繝会ｼ・*/}
      <section className="border rounded p-4 mb-6">
        <label className="block text-sm font-medium mb-2">繝輔Μ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢</label>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <input
            type="text"
            placeholder="繧ｭ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢..."
            value={kw}
            onChange={(e) => setKw(e.target.value)}
            className="border rounded px-3 py-2 w-full md:w-[600px]"
          />
          <button
            onClick={handleSearch}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            讀懃ｴ｢
          </button>
        </div>
      </section>

      {/* 繧ｿ繧ｰ讀懃ｴ｢・域ｨｪ荳蛻暦ｼ・陦檎ｶｭ謖・ｼ・*/}
      <section className="border rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">繧ｿ繧ｰ讀懃ｴ｢</h2>
        <div className="flex flex-nowrap items-center gap-2 overflow-x-auto">
          <select className="border rounded px-2 py-2 min-w-[140px]" value={brand} onChange={(e)=>setBrand(e.target.value)}>
            <option value="">繝悶Λ繝ｳ繝・/option>
            <option>Buco</option>
            <option>Trojan</option>
            <option>Schott</option>
          </select>
          <select className="border rounded px-2 py-2 min-w-[140px]" value={maker} onChange={(e)=>setMaker(e.target.value)}>
            <option value="">繝｡繝ｼ繧ｫ繝ｼ</option>
            <option>譚ｱ莠ｬ蟾･謌ｿ</option>
            <option>Langlitz</option>
          </select>
          <select className="border rounded px-2 py-2 min-w-[140px]" value={period} onChange={(e)=>setPeriod(e.target.value)}>
            <option value="">蟷ｴ莉｣</option>
            <option>1930s</option>
            <option>1940s</option>
            <option>1950s</option>
          </select>
          <select className="border rounded px-2 py-2 min-w-[140px]" value={country} onChange={(e)=>setCountry(e.target.value)}>
            <option value="">蝨ｰ蝓・/option>
            <option>繧｢繝｡繝ｪ繧ｫ</option>
            <option>譌･譛ｬ</option>
            <option>繧､繧ｮ繝ｪ繧ｹ</option>
          </select>
          <select className="border rounded px-2 py-2 min-w-[160px]" value={style} onChange={(e)=>setStyle(e.target.value)}>
            <option value="">繧ｹ繧ｿ繧､繝ｫ</option>
            <option>繝繝悶Ν繝ｩ繧､繝繝ｼ繧ｹ</option>
            <option>繧ｷ繝ｳ繧ｰ繝ｫ繝ｩ繧､繝繝ｼ繧ｹ</option>
          </select>
        </div>
      </section>

      {/* 荳隕ｧ繝壹・繧ｸ縺ｸ縺ｮ驕ｷ遘ｻ繝懊ち繝ｳ */}
      <section className="border rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">荳隕ｧ繝壹・繧ｸ</h2>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/brands')}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            繝悶Λ繝ｳ繝我ｸ隕ｧ
          </button>
          <button
            onClick={() => navigate('/makers')}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ
          </button>
        </div>
      </section>

      {/* 譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν・医ム繝溘・陦ｨ遉ｺ・・*/}
      <section className="border rounded p-4">
        <h2 className="text-lg font-semibold mb-2">譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Buco J-24 (1950s, Horsehide)</li>
          <li>Trojan 619 (1940s, Goatskin)</li>
          <li>Sears Hercules (1930s, Cowhide)</li>
        </ul>
      </section>
    </div>
  );
}
