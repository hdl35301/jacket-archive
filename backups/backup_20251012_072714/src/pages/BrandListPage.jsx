import React from "react";
import { Link } from "react-router-dom";
import { brands } from "../data/brands";
import NavButton from "../components/NavButton";

export default function BrandListPage() {
  return (
    <div className="p-4">
      {/* 戻る・トップボタン */}
      <NavButton />

      <h1 className="text-xl font-bold mb-4">ブランド一覧</h1>

      {brands && brands.length > 0 ? (
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand.id} className="border-b pb-2">
              {/* ブランド名をクリックで詳細へ遷移 */}
              <Link
                to={`/brands/${brand.id}`}
                className="text-blue-600 hover:underline"
              >
                {brand.name}
              </Link>

              {/* ブランド説明（存在する場合のみ） */}
              {brand.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {brand.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>ブランド情報が登録されていません。</p>
      )}
    </div>
  );
}
