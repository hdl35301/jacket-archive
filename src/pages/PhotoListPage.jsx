?// src/pages/PhotoListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { photos } from "../data/photos";

export default function PhotoListPage() {
  const list = photos ?? [];

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl mb-2">写真一覧</h1>

      {list.length === 0 ? (
        <div className="text-sm text-gray-600">写真がありません</div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {list.map((p) => (
            <li key={p.id} className="border p-2">
              <Link className="underline block mb-1" to={`/photos/${p.id}`}>
                詳細を見る
              </Link>
              {p.thumbnail && (
                <img
                  alt=""
                  className="w-full h-auto"
                  src={p.thumbnail /* 侁E /images/... */}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
