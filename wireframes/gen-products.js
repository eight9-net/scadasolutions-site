// Generator: products.excalidraw
// Covers: SCADA, Communications, Scope of Work Process, Request a Quote
// Style matches home.excalidraw

const elements = [];
let sc = 100;
const W = 1440;
const HALF = W / 2;
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
  const bw  = opts.w      || 160;
  const bg  = opts.bg     || BG_BTN;
  const stk = opts.stroke || STK;
  const col = opts.color  || TX;
  rect(id + '_bg', x, y, bw, 36, { bg, stroke: stk, round: true });
  txt(id + '_lbl', x + 10, y + 9, bw - 20, label, { size: 13, color: col, align: 'center' });
}

// ─── Shared page header ───────────────────────────────────────────────────────
function pageHeader(suffix, pageTitle, subtitle) {
  rect('header_' + suffix, 0, y, W, 80, { bg: BG_W, stroke: STKD, sw: 2 });
  rect('hdr_logo_' + suffix, 0, y, 300, 80, { bg: '#f1f3f5', stroke: STK });
  txt('hdr_logo_t_' + suffix, P, y + 30, 268, '[scada-solutions-logo.png]', { size: 12, color: TXM });
  txt('hdr_nav_' + suffix, 310, y + 30, 820,
    'Home ▾  |  Services ▾  |  Products ▾  |  Company ▾  |  Wind Power ▾  |  Careers ▾',
    { size: 13, color: TX, align: 'center' });
  rect('hdr_cta_' + suffix, 1140, y + 14, 280, 52, { bg: '#4466cc', stroke: '#4466cc', round: true });
  txt('hdr_cta_t_' + suffix, 1150, y + 30, 260, '[ Contact Us ]', { size: 13, color: TXL, align: 'center' });
  y += 80;
  rect('hero_' + suffix, 0, y, W, 220, { bg: BG_DK, stroke: STKD, sw: 2 });
  txt('hero_t_' + suffix, 80, y + 70, W - 160, pageTitle.toUpperCase(), { size: 28, color: TXL, align: 'center' });
  if (subtitle) txt('hero_sub_' + suffix, 120, y + 112, W - 240, subtitle, { size: 14, color: TXM, align: 'center' });
  y += 220;
}

// ─── Page divider between wireframe pages ─────────────────────────────────────
function pageDivider(label) {
  y += 60;
  rect('div_' + mk(), 0, y, W, 44, { bg: BG_DK, stroke: STKD, sw: 2 });
  txt('div_t_' + mk(), 0, y + 12, W, '── ' + label + ' ──', { size: 16, color: TXL, align: 'center' });
  y += 44 + 20;
}

// ─── Section helpers ─────────────────────────────────────────────────────────
function contentRight(id, barLabel, secLabel, body, imageFile, sectionH, btnLabel) {
  const H = sectionH || 420;
  rect(id, 0, y, W, H + 26, { bg: BG_L, stroke: STKD, sw: 2 });
  sectionBar(id + '_sec', 0, y, W, barLabel, '#dbeafe', TXM);
  const sy = y + 26;
  rect(id + '_textbg', 0, sy, HALF, H, { bg: BG_L, stroke: STK });
  txt(id + '_h2', P, sy + 20, HALF - P * 2, secLabel, { size: 18, color: TX });
  txt(id + '_body', P, sy + 56, HALF - P * 2, body, { size: 13, color: TX });
  if (btnLabel) btn(id + '_btn', P, sy + H - 50, btnLabel, { bg: '#4466cc', stroke: '#4466cc', color: TXL });
  imgPlaceholder(id + '_img', HALF, sy, HALF, H, imageFile);
  y += 26 + H;
}

