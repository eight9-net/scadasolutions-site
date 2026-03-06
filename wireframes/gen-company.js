// Generator: company.excalidraw
// Covers: Company page (Company Profile, Partners/Affiliations, Privacy)
// Style matches home.excalidraw

const elements = [];
let sc = 100;
const W = 1440;
const P = 16;

// ── Style constants (matching home wireframe) ─────────────────────────────────
const TX     = '#1f2937';
const TXL    = '#ffffff';
const TXM    = '#6b7280';
const STK    = '#9ca3af';
const STKD   = '#6b7280';
const BG_W   = '#ffffff';
const BG_L   = '#f8f9fa';
const BG_DK  = '#374151';
const BG_PH  = '#dedede';
const BG_BTN = '#e5e7eb';

function mk() { return sc++; }

function rect(id, x, y, w, h, opts = {}) {
  const { bg = 'transparent', stroke = STK, sw = 1, round = false } = opts;
  elements.push({
    id, type: 'rectangle', x, y, width: w, height: h, angle: 0,
    strokeColor: stroke, backgroundColor: bg, fillStyle: 'solid',
    strokeWidth: sw, strokeStyle: 'solid', roughness: 0, opacity: 100,
    groupIds: [], frameId: null,
    roundness: round ? { type: 3 } : null,
    seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
    boundElements: null, updated: 1708800000000, link: null, locked: false,
  });
}

function txt(id, x, y, w, content, opts = {}) {
  const { size = 14, color = TX, align = 'left' } = opts;
  const lines = content.split('\n').length;
  const h = Math.ceil(size * 1.4 * lines) + 6;
  elements.push({
    id, type: 'text', x, y, width: w, height: h, angle: 0,
    strokeColor: color, backgroundColor: 'transparent', fillStyle: 'solid',
    strokeWidth: 1, strokeStyle: 'solid', roughness: 0, opacity: 100,
    groupIds: [], frameId: null, roundness: null,
    seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
    boundElements: null, updated: 1708800000000, link: null, locked: false,
    text: content, fontSize: size, fontFamily: 2,
    textAlign: align, verticalAlign: 'top',
    containerId: null, originalText: content, lineHeight: 1.4,
  });
}

function sectionBar(id, x, y, w, label, barBg, labelColor) {
  rect(id + '_bar', x, y, w, 26, { bg: barBg || '#e9ecef', stroke: STKD });
  txt(id + '_bar_t', x + 8, y + 5, w - 16, label, { size: 11, color: labelColor || TXM });
}

function imgPlaceholder(id, x, y, w, h, filename) {
  rect(id + '_box', x, y, w, h, { bg: BG_PH, stroke: STK });
  txt(id + '_lbl', x + 8, y + h / 2 - 10, w - 16, '[' + filename + ']', { size: 12, color: TXM, align: 'center' });
}

function btn(id, x, y, label, opts = {}) {
  const bw = opts.w || 160;
  const bg  = opts.bg  || BG_BTN;
  const stk = opts.stroke || STK;
  const col = opts.color || TX;
  rect(id + '_bg', x, y, bw, 36, { bg, stroke: stk, round: true });
  txt(id + '_lbl', x + 10, y + 9, bw - 20, label, { size: 13, color: col, align: 'center' });
}

let y = 0;

// ─── HEADER ───────────────────────────────────────────────────────────────────
rect('header', 0, y, W, 80, { bg: BG_W, stroke: STKD, sw: 2 });
rect('hdr_logo', 0, y, 300, 80, { bg: '#f1f3f5', stroke: STK });
txt('hdr_logo_t', P, y + 30, 268, '[scada-solutions-logo.png]', { size: 12, color: TXM });
txt('hdr_nav', 310, y + 30, 820,
  'Home ▾  |  Services ▾  |  Products ▾  |  Company ▾  |  Wind Power ▾  |  Careers ▾',
  { size: 13, color: TX, align: 'center' });
