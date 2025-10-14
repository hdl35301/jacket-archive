import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { periods } from "../data/periods";

export default function TopPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* ===== タイトル ===== */}
      <h1 className="text-2xl font-bold mb-4">Leather Archive</h1>

      {/* ===== ブロック1：フリーワード + タグ + ボタン ===== */}
      <section className="border my-6 flow-root p-4 mb-6">
        {/* フリーワード検索 */}
        <h2 className="text-lg font-semibold m-0">フリーワード検索</h2>
        <input
          type="text"
          placeholder="フリーワード検索"
          className="w-full border rounded p-2"
        />

        {/* タグ検索（見出しで間隔を確保） */}
        <h2 className="text-lg font-semibold m-0 mt-6">タグ検索</h2>
        <div className="flex items-center gap-2 flex-nowrap overflow-x-auto whitespace-nowrap p-1 text-sm">
          <select className="border rounded p-1 w-40">
            <option>ブランド</option>
          </select>
          <select className="border rounded p-1 w-40">
            <option>メーカー</option>
          </select>
          <select className="border rounded p-1 w-32">
            <option>年代</option>
          </select>
          <select className="border rounded p-1 w-32">
            <option>地域</option>
          </select>
          <select className="border rounded p-1 w-44">
            <option>スタイル</option>
          </select>
        </div>

        {/* 検索ボタン */}
        <button
          onClick={() => navigate("/search")}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6 block"
        >
          検索
        </button>
      </section>

      {/* ===== ブロック2：ブランド・メーカー一覧 ===== */}
      <section className="border my-6 flow-root p-4 mb-6">
        <div className="flex gap-4">
          <Link
            to="/brands"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            ブランド一覧
          </Link>
          <Link
            to="/makers"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            メーカー一覧
          </Link>
        </div>
      </section>

      {/* ===== ブロック3：最近追加されたモデル ===== */}
      <section className="border my-6 flow-root p-4 mb-6">
        <h2 className="text-lg font-semibold m-0">最近追加されたモデル</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Buco J-24 (1950s, Horsehide)</li>
          <li>Trojan 619 (1940s, Goatskin)</li>
          <li>Sears Hercules (1930s, Cowhide)</li>
        </ul>
      </section>
    </div>
  );
}
