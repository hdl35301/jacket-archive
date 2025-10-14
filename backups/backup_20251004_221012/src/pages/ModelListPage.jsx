import NavButton from "../components/NavButton";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { models as models } from "../data/models";

export default function ModelListPage(
  return (<div className='p-2'><NavButton /></div>);) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const brand = params.get("brand");
  const maker = params.get("maker");
  const style = params.get("style");
  const region = params.get("region");
  const periodStart = params.get("periodStart");
  const periodEnd = params.get("periodEnd");

  const filtered = models.filter(m => {
    if (brand && brand !== "荳肴・" && m.brand !== brand) return false;
    if (maker && maker !== "荳肴・" && m.maker !== maker) return false;
    if (style && style !== "荳肴・" && m.style !== style) return false;
    if (region && region !== "荳肴・" && m.region !== region) return false;
    if (periodStart && periodEnd) {
      if (!m.period || !m.period.start || !m.period.end) return false;
      if (!(m.period.start.includes(periodStart) && m.period.end.includes(periodEnd))) return false;
    }
    return true;
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">繝｢繝・Ν荳隕ｧ</h1>
      {filtered.length === 0 ? (
        <p>隧ｲ蠖薙Δ繝・Ν縺ｯ縺ゅｊ縺ｾ縺帙ｓ</p>
      ) : (
        <ul className="space-y-2">
          {filtered.map(m => (
            <li key={m.id} className="border p-2">
              <Link to={`/models/${m.id}`} className="text-blue-600 underline">{m.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
