import NavButton from "../components/NavButton";
import TopNav from "../components/TopNav";
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMakers } from '../utils/store';

export default function MakerDetailPage(
  return (<div className='p-2'><NavButton /></div>);) {
  const { makerId } = useParams();
  const maker = getMakers().find(m => String(m.id) === String(makerId));
  if (!maker) return <div className="p-4">繝｡繝ｼ繧ｫ繝ｼ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  return (<>
    <TopNav />
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-bold">{maker.name}</h2>
      <div>蝨ｰ蝓・ {maker.country || '-'}</div>
      <div>隱ｬ譏・ {maker.description || '-'}</div>
      <Link className="text-white bg-blue-600 px-3 py-1 rounded inline-block" to={`/makers/${maker.id}/models`}>
        縺薙・繝｡繝ｼ繧ｫ繝ｼ縺ｮ繝｢繝・Ν荳隕ｧ縺ｸ
      </Link>
    </div>
  </>);
}
