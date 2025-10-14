import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const isTop = location.pathname === "/";

  return (
    <div className="flex gap-2 mb-4">
      {!isTop && (
        <>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition"
            type="button"
          >
            謌ｻ繧・          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            type="button"
          >
            繝医ャ繝励・繝ｼ繧ｸ
          </button>
        </>
      )}
    </div>
  );
}
