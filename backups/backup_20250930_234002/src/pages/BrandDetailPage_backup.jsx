import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getBrands } from '../utils/store';

export default function BrandDetailPage() {
  const { brandId } = useParams();
  const brand = getBrands().find(b => String(b.id) === String(brandId));
  if (!brand) return <div className="p-4">繝悶Λ繝ｳ繝峨′隕九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  return (
    <div className="p-4 space-y-3">
      <TopNav />
      <h2 className="text-xl font-bold">{brand.name}</h2>
      <div>蝗ｽ: {brand.country || '-'}</div>
      <div>隱ｬ譏・ {brand.description || '-'}</div>
      <Link className="text-white bg-blue-600 px-3 py-1 rounded inline-block" to={`/brands/${brand.id}/models`}>
        縺薙・繝悶Λ繝ｳ繝峨・繝｢繝・Ν荳隕ｧ縺ｸ
      </Link>
    </div>
  );
}
