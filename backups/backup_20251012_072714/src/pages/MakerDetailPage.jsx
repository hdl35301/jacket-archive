?// src/pages/MakerDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import { makers } from "../data/makers";

export default function MakerDetailPage() {
  const { makerId } = useParams();
  const maker = makers?.find((m) => String(m.id) === String(makerId));

  if (!maker) {
    return <div className="p-4">メーカーが見つかりません</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">{maker.name}</h1>
      <div>
        <Link className="underline" to={`/makers/${maker.id}/models`}>
          こ�EメーカーのモチE��一覧へ
        </Link>
      </div>
    </div>
  );
}
