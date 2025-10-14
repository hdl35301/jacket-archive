import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 justify-start">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
        >
          竊・謌ｻ繧・        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
        >
          繝医ャ繝励・繝ｼ繧ｸ
        </button>
      </div>
    </div>
  );
}
