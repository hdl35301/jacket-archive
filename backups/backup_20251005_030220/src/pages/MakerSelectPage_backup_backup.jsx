import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getMakers } from '../utils/store';

export default function MakerSelectPage() {
  const makers = getMakers();
  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-xl font-bold mb-4">繝｡繝ｼ繧ｫ繝ｼ荳隕ｧ</h2>
      <ul className="space-y-2">
        {makers.map(m => (
          <li key={m.id}>
            <Link className="text-blue-600 underline" to={`/makers/${m.id}`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
