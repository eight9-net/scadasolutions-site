// Generator: wind-power.excalidraw
// WindEnergyTutorial.vue — Hero, What is Wind Energy, What is a Wind Turbine,
// How Turbines Work, Wind Facts, Glossary
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

function imgBox(id, x, iy, w, h, filename) {
  rect(id + '_box', x, iy, w, h, { bg: BG_PH, stroke: STK });
  txt(id + '_lbl', x + 8, iy + h / 2 - 10, w - 16, '[' + filename + ']', { size: 12, color: TXM, align: 'center' });
}

function btn(id, x, iy, label, opts = {}) {
  const bw  = opts.w      || 160;
  const bg  = opts.bg     || BG_BTN;
  const stk = opts.stroke || STK;
  const col = opts.color  || TX;
  rect(id + '_bg', x, iy, bw, 36, { bg, stroke: stk, round: true });
  txt(id + '_lbl', x + 10, iy + 9, bw - 20, label, { size: 13, color: col, align: 'center' });
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
rect('hero', 0, y, W, 220, { bg: BG_DK, stroke: STKD, sw: 2 });
txt('hero_title', 80, y + 76, W - 160, 'WIND ENERGY TUTORIAL', { size: 28, color: TXL, align: 'center' });
btn('hero_btn', W / 2 - 80, y + 158, 'Contact Us', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
y += 220;

// ─── SECTION 1: What is Wind Energy (text left / image right) ─────────────────
const s1H = 420;
rect('s1', 0, y, W, s1H + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('s1', 0, y, W, 'WHAT IS WIND ENERGY  (#WindEnergy)  —  text left / image right', '#dbeafe', TXM);
const s1y = y + 26;
rect('s1_textbg', 0, s1y, HALF, s1H, { bg: BG_L, stroke: STK });
txt('s1_h2', P, s1y + 20, HALF - P * 2, 'What is Wind Energy', { size: 20, color: TX });
txt('s1_b1', P, s1y + 58, HALF - P * 2,
  "In reality, wind energy is a converted form of solar energy. The sun's radiation heats different\nparts of the earth at different rates, most notably during the day and night, but also when\ndifferent surfaces absorb or reflect at different rates. This, in turn, causes portions of the\natmosphere to warm differently. Hot air rises, reducing the atmospheric pressure at the\nearth's surface, and cooler air is drawn in to replace it. The result is wind.", { size: 13, color: TX });
txt('s1_b2', P, s1y + 192, HALF - P * 2,
  'Air has mass, and when it is in motion, it contains the energy of that motion ("kinetic energy").\nSome portion of that energy can be converted into other forms of mechanical force or electricity\nthat we can use to perform work.', { size: 13, color: TX });
btn('s1_btn', P, s1y + 360, 'Contact Us', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
imgBox('s1_img', HALF, s1y, HALF, s1H, 'turbines-clouds.webp');
y += 26 + s1H;

// ─── SECTION 2: What is a Wind Turbine (image left / text right) ──────────────
const s2H = 480;
rect('s2', 0, y, W, s2H + 26, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('s2', 0, y, W, 'WHAT IS A WIND TURBINE  —  image left / 2 stacked images right', '#dcfce7', TXM);
const s2y = y + 26;
rect('s2_textbg', 0, s2y, HALF, s2H, { bg: BG_W, stroke: STK });
txt('s2_h2', P, s2y + 16, HALF - P * 2, 'What is a Wind Turbine, and how does it work?', { size: 18, color: TX });
txt('s2_b1', P, s2y + 60, HALF - P * 2,
  'A wind energy system transforms the kinetic energy of the wind into mechanical or electrical\nenergy that can be harnessed for practical use. Mechanical energy is most commonly used\nfor pumping water in rural or remote locations.', { size: 13, color: TX });
txt('s2_b2', P, s2y + 150, HALF - P * 2,
  'There are two basic designs of wind electric turbines: vertical-axis, or "egg-beater" style,\nand horizontal-axis (propeller-style) machines. Horizontal-axis wind turbines are most common\ntoday, constituting nearly all of the "utility-scale" turbines in the global market.', { size: 13, color: TX });
btn('s2_btn', P, s2y + 390, 'Contact Us', { bg: '#4466cc', stroke: '#4466cc', color: TXL });
const galImgH = Math.floor(s2H / 2) - 5;
imgBox('s2_img1', HALF, s2y, HALF, galImgH, 'turbine-components.webp');
imgBox('s2_img2', HALF, s2y + galImgH + 10, HALF, s2H - galImgH - 10, 'wind-components.jpg');
y += 26 + s2H;

// ─── SECTION 3: How Turbines Work (2-col — very long) ─────────────────────────
const s3H = 1520;
rect('s3', 0, y, W, s3H + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('s3', 0, y, W, 'HOW TURBINES WORK  —  2-column layout', '#fef9c3', TXM);
const s3y = y + 26;
rect('s3_lbg', 0, s3y, HALF, s3H, { bg: BG_L, stroke: STK });
rect('s3_rbg', HALF, s3y, HALF, s3H, { bg: BG_W, stroke: STK });

// Left column
txt('s3_ltitle', P, s3y + 16, HALF - P * 2, 'How Turbines Work', { size: 18, color: TX });
imgBox('s3_scaleimg', 60, s3y + 50, HALF - 120, 200, 'turbine-scales.svg');
let ly = s3y + 270;
txt('s3_lh4_1', P, ly, HALF - P * 2, 'What do Turbine subsystems include?', { size: 15, color: TX }); ly += 28;
txt('s3_li1', 30, ly, HALF - 60, '›  rotor and blades, which convert the wind\'s energy into rotational shaft energy', { size: 13, color: TX }); ly += 22;
txt('s3_li2', 30, ly, HALF - 60, '›  a nacelle (enclosure) containing a drive train, usually including a gearbox and generator', { size: 13, color: TX }); ly += 22;
txt('s3_li3', 30, ly, HALF - 60, '›  a tower, to support the rotor and drive train', { size: 13, color: TX }); ly += 22;
txt('s3_li4', 30, ly, HALF - 60, '›  electronic equipment such as controls, electrical cables, and interconnection equipment', { size: 13, color: TX }); ly += 30;
txt('s3_lnote', P, ly, HALF - P * 2, '* Some turbines do not require a gearbox. Wind turbines vary in size.', { size: 13, color: TXM }); ly += 30;
txt('s3_lnote2', P, ly, HALF - P * 2, 'The electricity generated by a utility-scale wind turbine is normally collected and fed\ninto utility power lines, where it is mixed with electricity from other power plants.', { size: 13, color: TX }); ly += 50;
txt('s3_lh4_2', P, ly, HALF - P * 2, 'What are wind turbines made of?', { size: 15, color: TX }); ly += 28;
txt('s3_lmat', P, ly, HALF - P * 2, 'The towers are mostly tubular and made of steel. The blades are made of fiberglass-reinforced\npolyester or wood epoxy.', { size: 13, color: TX }); ly += 50;
txt('s3_lh4_3', P, ly, HALF - P * 2, 'How big is a wind turbine?', { size: 15, color: TX }); ly += 28;
txt('s3_lbig', P, ly, HALF - P * 2,
  'Utility-scale wind turbines for land-based wind farms come in various sizes, with rotor\ndiameters ranging from about 50 meters to about 90 meters, and with towers of roughly\nthe same size. Small wind turbines intended for residential use have rotor diameters\nof 8 meters or less on towers of 40 meters or less.', { size: 13, color: TX }); ly += 90;
txt('s3_lh4_4', P, ly, HALF - P * 2, 'How much electricity can one wind turbine generate?', { size: 15, color: TX }); ly += 28;
txt('s3_lelec', P, ly, HALF - P * 2,
  'Wind turbines being manufactured now have power ratings ranging from 250 watts to 5 MW.\nA 10-kW wind turbine can generate about 10,000 kWh annually at a site with wind speeds\naveraging 12 mph — about enough to power a typical household.', { size: 13, color: TX }); ly += 68;
txt('s3_lh4_5', P, ly, HALF - P * 2, 'Wind speed and power availability', { size: 15, color: TX }); ly += 28;
txt('s3_lwind', P, ly, HALF - P * 2,
  'Wind speed is a crucial element in projecting turbine performance. Generally, an annual\naverage wind speed greater than 4 m/s (9 mph) is required for small wind electric turbines.\nThe power available in the wind is proportional to the cube of its speed.', { size: 13, color: TX });

// Right column
let ry = s3y + 20;
txt('s3_rh4_1', HALF + P, ry, HALF - P * 2, 'How many turbines does it take to make one megawatt (MW)?', { size: 15, color: TX }); ry += 28;
txt('s3_rmw', HALF + P, ry, HALF - P * 2,
  'Most manufacturers of utility-scale turbines offer machines in the 700-kW to 2.5-MW range.\nTen 700-kW units would make a 7-MW wind plant, while ten 2.5-MW machines would make\na 25-MW facility.', { size: 13, color: TX }); ry += 70;
txt('s3_rh4_2', HALF + P, ry, HALF - P * 2, 'What is a wind power plant?', { size: 15, color: TX }); ry += 28;
txt('s3_rplant', HALF + P, ry, HALF - P * 2,
  'The most economical application of wind electric turbines is in groups of large machines (660 kW\nand up), called "wind power plants" or "wind farms." Wind plants can range in size from a\nfew megawatts to hundreds of megawatts in capacity.', { size: 13, color: TX }); ry += 80;
txt('s3_rh4_3', HALF + P, ry, HALF - P * 2, 'What is a "capacity factor"?', { size: 15, color: TX }); ry += 28;
txt('s3_rcap', HALF + P, ry, HALF - P * 2,
  "The capacity factor is one element in measuring the productivity of a wind turbine or other\npower production facility. It compares the plant's actual production over a given period\nof time with the amount of power the plant would have produced if it had run at full capacity.\nA capacity factor of 25% to 40% is common for wind plants.", { size: 13, color: TX }); ry += 90;
txt('s3_rh4_4', HALF + P, ry, HALF - P * 2, 'What is "availability" or "availability factor"?', { size: 15, color: TX }); ry += 28;
txt('s3_ravail', HALF + P, ry, HALF - P * 2,
  'The availability factor is a measurement of the reliability of a wind turbine or other power\nplant. It refers to the percentage of time that a plant is ready to generate. Modern wind\nturbines have an availability of more than 98% — higher than most other types of power plants.', { size: 13, color: TX }); ry += 80;
txt('s3_rh4_5', HALF + P, ry, HALF - P * 2, 'Why might you see wind turbines not turning?', { size: 15, color: TX }); ry += 28;
txt('s3_rnotturn', HALF + P, ry, HALF - P * 2,
  'You occasionally observe some turbines in a windfarm not turning while most are operating.\nThere are a number of possible reasons:', { size: 13, color: TX }); ry += 48;
txt('s3_rnli1', HALF + 30, ry, HALF - 60, '›  Insufficient wind to start operation (about 7 mph)', { size: 13, color: TX }); ry += 22;
txt('s3_rnli2', HALF + 30, ry, HALF - 60, '›  Turbine may be out of service for maintenance', { size: 13, color: TX }); ry += 22;
txt('s3_rnli3', HALF + 30, ry, HALF - 60, '›  The utility may request the windfarm to reduce energy production', { size: 13, color: TX });
y += 26 + s3H;

// ─── WIND FACTS ───────────────────────────────────────────────────────────────
const factsH = 700;
rect('facts', 0, y, W, factsH + 26, { bg: BG_W, stroke: STKD, sw: 2 });
sectionBar('facts', 0, y, W, 'WIND FACTS  (#Facts)', '#fef2f2', TXM);
const factsy = y + 26;
rect('facts_bg', 0, factsy, W, factsH, { bg: BG_W, stroke: STK });
txt('facts_h2', 80, factsy + 20, W - 160, 'Wind Facts', { size: 22, color: TX, align: 'center' });
txt('facts_h4', 80, factsy + 58, W - 160, 'Did you know?', { size: 15, color: TX });
const factsItems = [
  'Investment in wind in the US grew from $700 million in 2004 to $18 billion in 2008 ($48 billion worldwide)',
  'The US is the world leader in new installations (8,358 MW), total MW (25,000+) and annual output',
  'Wind was 42% of power capacity (MW) added in the US in 2008 — more than any other form of power generation',
  'In 2008, 35,000 jobs were added in the wind industry, raising the total to more than 85,000',
  'Over 70 new manufacturing plants or expansions were announced or built since January 2007 in 21 states',
  'A 2008 DOE study showed it is technically feasible to produce 20% of electricity through wind power by 2030',
  'Cumulatively, the 20% wind scenario would avoid the consumption of 4 trillion gallons of water through 2030',
  'Each wind turbine provides farm or ranch income annually — $2,000–4,000 per megawatt',
  'Each megawatt (MW) of wind energy capacity installed in the U.S. provides 2.5–3 job-years of employment',
  'To generate the same electricity as a 1-MW wind turbine, a fossil fuel plant requires ~60 million gallons of water/year',
  'Wind energy could provide 6% of our nation\'s electricity by 2020 and 20% by 2030',
  'As many as 215,000 new jobs would be created by adding 50,000 MW of new wind installations in the U.S.',
];
let fi = factsy + 86;
factsItems.forEach((item, i) => {
  txt('facts_li' + i, 80, fi, W - 160, '›  ' + item, { size: 13, color: TX });
  fi += 26;
});
y += 26 + factsH;

// ─── GLOSSARY ─────────────────────────────────────────────────────────────────
const glossH = 1200;
rect('gloss', 0, y, W, glossH + 26, { bg: BG_L, stroke: STKD, sw: 2 });
sectionBar('gloss', 0, y, W, 'GLOSSARY  (#Glossary)', '#f0fdf4', TXM);
const glossy = y + 26;
rect('gloss_bg', 0, glossy, W, glossH, { bg: BG_L, stroke: STK });
txt('gloss_h2', 80, glossy + 20, W - 160, 'Glossary', { size: 22, color: TX, align: 'center' });
txt('gloss_note', 80, glossy + 54, W - 160, 'Wind energy terminology — key terms', { size: 13, color: TXM, align: 'center' });
const glossItems = [
  ['Annual Energy Production', 'The calculated or measured energy delivered by a wind turbine generator (WTG).'],
  ['Alternating current (AC)', 'An electrical current whose direction reverses periodically, usually many times per second.'],
  ['Betz limit', 'The theoretical maximum amount of energy that a perfect wind turbine can extract — 59% of wind kinetic energy.'],
  ['Capacity Factor', 'The percent of actual energy for a wind turbine versus the rated maximum power over a specific time period.'],
  ['Commercial Availability (CA)', 'Actual Energy / (Actual Energy + Commercial Lost Energy)'],
  ['Data Capture', 'The percent of time that data is available for a turbine or meteorological station.'],
  ['Direct current (DC)', 'An electrical current flowing in one direction only, defined as from positive to negative voltage.'],
  ['Direct drive', 'A wind turbine whose rotor shaft is directly connected to the electrical generator shaft, without a gearbox.'],
  ['Equivalent Availability Factor (EAF)', 'The percent of time a turbine is available to produce energy due to planned and unplanned outages.'],
  ['Gearbox', 'A mechanical assembly positioned between the main shaft and the electrical generator, matching rotor speed to generator speed.'],
  ['Hub', 'The central fixture of a HAWT rotor, to which the blades are attached.'],
  ['Inverter', 'An electronic device that converts direct current (DC) to alternating current (AC) at the required frequency.'],
  ['kW (Kilowatt)', '1000 watts — a measure of power (energy per unit time).'],
  ['kWh (Kilowatt Hour)', '1000 Watts for one hour — energy unit equal to the energy dissipated by using one kW in one hour.'],
  ['Nacelle', 'The body (including frame and cover) that contains the main bearings, brakes, gearbox, generator, etc.'],
  ['Power coefficient', 'The ratio of the power extracted by a wind turbine to the power available in the wind stream.'],
  ['Power curve', "A graph showing a wind turbine's power output as a function of wind speed."],
  ['Rotor', 'The main rotating drive mechanism of a wind turbine — includes the blades and blade hub.'],
  ['Turbine Efficiency', 'The percent of actual energy produced at the turbine divided by the expected energy for the turbine.'],
  ['Turbulence', 'Change in wind speed and direction over periods of seconds, an intrinsic property of wind.'],
  ['VAWT', 'Vertical-axis wind turbine.'],
  ['Wind shear', 'The increase in wind speed above the ground as a function of height.'],
  ['Yaw', 'The movement of the tower top (nacelle) of a HAWT turning the turbine rotor with respect to the oncoming wind.'],
];
const halfGloss = Math.ceil(glossItems.length / 2);
const colGW = HALF - 100;
glossItems.forEach((item, i) => {
  const col = i < halfGloss ? 0 : 1;
  const row = i < halfGloss ? i : i - halfGloss;
  const gx = 80 + col * HALF;
  const gy = glossy + 88 + row * 44;
  txt('gloss_term' + i, gx, gy, colGW, item[0] + ':', { size: 13, color: TX });
  txt('gloss_def' + i, gx, gy + 18, colGW, item[1], { size: 12, color: TXM });
});
y += 26 + glossH;

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
