import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';

export default function TopPage() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = encodeURIComponent(keyword.trim());
    if (q.length > 0) {
      navigate(`/search?keyword=${q}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TopNav />

      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* 繝・く繧ｹ繝域､懃ｴ｢ */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="繧ｭ繝ｼ繝ｯ繝ｼ繝画､懃ｴ｢..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block"
        >
          讀懃ｴ｢
        </button>
      </div>

      {/* 荳隕ｧ繝壹・繧ｸ縺ｸ縺ｮ驕ｷ遘ｻ繝懊ち繝ｳ */}
      <div className="quick-links flex gap-3 mb-6">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/brands">
          繝悶Λ繝ｳ繝我ｸ隕ｧ
        </Link>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/makers">
          繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ
        </Link>
      </div>

      {/* 譛霑題ｿｽ蜉縺輔ｌ縺溘Δ繝・Ν・医Δ繝・け陦ｨ遉ｺ・・*/}
      <section className="latest-models border rounded p-4">
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
