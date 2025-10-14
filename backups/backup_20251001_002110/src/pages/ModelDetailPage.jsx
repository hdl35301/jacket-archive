import TopNav from "../components/TopNav";
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getModels, getBrands, getMakers, saveModel } from '../utils/store';
import TagInput from '../components/TagInput';
import PresetSelect from '../components/PresetSelect';

export default function ModelDetailPage() {
  const { modelId } = useParams();
  const navigate = useNavigate();

  const brands = getBrands();
  const makers = getMakers();
  const all = getModels();
  const current = all.find(m => String(m.id) === String(modelId)) || { name:'', brandId:'', makerId:'', period:'', country:'', style:'', tags:[] };

  const [edit, setEdit] = React.useState(false);
  const [form, setForm] = React.useState(current);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onTags = (tags) => setForm(prev => ({ ...prev, tags }));

  const onSave = () => {
    const id = saveModel({ ...form, id: current.id });
    setEdit(false);
    navigate(`/models/${id}`);
  };
  const onCancel = () => { setForm(current); setEdit(false); };

  return (<>
    <TopNav />
    <div className="p-4 space-y-4">
      

      {!edit ? (
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{current.name || '(辟｡蜷阪Δ繝・Ν)'}</h2>
          <div>繝悶Λ繝ｳ繝・ {brands.find(b => b.id === current.brandId)?.name || '-'}</div>
          <div>繝｡繝ｼ繧ｫ繝ｼ: {makers.find(m => m.id === current.makerId)?.name || '-'}</div>
          <div>蟷ｴ莉｣: {current.period || '-'}</div>
          <div>蝨ｰ蝓・ {current.country || '-'}</div>
          <div>繧ｹ繧ｿ繧､繝ｫ: {current.style || '-'}</div>
          <div>繧ｿ繧ｰ: {(current.tags || []).join(', ') || '-'}</div>

          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={() => setEdit(true)}>邱ｨ髮・/button>
            <Link className="px-3 py-1 rounded bg-gray-200" to={`/models/${current.id}/photos`}>蜀咏悄荳隕ｧ縺ｸ</Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1">繝｢繝・Ν蜷・/label>
            <input name="name" value={form.name} onChange={onChange} className="border rounded px-2 py-1 w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">繝悶Λ繝ｳ繝・/label>
              <select name="brandId" value={form.brandId || ''} onChange={onChange} className="border rounded px-2 py-1 w-full">
                <option value="">譛ｪ驕ｸ謚・/option>
                {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">繝｡繝ｼ繧ｫ繝ｼ</label>
              <select name="makerId" value={form.makerId || ''} onChange={onChange} className="border rounded px-2 py-1 w-full">
                <option value="">譛ｪ驕ｸ謚・/option>
                {makers.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <PresetSelect label="蟷ｴ莉｣"   name="period"  value={form.period || ''}  onChange={onChange} type="periods" />
            <PresetSelect label="蝨ｰ蝓・   name="country" value={form.country || ''} onChange={onChange} type="countries" />
            <PresetSelect label="繧ｹ繧ｿ繧､繝ｫ" name="style"   value={form.style || ''}   onChange={onChange} type="styles" />
          </div>

          <div>
            <label className="block text-sm mb-1">繧ｿ繧ｰ</label>
            <TagInput value={form.tags || []} onChange={onTags} placeholder="繧ｿ繧ｰ繧貞・蜉帙＠縺ｦEnter" />
          </div>

          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={onSave}>菫晏ｭ・/button>
            <button className="px-3 py-1 rounded bg-gray-300" onClick={onCancel}>繧ｭ繝｣繝ｳ繧ｻ繝ｫ</button>
          </div>
        </div>
      )}
    </div>
  </>);
}
