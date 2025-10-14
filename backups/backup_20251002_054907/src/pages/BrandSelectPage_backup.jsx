import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import { getBrands } from "../utils/store";

export default function BrandSelectPage() {
  const brands = getBrands().slice().sort((a,b)=>a.name.localeCompare(b.name));
  return (
    <div className="p-4">
      <TopNav />
      <h1 className="text-xl font-bold mb-3">繝悶Λ繝ｳ繝我ｸ隕ｧ</h1>
      <ul className="grid gap-2 md:grid-cols-2">
        {brands.map(b => (
          <li key={b.id} className="border rounded px-3 py-2">
            <Link to={`/brands/${b.id}`} className="text-blue-600 underline">{b.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
