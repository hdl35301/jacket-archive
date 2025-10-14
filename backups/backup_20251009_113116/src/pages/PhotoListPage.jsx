// src/pages/PhotoListPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { photos } from "../data/photos";

export default function PhotoListPage() {
  const list = photos ?? [];

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl mb-2">蜀咏悄荳隕ｧ</h1>

      {list.length === 0 ? (
        <div className="text-sm text-gray-600">蜀咏悄縺後≠繧翫∪縺帙ｓ</div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {list.map((p) => (
            <li key={p.id} className="border p-2">
              <Link className="underline block mb-1" to={`/photos/${p.id}`}>
                隧ｳ邏ｰ繧定ｦ九ｋ
              </Link>
              {p.thumbnail && (
                <img
                  alt=""
                  className="w-full h-auto"
                  src={p.thumbnail /* 萓・ /images/... */}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
