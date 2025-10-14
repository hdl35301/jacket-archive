import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getModelsByBrand, getModelsByMaker } from "../data/models";

export default function ModelListPage() {
  const navigate = useNavigate();
  const { brandId, makerId } = useParams();

  // ブランド／メーカーどちらモードか判定
  const isBrandMode = !!brandId;
  const models = isBrandMode
    ? getModelsByBrand(brandId)
    : getModelsByMaker(makerId);

  return (
    <div className="p-4">
      {/* ===== ナビゲーション ===== */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          戻る
        </button>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          トップページ
        </button>
      </div>

      {/* ===== ページタイトル ===== */}
      <h1 className="text-2xl font-bold mb-4">
        {isBrandMode ? "ブランドのモデル一覧" : "メーカーのモデル一覧"}
      </h1>

      {/* ===== モデル一覧 ===== */}
      {models && models.length > 0 ? (
        <ul className="space-y-2">
          {models.map((model) => (
            <li key={model.id} className="border p-2 rounded">
              <Link
                to={`/models/${model.id}`}
                className="text-blue-600 hover:underline"
              >
                {model.name}
              </Link>
              <div className="text-sm text-gray-600 mt-1">
                {model.period} / {model.style}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">該当するモデルが見つかりません。</p>
      )}
    </div>
  );
}
