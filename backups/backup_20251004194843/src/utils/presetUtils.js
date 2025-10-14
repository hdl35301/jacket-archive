// src/utils/presetUtils.js
// 繝励Μ繧ｻ繝・ヨ邂｡逅・Θ繝ｼ繝・ぅ繝ｪ繝・ぅ・・resets.js 蟒・ｭ｢蠕後・荳蜈・ｮ｡逅・ｼ・
const defaultPresets = {
  brand: ["荳肴・", "蜈･蜉帙☆繧・, "Buco", "Sears", "Trojan"],
  maker: ["荳肴・", "蜈･蜉帙☆繧・, "Leather Togs", "Perry Sportswear"],
  region: ["荳肴・", "蜈･蜉帙☆繧・, "USA", "Europe", "Japan"],
  style: ["荳肴・", "蜈･蜉帙☆繧・, "Double Rider", "Flight Jacket", "Sport Jacket"],
  era: ["荳肴・", "蜈･蜉帙☆繧・, "1930蟷ｴ莉｣", "1940蟷ｴ莉｣", "1950蟷ｴ莉｣蠕梧悄・・960蟷ｴ莉｣蛻晄悄"],
};

// 繝励Μ繧ｻ繝・ヨ繧貞叙蠕暦ｼ亥ｸｸ縺ｫ縲御ｸ肴・縲阪悟・蜉帙☆繧九阪ｒ蜈磯ｭ縺ｫ縺励∵ｮ九ｊ繧但BC鬆・た繝ｼ繝茨ｼ・export function getPresets(type) {
  if (!defaultPresets[type]) return ["荳肴・", "蜈･蜉帙☆繧・];
  const base = defaultPresets[type].slice(2).sort((a, b) => a.localeCompare(b, "ja"));
  return ["荳肴・", "蜈･蜉帙☆繧・, ...base];
}

// 譁ｰ隕丞・蜉帙ｒ繝励Μ繧ｻ繝・ヨ縺ｫ霑ｽ蜉・亥叉繧ｿ繧ｰ蛹悶＆繧後ｋ諠ｳ螳夲ｼ・export function addPreset(type, value) {
  if (!defaultPresets[type]) {
    defaultPresets[type] = ["荳肴・", "蜈･蜉帙☆繧・];
  }
  if (!defaultPresets[type].includes(value)) {
    defaultPresets[type].push(value);
  }
}

export default { getPresets, addPreset };
