import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getBrands } from '../utils/store';

export default function BrandListPage() {
  const brands = getBrands();
  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-xl font-bold mb-4">繝悶Λ繝ｳ繝我ｸ隕ｧ</h2>
      <ul className="space-y-2">
        {brands.map(b => (
          <li key={b.id}>
            <Link className="text-blue-600 underline" to={`/brands/${b.id}`}>{b.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
