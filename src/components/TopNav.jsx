?import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 justify-start p-2 border-b bg-gray-50">
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
      >
        ↁE戻めE      </button>
      <button
        onClick={() => navigate("/")}
        type="button"
        className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
      >
        トップ�Eージ
      </button>
    </div>
  );
}
