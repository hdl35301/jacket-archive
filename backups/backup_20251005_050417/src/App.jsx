import React from 'react';
import { Routes, Route } from "react-router-dom";
import TopPage from './pages/TopPage';
import BrandListPage from './pages/BrandListPage';
import BrandDetailPage from './pages/BrandDetailPage';
import MakerDetailPage from './pages/MakerDetailPage';
import ModelListPage from './pages/ModelListPage';
import ModelDetailPage from './pages/ModelDetailPage';
import PhotoListPage from './pages/PhotoListPage';
import PhotoDetailPage from './pages/PhotoDetailPage';

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/brands" element={<BrandListPage />} />
        <Route path="/brands/:brandId" element={<BrandDetailPage />} />
        <Route path="/makers/:makerId" element={<MakerDetailPage />} />
        <Route path="/models/:modelId" element={<ModelDetailPage />} />
        <Route path="/models" element={<ModelListPage />} />
        <Route path="/photos" element={<PhotoListPage />} />
        <Route path="/photos/:photoId" element={<PhotoDetailPage />} />
      </Routes>
    
  );
}
