?// src/pages/PhotoDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import NavButton from "../components/NavButton";
import { photos } from "../data/photos";

export default function PhotoDetailPage() {
  const { photoId } = useParams();
  const p = (photos ?? []).find((x) => String(x.id) === String(photoId));

  if (!p) {
    return <div className="p-4">写真が見つかりません</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <NavButton />
      <h1 className="text-xl">写真詳細</h1>
      {p.src && <img alt="" className="max-w-full h-auto" src={p.src} />}
      {/* 追�?惁E?�があれ�Eここに */}
    </div>
  );
}
