import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhotos } from '../utils/store';

export default function PhotoDetailPage() {
  const { photoId } = useParams();
  const p = getPhotos().find(x => String(x.id) === String(photoId));
  if (!p) return <div className="p-4">蜀咏悄縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  return (
    <div className="p-4 space-y-2">
      <img src={p.url} alt={p.caption || ''} className="max-w-full" />
      <div>繧ｭ繝｣繝励す繝ｧ繝ｳ: {p.caption || '-'}</div>
      <div className="flex gap-2 mt-2">
        <Link className="px-3 py-1 bg-gray-200 rounded" to={`/models/${p.modelId}/photos`}>荳隕ｧ縺ｫ謌ｻ繧・/Link>
        <Link className="px-3 py-1 bg-gray-200 rounded" to="/">繝医ャ繝励・繝ｼ繧ｸ</Link>
      </div>
    </div>
  );
}
