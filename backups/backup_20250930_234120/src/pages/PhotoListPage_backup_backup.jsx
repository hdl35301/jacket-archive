import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TopNav from "../components/TopNav";
import { getPhotos } from '../utils/store';

export default function PhotoListPage() {
  const { modelId } = useParams();
  const photos = getPhotos().filter(p => String(p.modelId) === String(modelId));
  return (
    <div className="p-4">
      <TopNav />
      <h2 className="text-xl font-bold mb-4">蜀咏悄荳隕ｧ</h2>
      <ul className="space-y-2">
        {photos.map(p => (
          <li key={p.id}>
            <Link className="text-blue-600 underline" to={`/photos/${p.id}`}>{p.caption || 'photo'}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
