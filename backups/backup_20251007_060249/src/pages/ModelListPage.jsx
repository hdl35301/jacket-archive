// src/pages/MakerListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getMakers } from "../mockData";
import NavButton from "../components/NavButton";

export default function MakerListPage() {
  const makers = getMakers();

  return (
    <div className="p-4">
      <div className="p-2">
        <NavButton />
      </div>

      <h1 className="text-2xl font-bold mb-4">繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ</h1>

      {makers.length === 0 ? (
        <div>繧ｳ繝ｳ繝・Φ繝・ｺ門ｙ荳ｭ</div>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {makers.map((maker) => (
            <li key={maker.id}>
              <Link
                to={`/makers/${maker.id}`}
                className="block border p-4 rounded hover:bg-gray-50"
              >
                <h2 className="font-bold text-lg">{maker.name}</h2>
                <p className="text-sm text-gray-500">{maker.country}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
