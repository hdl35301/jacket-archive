// src/components/TagInput.jsx
import { useState } from "react";

export default function TagInput({ label, options, value, onChange }) {
  const [selectedTag, setSelectedTag] = useState("");

  const handleAddTag = () => {
    if (selectedTag && !value.includes(selectedTag)) {
      onChange([...value, selectedTag]);
    }
  };

  const handleRemoveTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <div className="flex gap-2">
        <select
          className="border rounded px-2 py-1 flex-1"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddTag}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          霑ｽ蜉
        </button>
      </div>

      {/* 繧ｿ繧ｰ陦ｨ遉ｺ */}
      <div className="mt-2 flex flex-wrap gap-2">
        {value.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {tag}
            <button
              onClick={() => handleRemoveTag(tag)}
              className="text-red-500 hover:text-red-700"
            >
              笨・
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
