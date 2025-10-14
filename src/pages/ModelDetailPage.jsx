?// src/pages/ModelDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavButton from "../components/NavButton";
import { models } from "../data/models";

export default function ModelDetailPage() {
  const { modelId } = useParams();
  const model = (models ?? []).find((m) => String(m.id) === String(modelId));

  if (!model) {
    return <div className="p-4">モチE��が見つかりません</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">{model.name}</h1>
      {/* 忁E��に応じて詳細属性を並べめE*/}
      <div className="text-sm text-gray-700">
        <div>brandId: {model.brandId ?? "-"}</div>
        <div>makerId: {model.makerId ?? "-"}</div>
        {/* ほか�E属性があれ�E追�? */}
      </div>
    </div>
  );
}
