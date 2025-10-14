import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getModels } from '../utils/store';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function ModelListPage() {
  const { brandId, makerId } = useParams();
  const q = useQuery();
  const models = getModels().filter(m => {
    if (brandId) return String(m.brandId) === String(brandId);
    if (makerId) return String(m.makerId) === String(makerId);
    return true;
  });
  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-xl font-bold mb-4">繝｢繝・Ν荳隕ｧ</h2>
      <ul className="space-y-2">
        {models.map(m => (
          <li key={m.id}>
            <Link className="text-blue-600 underline" to={`/models/${m.id}`}>
              {m.name} {m.period ? `(${m.period})` : ''}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
