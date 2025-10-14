import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { brands } from "../data/brands";

export default function BrandListPage() {
  return (
    <div className="p-4">
      <NavButton />
      <h1 className="text-2xl font-bold mb-4">繝悶Λ繝ｳ繝我ｸ隕ｧ</h1>

      {brands && brands.length > 0 ? (
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link
                to={`/brands/${brand.id}`}
                className="text-blue-600 hover:underline"
              >
                {brand.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">繝悶Λ繝ｳ繝峨ョ繝ｼ繧ｿ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ縲・/p>
      )}
    </div>
  );
}
