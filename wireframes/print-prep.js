// print-prep.js
// Strips all section/area background fills from Excalidraw wireframes.
// Keeps: #dedede (image placeholders), #4466cc (buttons)
// Converts white (#ffffff) text → dark (#1f2937) except on blue buttons.

const fs = require('fs');

const files = [
  'home.excalidraw',
  'services.excalidraw',
  'navigation.excalidraw',
  'company.excalidraw',
  'products.excalidraw',
  'wind-power.excalidraw',
  'careers.excalidraw',
];

const KEEP_BG   = new Set(['#dedede', '#4466cc']);
const WHITE     = '#ffffff';
const DARK      = '#1f2937';

// Is the center of textEl inside rect r?
function inside(textEl, r) {
  const cx = textEl.x + textEl.width  / 2;
  const cy = textEl.y + textEl.height / 2;
  return cx >= r.x && cx <= r.x + r.width &&
         cy >= r.y && cy <= r.y + r.height;
}

files.forEach(file => {
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));

  // Blue button rects — white text on these is preserved
  const blueRects = d.elements.filter(e =>
    e.type === 'rectangle' && (e.backgroundColor || '').toLowerCase() === '#4466cc'
  );

  let bgRemoved = 0, textFixed = 0;

  d.elements = d.elements.map(el => {
    // ── Rectangles: strip fill unless it's in KEEP_BG ───────────────────────
    if (el.type === 'rectangle') {
      const bg = (el.backgroundColor || '').toLowerCase();
      if (bg && bg !== 'transparent' && !KEEP_BG.has(bg)) {
        bgRemoved++;
        return { ...el, backgroundColor: 'transparent' };
      }
    }

    // ── Text: white → dark unless sitting on a blue button ──────────────────
    if (el.type === 'text') {
      const col = (el.strokeColor || '').toLowerCase();
      if (col === WHITE && !blueRects.some(r => inside(el, r))) {
        textFixed++;
        return { ...el, strokeColor: DARK };
      }
    }

    return el;
  });

  fs.writeFileSync(file, JSON.stringify(d, null, 2));
  console.log(`${file.padEnd(40)} bg removed: ${String(bgRemoved).padStart(3)}   text darkened: ${String(textFixed).padStart(3)}`);
});
