// Generates wireframes/home.excalidraw from homepage component data
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

function sectionBar(id, x, y, w, label, barBg, labelColor) {
  rect(id + "_bar", x, y, w, 26, { bg: barBg, stroke: "#6b7280" });
  txt(id + "_bar_t", x + 8, y + 5, w - 16, label, { size: 11, color: labelColor });
}

function field(id, fx, fy, fw, ph) {
  rect(id, fx, fy, fw, 44, { bg: "#4B5563", stroke: "#6b7280", round: true });
  txt(id + "_t", fx + 12, fy + 14, fw - 24, ph, { size: 13, color: "#9ca3af" });
}

const P  = 16;
const HALF  = W / 2;
const THIRD = Math.floor(W / 3);
const BG_W   = "#ffffff";
const BG_L   = "#f8f9fa";
const BG_B   = "#bfdbfe";   // blue-200
const BG_DK  = "#374151";   // dark hero/contact
const BG_MD  = "#9ca3af";   // parallax section stand-in
const BG_PH  = "#dedede";   // image placeholder
const BG_BTN = "#e5e7eb";
const TX     = "#1f2937";
const TXL    = "#ffffff";
const TXM    = "#6b7280";
const STK    = "#9ca3af";
const STKD   = "#6b7280";

let y = 0;

