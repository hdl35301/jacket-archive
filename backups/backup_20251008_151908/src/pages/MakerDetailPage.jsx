// src/pages/MakerDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { makers } from "../data/makers";

export default function MakerDetailPage() {
  const { makerId } = useParams();
  const maker = makers?.find((m) => String(m.id) === String(makerId));

  if (!maker) {
    return <div className="p-4">繝｡繝ｼ繧ｫ繝ｼ縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">{maker.name}</h1>
      <div>
        <Link className="underline" to={`/makers/${maker.id}/models`}>
          縺薙・繝｡繝ｼ繧ｫ繝ｼ縺ｮ繝｢繝・Ν荳隕ｧ縺ｸ
        </Link>
      </div>
    </div>
  );
}
