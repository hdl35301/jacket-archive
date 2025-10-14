
import { useState } from "react";

export default function PhotoSlider({ photos }) {
  const [index, setIndex] = useState(0);

  if (!photos || photos.length === 0) return <p>蜀咏悄縺後≠繧翫∪縺帙ｓ</p>;

  const next = () => setIndex((index + 1) % photos.length);
  const prev = () => setIndex((index - 1 + photos.length) % photos.length);

  return (
    <div className="text-center">
      <img src={photos[index].url} alt={photos[index].caption} className="mx-auto max-h-96" />
      <p className="mt-2">{photos[index].caption}</p>
      <div className="mt-2 space-x-4">
        <button onClick={prev} className="bg-gray-500 text-white px-2 py-1 rounded">蜑・/button>
        <button onClick={next} className="bg-gray-500 text-white px-2 py-1 rounded">谺｡</button>
      </div>
    </div>
  );
}
