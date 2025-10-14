// src/pages/ModelListPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getModelsByBrand, getModelsByMaker } from "../mockData";
import NavButton from "../components/NavButton";

export default function ModelListPage() {
  const { brandId, makerId } = useParams();

  const models = brandId
    ? getModelsByBrand(brandId)
    : makerId
    ? getModelsByMaker(makerId)
    : [];

  return (
    <div className="p-4">
      <div className="p-2">
        <NavButton />
      </div>

      <h1 className="text-2xl font-bold mb-4">繝｢繝・Ν荳隕ｧ</h1>

      {models.length === 0 ? (
        <div>繧ｳ繝ｳ繝・Φ繝・ｺ門ｙ荳ｭ</div>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {models.map((model) => (
            <li key={model.id}>
              <Link
                to={`/models/${model.id}`}
                className="block border p-4 rounded hover:bg-gray-50"
              >
                <h2 className="font-bold text-lg">{model.name}</h2>
                <p className="text-sm text-gray-500">{model.period}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
