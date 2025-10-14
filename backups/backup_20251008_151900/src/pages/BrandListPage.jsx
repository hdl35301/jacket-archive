import React from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";
import NavButton from "../components/NavButton";

export default function BrandListPage() {
  return (
    <div className="p-4">
      {/* 蜈ｱ騾壹リ繝薙ご繝ｼ繧ｷ繝ｧ繝ｳ・域綾繧九・繝医ャ繝励・繝ｼ繧ｸ・・*/}
      <NavButton />

      <h1 className="text-xl font-bold mb-4">繝悶Λ繝ｳ繝我ｸ隕ｧ</h1>

      {brands && brands.length > 0 ? (
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand.id} className="border-b pb-2">
              {/* 隼 繝悶Λ繝ｳ繝牙錐繧ｯ繝ｪ繝・け縺ｧ隧ｳ邏ｰ繝壹・繧ｸ縺ｸ驕ｷ遘ｻ */}
              <Link
                to={`/brands/${brand.id}`}
                className="text-blue-600 hover:underline"
              >
                {brand.name}
              </Link>

              {/* 繝悶Λ繝ｳ繝峨・隱ｬ譏弱↑縺ｩ */}
              {brand.description && (
                <p className="text-sm text-gray-600 mt-1">{brand.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>繝悶Λ繝ｳ繝画ュ蝣ｱ縺後≠繧翫∪縺帙ｓ縲・/p>
      )}
    </div>
  );
}
