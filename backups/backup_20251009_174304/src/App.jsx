// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import TopPage from "./pages/TopPage";
import BrandListPage from "./pages/BrandListPage";
import BrandDetailPage from "./pages/BrandDetailPage";
import MakerListPage from "./pages/MakerListPage";
import MakerDetailPage from "./pages/MakerDetailPage";
import ModelListPage from "./pages/ModelListPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import PhotoListPage from "./pages/PhotoListPage";
import PhotoDetailPage from "./pages/PhotoDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />

      {/* 繝悶Λ繝ｳ繝・*/}
      <Route path="/brands" element={<BrandListPage />} />
      <Route path="/brands/:brandId" element={<BrandDetailPage />} />
      <Route path="/brands/:brandId/models" element={<ModelListPage />} />

      {/* 繝｡繝ｼ繧ｫ繝ｼ */}
      <Route path="/makers" element={<MakerListPage />} />
      <Route path="/makers/:makerId" element={<MakerDetailPage />} />
      <Route path="/makers/:makerId/models" element={<ModelListPage />} />

      {/* 繝｢繝・Ν */}
      <Route path="/models/:modelId" element={<ModelDetailPage />} />

      {/* 蜀咏悄 */}
      <Route path="/photos" element={<PhotoListPage />} />
      <Route path="/photos/:photoId" element={<PhotoDetailPage />} />

      {/* Fallback・医≠繧後・・・*/}
      {/* <Route path="*" element={<div className="p-4">Not Found</div>} /> */}
    </Routes>
  );
}
