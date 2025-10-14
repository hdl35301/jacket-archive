import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NavButton from "../components/NavButton";

export default function DummyPage({ name }) {
  return (
    <div className='p-4'>
      <NavButton />
      <h2 className="text-lg font-bold mb-2">{name} 繝壹・繧ｸ</h2>
      <p>繧ｳ繝ｳ繝・Φ繝・ｺ門ｙ荳ｭ...</p>
    </div>
  );
}
