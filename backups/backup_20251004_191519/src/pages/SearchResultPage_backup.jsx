import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getModels } from '../utils/store';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResultPage() {
  const q = useQuery();
  const filtersRaw = q.get('filters');
  let filters = null;
  try { filters = filtersRaw ? JSON.parse(decodeURIComponent(filtersRaw)) : null; } catch {}
  const keyword = filters?.keyword?.toLowerCase() || '';

  const models = getModels().filter(m => {
    const okKw = !keyword || (m.name || '').toLowerCase().includes(keyword);
    const okBrand = !filters?.brand || String(m.brand) === String(filters.brand) || String(m.brandId) === String(filters.brand);
    const okMaker = !filters?.maker || String(m.maker) === String(filters.maker) || String(m.makerId) === String(filters.maker);
    const okPeriod = !filters?.period || String(m.period) === String(filters.period);
    const okCountry = !filters?.country || String(m.country) === String(filters.country);
    const okStyle = !filters?.style || String(m.style) === String(filters.style);
    return okKw && okBrand && okMaker && okPeriod && okCountry && okStyle;
  });

  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-xl font-bold mb-4">讀懃ｴ｢邨先棡</h2>
      <ul className="space-y-2">
        {models.map(m => (
          <li key={m.id}>
            <Link className="text-blue-600 underline" to={`/models/${m.id}`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
