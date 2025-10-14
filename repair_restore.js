// repair_restore.js  �� CommonJS�Łipackage.json �� "type":"module" �s�v�j
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

const ROOT = process.cwd();
const exts = new Set(['.js', '.jsx', '.json', '.ts', '.tsx', '.css', '.md']);
const skip = [/\\node_modules(\\|$)/, /\\dist(\\|$)/, /\\.vite(\\|$)/, /\\backups?(\\|$)/, /\\\.git(\\|$)/];

function shouldSkip(p) { return skip.some(rx => rx.test(p)); }
function looksLikeMojibake(s) {
  // �T�^�I�ȕ��������w�W�iUTF-8��CP932����ߌn�j
  return /[���������]/.test(s);
}
function repairMojibake(s) {
  // �uCP932�ōăG���R�[�h �� UTF-8�ōăf�R�[�h�v�Ō������������݂�
  const buf = iconv.encode(s, 'cp932');
  try {
    return iconv.decode(buf, 'utf8');
  } catch {
    return s;
  }
}

let fixed = 0, skipped = 0, failed = 0;

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      if (shouldSkip(p)) continue;
      walk(p);
    } else {
      const ext = path.extname(name).toLowerCase();
      if (!exts.has(ext)) { skipped++; continue; }
      try {
        const raw = fs.readFileSync(p, 'utf8');
        if (!looksLikeMojibake(raw)) { skipped++; continue; }
        const repaired = repairMojibake(raw);

        // ���P�x�̊ȈՃX�R�A�F�w�W�����̏o�������������������ۑ�
        const score = (t) => (t.match(/[���������]/g) || []).length;
        if (score(repaired) < score(raw)) {
          fs.writeFileSync(p, repaired, { encoding: 'utf8' });
          console.log('? �C��:', p);
          fixed++;
        } else {
          // �댟�m�͏����߂��Ȃ�
          skipped++;
        }
      } catch (e) {
        failed++;
        console.error('? ���s:', p, e.message);
      }
    }
  }
}

console.log('? �������������imojibake��UTF-8�j�J�n...');
walk(ROOT);
console.log('===============================================');
console.log('? �C���t�@�C����:', fixed);
console.log('? ����̂݁i���ύX�j:', skipped);
console.log('? ���s�t�@�C����:', failed);
console.log('? ���ׂ�UTF-8�ŕۑ��ς݁i�ύX�������̂̂݁j�BVite���ċN�����Ċm�F���Ă��������B');
