// src/pages/PhotoDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavButton from "../components/NavButton";
import { photos } from "../data/photos";

export default function PhotoDetailPage() {
  const { photoId } = useParams();
  const p = (photos ?? []).find((x) => String(x.id) === String(photoId));

  if (!p) {
    return <div className="p-4">蜀咏悄縺瑚ｦ九▽縺九ｊ縺ｾ縺帙ｓ</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">蜀咏悄隧ｳ邏ｰ</h1>
      {p.src && <img alt="" className="max-w-full h-auto" src={p.src} />}
      {/* 霑ｽ蜉諠・ｱ縺後≠繧後・縺薙％縺ｫ */}
    </div>
  );
}
