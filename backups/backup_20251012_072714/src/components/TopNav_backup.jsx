?import React from "react";
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
          ↁE戻めE        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
        >
          トップ�Eージ
        </button>
      </div>
    </div>
  );
}
