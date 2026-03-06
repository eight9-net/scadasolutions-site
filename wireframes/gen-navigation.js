// Generator: navigation.excalidraw
// Shows the full nav structure: 6 top-level items with all subnav links
// Style matches home.excalidraw

const elements = [];
let sc = 100;
const W = 1440;
const P = 16;

// ── Style constants (matching home wireframe) ─────────────────────────────────
const TX     = '#1f2937';   // main body text
const TXL    = '#ffffff';   // light text on dark bg
const TXM    = '#6b7280';   // medium / label text
const STK    = '#9ca3af';   // light stroke (sub-elements, sw:1)
const STKD   = '#6b7280';   // dark stroke (containers, sw:2)
const BG_W   = '#ffffff';
const BG_L   = '#f8f9fa';
const BG_DK  = '#374151';   // dark bg
const BG_BTN = '#e5e7eb';   // button bg

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

let y = 0;

// ─── TITLE BLOCK ──────────────────────────────────────────────────────────────
rect('title', 0, y, W, 70, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('title_t', 0, y + 22, W, 'SCADA Solutions — Navigation Structure', { size: 26, color: TXL, align: 'center' });
y += 70;

// ─── HEADER MOCKUP ────────────────────────────────────────────────────────────
rect('header', 0, y, W, 80, { bg: BG_W, stroke: STKD, sw: 2 });
rect('hdr_logo', 0, y, 300, 80, { bg: '#f1f3f5', stroke: STK });
txt('hdr_logo_t', P, y + 30, 268, '[scada-solutions-logo.png]', { size: 12, color: TXM });
txt('hdr_nav', 310, y + 30, 820,
  'Home ▾  |  Services ▾  |  Products ▾  |  Company ▾  |  Wind Power ▾  |  Careers ▾',
  { size: 13, color: TX, align: 'center' });
rect('hdr_cta', 1140, y + 14, 280, 52, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('hdr_cta_t', 1150, y + 30, 260, '[ Contact Us ]', { size: 13, color: TXL, align: 'center' });
y += 80;

// Gap + section bar
y += 20;
rect('diag_section', 0, y, W, 600, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('diag', 0, y, W, 'NAVIGATION DIAGRAM  —  6 top-level nav items with all dropdown links', '#e9ecef', TXM);
y += 26;

// ─── NAVIGATION DIAGRAM ───────────────────────────────────────────────────────
const navData = [
  {
    title: 'Home',
    headerBg: '#1d4ed8',
    dropBg:   '#dbeafe',
    items: [
      { label: 'Explanation',     route: '/#Explanation' },
      { label: 'Product Overview', route: '/#ProductOverview' },
      { label: 'FAQs',            route: '/#FAQs' },
      { label: 'Contact Us',      route: '/#ContactUs' },
    ],
  },
  {
    title: 'Services',
    headerBg: '#15803d',
    dropBg:   '#dcfce7',
    items: [
      { label: 'Design and Engineering', route: '/#DesignAndEngineering' },
      { label: 'Service and Support',    route: '/#ServiceAndSupport' },
      { label: 'Integration',            route: '/#Integration' },
      { label: 'Installation',           route: '/#Installation' },
      { label: 'Solar Services',         route: '/#SolarServices' },
      { label: 'Wind Services',          route: '/#WindServices' },
    ],
  },
  {
    title: 'Products',
    headerBg: '#6d28d9',
    dropBg:   '#ede9fe',
    items: [
      { label: 'SCADA',                  route: '/scada' },
      { label: 'Communications',         route: '/communications' },
      { label: 'Scope of Work Process',  route: '/scopeofworkprocess' },
      { label: 'Request a Quote',        route: '/requestaquote' },
    ],
  },
  {
    title: 'Company',
    headerBg: '#b45309',
    dropBg:   '#fef3c7',
    items: [
      { label: 'Company Profile',          route: '/company' },
      { label: 'Partners and Affiliations', route: '/company#Partners' },
      { label: 'Privacy',                  route: '/company#Privacy' },
    ],
  },
  {
    title: 'Wind Power',
    headerBg: '#047857',
    dropBg:   '#d1fae5',
    items: [
      { label: 'Wind Energy Tutorial', route: '/windenergytutorial' },
      { label: 'Wind Facts',           route: '/windenergytutorial#Facts' },
      { label: 'Glossary',             route: '/windenergytutorial#Glossary' },
    ],
  },
  {
    title: 'Careers',
    headerBg: '#b91c1c',
    dropBg:   '#fee2e2',
    items: [
      { label: 'North American Jobs',       route: '/careers#NorthAmericanJobs' },
      { label: 'European Union Jobs',       route: '/careers#EuropeanUnionJobs' },
      { label: 'Applicant Privacy Policy',  route: '/careers#PrivacyPolicy' },
    ],
  },
];

const TOTAL_COLS = navData.length;
const colW    = Math.floor((W - 80) / TOTAL_COLS);
const startX  = 40;
const itemH   = 46;
const headerH = 52;
const diagY   = y + 16;

navData.forEach((nav, ci) => {
  const cx = startX + ci * colW;
  const cw = colW - 16;

  // ── Column header (colored) ── rect BEFORE text ──────────────────────────
  rect('nav_hdr_' + ci, cx, diagY, cw, headerH,
    { bg: nav.headerBg, stroke: STKD, round: true });
  txt('nav_hdr_lbl_' + ci, cx, diagY + 14, cw,
    nav.title + ' ▾', { size: 16, color: TXL, align: 'center' });

  // ── Dropdown panel ── rect BEFORE item rects/texts ───────────────────────
  const dropH = nav.items.length * itemH + 16;
  rect('nav_drop_' + ci, cx, diagY + headerH + 4, cw, dropH,
    { bg: nav.dropBg, stroke: STK, round: true });

  // ── Items ── each item rect BEFORE its text ───────────────────────────────
  nav.items.forEach((item, ii) => {
    const iy = diagY + headerH + 4 + 10 + ii * itemH;
    rect('nav_item_' + ci + '_' + ii, cx + 8, iy, cw - 16, 36,
      { bg: BG_W, stroke: STK, round: true });
    txt('nav_item_lbl_' + ci + '_' + ii, cx + 14, iy + 5, cw - 28,
      item.label, { size: 13, color: TX });
    txt('nav_item_rt_' + ci + '_' + ii, cx + 14, iy + 21, cw - 28,
      item.route, { size: 10, color: TXM });
  });
});

// Advance y past the diagram (tallest column = Services with 6 items)
const maxItems = Math.max(...navData.map(n => n.items.length));
const diagH = headerH + 4 + maxItems * itemH + 16 + 16;
y += diagH + 60;  // also clears the diag_section rect height if needed

// Fix: patch diag_section rect height
elements.find(e => e.id === 'diag_section').height = diagH + 52;

// ─── LEGEND ───────────────────────────────────────────────────────────────────
y += 10;
const legendH = 180;
rect('legend', 40, y, W - 80, legendH, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('legend', 40, y, W - 80, 'LEGEND / NOTES', '#e9ecef', TXM);
txt('legend_b1', 60, y + 40, W - 120,
  '•  Home ▾, Services ▾  —  All links are anchor sections on the Home page (route: /#SectionId). Not separate routes.',
  { size: 13, color: TX });
txt('legend_b2', 60, y + 66, W - 120,
  '•  Products ▾  —  Each item is a separate page/route:  /scada  /communications  /scopeofworkprocess  /requestaquote',
  { size: 13, color: TX });
txt('legend_b3', 60, y + 92, W - 120,
  '•  Company ▾  —  /company  with anchor-linked sections:  #Partners  #Privacy',
  { size: 13, color: TX });
txt('legend_b4', 60, y + 118, W - 120,
  '•  Wind Power ▾  —  /windenergytutorial  with anchor sections:  #Facts  #Glossary',
  { size: 13, color: TX });
txt('legend_b5', 60, y + 144, W - 120,
  '•  Careers ▾  —  /careers  with anchor sections:  #NorthAmericanJobs  #EuropeanUnionJobs  #PrivacyPolicy',
  { size: 13, color: TX });
y += legendH + 30;

// ─── SITE ROUTE MAP ───────────────────────────────────────────────────────────
rect('map_title', 40, y, W - 80, 50, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('map_title_t', 60, y + 14, W - 120, 'SITE ROUTE MAP', { size: 18, color: TXL });
y += 50;

const routes = [
  { path: '/  (Home)',           detail: 'Sections: #Explanation  #ProductOverview  #FAQs  #ContactUs  #DesignAndEngineering  #ServiceAndSupport  #Integration  #Installation  #SolarServices  #WindServices' },
  { path: '/scada',              detail: 'Seamless SCADA Solutions, WindCapture™, Scalability, Reporting, Automation, Advanced GUI, Remote Access, Projects (Lalamilo Wind Farm), Water Treatment' },
  { path: '/communications',     detail: 'Distributed Automation (Landis+Gyr), Applications Engineering, Fiber Optic Termination (single-mode, multi-mode, simplex/duplex), Harsh Environment Assemblies' },
  { path: '/scopeofworkprocess', detail: 'Research & Analysis, Design & Development, Build & Test, Rollout & Support, Project Management (QA, Status Updates, Integration Support, Timelines, Communication Planning)' },
  { path: '/requestaquote',      detail: 'Form: Contact Name, Title, Phone, Email, Property Type, Company, Questions textarea, Needs checkboxes (×5), Communications checkboxes (×4), Timeframe select, Submit' },
  { path: '/company',            detail: 'Company Profile (turbines-clouds.webp), Partners/Affiliations (AWEA, OPTO 22, Landis+Gyr, DWPA), Privacy — anchors: #Partners  #Privacy' },
  { path: '/windenergytutorial', detail: 'What is Wind Energy, What is a Wind Turbine, How Turbines Work, Wind Facts (17 items), Glossary (30+ terms) — anchors: #Facts  #Glossary' },
  { path: '/careers',            detail: 'North American Jobs (SCADA Engineer, SCADA Programmer), European Union Jobs, Applicant Privacy Policy — anchors: #NorthAmericanJobs  #EuropeanUnionJobs  #PrivacyPolicy' },
];

const rowH = 52;
rect('map_routes', 40, y, W - 80, routes.length * rowH + 16, { bg: BG_L, stroke: STKD, sw: 2 });
routes.forEach((r, i) => {
  const ry = y + 12 + i * rowH;
  // Alternating row tint
  if (i % 2 === 0) {
    rect('map_row_' + i, 40, ry, W - 80, rowH - 4, { bg: BG_W, stroke: STK });
  }
  txt('map_path_' + i, 56, ry + 6, 260, r.path, { size: 13, color: TX });
  txt('map_detail_' + i, 326, ry + 6, W - 380, r.detail, { size: 12, color: TXM });
});
y += routes.length * rowH + 16 + 30;

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