// ── HEADER (h=80) ────────────────────────────────────────────────────────────
const H_HDR = 80;
rect("header",  0, y, W, H_HDR, { bg: BG_W, stroke: STKD, sw: 2 });
rect("hdr_logo",0, y, 300, H_HDR, { bg: "#f1f3f5", stroke: STK });
txt("hdr_logo_t", P, y + 30, 268, "[scada-solutions-logo.png]", { size: 12, color: TXM });
txt("hdr_nav", 310, y + 30, 820, "Home ▾  |  Services ▾  |  Products ▾  |  Company ▾  |  Wind Power ▾  |  Careers ▾", { size: 13, color: TX, align: "center" });
rect("hdr_cta", 1140, y + 14, 280, 52, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("hdr_cta_t", 1150, y + 30, 260, "[ Contact Us ]", { size: 13, color: TXL, align: "center" });
y += H_HDR;

// ── HERO (h=580) ─────────────────────────────────────────────────────────────
const H_HERO = 580;
rect("hero", 0, y, W, H_HERO, { bg: BG_DK, stroke: STKD, sw: 2 });
txt("hero_note", P, y + P, 900,
  "BG: hero-bg-1.webp / hero-bg-2.webp / hero-bg-3.webp  (rotating every 5s, fade transition)",
  { size: 11, color: TXM });
txt("hero_h1", 200, y + 186, 1040,
  "Streamlined Integration Solutions for Industrial Automation",
  { size: 34, color: TXL, align: "center" });
txt("hero_sub", 340, y + 272, 760,
  "Control Systems Integration Services | Irvine",
  { size: 20, color: "#d1d5db", align: "center" });
rect("hero_cta_box", 600, y + 330, 240, 50, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("hero_cta_t", 616, y + 347, 208, "[ Contact Us ]", { size: 14, color: TXL, align: "center" });
y += H_HERO;

// ── EXPLANATION (h=840) ───────────────────────────────────────────────────────
const H_EXP = 840;
rect("exp", 0, y, W, H_EXP, { bg: BG_B, stroke: STKD, sw: 2 });
sectionBar("exp", 0, y, W, "EXPLANATION  (bg-blue-200)", "#93c5fd", TXM);
txt("exp_h2a", 220, y + 40, 1000, "Integrating Tomorrow's Energy. Today.", { size: 24, color: TX, align: "center" });
rect("exp_v1", 240, y + 86, 960, 340, { bg: "#c3cfe2", stroke: STK });
txt("exp_v1_t", 440, y + 246, 560, "[ Vimeo: vimeo.com/1148983289 ]", { size: 14, color: TXM, align: "center" });
txt("exp_h2b", 220, y + 446, 1000, "SUN, BIO, WIND, WATER, WASTE WATER", { size: 24, color: TX, align: "center" });
rect("exp_v2", 240, y + 492, 960, 320, { bg: "#c3cfe2", stroke: STK });
txt("exp_v2_t", 440, y + 642, 560, "[ YouTube: youtube.com/v9_rRJJ_1JY ]", { size: 14, color: TXM, align: "center" });
y += H_EXP;

// ── PRODUCT OVERVIEW (h=420) ──────────────────────────────────────────────────
const H_PRD = 420;
rect("prd", 0, y, W, H_PRD, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar("prd", 0, y, W, "PRODUCT OVERVIEW", "#e9ecef", TXM);
// left
rect("prd_lt", 0, y + 26, HALF, H_PRD - 26, { bg: BG_W, stroke: STK });
txt("prd_h2", P, y + 42, HALF - P*2,
  "Seamless SCADA Solutions for Uninterrupted Operations",
  { size: 20, color: TX });
txt("prd_body", P, y + 100, HALF - P*2,
  "SCADA Solutions capabilities in system design engineering of complete SCADA\nsolutions, coupled with experienced and professional installation knowledge,\nallow for seamless delivery and implementation with minimal operational\ninterruption. Our superior communication, automation, and integration\ncapabilities set us apart from other third-party SCADA providers.",
  { size: 13, color: TX });
rect("prd_cta", P, y + 358, 160, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("prd_cta_t", P + 10, y + 376, 140, "[ Get in Touch ]", { size: 13, color: TXL, align: "center" });
// right – 2×2 gallery
rect("prd_rt", HALF, y + 26, HALF, H_PRD - 26, { bg: BG_L, stroke: STK });
const G_W = 320, G_H = 150, G_PAD = 20;
[[0,0,"windcapture-01-1920w.webp"],[1,0,"windcapture-02-1920w.webp"],
 [0,1,"windcapture-03-1920w.webp"],[1,1,"windcapture-04-1920w.webp"]].forEach(([col,row,name]) => {
  const gx = HALF + G_PAD + col * (G_W + G_PAD);
  const gy = y + 46  + row * (G_H + G_PAD);
  rect("prd_i"+name, gx, gy, G_W, G_H, { bg: BG_PH, stroke: STK });
  txt("prd_il"+name, gx, gy + G_H/2 - 8, G_W, name, { size: 11, color: TXM, align: "center" });
});
y += H_PRD;

// ── DESIGN & ENGINEERING (h=380) ──────────────────────────────────────────────
const H_DE = 380;
rect("de", 0, y, W, H_DE, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar("de", 0, y, W, "DESIGN AND ENGINEERING  (bg-base-200  |  text left / image right)", "#e9ecef", TXM);
rect("de_lt", 0, y + 26, HALF, H_DE - 26, { bg: BG_L, stroke: STK });
txt("de_h2", P, y + 42, HALF - P*2,
  "Tailored Design and Engineering Solutions by Expert Professionals",
  { size: 20, color: TX });
txt("de_body", P, y + 100, HALF - P*2,
  "Our team of skilled engineers and designers is ready to support you with your\ndesign and engineering requirements. We provide detailed, expert programming\ntailored to meet your specific requests and needs. This encompasses identifying\nthe right components and disciplines for integration, determining configuration\ndetails and installation specifications, and guaranteeing utmost efficiency.",
  { size: 13, color: TX });
rect("de_cta", P, y + 316, 140, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("de_cta_t", P + 10, y + 334, 120, "[ Reach Out ]", { size: 13, color: TXL, align: "center" });
rect("de_img", HALF, y + 26, HALF, H_DE - 26, { bg: BG_PH, stroke: STK });
txt("de_img_l", HALF + 310, y + 184, 120, "turbine.webp", { size: 14, color: TXM, align: "center" });
y += H_DE;

// ── SERVICE AND SUPPORT (h=320) ────────────────────────────────────────────────
const H_SVC = 320;
rect("svc", 0, y, W, H_SVC, { bg: BG_MD, stroke: STKD, sw: 2 });
sectionBar("svc", 0, y, W, "SERVICE AND SUPPORT  (BG: solar-w-turbines.webp, parallax/fixed)", "#6b7280", TXL);
txt("svc_h2", 220, y + 48, 1000, "Unmatched Support and Service Guarantee", { size: 28, color: TXL, align: "center" });
txt("svc_body", 200, y + 106, 1040,
  "Service and support at SCADA Solutions never end. We offer aggressive warranties with all our products\nand installations. Any problems that impact system availability are given immediate priority and responded\nto on the same day. Any non-critical problems are acknowledged within one day and followed up within 48h.",
  { size: 13, color: TXL, align: "center" });
rect("svc_cta", 600, y + 254, 240, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("svc_cta_t", 616, y + 272, 208, "[ Get Consultation ]", { size: 13, color: TXL, align: "center" });
y += H_SVC;

// ── INTEGRATION (h=380) ────────────────────────────────────────────────────────
const H_INT = 380;
rect("int", 0, y, W, H_INT, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar("int", 0, y, W, "INTEGRATION  (image left / text right)", "#e9ecef", TXM);
rect("int_img", 0, y + 26, HALF, H_INT - 26, { bg: BG_PH, stroke: STK });
txt("int_img_l", HALF/2 - 60, y + 190, 120, "turbines.webp", { size: 14, color: TXM, align: "center" });
rect("int_rt", HALF, y + 26, HALF, H_INT - 26, { bg: BG_W, stroke: STK });
txt("int_h2", HALF + P, y + 42, HALF - P*2, "SCADA Solutions Integration", { size: 20, color: TX });
txt("int_body", HALF + P, y + 98, HALF - P*2,
  "Integration has become increasingly fundamental given the rising number of IT\ncomponents that must interact in today's wind farm environment. Our engineers\nand installers are experts in system integration and configuration. We can\ndesign a new platform to be compatible with nearly every component of an\nexisting infrastructure.",
  { size: 13, color: TX });
rect("int_cta", HALF + P, y + 316, 140, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("int_cta_t", HALF + P + 10, y + 334, 120, "[ Contact Us ]", { size: 13, color: TXL, align: "center" });
y += H_INT;

// ── INSTALLATION (h=380) ──────────────────────────────────────────────────────
const H_INST = 380;
rect("inst", 0, y, W, H_INST, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar("inst", 0, y, W, "INSTALLATION  (bg-base-200  |  text left / image right)", "#e9ecef", TXM);
rect("inst_lt", 0, y + 26, HALF, H_INST - 26, { bg: BG_L, stroke: STK });
txt("inst_h2", P, y + 42, HALF - P*2, "Expert Installation for Your Network Needs", { size: 20, color: TX });
txt("inst_body", P, y + 98, HALF - P*2,
  "Our expertise in system design engineering of complete SCADA solutions, coupled\nwith our experienced and professional installation knowledge, allows for seamless\ndelivery and implementation. Our experienced field technicians ensure complete\nand timely implementation of the client's network solutions with minimal\ndisruption to vital business operations and functions.",
  { size: 13, color: TX });
rect("inst_cta", P, y + 316, 140, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("inst_cta_t", P + 10, y + 334, 120, "[ Call Today ]", { size: 13, color: TXL, align: "center" });
rect("inst_img", HALF, y + 26, HALF, H_INST - 26, { bg: BG_PH, stroke: STK });
txt("inst_img_l", HALF + 310, y + 184, 120, "networking.webp", { size: 14, color: TXM, align: "center" });
y += H_INST;

// ── SOLAR SERVICES (h=320) ────────────────────────────────────────────────────
const H_SOLAR = 320;
rect("solar", 0, y, W, H_SOLAR, { bg: BG_MD, stroke: STKD, sw: 2 });
sectionBar("solar", 0, y, W,
  "SOLAR SERVICES  (BG: 16_AES-Lawai-Solar_1-scaled-1920w.webp, parallax/fixed)",
  "#6b7280", TXL);
txt("solar_h2", 120, y + 48, 1200,
  "Empowering Solar Projects with Solutions for Developers",
  { size: 28, color: TXL, align: "center" });
txt("solar_body", 200, y + 106, 1040,
  "We offer most of its products and services to solar energy project developers and operators.\nWe deliver communications systems, including fiber optic and smart radio solutions. We also\noffer customized SCADA design and development with complete installation, training and service.",
  { size: 13, color: TXL, align: "center" });
rect("solar_cta", 600, y + 254, 240, 44, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("solar_cta_t", 616, y + 272, 208, "[ Get Consultation ]", { size: 13, color: TXL, align: "center" });
y += H_SOLAR;

// ── WIND SERVICES (h=380) ─────────────────────────────────────────────────────
const H_WIND = 380;
rect("wind", 0, y, W, H_WIND, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar("wind", 0, y, W, "WIND SERVICES  (image left / text right)", "#e9ecef", TXM);
rect("wind_img", 0, y + 26, HALF, H_WIND - 26, { bg: BG_PH, stroke: STK });
txt("wind_img_l", HALF/2 - 90, y + 190, 180, "turbines-clouds.webp", { size: 14, color: TXM, align: "center" });
rect("wind_rt", HALF, y + 26, HALF, H_WIND - 26, { bg: BG_W, stroke: STK });
txt("wind_h2", HALF + P, y + 42, HALF - P*2,
  "Empowering Industries with Wind SCADA Solutions", { size: 20, color: TX });
txt("wind_body", HALF + P, y + 98, HALF - P*2,
  "We specialize in providing control system integration for windpower projects.\nWith our expertise and experience, we have successfully completed automation\nand communication systems for nearly every industrial application, including\nwind farms. Our team is dedicated to delivering reliable and efficient solutions\nthat optimize the performance of wind turbines and ensure seamless operations.",
  { size: 13, color: TX });
y += H_WIND;

// ── FAQs (h=500) ─────────────────────────────────────────────────────────────
const H_FAQ = 500;
rect("faq", 0, y, W, H_FAQ, { bg: BG_MD, stroke: STKD, sw: 2 });
sectionBar("faq", 0, y, W, "FAQs  (BG: solar-blur-bg.webp, parallax/fixed)", "#6b7280", TXL);
txt("faq_h2", 220, y + 42, 1000, "Frequently Asked Questions", { size: 28, color: TXL, align: "center" });
[
  "▶  Why is SCADA Solutions so popular?",
  "▶  What is Wind Energy?",
  "▶  What is a Wind Turbine and how does it work?",
  "▶  How many Turbines does it take to make one Megawatt (MW)?",
  "▶  How do I contact you?",
].forEach((q, i) => {
  const ry = y + 100 + i * 66;
  rect("faq_b" + i, 200, ry, 1040, 54, { bg: "#4b5563", stroke: STK });
  txt("faq_t" + i, 220, ry + 16, 1000, q, { size: 14, color: TXL });
});
y += H_FAQ;

// ── CONTACT US (h=640) ────────────────────────────────────────────────────────
const H_CONT = 640;
rect("cont", 0, y, W, H_CONT, { bg: BG_DK, stroke: STKD, sw: 2 });
sectionBar("cont", 0, y, W, "CONTACT US  (BG: turbines-blue-bg.webp, dark overlay)", "#4b5563", TXL);
txt("cont_h2",  220, y + 42, 1000, "Contact Us", { size: 28, color: TXL, align: "center" });
txt("cont_ph",  220, y + 92, 1000, "☎  Call Us  —  949-509-9605", { size: 14, color: TXL, align: "center" });
txt("cont_em",  220, y + 118, 1000, "✉  Email Us  —  info@scadasolutions.com", { size: 14, color: TXL, align: "center" });
txt("cont_intro", 300, y + 154, 840,
  "Enter your information below along with a brief message and your contact details.\nA member of our team will be in touch as soon as possible to schedule a consultation.",
  { size: 13, color: "#d1d5db", align: "center" });
// form container
const FX = 280, FW = 880;
rect("form_bg", FX, y + 218, FW, 378, { bg: "#2d3748", stroke: STKD });
const fw2 = Math.floor((FW - P * 3) / 2);
const fy0 = y + 238;
field("f_name",  FX + P,           fy0,       fw2, "[ Contact Name ]");
field("f_title", FX + P*2 + fw2,   fy0,       fw2, "[ Title ]");
field("f_phone", FX + P,           fy0 + 56,  fw2, "[ ☎ Phone ]");
field("f_email", FX + P*2 + fw2,   fy0 + 56,  fw2, "[ ✉ Email ]");
field("f_subj",  FX + P,           fy0 + 112, FW - P*2, "[ Subject ]");
field("f_prop",  FX + P,           fy0 + 168, fw2, "[ Property Type ]");
field("f_co",    FX + P*2 + fw2,   fy0 + 168, fw2, "[ Company Name ]");
rect("f_msg",  FX + P, fy0 + 224, FW - P*2, 80, { bg: "#4B5563", stroke: STKD, round: true });
txt("f_msg_t", FX + P + 12, fy0 + 240, FW - P*2 - 24, "[ Message  (5 rows) ]", { size: 13, color: "#9ca3af" });
rect("f_send",  FX + P, fy0 + 318, 180, 50, { bg: "#4466cc", stroke: "#4466cc", round: true });
txt("f_send_t", FX + P + 10, fy0 + 338, 160, "[ Send Message ]", { size: 13, color: TXL, align: "center" });
y += H_CONT;

// ── FOOTER (h=260) ────────────────────────────────────────────────────────────
const H_FOOT = 260;
rect("footer", 0, y, W, H_FOOT, { bg: BG_W, stroke: STKD, sw: 2 });
rect("ftr_bar", 0, y, W, 50, { bg: "#60a5fa", stroke: "#3b82f6" });
txt("ftr_bar_t", 220, y + 14, 1000, "Control Systems Integration", { size: 16, color: TXL, align: "center" });
// col 1
rect("ftr_c1", 0, y + 50, THIRD, H_FOOT - 50, { bg: BG_W, stroke: STK });
rect("ftr_logo_ph", 50, y + 76, 200, 62, { bg: BG_PH, stroke: STK });
txt("ftr_logo_l", 50, y + 146, 200, "scada-solutions-logo.png", { size: 11, color: TXM, align: "center" });
txt("ftr_copy", 20, y + 196, THIRD - 40, "© 2026 All Rights Reserved | SCADA Solutions, Inc.", { size: 11, color: TXM, align: "center" });
// col 2
rect("ftr_c2", THIRD, y + 50, THIRD, H_FOOT - 50, { bg: BG_W, stroke: STK });
txt("ftr_lic", THIRD + P, y + 88, THIRD - P*2,
  "Registered California DIR Public Works Contractor\n#777306",
  { size: 13, color: TX, align: "center" });
txt("ftr_li", THIRD + P, y + 166, THIRD - P*2, "[ LinkedIn ]", { size: 24, color: "#2563eb", align: "center" });
// col 3
rect("ftr_c3", THIRD * 2, y + 50, W - THIRD * 2, H_FOOT - 50, { bg: BG_W, stroke: STK });
txt("ftr_ch", THIRD*2 + P, y + 76, W - THIRD*2 - P*2, "Contact Information", { size: 18, color: TX, align: "center" });
txt("ftr_ph", THIRD*2 + P, y + 128, W - THIRD*2 - P*2, "☎  949-509-9605", { size: 14, color: TX, align: "center" });
txt("ftr_em", THIRD*2 + P, y + 160, W - THIRD*2 - P*2, "✉  info@scadasolutions.com", { size: 14, color: TX, align: "center" });

// ── OUTPUT ────────────────────────────────────────────────────────────────────
process.stdout.write(JSON.stringify({
  type: "excalidraw",
  version: 2,
  source: "https://excalidraw.com",
  elements,
  appState: { gridSize: null, viewBackgroundColor: "#f8f9fa" },
  files: {}
}, null, 2));
