?import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NavButton from "../components/NavButton";

export default function DummyPage({ name }) {
  return (
    <div className='p-4'>
      <NavButton />
      <h2 className="text-lg font-bold mb-2">{name} ペ�Eジ</h2>
      <p>コンチE��チE��備中...</p>
    </div>
  );
}
