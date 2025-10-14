// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />

        {/* 繝悶Λ繝ｳ繝蛾未騾｣ */}
        <Route path="/brands" element={<BrandListPage />} />
        <Route path="/brands/:brandId" element={<BrandDetailPage />} />
        <Route path="/brands/:brandId/models" element={<ModelListPage />} />

        {/* 繝｡繝ｼ繧ｫ繝ｼ髢｢騾｣ */}
        <Route path="/makers" element={<MakerListPage />} />
        <Route path="/makers/:makerId" element={<MakerDetailPage />} />
        <Route path="/makers/:makerId/models" element={<ModelListPage />} />

        {/* 繝｢繝・Ν繝ｻ蜀咏悄 */}
        <Route path="/models/:modelId" element={<ModelDetailPage />} />
        <Route path="/models/:modelId/photos" element={<PhotoListPage />} />
        <Route path="/photos/:photoId" element={<PhotoDetailPage />} />
      </Routes>
    </HashRouter>
  );
}
