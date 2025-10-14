// src/pages/MakerListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { makers } from "../data/makers";

export default function MakerListPage() {
  return (
    <div className="p-4 space-y-4">
      <NavButton />

      <h1 className="text-xl mb-2">繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ</h1>
      <ul className="list-disc pl-6">
        {makers?.map((m) => (
          <li key={m.id} className="mb-1">
            <Link className="underline" to={`/makers/${m.id}`}>{m.name}</Link>
            <span className="mx-2">/</span>
            <Link className="underline" to={`/makers/${m.id}/models`}>繝｢繝・Ν荳隕ｧ縺ｸ</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
