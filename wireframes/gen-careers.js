// Generates wireframes/careers.excalidraw
const W = 1440;
let sc = 100;
const elements = [];
const mk = () => sc++;

function rect(id, x, y, w, h, opts = {}) {
  const { bg = "transparent", stroke = "#adb5bd", sw = 1, rough = 0, round = false } = opts;
  elements.push({
    id, type: "rectangle", x, y, width: w, height: h, angle: 0,
    strokeColor: stroke, backgroundColor: bg, fillStyle: "solid",
    strokeWidth: sw, strokeStyle: "solid", roughness: rough, opacity: 100,
    groupIds: [], frameId: null, roundness: round ? { type: 3 } : null,
    seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
    boundElements: null, updated: 1708800000000, link: null, locked: false
  });
}

function txt(id, x, y, w, content, opts = {}) {
  const { size = 14, color = "#1f2937", align = "left", family = 2 } = opts;
  const lines = content.split('\n').length;
  const h = Math.ceil(size * 1.4 * lines) + 6;
  elements.push({
    id, type: "text", x, y, width: w, height: h, angle: 0,
    strokeColor: color, backgroundColor: "transparent", fillStyle: "solid",
    strokeWidth: 1, strokeStyle: "solid", roughness: 0, opacity: 100,
    groupIds: [], frameId: null, roundness: null,
    seed: mk(), version: 1, versionNonce: mk(), isDeleted: false,
    boundElements: null, updated: 1708800000000, link: null, locked: false,
    text: content, fontSize: size, fontFamily: family,
    textAlign: align, verticalAlign: "top",
    containerId: null, originalText: content, lineHeight: 1.4
  });
}

// Returns the y-position after drawing (y + height)
function sectionBar(id, x, y, w, label, barBg, labelColor) {
  rect(id + "_bar", x, y, w, 26, { bg: barBg, stroke: "#6b7280" });
  txt(id + "_bar_t", x + 8, y + 5, w - 16, label, { size: 11, color: labelColor });
  return y + 26;
}

function btn(id, x, y, label, opts = {}) {
  const { bg = "#e5e7eb", stroke = "#9ca3af", color = "#1f2937", w = 160 } = opts;
  rect(id, x, y, w, 44, { bg, stroke, round: true });
  txt(id + "_t", x + 10, y + 14, w - 20, label, { size: 13, color, align: "center" });
}

// Chevron list item
function listItem(id, x, y, w, content) {
  txt(id, x, y, w, "›  " + content, { size: 13, color: "#1f2937" });
}

const P    = 16;
const HALF = W / 2;
const THIRD = Math.floor(W / 3);
const BG_W   = "#ffffff";
const BG_L   = "#f8f9fa";
const BG_DK  = "#374151";
const BG_MD  = "#9ca3af";
const BG_PH  = "#dedede";
const BG_BTN = "#e5e7eb";
const TX     = "#1f2937";
const TXL    = "#ffffff";
const TXM    = "#6b7280";
const TXB    = "#60a5fa";   // blue-400 for subheadings
const STK    = "#9ca3af";
const STKD   = "#6b7280";

let y = 0;

// ── HEADER (h=80) ─────────────────────────────────────────────────────────────
const H_HDR = 80;
rect("header",   0, y, W, H_HDR, { bg: BG_W, stroke: STKD, sw: 2 });
rect("hdr_logo", 0, y, 300, H_HDR, { bg: "#f1f3f5", stroke: STK });
txt("hdr_logo_t", P, y + 30, 268, "[scada-solutions-logo.png]", { size: 12, color: TXM });
txt("hdr_nav", 310, y + 30, 820,
  "Home ▾  |  Services ▾  |  Products ▾  |  Company ▾  |  Wind Power ▾  |  Careers ▾",
  { size: 13, color: TX, align: "center" });
