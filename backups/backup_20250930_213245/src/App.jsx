import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import BrandListPage from './pages/BrandListPage';
import BrandDetailPage from './pages/BrandDetailPage';
import MakerSelectPage from './pages/MakerSelectPage';
import MakerDetailPage from './pages/MakerDetailPage';
import ModelSelectPage from './pages/ModelSelectPage';
import ModelListPage from './pages/ModelListPage';
import ModelDetailPage from './pages/ModelDetailPage';
import PhotoListPage from './pages/PhotoListPage';
import PhotoDetailPage from './pages/PhotoDetailPage';
import SearchResultPage from './pages/SearchResultPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />

      {/* Brands */}
      <Route path="/brands" element={<BrandListPage />} />
      <Route path="/brands/:brandId" element={<BrandDetailPage />} />
      <Route path="/brands/:brandId/models" element={<ModelListPage />} />

      {/* Makers */}
      <Route path="/makers" element={<MakerSelectPage />} />
      <Route path="/makers/:makerId" element={<MakerDetailPage />} />
      <Route path="/makers/:makerId/models" element={<ModelListPage />} />

      {/* Models & Photos */}
      <Route path="/models" element={<ModelListPage />} />
      <Route path="/models/:modelId" element={<ModelDetailPage />} />
      <Route path="/models/:modelId/photos" element={<PhotoListPage />} />

      <Route path="/photos/:photoId" element={<PhotoDetailPage />} />

      {/* Search */}
      <Route path="/search" element={<SearchResultPage />} />
    </Routes>
  );
}
