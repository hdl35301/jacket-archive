// src/components/PresetSelect.jsx
import { useState } from "react";

export default function PresetSelect({ label, options, value, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [presetOptions, setPresetOptions] = useState(options);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "__custom__") {
      onChange("__custom__"); // 譁ｰ隕丞・蜉帙Δ繝ｼ繝・
    } else {
      onChange(selectedValue);
    }
  };

  const handleCustomInput = () => {
    if (inputValue.trim() === "") return;

    const newOption = { id: Date.now(), name: inputValue };
    setPresetOptions([...presetOptions, newOption]);
    onChange(inputValue);
    setInputValue("");
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        className="border rounded px-2 py-1 w-full mb-2"
        value={value}
        onChange={handleSelectChange}
      >
        <option value="">驕ｸ謚槭＠縺ｦ縺上□縺輔＞</option>
        {presetOptions.map((opt) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
        <option value="__custom__">譁ｰ隕丞・蜉・..</option>
      </select>

      {/* 謇句・蜉帙ヵ繧｣繝ｼ繝ｫ繝・*/}
      {value === "__custom__" && (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="譁ｰ縺励＞蛟､繧貞・蜉・
            className="border rounded px-2 py-1 flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={handleCustomInput}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            霑ｽ蜉
          </button>
        </div>
      )}
    </div>
  );
}
