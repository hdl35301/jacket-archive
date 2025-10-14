import NavButton from "../components/NavButton";
import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getModels, getBrands, getMakers, saveModel } from "../utils/store";
import { presets } from "../data/presets";

export default function ModelDetailPage(
  return (<div className='p-2'><NavButton /></div>);) {
  const { modelId } = useParams();
  const models = getModels();
  const brands = getBrands();
  const makers = getMakers();

  const current = models.find(m => String(m.id) === String(modelId)) || null;

  // 邱ｨ髮・Δ繝ｼ繝峨→繝輔か繝ｼ繝迥ｶ諷・  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(() => current ? { ...current } : {
    id: null,
    name: "",
    brandId: "",
    makerId: "",
    year: "",
    country: "",
    period: "",
    style: "",
    tags: [],
    notes: "",
  });

  // 陦ｨ遉ｺ逕ｨ縺ｮ髢｢騾｣蜷咲ｧｰ
  const brandName = useMemo(() => {
    const b = brands.find(b => String(b.id) === String(form.brandId));
    return b ? b.name : "";
  }, [brands, form.brandId]);

  const makerName = useMemo(() => {
    const m = makers.find(m => String(m.id) === String(form.makerId));
    return m ? m.name : "";
  }, [makers, form.makerId]);

  // 螟画峩繝上Φ繝峨Λ
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onTagInput = (e) => {
    const raw = e.target.value || "";
    const arr = raw.split(",").map(s => s.trim()).filter(Boolean);
    setForm(prev => ({ ...prev, tags: arr }));
  };

  const onSave = () => {
    const payload = {
      ...form,
      id: current?.id || form.id || undefined,
      brandId: form.brandId ? (isNaN(Number(form.brandId)) ? form.brandId : Number(form.brandId)) : "",
      makerId: form.makerId ? (isNaN(Number(form.makerId)) ? form.makerId : Number(form.makerId)) : "",
    };
    const id = saveModel(payload);
    // 菫晏ｭ伜ｾ後∵怙譁ｰ縺ｮ迥ｶ諷九↓鄂ｮ縺肴鋤縺・    const updated = getModels().find(m => String(m.id) === String(id));
    setForm(updated ? { ...updated } : payload);
    setIsEditing(false);
  };

  const onCancel = () => {
    setForm(current ? { ...current } : form);
    setIsEditing(false);
  };

  if (!current && !isEditing) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">繝｢繝・Ν縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</h2>
        <p>URL繧偵＃遒ｺ隱阪￥縺縺輔＞縲・/p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {/* 陦ｨ遉ｺ繝｢繝ｼ繝・*/}
      {!isEditing && (
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{current?.name || "(蜷咲ｧｰ譛ｪ險ｭ螳・"}</h1>
          <div className="text-sm text-gray-600">
            <div>繝悶Λ繝ｳ繝・ {brandName || "(譛ｪ驕ｸ謚・"}</div>
            <div>繝｡繝ｼ繧ｫ繝ｼ: {makerName || "(譛ｪ驕ｸ謚・"}</div>
            <div>蟷ｴ莉｣: {current?.period || "(譛ｪ險ｭ螳・"} / 蝨ｰ蝓・ {current?.country || "(譛ｪ險ｭ螳・"} / 繧ｹ繧ｿ繧､繝ｫ: {current?.style || "(譛ｪ險ｭ螳・"}</div>
            <div>蟷ｴ蠑・ {current?.year || "(譛ｪ險ｭ螳・"}</div>
            <div>繧ｿ繧ｰ: {(current?.tags && current.tags.length) ? current.tags.join(", ") : "(縺ｪ縺・"}</div>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="mt-3 inline-flex items-center px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            邱ｨ髮・          </button>
        </div>
      )}

      {/* 邱ｨ髮・Δ繝ｼ繝・*/}
      {isEditing && (
        <div className="space-y-4 border rounded p-4">
          <div>
            <label className="block text-sm font-medium mb-1">繝｢繝・Ν蜷・/label>
            <input
              className="border rounded px-3 py-2 w-full"
              name="name"
              value={form.name || ""}
              onChange={onChange}
              placeholder="萓・ J-24, 618 縺ｪ縺ｩ"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">繝悶Λ繝ｳ繝・/label>
              <select
                name="brandId"
                value={form.brandId ?? ""}
                onChange={onChange}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {brands.map(b => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">繝｡繝ｼ繧ｫ繝ｼ</label>
              <select
                name="makerId"
                value={form.makerId ?? ""}
                onChange={onChange}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {makers.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">蟷ｴ莉｣</label>
              <select
                name="period"
                value={form.period ?? ""}
                onChange={onChange}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {presets.periods.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">蝨ｰ蝓・/label>
              <select
                name="country"
                value={form.country ?? ""}
                onChange={onChange}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {presets.countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">繧ｹ繧ｿ繧､繝ｫ</label>
              <select
                name="style"
                value={form.style ?? ""}
                onChange={onChange}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
                {presets.styles.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">蟷ｴ蠑・/label>
            <input
              className="border rounded px-3 py-2 w-40"
              name="year"
              value={form.year ?? ""}
              onChange={onChange}
              placeholder="萓・ 1950s"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">繧ｿ繧ｰ・医き繝ｳ繝槫玄蛻・ｊ・・/label>
            <input
              className="border rounded px-3 py-2 w-full"
              value={(form.tags || []).join(", ")}
              onChange={onTagInput}
              placeholder="萓・ horsehide, steerhide, J-24"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onSave}
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              菫晏ｭ・            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
            >
              繧ｭ繝｣繝ｳ繧ｻ繝ｫ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
