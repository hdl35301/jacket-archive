import { useParams, Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import { getBrands, getModels } from "../utils/store";

export default function ModelSelectPage() {
  const { brandId } = useParams();
  const brands = getBrands();
  const models = getModels();

  const brand = brands.find(b => String(b.id) === String(brandId));
  const list = models.filter(m => String(m.brandId) === String(brandId));

  return (
    <div className="p-4">
      <TopNav />
      <h1 className="text-xl font-bold mb-3">{brand ? `${brand.name} 縺ｮ繝｢繝・Ν荳隕ｧ` : "繝｢繝・Ν荳隕ｧ"}</h1>
      <ul className="list-disc pl-5">
        {list.map(m => (
          <li key={m.id}>
            <Link className="text-blue-600 underline" to={`/models/${m.id}`}>{m.name}</Link>
          </li>
        ))}
        {list.length === 0 && <li>譛ｪ逋ｻ骭ｲ</li>}
      </ul>
    </div>
  );
}
