// src/pages/ModelDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavButton from "../components/NavButton";
import { models } from "../data/models";

export default function ModelDetailPage() {
  const { modelId } = useParams();
  const model = (models ?? []).find((m) => String(m.id) === String(modelId));

  if (!model) {
    return <div className="p-4">繝｢繝・Ν縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">{model.name}</h1>
      {/* 蠢・ｦ√↓蠢懊§縺ｦ隧ｳ邏ｰ螻樊ｧ繧剃ｸｦ縺ｹ繧・*/}
      <div className="text-sm text-gray-700">
        <div>brandId: {model.brandId ?? "-"}</div>
        <div>makerId: {model.makerId ?? "-"}</div>
        {/* 縺ｻ縺九・螻樊ｧ縺後≠繧後・霑ｽ蜉 */}
      </div>
    </div>
  );
}
