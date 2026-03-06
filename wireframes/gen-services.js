// Generator: services.excalidraw
// Services sections live on the Home page (anchor-linked)
// Style matches home.excalidraw

const elements = [];
let sc = 100;
const W = 1440;
const HALF  = W / 2;
const P     = 16;

// ── Style constants (matching home wireframe) ─────────────────────────────────
const TX     = '#1f2937';   // main body text
const TXL    = '#ffffff';   // light text on dark bg
const TXM    = '#6b7280';   // medium / label text
const STK    = '#9ca3af';   // light stroke (sub-elements)
const STKD   = '#6b7280';   // dark stroke (section containers)
const BG_W   = '#ffffff';
const BG_L   = '#f8f9fa';
const BG_MD  = '#9ca3af';   // parallax/full-width section stand-in
const BG_PH  = '#dedede';   // image placeholder
const BG_BTN = '#e5e7eb';   // button (light sections)

function mk() { return sc++; }

function rect(id, x, y, w, h, opts = {}) {
  const { bg = 'transparent', stroke = STK, sw = 1, round = false } = opts;
  elements.push({
    id, type: 'rectangle', x, y, width: w, height: h, angle: 0,
    strokeColor: stroke, backgroundColor: bg, fillStyle: 'solid',
    strokeWidth: sw, strokeStyle: 'solid', roughness: 0, opacity: 100,
    groupIds: [], frameId: null, roundness: round ? { type: 3 } : null,
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
  rect(id + '_bar', x, y, w, 26, { bg: barBg, stroke: STKD });
  txt(id + '_bar_t', x + 8, y + 5, w - 16, label, { size: 11, color: labelColor || TXM });
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

// ─── NOTE BAR ─────────────────────────────────────────────────────────────────
rect('note', 0, y, W, 30, { bg: '#fff3cd', stroke: '#e2c97e' });
txt('note_t', P, y + 7, W - P * 2,
  'ⓘ  Services are anchor-linked sections on the Home page  —  route: /#SectionId  (not separate routes)',
  { size: 12, color: '#856404', align: 'center' });
y += 30;

// ─── DESIGN & ENGINEERING (h=380) ─────────────────────────────────────────────
const H_DE = 380;
rect('de', 0, y, W, H_DE, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('de', 0, y, W,
  'DESIGN AND ENGINEERING  (#DesignAndEngineering  |  text left / image right)',
  '#e9ecef', TXM);
rect('de_lt', 0, y + 26, HALF, H_DE - 26, { bg: BG_L, stroke: STK });
txt('de_h2', P, y + 42, HALF - P * 2,
  'Tailored Design and Engineering Solutions by Expert Professionals',
  { size: 20, color: TX });
txt('de_body', P, y + 100, HALF - P * 2,
  'Our team of skilled engineers and designers is ready to support you with your\ndesign and engineering requirements. We provide detailed, expert programming\ntailored to meet your specific requests and needs. This encompasses identifying\nthe right components and disciplines for integration, determining configuration\ndetails and installation specifications, and guaranteeing utmost efficiency\nand effectiveness of the final product.',
  { size: 13, color: TX });
rect('de_cta', P, y + 316, 140, 44, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('de_cta_t', P + 10, y + 334, 120, '[ Reach Out ]', { size: 13, color: TXL, align: 'center' });
rect('de_img', HALF, y + 26, HALF, H_DE - 26, { bg: BG_PH, stroke: STK });
txt('de_img_l', HALF + 310, y + 184, 120, 'turbine.webp', { size: 14, color: TXM, align: 'center' });
y += H_DE;

// ─── SERVICE AND SUPPORT (h=320) ──────────────────────────────────────────────
const H_SVC = 320;
rect('svc', 0, y, W, H_SVC, { bg: BG_MD, stroke: STKD, sw: 2 });
sectionBar('svc', 0, y, W,
  'SERVICE AND SUPPORT  (#ServiceAndSupport  |  BG: solar-w-turbines.webp, parallax/fixed)',
  '#6b7280', TXL);
txt('svc_h2', 220, y + 48, 1000,
  'Unmatched Support and Service Guarantee',
  { size: 28, color: TXL, align: 'center' });
txt('svc_body', 200, y + 106, 1040,
  'Service and support at SCADA Solutions never end. We offer aggressive warranties with all our products\nand installations. Any problems that impact system availability are given immediate priority and responded\nto on the same day. Any non-critical problems are acknowledged within one day and followed up within 48h.\nOur product service plans are an affordable way to ensure you\'re optimizing your critical infrastructure\nassets. We provide detailed training for staff and supply easy-to-use manuals. Software upgrades are done\nseamlessly. Please Contact Us or call us to speak with a solutions expert.',
  { size: 13, color: TXL, align: 'center' });
rect('svc_cta', 600, y + 254, 240, 44, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('svc_cta_t', 616, y + 272, 208, '[ Get Consultation ]', { size: 13, color: TXL, align: 'center' });
y += H_SVC;

// ─── INTEGRATION (h=380) ──────────────────────────────────────────────────────
const H_INT = 380;
rect('int', 0, y, W, H_INT, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('int', 0, y, W,
  'INTEGRATION  (#Integration  |  image left / text right)',
  '#e9ecef', TXM);
rect('int_img', 0, y + 26, HALF, H_INT - 26, { bg: BG_PH, stroke: STK });
txt('int_img_l', HALF / 2 - 60, y + 190, 120, 'turbines.webp', { size: 14, color: TXM, align: 'center' });
rect('int_rt', HALF, y + 26, HALF, H_INT - 26, { bg: BG_W, stroke: STK });
txt('int_h2', HALF + P, y + 42, HALF - P * 2,
  'SCADA Solutions Integration', { size: 20, color: TX });
txt('int_body', HALF + P, y + 98, HALF - P * 2,
  'Integration has become increasingly fundamental given the rising number of IT\ncomponents that must interact in today\'s wind farm environment. Our engineers\nand installers are experts in system integration and configuration. We can\ndesign a new platform to be compatible with nearly every component of an\nexisting infrastructure. Through technology, we\'re able to combine, retrofit,\nor replace any or all of a project\'s entire network.',
  { size: 13, color: TX });
rect('int_cta', HALF + P, y + 316, 140, 44, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('int_cta_t', HALF + P + 10, y + 334, 120, '[ Contact Us ]', { size: 13, color: TXL, align: 'center' });
y += H_INT;

// ─── INSTALLATION (h=380) ─────────────────────────────────────────────────────
const H_INST = 380;
rect('inst', 0, y, W, H_INST, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('inst', 0, y, W,
  'INSTALLATION  (#Installation  |  text left / image right)',
  '#e9ecef', TXM);
rect('inst_lt', 0, y + 26, HALF, H_INST - 26, { bg: BG_L, stroke: STK });
txt('inst_h2', P, y + 42, HALF - P * 2,
  'Expert Installation for Your Network Needs', { size: 20, color: TX });
txt('inst_body', P, y + 98, HALF - P * 2,
  'Our expertise in system design engineering of complete SCADA solutions, coupled\nwith our experienced and professional installation knowledge, allows for seamless\ndelivery and implementation. We understand that successful implementation involves\na number of skills, protocols, and technologies. Our experienced field technicians\nensure complete and timely implementation of the client\'s network solutions with\nminimal disruption to vital business operations and functions.',
  { size: 13, color: TX });
rect('inst_cta', P, y + 316, 140, 44, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('inst_cta_t', P + 10, y + 334, 120, '[ Call Today ]', { size: 13, color: TXL, align: 'center' });
rect('inst_img', HALF, y + 26, HALF, H_INST - 26, { bg: BG_PH, stroke: STK });
txt('inst_img_l', HALF + 310, y + 184, 120, 'networking.webp', { size: 14, color: TXM, align: 'center' });
y += H_INST;

// ─── SOLAR SERVICES (h=320) ───────────────────────────────────────────────────
const H_SOLAR = 320;
rect('solar', 0, y, W, H_SOLAR, { bg: BG_MD, stroke: STKD, sw: 2 });
sectionBar('solar', 0, y, W,
  'SOLAR SERVICES  (#SolarServices  |  BG: 16_AES-Lawai-Solar_1-scaled-1920w.webp, parallax/fixed)',
  '#6b7280', TXL);
txt('solar_h2', 120, y + 48, 1200,
  'Empowering Solar Projects with Solutions for Developers',
  { size: 28, color: TXL, align: 'center' });
txt('solar_body', 200, y + 106, 1040,
  'We offer most of our products and services to solar energy project developers and operators.\nWe deliver communications systems, including fiber optic and smart radio solutions. We also\noffer customized SCADA design and development with complete installation, training and service.\nTo learn more about our Solar Services and how we might better help you manage and maintain\nyour energy project, please Contact Us to speak with a solutions expert.',
  { size: 13, color: TXL, align: 'center' });
rect('solar_cta', 600, y + 254, 240, 44, { bg: '#4466cc', stroke: '#4466cc', round: true });
txt('solar_cta_t', 616, y + 272, 208, '[ Get Consultation ]', { size: 13, color: TXL, align: 'center' });
y += H_SOLAR;

// ─── WIND SERVICES (h=380) ────────────────────────────────────────────────────
const H_WIND = 380;
rect('wind', 0, y, W, H_WIND, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('wind', 0, y, W,
  'WIND SERVICES  (#WindServices  |  image left / text right)',
  '#e9ecef', TXM);
rect('wind_img', 0, y + 26, HALF, H_WIND - 26, { bg: BG_PH, stroke: STK });
txt('wind_img_l', HALF / 2 - 90, y + 190, 180, 'turbines-clouds.webp', { size: 14, color: TXM, align: 'center' });
rect('wind_rt', HALF, y + 26, HALF, H_WIND - 26, { bg: BG_W, stroke: STK });
txt('wind_h2', HALF + P, y + 42, HALF - P * 2,
  'Empowering Industries with Wind SCADA Solutions', { size: 20, color: TX });
txt('wind_body', HALF + P, y + 98, HALF - P * 2,
  'We specialize in providing control system integration for windpower projects.\nWith our expertise and experience, we have successfully completed automation\nand communication systems for nearly every industrial application, including\nwind farms. Our team is dedicated to delivering reliable and efficient solutions\nthat optimize the performance of wind turbines and ensure seamless operations.\nLet us help you maximize the potential of your windpower projects.',
  { size: 13, color: TX });
y += H_WIND;

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
