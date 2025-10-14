// src/pages/TopPage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// 可変データ（ユーザーが増減するデータ）
import { brands } from "../data/brands";
import { makers } from "../data/makers";
import { periods } from "../data/periods";
import { styles } from "../data/styles";

// 固定プリセット（不明 / 入力する 等）
import { UI_PRESET_UNKNOWN, UI_PRESET_INPUT } from "../data/presets";

export default function TopPage() {
  const navigate = useNavigate();

  // 並び順：検索UIでは「未指定」→ 可変データ(五十音/ABC) → 「不明」※「入力する」は除外
  const buildSearchOptions = (list, keyPrefix) => {
    const asArray = Array.isArray(list) ? list : [];
    const normalized = asArray
      .map((x) => {
        if (!x) return null;
        const id =
          x.id ??
          x.value ??
          x.code ??
          (x.start && x.end ? `${x.start}-${x.end}` : undefined) ??
          x.name ??
          x.label;
        const name = x.name ?? x.label ?? String(id ?? "");
        if (!id || !name) return null;
        return { id: String(id), name: String(name) };
      })
      // 「入力する」は検索UIから除外
      .filter(
        (o) =>
          o &&
          o.name !== UI_PRESET_INPUT.name &&
          o.id !== UI_PRESET_INPUT.id
      )
      .sort((a, b) => a.name.localeCompare(b.name, "ja"));

    const withSentinels = [
      { id: "", name: "未指定", _k: `${keyPrefix}-none` },
      ...normalized.map((o) => ({ ...o, _k: `${keyPrefix}-${o.id}` })),
      { id: UI_PRESET_UNKNOWN.id, name: UI_PRESET_UNKNOWN.name, _k: `${keyPrefix}-${UI_PRESET_UNKNOWN.id}` },
    ];
    return withSentinels;
  };

  const brandOptions = useMemo(
    () => buildSearchOptions(brands, "brand"),
    []
  );
  const makerOptions = useMemo(
    () => buildSearchOptions(makers, "maker"),
    []
  );
  const periodOptions = useMemo(
    () => buildSearchOptions(periods, "period"),
    []
  );
  const styleOptions = useMemo(
    () => buildSearchOptions(styles, "style"),
    []
  );

  // 検索状態
  const [keyword, setKeyword] = useState("");
  const [brandId, setBrandId] = useState("");
  const [makerId, setMakerId] = useState("");
  const [periodStartId, setPeriodStartId] = useState("");
  const [periodEndId, setPeriodEndId] = useState("");
  const [styleId, setStyleId] = useState("");

  // 既存運用を壊さないため、検索ボタンの遷移ロジックは変更しません（ここではダミー遷移に留めます）
  const onSearch = () => {
    // キーワード空や未指定は無視してクエリ化（今は遷移先を固定しない）
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (brandId) params.set("brand", brandId);
    if (makerId) params.set("maker", makerId);
    if (periodStartId) params.set("ps", periodStartId);
    if (periodEndId) params.set("pe", periodEndId);
    if (styleId) params.set("style", styleId);

    // 既存ルーティングに影響しないプレースホルダ遷移（必要に応じて実際の検索ページへ差し替えてください）
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* タイトルなど既存レイアウトは触らない方針。見出し復活と「不明」追加のみ対応 */}

      {/* フリーワード */}
      <div className="mb-4">
        <label className="block text-sm mb-1">フリーワード</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="例）モデル名・型番・キーワード"
        />
      </div>

      {/* タグ検索ブロック：見出し復活、横並び、検索ボタンはこの下に1つ */}
      <div className="border p-4 mb-6">
        <h2 className="text-base font-semibold mb-3">タグ検索</h2>

        <div className="flex flex-wrap items-end gap-3">
          {/* ブランド */}
          <div className="min-w-[180px]">
            <div className="text-sm mb-1">ブランド</div>
            <select
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              className="w-48 border px-2 py-1 rounded"
            >
              {brandOptions.map((o) => (
                <option key={o._k} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          {/* メーカー */}
          <div className="min-w-[180px]">
            <div className="text-sm mb-1">メーカー</div>
            <select
              value={makerId}
              onChange={(e) => setMakerId(e.target.value)}
              className="w-48 border px-2 py-1 rounded"
            >
              {makerOptions.map((o) => (
                <option key={o._k} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          {/* 年代（開始） */}
          <div className="min-w-[220px]">
            <div className="text-sm mb-1">年代（開始）</div>
            <select
              value={periodStartId}
              onChange={(e) => setPeriodStartId(e.target.value)}
              className="w-56 border px-2 py-1 rounded"
            >
              {periodOptions.map((o) => (
                <option key={o._k} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          {/* 年代（終了） */}
          <div className="min-w-[220px]">
            <div className="text-sm mb-1">年代（終了）</div>
            <select
              value={periodEndId}
              onChange={(e) => setPeriodEndId(e.target.value)}
              className="w-56 border px-2 py-1 rounded"
            >
              {periodOptions.map((o) => (
                <option key={o._k} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>

          {/* スタイル */}
          <div className="min-w-[180px]">
            <div className="text-sm mb-1">スタイル</div>
            <select
              value={styleId}
              onChange={(e) => setStyleId(e.target.value)}
              className="w-48 border px-2 py-1 rounded"
            >
              {styleOptions.map((o) => (
                <option key={o._k} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 検索ボタンはタグ検索ブロックの下に一つだけ */}
        <div className="mt-4">
          <button
            onClick={onSearch}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            検索する
          </button>
        </div>
      </div>

      {/* 既存の「最近追加されたモデル」等は“触らない”方針（壊さないため） */}
    </div>
  );
}
