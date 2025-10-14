// src/pages/BrandListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { brands } from "../data/brands";

export default function BrandListPage() {
  return (
    <div className="p-4 space-y-4">
      <NavButton />

      <h1 className="text-xl mb-2">繝悶Λ繝ｳ繝我ｸ隕ｧ</h1>
      <ul className="list-disc pl-6">
        {brands?.map((b) => (
          <li key={b.id} className="mb-1">
            <Link className="underline" to={`/brands/${b.id}`}>{b.name}</Link>
            <span className="mx-2">/</span>
            <Link className="underline" to={`/brands/${b.id}/models`}>繝｢繝・Ν荳隕ｧ縺ｸ</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