rect("hdr_cta", 1140, y + 14, 280, 52, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("hdr_cta_t", 1150, y + 30, 260, "[ Contact Us ]", { size: 13, color: TXL, align: "center" });
y += H_HDR;

// ── PAGE HERO (h=640) ──────────────────────────────────────────────────────────
const H_PHERO = 640;
rect("phero", 0, y, W, H_PHERO, { bg: BG_DK, stroke: STKD, sw: 2 });
txt("phero_note", P, y + P, 300, "BG: earth.jpg", { size: 11, color: TXM });
txt("phero_h1", 220, y + 200, 1000, "CAREERS", { size: 48, color: TXL, align: "center" });
txt("phero_sub", 280, y + 286, 880,
  "Want to help change the world? Become a member of the exciting, dynamic, and\n" +
  "challenging world of renewable energy. SCADA Solutions specializes in restoring\n" +
  "infrastructure integrity through the integration of communications and SCADA systems.\n" +
  "Our products and services are as good as our winning teams, who design, engineer,\n" +
  "integrate, install, and service them. Please check back regularly or contact our\n" +
  "Human Resources Department for opportunities. Come and grow with us; together,\n" +
  "we can make a difference.",
  { size: 16, color: "#d1d5db", align: "center" });
btn("phero_cta", 620, y + 556, "[ Contact Us ]",
  { bg: "#4466cc", stroke: "#4466cc", color: TXL, w: 200 });
y += H_PHERO;

// ── NORTH AMERICAN JOBS (ContentLeftSection: image left, text right) ──────────
// Pre-calculate text height so image can match
// Content on right side:
// Title h2 (26) + gap(20) + job1 + gap(40) + job2
// Job 1:
//   H3 (30) + p(70) + H4(26) + p(56) + H4(26) + 6 items(144) + H4(26) + comp(54) + email(26) = 458
// Job 2:
//   H3 (30) + p(70) + H4(26) + p(70) + H4(26) + 8 items(192) + H4(26) + comp(54) + email(26) = 520
// Total text content ≈ 26+20+458+40+520 = 1064 + top/bottom padding(60) = 1124
const H_NA = 1160;
rect("na", 0, y, W, H_NA, { bg: BG_W, stroke: STKD, sw: 2 });
const na_inner_y = sectionBar("na", 0, y, W, "NORTH AMERICAN JOBS  #NorthAmericanJobs  (ContentLeftSection: image left / text right)", "#e9ecef", TXM);

// Image — left half, full inner height
rect("na_img", 0, na_inner_y, HALF, H_NA - 26, { bg: BG_PH, stroke: STK });
txt("na_img_l", HALF/2 - 90, na_inner_y + (H_NA - 26)/2 - 10, 180, "north-america-map.jpg",
  { size: 14, color: TXM, align: "center" });

// Text — right half
let ty = na_inner_y + 20;
const TX_X = HALF + P;
const TX_W = HALF - P * 2;

txt("na_h2", TX_X, ty, TX_W, "North American Jobs", { size: 22, color: TX });
ty += 36;

// ── Job 1: SCADA Engineer ──
txt("na_j1_h3", TX_X, ty, TX_W, "SCADA Engineer", { size: 20, color: TX });
ty += 32;
txt("na_j1_intro", TX_X, ty, TX_W,
  "SCADA Solutions is currently looking for talented, highly motivated, and dependable\n" +
  "software engineers (junior and experienced) to join our team in the San Diego area.\n" +
  "This is your chance to work with some of the brightest SCADA engineers in the land.",
  { size: 13, color: TX }); ty += 68;

txt("na_j1_r_h", TX_X, ty, TX_W, "Responsibilities", { size: 15, color: TXB }); ty += 28;
txt("na_j1_r_body", TX_X, ty, TX_W,
  "You will be directly involved in developing the next generation of our flagship\n" +
  "WindCapture™ product. Work will encompass all aspects of the software design and\n" +
  "development processes in an informal but over-achieving environment.",
  { size: 13, color: TX }); ty += 68;

txt("na_j1_pr_h", TX_X, ty, TX_W, "Primary Requirements", { size: 15, color: TXB }); ty += 28;
[
  "Science or Technical Degree from accredited university, e.g. BS in Electrical Engineering (BSEE)",
  "3+ years relevant experience",
  "Experience with Allen Bradley PLC and FactoryTalk/RSView",
  "Strong communications skills (written and verbal), including ability to write detailed technical reports",
  "SQL and MS Access database application experience",
  "Experience with electronic converters and drivers",
].forEach((item, i) => {
  listItem("na_j1_li" + i, TX_X, ty, TX_W, item);
  ty += 26;
});
ty += 4;

txt("na_j1_cb_h", TX_X, ty, TX_W, "Compensation / Benefits", { size: 15, color: TXB }); ty += 28;
txt("na_j1_comp", TX_X, ty, TX_W,
  "SSI offers competitive compensation packages for the right candidates\nand is an equal opportunity employer.",
  { size: 13, color: TX }); ty += 48;
txt("na_j1_email", TX_X, ty, TX_W,
  "Email resume and cover letter to: info@scadasolutions.com  (subject: SCADA Engineer)",
  { size: 13, color: "#2563eb" }); ty += 28;

ty += 30; // gap between jobs

// ── Job 2: SCADA Programmer ──
txt("na_j2_h3", TX_X, ty, TX_W, "SCADA Programmer", { size: 20, color: TX }); ty += 32;
txt("na_j2_intro", TX_X, ty, TX_W,
  "SCADA Solutions is currently looking for talented, highly motivated, and dependable\n" +
  "field technicians (junior and experienced) to join our team in the San Diego area.\n" +
  "This is your chance to work in one of the fastest-growing industries: renewable energy.",
  { size: 13, color: TX }); ty += 68;

txt("na_j2_r_h", TX_X, ty, TX_W, "Responsibilities", { size: 15, color: TXB }); ty += 28;
txt("na_j2_r_body", TX_X, ty, TX_W,
  "You will be directly involved in our cutting-edge SCADA system architecture and\n" +
  "configuration. Work encompasses testing, simulating, installing, and servicing our\n" +
  "communications and SCADA software solution networks. You will be traveling to wind\n" +
  "farm projects around the country about 30% of the time. Your involvement will include\n" +
  "project management, server configuration, troubleshooting, and technical support.",
  { size: 13, color: TX }); ty += 102;

txt("na_j2_pr_h", TX_X, ty, TX_W, "Primary Requirements", { size: 15, color: TXB }); ty += 28;
[
  "Science or Technical Degree from accredited university, e.g. BS in Electrical Engineering (BSEE)",
  "3+ years relevant experience",
  "Experience with Allen Bradley PLC and FactoryTalk/RSView",
  "Strong communications skills (written and verbal), including ability to write detailed technical reports",
  "RF Communications experience",
  "Experience with electronic converters and drivers",
  "Experience with fiber optics and cable assemblies",
  "Experience deploying software systems",
].forEach((item, i) => {
  listItem("na_j2_li" + i, TX_X, ty, TX_W, item);
  ty += 26;
});
ty += 4;

txt("na_j2_cb_h", TX_X, ty, TX_W, "Compensation / Benefits", { size: 15, color: TXB }); ty += 28;
txt("na_j2_comp", TX_X, ty, TX_W,
  "SSI offers competitive compensation packages for the right candidates\nand is an equal opportunity employer.",
  { size: 13, color: TX }); ty += 48;
txt("na_j2_email", TX_X, ty, TX_W,
  "Email resume and cover letter to: info@scadasolutions.com  (subject: SCADA Programmer)",
  { size: 13, color: "#2563eb" }); ty += 28;

y += H_NA;

// ── EUROPEAN UNION JOBS (ContentRightSection: text left, image right) ─────────
const H_EU = 220;
rect("eu", 0, y, W, H_EU, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar("eu", 0, y, W, "EUROPEAN UNION JOBS  #EuropeanUnionJobs  (ContentRightSection: text left / image right)", "#e9ecef", TXM);

rect("eu_lt", 0, y + 26, HALF, H_EU - 26, { bg: BG_W, stroke: STK });
txt("eu_h2", P, y + 44, HALF - P*2, "European Union Jobs", { size: 22, color: TX });
txt("eu_none", P, y + 92, HALF - P*2, "No Current Openings.", { size: 20, color: TX });

rect("eu_img", HALF, y + 26, HALF, H_EU - 26, { bg: BG_PH, stroke: STK });
txt("eu_img_l", HALF + HALF/2 - 60, y + H_EU/2 + 10, 120, "europe-map.jpg",
  { size: 14, color: TXM, align: "center" });
y += H_EU;

// ── APPLICANT PRIVACY POLICY (ContentLeftSection: image left, text right) ─────
const H_PP = 360;
rect("pp", 0, y, W, H_PP, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar("pp", 0, y, W, "APPLICANT PRIVACY POLICY  #PrivacyPolicy  (ContentLeftSection: image left / text right)", "#e9ecef", TXM);

rect("pp_img", 0, y + 26, HALF, H_PP - 26, { bg: BG_PH, stroke: STK });
txt("pp_img_l", HALF/2 - 80, y + (H_PP - 26)/2, 160, "privacy-policy.jpg",
  { size: 14, color: TXM, align: "center" });

txt("pp_h2", HALF + P, y + 44, HALF - P*2, "Applicant Privacy Policy", { size: 22, color: TX });
txt("pp_p1",  HALF + P, y + 90, HALF - P*2,
  "SCADA Solutions respects the privacy of any personal information we obtain in\n" +
  "connection with your application for employment. Your personal information will\n" +
  "be used to determine your suitability for a position within SSI and, if applicable,\n" +
  "your terms of employment or engagement. Your details may be held in paper or\n" +
  "electronic form for up to two years. SSI may disclose your details to verify or\n" +
  "obtain additional information about you from third parties, including education\n" +
  "claims, previous employment, and references.",
  { size: 13, color: TX });
txt("pp_p2", HALF + P, y + 236, HALF - P*2,
  "We take every precaution to protect your privacy. If you have concerns, questions,\n" +
  "or comments about your privacy in your dealings with SCADA Solutions, please contact us.",
  { size: 13, color: TX });
btn("pp_cta", HALF + P, y + 300, "[ Contact Us ]",
  { bg: "#4466cc", stroke: "#4466cc", color: TXL, w: 160 });
y += H_PP;

// ── FOOTER (h=260) ─────────────────────────────────────────────────────────────
const H_FOOT = 260;
rect("footer", 0, y, W, H_FOOT, { bg: BG_W, stroke: STKD, sw: 2 });
rect("ftr_bar", 0, y, W, 50, { bg: "#60a5fa", stroke: "#3b82f6" });
txt("ftr_bar_t", 220, y + 14, 1000, "Control Systems Integration",
  { size: 16, color: TXL, align: "center" });

rect("ftr_c1", 0, y + 50, THIRD, H_FOOT - 50, { bg: BG_W, stroke: STK });
rect("ftr_logo_ph", 50, y + 76, 200, 62, { bg: BG_PH, stroke: STK });
txt("ftr_logo_l", 50, y + 146, 200, "scada-solutions-logo.png",
  { size: 11, color: TXM, align: "center" });
txt("ftr_copy", 20, y + 196, THIRD - 40,
  "© 2026 All Rights Reserved | SCADA Solutions, Inc.",
  { size: 11, color: TXM, align: "center" });

rect("ftr_c2", THIRD, y + 50, THIRD, H_FOOT - 50, { bg: BG_W, stroke: STK });
txt("ftr_lic", THIRD + P, y + 88, THIRD - P*2,
  "Registered California DIR Public Works Contractor\n#777306",
  { size: 13, color: TX, align: "center" });
txt("ftr_li", THIRD + P, y + 166, THIRD - P*2, "[ LinkedIn ]",
  { size: 24, color: "#2563eb", align: "center" });

rect("ftr_c3", THIRD * 2, y + 50, W - THIRD * 2, H_FOOT - 50, { bg: BG_W, stroke: STK });
txt("ftr_ch", THIRD*2 + P, y + 76, W - THIRD*2 - P*2, "Contact Information",
  { size: 18, color: TX, align: "center" });
txt("ftr_ph", THIRD*2 + P, y + 128, W - THIRD*2 - P*2, "☎  949-509-9605",
  { size: 14, color: TX, align: "center" });
txt("ftr_em", THIRD*2 + P, y + 160, W - THIRD*2 - P*2, "✉  info@scadasolutions.com",
  { size: 14, color: TX, align: "center" });

// ── OUTPUT ─────────────────────────────────────────────────────────────────────
process.stdout.write(JSON.stringify({
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements,
  appState: { gridSize: null, viewBackgroundColor: "#f8f9fa" },
  files: {}
}, null, 2));