rect('hdr_cta', 1140, y + 14, 280, 52, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('hdr_cta_t', 1150, y + 30, 260, '[ Contact Us ]', { size: 13, color: TXL, align: 'center' });
y += 80;

// ─── PAGE HERO ────────────────────────────────────────────────────────────────
rect('hero', 0, y, W, 280, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('hero_title', 80, y + 90, W - 160, 'ABOUT OUR COMPANY', { size: 32, color: TXL, align: 'center' });
txt('hero_sub', 120, y + 140, W - 240, 'Control Systems Integration Services in Irvine', { size: 18, color: TXL, align: 'center' });
btn('hero_btn', W / 2 - 80, y + 210, 'Contact Us', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
y += 280;

// ─── COMPANY PROFILE (image left / text right) ────────────────────────────────
const cpH = 560;
rect('cp', 0, y, W, cpH + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('cp', 0, y, W, 'COMPANY PROFILE  —  image left / text right', '#dcfce7', TXM);
const cpY = y + 26;
imgPlaceholder('cp_img', 0, cpY, W / 2, cpH, 'turbines-clouds.webp');
rect('cp_text', W / 2, cpY, W / 2, cpH, { bg: BG_W, stroke: STK });
txt('cp_h2', W / 2 + P, cpY + 20, W / 2 - P * 2, 'Company Profile', { size: 22, color: TX });
txt('cp_b1', W / 2 + P, cpY + 60, W / 2 - P * 2,
  'SCADA Solutions specializes in restoring infrastructure integrity through the integration of\ncommunications and SCADA systems. We provide complete design, engineering, installation,\nand service of communications and SCADA systems, fiber optics, and cable assemblies, and\nwe offer the latest technologies in smart packet radios. The results are a completely\nintegrated control design essential to the utilization and maintenance of critical\nrenewable energy assets.', { size: 13, color: TX });
txt('cp_b2', W / 2 + P, cpY + 182, W / 2 - P * 2,
  'Our expertise in system design engineering of complete SCADA solutions, coupled with our\nexperienced and professional installation knowledge, allows for seamless delivery and\nimplementation with minimal operational interruption. Our superior communication,\nautomation, and integration capabilities and ability to serve all brands of turbines,\nboth old and new, set us apart from other third-party SCADA providers.', { size: 13, color: TX });
txt('cp_b3', W / 2 + P, cpY + 308, W / 2 - P * 2,
  "Optimal production goals place increased demand on accurate fault detection, consistent\ndata collection and trending, secure remote access, and other industry challenges.\nSSI's wide array of scalable and automated solutions builds reliability and accuracy\ninto your new or existing cyber infrastructure.", { size: 13, color: TX });
txt('cp_b4', W / 2 + P, cpY + 420, W / 2 - P * 2,
  'The explosive growth in wind energy validates the ongoing wide-scale adoption of this\nlegitimate alternative to traditional energy sources. Let SCADA Solutions provide the answers.', { size: 13, color: TX });
btn('cp_btn', W / 2 + P, cpY + 498, 'Get in Touch', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
y += 26 + cpH;

// ─── PARTNERS / AFFILIATIONS (full-width with dark bg) ───────────────────────
const paH = 400;
rect('pa', 0, y, W, paH + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('pa', 0, y, W, 'PARTNERS / AFFILIATIONS  —  full-width dark section', '#ede9fe', TXM);
const paY = y + 26;
rect('pa_bg', 0, paY, W, paH, { bg: BG_DK, stroke: STK });
txt('pa_fn', 0, paY + 8, W, '[bg: turbines-sunset.webp]', { size: 11, color: TXM, align: 'center' });
txt('pa_title', 80, paY + 32, W - 160, 'Partners / Affiliations', { size: 22, color: TXL, align: 'center' });
// 2×2 logo grid
const logoW = (W - 240) / 2;
const logoH = 140;
[
  ['awea.webp', 'American Wind Energy Association', 0, 0],
  ['opto22.svg', 'OPTO 22', 1, 0],
  ['landisgyr.webp', 'Landis + Gyr', 0, 1],
  ['dwpa.webp', 'Danish Wind Power Academy', 1, 1],
].forEach(([img, alt, col, row]) => {
  const lx = 120 + col * (logoW + 20);
  const ly = paY + 80 + row * (logoH + 20);
  rect('pa_logo_' + col + row, lx, ly, logoW, logoH, { bg: BG_L, stroke: STK, round: true });
  txt('pa_logo_t_' + col + row, lx + 10, ly + 50, logoW - 20, '[' + img + ']\n' + alt, { size: 12, color: TXM, align: 'center' });
});
y += 26 + paH;

// ─── PRIVACY (text left / image right) ───────────────────────────────────────
const privH = 380;
rect('priv', 0, y, W, privH + 26, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('priv', 0, y, W, 'PRIVACY  —  text left / image right', '#dbeafe', TXM);
const privY = y + 26;
rect('priv_text', 0, privY, W / 2, privH, { bg: BG_L, stroke: STK });
txt('priv_h2', P, privY + 20, W / 2 - P * 2, 'Privacy', { size: 22, color: TX });
txt('priv_b1', P, privY + 60, W / 2 - P * 2,
  'Copyright Information and Privacy Policy: This website and all its contents are copyright\nSCADA Solutions, Inc. If you believe there are errors or wish to submit general inquiries\nabout the site, please contact us.', { size: 13, color: TX });
txt('priv_b2', P, privY + 152, W / 2 - P * 2,
  'SCADA Solutions, Inc. is not responsible for content on pages linked to outside our network.\nWe take every precaution to protect your privacy. If you have concerns, questions, or\ncomments about your privacy in your dealings with SCADA Solutions, Inc., please contact us.', { size: 13, color: TX });
btn('priv_btn', P, privY + 288, 'Contact Us', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
imgPlaceholder('priv_img', W / 2, privY, W / 2, privH, 'privacy-policy.jpg');
y += 26 + privH;

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const THIRD = Math.floor(W / 3);
rect('footer', 0, y, W, 260, { bg: BG_W, stroke: STKD, sw: 2 });
rect('ftr_bar', 0, y, W, 50, { bg: '#60a5fa', stroke: '#3b82f6' });
txt('ftr_bar_t', 220, y + 14, 1000, 'Control Systems Integration', { size: 16, color: TXL, align: 'center' });
rect('ftr_c1', 0, y + 50, THIRD, 210, { bg: BG_W, stroke: STK });
txt('ftr_c1_t', P, y + 66, THIRD - P * 2,
  'SCADA Solutions, Inc.\n© 2024 All Rights Reserved\n\nCA License #777306', { size: 12, color: TXM });
rect('ftr_c2', THIRD, y + 50, THIRD, 210, { bg: BG_W, stroke: STK });
txt('ftr_c2_t', THIRD + P, y + 66, THIRD - P * 2,
  'Home  |  Services  |  Products\nCompany  |  Wind Power  |  Careers\n\nLinkedIn', { size: 12, color: TXM, align: 'center' });
rect('ftr_c3', THIRD * 2, y + 50, THIRD, 210, { bg: BG_W, stroke: STK });
txt('ftr_c3_t', THIRD * 2 + P, y + 66, THIRD - P * 2,
  '949-509-9605\ninfo@scadasolutions.com\n6789 Quail Hill Pkwy, Suite #405\nIrvine, CA 92603', { size: 12, color: TXM, align: 'right' });
y += 260;

// ─── OUTPUT ───────────────────────────────────────────────────────────────────
const out = {
  type: 'excalidraw', version: 2,
  source: 'https://excalidraw.com',
  elements,
  appState: { gridSize: null, viewBackgroundColor: '#ffffff' },
  files: {},
};
process.stdout.write(JSON.stringify(out, null, 2));