function contentLeft(id, barLabel, secLabel, body, imageFile, sectionH, btnLabel) {
  const H = sectionH || 420;
  rect(id, 0, y, W, H + 26, { bg: BG_W, stroke: STKD, sw: 2 });
  sectionBar(id + '_sec', 0, y, W, barLabel, '#dcfce7', TXM);
  const sy = y + 26;
  imgPlaceholder(id + '_img', 0, sy, HALF, H, imageFile);
  rect(id + '_textbg', HALF, sy, HALF, H, { bg: BG_W, stroke: STK });
  txt(id + '_h2', HALF + P, sy + 20, HALF - P * 2, secLabel, { size: 18, color: TX });
  txt(id + '_body', HALF + P, sy + 56, HALF - P * 2, body, { size: 13, color: TX });
  if (btnLabel) btn(id + '_btn', HALF + P, sy + H - 50, btnLabel, { bg: '#4466cc', stroke: '#4466cc', color: TXL });
  y += 26 + H;
}

// ════════════════════════════════════════════════════════════════════════════════
// PAGE 1: SCADA
// ════════════════════════════════════════════════════════════════════════════════
let y = 0;
pageHeader('scada', 'SCADA Products');

// Main 2-col: text left, gallery right
const scadaH = 1060;
rect('scada_s1', 0, y, W, scadaH + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('scada_s1_sec', 0, y, W, 'SEAMLESS SCADA SOLUTIONS  —  text left / gallery right', '#dbeafe', TXM);
const s1y = y + 26;
rect('scada_s1_textbg', 0, s1y, HALF, scadaH, { bg: BG_L, stroke: STK });
let ty = s1y + 20;
txt('scada_s1_h2', P, ty, HALF - P * 2, 'Seamless SCADA Solutions for Uninterrupted Operations', { size: 18, color: TX }); ty += 46;
txt('scada_s1_b1', P, ty, HALF - P * 2,
  "SCADA Solutions' flagship product, WindCapture™, is a Supervisory Control and Data\nAcquisition (SCADA) software package used for monitoring, controlling, data collection,\nand reporting for wind turbine generators (WTG). It was designed and tailored to the\ndemands of manufacturers, operators, developers, and maintenance managers of wind\nenergy projects and facilities.", { size: 13, color: TX }); ty += 110;
txt('scada_s1_b2', P, ty, HALF - P * 2,
  "Regardless of the make of turbines in your project(s), SSI customizes WindCapture™ with\nevery installation to ensure the reliable flow and presentation of needed data. The system\nalso combines a comprehensive database management system for standardized and\ncustomized operations reports with powerful analytic graphs, charts, tables, and other tools.", { size: 13, color: TX }); ty += 90;
txt('scada_s1_b3', P, ty, HALF - P * 2,
  "WindCapture™ has numerous usable, integrated functions. Key features include:", { size: 13, color: TX }); ty += 34;
txt('scada_h4_scale', P, ty, HALF - P * 2, 'Scalability', { size: 15, color: TX }); ty += 26;
txt('scada_s1_b4', P, ty, HALF - P * 2,
  "WindCapture™ is engineered to handle any number of turbines and is easily upgraded\nto sustain any future growth. SSI can connect your projects and various farms together.\nDesign platforms support projects with several different types of turbines.", { size: 13, color: TX }); ty += 68;
txt('scada_h4_report', P, ty, HALF - P * 2, 'Reporting', { size: 15, color: TX }); ty += 26;
txt('scada_s1_b5', P, ty, HALF - P * 2,
  "SSI's WindCapture™ systems provide real-time reporting with the highest degree of\naccuracy. Trend and analysis reporting, production curves, optimization graphs, and\ncomparative analysis reports are a simple point-and-click away.", { size: 13, color: TX }); ty += 68;
txt('scada_h4_auto', P, ty, HALF - P * 2, 'Automation', { size: 15, color: TX }); ty += 26;
txt('scada_s1_b6', P, ty, HALF - P * 2,
  "WindCapture™ offers an unprecedented level of automation. Automated curtailment\neasily handles curtailment setpoints from the power-outtaker, or CAISO.", { size: 13, color: TX }); ty += 50;
txt('scada_h4_gui', P, ty, HALF - P * 2, 'Advanced GUI', { size: 15, color: TX }); ty += 26;
txt('scada_s1_b7', P, ty, HALF - P * 2,
  "WindCapture™ offers complete form-based GUI software that is remotely accessible\nand easily navigated by authorized operators.", { size: 13, color: TX }); ty += 50;
txt('scada_h4_remote', P, ty, HALF - P * 2, 'Remote Access Capabilities', { size: 15, color: TX }); ty += 26;
txt('scada_s1_b8', P, ty, HALF - P * 2,
  "SCADA Solutions solves remote access challenges utilizing a technology platform\nthat supports data reporting, alarms, and status updates via web, SMS, e-mail,\nor mobile platforms such as iOS and Android.", { size: 13, color: TX });
// Gallery: 4 images stacked on right
const gW = HALF;
const gH = Math.floor(scadaH / 4) - 8;
['windcapture-01-1920w.webp', 'windcapture-02-1920w.webp', 'windcapture-03-1920w.webp', 'windcapture-04-1920w.webp'].forEach((img, i) => {
  imgPlaceholder('scada_gal' + i, HALF, s1y + i * (gH + 8), HALF, gH, img);
});
y += 26 + scadaH;

// Projects — Lalamilo Wind Farm
const projH = 360;
rect('scada_proj', 0, y, W, projH + 26, { bg: BG_DK, stroke: STKD, sw: 2 });
sectionBar('scada_proj_sec', 0, y, W, 'PROJECTS  —  Lalamilo Wind Farm', '#6b7280', TXL);
const pjy = y + 26;
imgPlaceholder('scada_proj_img', 0, pjy, W, projH, 'MixingWindWater-2880w.webp');
txt('scada_proj_h2', 80, pjy + 30, W - 160, 'Take a Look at our Projects', { size: 22, color: TXL, align: 'center' });
txt('scada_proj_sub', 80, pjy + 70, W - 160, 'Lalamilo Wind Farm', { size: 18, color: TXL, align: 'center' });
txt('scada_proj_b1', 80, pjy + 108, W - 160,
  'The Lalamilo Wind Farm integrates the Wind Energy produced on site to meet the power requirements\nneeded to operate and monitor the various Department of Water Supply resources in the area.', { size: 13, color: TXL, align: 'center' });
txt('scada_proj_b2', 80, pjy + 158, W - 160,
  'These systems are uniquely specialized and are comprised of two independent SCADA systems\nworking in parallel while communicating and sharing data to achieve maximum efficiency.', { size: 13, color: TXL, align: 'center' });
btn('scada_proj_btn', W / 2 - 110, pjy + 224, 'Download to Learn More', { w: 220, bg: '#4466cc', stroke: '#4466cc', color: TXL });
y += 26 + projH;

// Advanced Water Treatment
contentLeft('scada_wt', 'ADVANCED WATER TREATMENT  —  image left / text right',
  'Advanced Water Treatment',
  'Discover the power of SCADA systems, pivotal in enhancing water treatment processes through\ncomprehensive real-time monitoring, precise control, insightful data analysis, and effective\nalert management. These advanced systems are designed to ensure unparalleled water quality\nand operational efficiency, safeguarding our most vital resource.',
  'WaterTreatment-1920w.webp', 360, 'Get in Touch');

// Water Treatment Gallery (4 images in a row)
const wtgH = 220;
rect('scada_wtgal', 0, y, W, wtgH + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('scada_wtgal_sec', 0, y, W, 'WATER TREATMENT GALLERY', '#f0f9ff', TXM);
const wtgy = y + 26;
const wgW = Math.floor(W / 4) - 4;
['PLWTP+AerialLo-1920w.webp', 'Water Treatment 3.jpg', 'Education_WWTrtmt-1920w.webp', 'basinsLo-1920w.webp'].forEach((img, i) => {
  imgPlaceholder('scada_wg' + i, i * (wgW + 5), wtgy, wgW, wtgH, img);
});
y += 26 + wtgH;

// Smart Industry Article
const artH = 260;
rect('scada_art', 0, y, W, artH + 26, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('scada_art_sec', 0, y, W, 'SMART INDUSTRY ARTICLE IMAGE', '#f0f9ff', TXM);
imgPlaceholder('scada_art_img', W / 2 - 320, y + 26, 640, artH, 'SmartIndustryArticle-1920w.webp');
y += 26 + artH;

// ════════════════════════════════════════════════════════════════════════════════
// PAGE 2: Communications
// ════════════════════════════════════════════════════════════════════════════════
pageDivider('PAGE 2: Communications');
pageHeader('comm', 'Communications');

contentLeft('comm_da', 'DISTRIBUTED AUTOMATION  —  image left / text right',
  'Distributed Automation',
  "SCADA Solutions has teamed with communications innovator Landis+Gyr, a worldwide leader in\nelectricity metering and energy management, to integrate advanced radio technologies into the\nwind industry.\n\nDistributed automation solutions require several key elements, from the end devices to the\nhost application, with a strong communication network in between. Inherent features of the\ncommunication network include real-time two-way communications, scalability, reliability with\nself-healing capabilities, and a high level of security while being cost-effective.\n\nSCADA Solutions' strategic partnership with Landis+Gyr allows delivery of the most advanced\nradio technologies available. Landis+Gyr has over 5,000 employees in 30 countries.",
  'communications.png', 520);

contentRight('comm_ae', 'APPLICATIONS ENGINEERING  —  text left / image right',
  'Applications Engineering',
  "Our highly qualified applications engineers are experts in the application of fiber optic\nmedia, cables, connectors, and hardware. No matter how complex or challenging your requirements,\nour team can develop a custom solution that's reliable, mitigates risk, and helps speed up\nproject implementation schedules. SCADA Solutions' engineers are skilled at designing the\nmost advanced single- and multi-mode cable assemblies, guaranteeing to meet even the most\nstringent connector and cable specifications.",
  'fiber-switch.jpg', 380);

// Fiber Optic Termination (full-width dark section)
const foH = 460;
rect('comm_fo', 0, y, W, foH + 26, { bg: BG_DK, stroke: STKD, sw: 2 });
sectionBar('comm_fo_sec', 0, y, W, 'FIBER OPTIC TERMINATION  —  full-width dark section', '#6b7280', TXL);
const foy = y + 26;
rect('comm_fo_imgbg', 0, foy, W, foH, { bg: '#1e293b', stroke: STK });
txt('comm_fo_fn', 0, foy + 8, W, '[bg: fiber-optic-bg.jpg]', { size: 11, color: TXM, align: 'center' });
txt('comm_fo_h2', 80, foy + 32, W - 160, 'Fiber Optic Termination', { size: 22, color: TXL, align: 'center' });
txt('comm_fo_b1', 80, foy + 72, W - 160,
  'SCADA Solutions is a leader in the application of cutting-edge fiber optic terminations and splicing\nmethods. Our Applications Specialists can help you select the right component for each step in the\ntermination and assembly process.', { size: 13, color: TXL });
txt('comm_fo_b2', 80, foy + 136, W - 160,
  'Customers have confidence that every assembly has been manufactured to your exact specifications\nusing brand-name products, fully tested to international industry standards.', { size: 13, color: TXL });
txt('comm_fo_b3', 80, foy + 192, W - 160, 'Available in any length, on spools when applicable:', { size: 13, color: TXL });
txt('comm_fo_li1', 80, foy + 222, W - 160, '›  1-288 fiber cable in single-mode and multi-mode', { size: 13, color: TXL });
txt('comm_fo_li2', 80, foy + 248, W - 160, '›  Choose your connector type or combination', { size: 13, color: TXL });
txt('comm_fo_li3', 80, foy + 274, W - 160, '›  Cable available from industry-leading manufacturers', { size: 13, color: TXL });
y += 26 + foH;

contentRight('comm_he', 'HARSH ENVIRONMENT ASSEMBLIES  —  text left / image right',
  'Harsh Environment Assemblies',
  "Mil-qualified assemblies are built to withstand the demands of the most rigorous environments\nand applications. These assemblies are ideal for any application where standard assemblies\nwould be damaged by chemical, environmental, or physical stresses.\n\n›  Hermaphroditic connectors for end-to-end connector flexibility\n›  M28876 — designed for shipboard and ship-to-shore applications\n›  D38999 — designed for tactical or industrial applications\n›  Mil Spec ST-QPL Military ST fiber optic connector",
  'power-boxes-solar.jpg', 400, 'Request Service');

// ════════════════════════════════════════════════════════════════════════════════
// PAGE 3: Scope of Work Process
// ════════════════════════════════════════════════════════════════════════════════
pageDivider('PAGE 3: Scope of Work Process');
pageHeader('sow', 'Scope of Work Process',
  'Every project contains its own unique challenges. We custom engineer solutions, from the\ncommunications network and database storage to software design, installation, and support.');

function sowSection(id, title, body) {
  rect(id, 0, y, W, 286, { bg: BG_W, stroke: STKD, sw: 2 });
  sectionBar(id + '_sec', 0, y, W, title.toUpperCase(), '#f0fdf4', TXM);
  const sy = y + 26;
  rect(id + '_bg', 0, sy, W, 260, { bg: BG_W, stroke: STK });
  txt(id + '_h2', 80, sy + 20, W - 160, title, { size: 20, color: TX });
  txt(id + '_body', 80, sy + 56, W - 160, body, { size: 13, color: TX });
  y += 286;
}

sowSection('sow1', 'Research and Analysis Phase',
  "We begin by gathering all documentation pertaining to the existing SCADA and communications systems from the\nclient, as well as any information available on the turbine PLC hardware and software protocols. We then perform\na site visit to evaluate the existing communications systems and all ancillary communications links. We will also\ndetermine infrastructure requirements and assess structural mounting specifications and installation requirements in\naccordance with the client's needs while on site. After completing our comparative analysis of all existing systems\nand determining feasibility options, we will make recommendations for necessary upgrades and/or retrofits.");

sowSection('sow2', 'Design and Development Phase',
  "Using the information assembled and conclusions achieved during due diligence, we will design and develop a complete\nsolution based on the scope of work. The detailed, professional programming of WindCapture™ is customized to the\nclient's requests. This includes identifying the appropriate components and disciplines to integrate, configuration\ndetails, and installation specifications, and ensuring optimal efficiency and effectiveness of the final product(s).");

sowSection('sow3', 'Build Out and Test Phase',
  "Wherever applicable, and usually whenever possible, we will simulate as much as practical off site. We will set up\nall software and hardware components, mount and/or connect all equipment, communication cabling, fiber optics,\nradios, etc., and coordinate any ancillary needs from the client. We will then conduct off-site acceptance tests of\nthe installation prior to start up. Acceptance test periods will vary depending on the complexity of the design.");

sowSection('sow4', 'Rollout and Support',
  "Our experience ensures the complete and timely implementation of all network solutions and integrations with minimal\ndisruption to vital business operations and functions. We will work closely with clients' field staff and management\nfor a smooth installation through on-site pre-installation meetings, post-installation adjustments, and tech support.\n\nAlthough the process seems tedious, these are necessary steps for a reliable system.");

// Project Management
const pm5H = 380;
rect('sow5', 0, y, W, pm5H + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('sow5_sec', 0, y, W, 'PROJECT MANAGEMENT', '#f0fdf4', TXM);
const pm5y = y + 26;
rect('sow5_bg', 0, pm5y, W, pm5H, { bg: BG_L, stroke: STK });
txt('sow5_h2', 80, pm5y + 20, W - 160, 'Project Management', { size: 20, color: TX });
txt('sow5_b1', 80, pm5y + 56, W - 160,
  'Creating, coordinating, and deploying business solutions on time and within budget require a disciplined approach.\nAs a result, with our experience in multiple fields of SCADA and communication systems, we have consistently\nevolved our methodology to meet the needs of our clients along with the demands of technology\'s growing pace.', { size: 13, color: TX });
txt('sow5_b2', 80, pm5y + 130, W - 160,
  'Our project management program ensures project completion through all phases of research, design, development,\nconstruction, and deployment. Our team is always available and covers:', { size: 13, color: TX });
['Quality Assurance', 'Status Updates', 'Integration Support', 'Timelines, Budget, and Scope Review', 'Communication Planning'].forEach((item, i) => {
  txt('sow5_li' + i, 120, pm5y + 192 + i * 24, W - 240, '›  ' + item, { size: 13, color: TX });
});
txt('sow5_b3', 80, pm5y + 320, W - 160,
  "Our end goal is to provide the products, services, and resources to help service our clients' requirements in any manner we can.", { size: 13, color: TX });
y += 26 + pm5H;

// ════════════════════════════════════════════════════════════════════════════════
// PAGE 4: Request a Quote
// ════════════════════════════════════════════════════════════════════════════════
pageDivider('PAGE 4: Request a Quote');
pageHeader('raq', 'Request a Quote');

const raqH = 840;
rect('raq', 0, y, W, raqH + 26, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('raq_sec', 0, y, W, 'FILL OUT OUR FORM TO REQUEST A QUOTE', '#bfdbfe', TXM);
const raqy = y + 26;
rect('raq_formbg', 0, raqy, W, raqH, { bg: '#1d4ed8', stroke: STKD });
txt('raq_h2', 80, raqy + 30, W - 160, 'Fill Out Our Form to Request a Quote', { size: 22, color: TXL, align: 'center' });

// Form fields
function field(id, fx, fy, fw, ph) {
  rect(id + '_bg', fx, fy, fw, 38, { bg: BG_W, stroke: STK, round: true });
  txt(id + '_ph', fx + 10, fy + 10, fw - 20, ph, { size: 13, color: TXM });
}

const fLeft = 200;
const fRight = W - 200;
const fW = Math.floor((fRight - fLeft - 20) / 2);
let fy = raqy + 80;

field('raq_f1', fLeft, fy, fW, 'Contact Name');
field('raq_f2', fLeft + fW + 20, fy, fW, 'Title');
fy += 54;
field('raq_f3', fLeft, fy, fW, 'Phone');
field('raq_f4', fLeft + fW + 20, fy, fW, 'Email');
fy += 54;
field('raq_f5', fLeft, fy, fW, 'Property Type');
field('raq_f6', fLeft + fW + 20, fy, fW, 'Company Name');
fy += 54;
rect('raq_ta', fLeft, fy, fRight - fLeft, 100, { bg: BG_W, stroke: STK, round: true });
txt('raq_ta_ph', fLeft + 10, fy + 10, fRight - fLeft - 20, 'Questions?', { size: 13, color: TXM });
fy += 116;

// Checkboxes
const col3W = Math.floor((fRight - fLeft - 40) / 3);
rect('raq_needs', fLeft, fy, col3W, 170, { bg: BG_W, stroke: STK, round: true });
txt('raq_needs_lbl', fLeft + 10, fy + 8, col3W - 20, 'Needs (click all that apply)', { size: 12, color: TXM });
['SCADA', 'Communications', 'Design / Engineering', 'Integration', 'Service'].forEach((v, i) => {
  txt('raq_needs_' + i, fLeft + 10, fy + 30 + i * 26, col3W - 20, '☐  ' + v, { size: 13, color: TX });
});
rect('raq_comms', fLeft + col3W + 20, fy, col3W, 170, { bg: BG_W, stroke: STK, round: true });
txt('raq_comms_lbl', fLeft + col3W + 30, fy + 8, col3W - 20, 'Types of Communications', { size: 12, color: TXM });
['Radios', 'Fiber Optics', 'Cable Assemblies', 'Other'].forEach((v, i) => {
  txt('raq_comms_' + i, fLeft + col3W + 30, fy + 30 + i * 26, col3W - 20, '☐  ' + v, { size: 13, color: TX });
});
rect('raq_tf', fLeft + col3W * 2 + 40, fy, col3W, 50, { bg: BG_W, stroke: STK, round: true });
txt('raq_tf_lbl', fLeft + col3W * 2 + 50, fy + 14, col3W - 20, 'Timeframe ▾', { size: 13, color: TX });
fy += 186;

btn('raq_sub', fLeft, fy, 'Request Quote', { bg: '#4466cc', stroke: '#4466cc', w: 180, color: TXL });
y += 26 + raqH;

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
