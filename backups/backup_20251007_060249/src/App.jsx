import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import BrandListPage from "./pages/BrandListPage";
import BrandDetailPage from "./pages/BrandDetailPage";
import MakerListPage from "./pages/MakerListPage"; // 竊・蜀崎ｿｽ蜉
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
        <Route path="/brands" element={<BrandListPage />} />
        <Route path="/brands/:brandId" element={<BrandDetailPage />} />
        <Route path="/makers" element={<MakerListPage />} /> {/* 竊・蠕ｩ蜈・*/}
        <Route path="/makers/:makerId" element={<MakerDetailPage />} />
        <Route path="/models/:modelId" element={<ModelDetailPage />} />
        <Route path="/models/:modelId/photos" element={<PhotoListPage />} />
        <Route path="/photos/:photoId" element={<PhotoDetailPage />} />
      </Routes>
    </HashRouter>
  );
}
