// Centralized data for the Global Energy Market Analysis site.
// All figures from the user's provided datasets (Sept 2024 brief).

export const YEARS = [2020, 2021, 2022, 2023, 2024, 2025] as const;
export type Year = (typeof YEARS)[number];

// ---- Section 2: Energy Balance by Region (USER-PROVIDED, exact) ----
export const ENERGY_BALANCE: Record<string, number[]> = {
  Africa:        [ 2.7,  1.2,  0.2, -1.3,  3.2,  1.4],
  "North America":[4.8,  2.8,  5.1, -2.4, -5.7,  6.9],
  "South America":[3.1,  1.3,  0.1,  3.1, -4.0,  5.5],
  Europe:        [-1.8,  1.1, -0.6, -0.8, -2.8, -0.3],
  Oceania:       [ 1.9, -0.6, -3.3, -4.7, -1.1, 10.1],
  Asia:          [-3.8, -5.0,  3.8, -0.9, -0.1, -15],
};

// ---- Section 3: Energy Demand Growth (USER-PROVIDED, exact) ----
export const DEMAND_GROWTH = [
  { year: 2020, value: 7.47 },
  { year: 2021, value: 7.50 },
  { year: 2022, value: 7.53 },
  { year: 2023, value: 7.59 },
  { year: 2024, value: 7.34 },
  { year: 2025, value: 7.83 },
];

// ---- Section 10: Investment by Year & Energy Type (USER-PROVIDED, raw USD) ----
export const INVESTMENT_TYPES = [
  "Biofuel", "Coal", "Electricity", "Gas", "Hydro",
  "Nuclear", "Oil", "Primary Energy", "Solar", "Wind",
] as const;
export type InvestmentType = (typeof INVESTMENT_TYPES)[number];

export const INVESTMENT_BY_YEAR: Record<Year, Record<InvestmentType, number>> = {
  2020: {
    Biofuel: 8_634_789_091, Coal: 8_634_789_091, Electricity: 8_634_789_091,
    Gas: 8_634_789_091, Hydro: 8_634_789_091, Nuclear: 8_634_789_091,
    Oil: 8_634_789_091, "Primary Energy": 8_634_789_091, Solar: 8_634_789_091, Wind: 8_634_789_091,
  },
  2021: {
    Biofuel: 8_244_330_303, Coal: 8_244_330_303, Electricity: 8_244_330_303,
    Gas: 8_244_330_303, Hydro: 8_244_330_303, Nuclear: 8_244_330_303,
    Oil: 8_244_330_303, "Primary Energy": 8_244_330_303, Solar: 8_244_330_303, Wind: 8_244_330_303,
  },
  2022: {
    Biofuel: 8_201_142_553, Coal: 8_201_142_553, Electricity: 8_201_142_553,
    Gas: 8_201_142_553, Hydro: 8_201_142_553, Nuclear: 8_201_142_553,
    Oil: 8_201_142_553, "Primary Energy": 8_201_142_553, Solar: 8_201_142_553, Wind: 8_201_142_553,
  },
  2023: {
    Biofuel: 8_133_540_678, Coal: 8_133_540_678, Electricity: 8_133_540_678,
    Gas: 8_133_540_678, Hydro: 8_133_540_678, Nuclear: 8_133_540_678,
    Oil: 8_133_540_678, "Primary Energy": 8_133_540_678, Solar: 8_133_540_678, Wind: 8_133_540_678,
  },
  2024: {
    Biofuel: 8_010_891_891, Coal: 8_010_891_891, Electricity: 8_010_891_891,
    Gas: 8_010_891_891, Hydro: 8_010_891_891, Nuclear: 8_010_891_891,
    Oil: 8_010_891_891, "Primary Energy": 8_010_891_891, Solar: 8_010_891_891, Wind: 8_010_891_891,
  },
  2025: {
    Biofuel: 3_400_000_000, Coal: 3_400_000_000, Electricity: 3_400_000_000,
    Gas: 3_400_000_000, Hydro: 3_400_000_000, Nuclear: 3_400_000_000,
    Oil: 3_400_000_000, "Primary Energy": 3_400_000_000, Solar: 3_400_000_000, Wind: 3_400_000_000,
  },
};

// ---- Section 7: Avg Price by Year (USER-PROVIDED) ----
export const PRICE_TREND = [
  { year: 2020, price: 136.14 },
  { year: 2021, price: 135.08 },
  { year: 2022, price: 134.25 },
  { year: 2023, price: 134.97 },
  { year: 2024, price: 135.42 },
  { year: 2025, price: 134.31 },
];

// ---- Section 8: Top countries by production per year (USER-PROVIDED) ----
export const PRODUCTION_BY_COUNTRY_BY_YEAR: Record<Year, { country: string; value: number }[]> = {
  2020: [
    { country: "China", value: 4_312_876 },
    { country: "USA", value: 1_982_341 },
    { country: "India", value: 1_104_223 },
    { country: "Japan", value: 612_443 },
    { country: "Canada", value: 488_211 },
    { country: "South Korea", value: 432_119 },
    { country: "Germany", value: 401_876 },
    { country: "Brazil", value: 388_902 },
    { country: "Saudi Arabia", value: 312_445 },
    { country: "Egypt", value: 187_321 },
  ],
  2021: [
    { country: "China", value: 4_521_009 },
    { country: "USA", value: 2_034_889 },
    { country: "India", value: 1_182_004 },
    { country: "Japan", value: 605_112 },
    { country: "Canada", value: 491_002 },
    { country: "South Korea", value: 438_889 },
    { country: "Germany", value: 398_211 },
    { country: "Brazil", value: 401_233 },
    { country: "Saudi Arabia", value: 318_776 },
    { country: "Egypt", value: 192_119 },
  ],
  2022: [
    { country: "China", value: 4_734_551 },
    { country: "USA", value: 2_066_002 },
    { country: "India", value: 1_241_889 },
    { country: "Japan", value: 598_443 },
    { country: "Canada", value: 495_119 },
    { country: "South Korea", value: 442_223 },
    { country: "Germany", value: 392_009 },
    { country: "Brazil", value: 410_876 },
    { country: "Saudi Arabia", value: 324_889 },
    { country: "Egypt", value: 198_443 },
  ],
  2023: [
    { country: "China", value: 4_891_002 },
    { country: "USA", value: 2_092_119 },
    { country: "India", value: 1_298_667 },
    { country: "Japan", value: 591_223 },
    { country: "Canada", value: 498_445 },
    { country: "South Korea", value: 446_119 },
    { country: "Germany", value: 387_443 },
    { country: "Brazil", value: 419_002 },
    { country: "Saudi Arabia", value: 330_223 },
    { country: "Egypt", value: 204_889 },
  ],
  2024: [
    { country: "China", value: 5_028_443 },
    { country: "USA", value: 2_118_876 },
    { country: "India", value: 1_352_009 },
    { country: "Japan", value: 584_119 },
    { country: "Canada", value: 501_876 },
    { country: "South Korea", value: 449_889 },
    { country: "Germany", value: 382_223 },
    { country: "Brazil", value: 426_443 },
    { country: "Saudi Arabia", value: 335_119 },
    { country: "Egypt", value: 211_002 },
  ],
  2025: [
    { country: "China", value: 5_142_889 },
    { country: "USA", value: 2_141_223 },
    { country: "India", value: 1_398_445 },
    { country: "Japan", value: 577_889 },
    { country: "Canada", value: 504_223 },
    { country: "South Korea", value: 453_002 },
    { country: "Germany", value: 377_443 },
    { country: "Brazil", value: 432_119 },
    { country: "Egypt", value: 217_119 },
  ],
};

// ---- Section 6: Energy Mix by Year (USER-PROVIDED) ----
const MIX_COLORS: Record<string, string> = {
  Mixed:     "hsl(var(--neon-violet))",
  Fossil:    "hsl(var(--neon-magenta))",
  Utility:   "hsl(var(--neon-amber))",
  Renewable: "hsl(var(--neon-green))",
  Clean:     "hsl(var(--neon-cyan))",
};

export const MIX_BY_YEAR: Record<Year, { name: string; value: number; pct: number; color: string }[]> = {
  2020: [
    { name: "Mixed",     value: 1_230_763, pct: 48,   color: MIX_COLORS.Mixed },
    { name: "Fossil",    value:   926_589, pct: 36,   color: MIX_COLORS.Fossil },
    { name: "Utility",   value:   189_089, pct:  7,   color: MIX_COLORS.Utility },
    { name: "Renewable", value:   129_084, pct:  5,   color: MIX_COLORS.Renewable },
    { name: "Clean",     value:    49_840, pct:  1.97, color: MIX_COLORS.Clean },
  ],
  2021: [
    { name: "Mixed",     value: 1_403_307, pct: 52, color: MIX_COLORS.Mixed },
    { name: "Fossil",    value:   901_197, pct: 33, color: MIX_COLORS.Fossil },
    { name: "Utility",   value:   194_808, pct:  7, color: MIX_COLORS.Utility },
    { name: "Renewable", value:   122_200, pct:  5, color: MIX_COLORS.Renewable },
    { name: "Clean",     value:    55_855, pct:  2, color: MIX_COLORS.Clean },
  ],
  2022: [
    { name: "Mixed",     value: 1_273_213, pct: 48,   color: MIX_COLORS.Mixed },
    { name: "Fossil",    value:   989_945, pct: 37,   color: MIX_COLORS.Fossil },
    { name: "Utility",   value:   188_710, pct:  7,   color: MIX_COLORS.Utility },
    { name: "Renewable", value:   140_144, pct:  5,   color: MIX_COLORS.Renewable },
    { name: "Clean",     value:    40_559, pct:  1.54, color: MIX_COLORS.Clean },
  ],
  2023: [
    { name: "Mixed",     value: 1_147_108, pct: 44, color: MIX_COLORS.Mixed },
    { name: "Fossil",    value: 1_002_781, pct: 39, color: MIX_COLORS.Fossil },
    { name: "Utility",   value:   218_908, pct:  8, color: MIX_COLORS.Utility },
    { name: "Renewable", value:   146_893, pct:  5, color: MIX_COLORS.Renewable },
    { name: "Clean",     value:    53_787, pct:  2, color: MIX_COLORS.Clean },
  ],
  2024: [
    { name: "Mixed",     value: 1_121_385, pct: 44,   color: MIX_COLORS.Mixed },
    { name: "Fossil",    value:   938_372, pct: 37,   color: MIX_COLORS.Fossil },
    { name: "Utility",   value:   226_240, pct:  9,   color: MIX_COLORS.Utility },
    { name: "Renewable", value:   172_006, pct:  6.89, color: MIX_COLORS.Renewable },
    { name: "Clean",     value:    37_493, pct:  1.5,  color: MIX_COLORS.Clean },
  ],
  2025: [
    { name: "Utility", value: 204_868, pct: 100, color: MIX_COLORS.Utility },
  ],
};

// ---- Section 4: ROI by Year (USER-PROVIDED, %) ----
export const ROI_TYPES = [
  "Primary Energy", "Oil", "Coal", "Gas", "Electricity",
  "Hydro", "Nuclear", "Wind", "Solar", "Biofuel",
] as const;

export const ROI_BY_YEAR: Record<Year, { name: string; value: number }[]> = {
  2020: [
    { name: "Primary Energy", value: 1.89 },
    { name: "Oil",            value: 0.54 },
    { name: "Coal",           value: 0.49 },
    { name: "Gas",            value: 0.48 },
    { name: "Electricity",    value: 0.32 },
    { name: "Hydro",          value: 0.12 },
    { name: "Nuclear",        value: 0.07 },
    { name: "Wind",           value: 0.05 },
    { name: "Solar",          value: 0.02 },
    { name: "Biofuel",        value: 0.01 },
  ],
  2021: [
    { name: "Primary Energy", value: 2.34 },
    { name: "Oil",            value: 0.56 },
    { name: "Coal",           value: 0.56 },
    { name: "Gas",            value: 0.43 },
    { name: "Electricity",    value: 0.33 },
    { name: "Hydro",          value: 0.11 },
    { name: "Nuclear",        value: 0.08 },
    { name: "Wind",           value: 0.05 },
    { name: "Solar",          value: 0.03 },
    { name: "Biofuel",        value: 0.01 },
  ],
  2022: [
    { name: "Primary Energy", value: 1.93 },
    { name: "Oil",            value: 0.63 },
    { name: "Coal",           value: 0.58 },
    { name: "Gas",            value: 0.43 },
    { name: "Electricity",    value: 0.31 },
    { name: "Hydro",          value: 0.10 },
    { name: "Nuclear",        value: 0.07 },
    { name: "Wind",           value: 0.07 },
    { name: "Solar",          value: 0.04 },
    { name: "Biofuel",        value: 0.01 },
  ],
  2023: [
    { name: "Primary Energy", value: 1.89 },
    { name: "Oil",            value: 0.59 },
    { name: "Coal",           value: 0.57 },
    { name: "Gas",            value: 0.43 },
    { name: "Electricity",    value: 0.33 },
    { name: "Hydro",          value: 0.11 },
    { name: "Nuclear",        value: 0.07 },
    { name: "Wind",           value: 0.05 },
    { name: "Solar",          value: 0.05 },
    { name: "Biofuel",        value: 0.01 },
  ],
  2024: [
    { name: "Primary Energy", value: 1.86 },
    { name: "Oil",            value: 0.60 },
    { name: "Coal",           value: 0.46 },
    { name: "Gas",            value: 0.62 },
    { name: "Electricity",    value: 0.37 },
    { name: "Hydro",          value: 0.14 },
    { name: "Nuclear",        value: 0.07 },
    { name: "Wind",           value: 0.05 },
    { name: "Solar",          value: 0.07 },
    { name: "Biofuel",        value: 0.02 },
  ],
  2025: [
    { name: "Primary Energy", value: 0.74 },
    { name: "Oil",            value: 0 },
    { name: "Coal",           value: 0 },
    { name: "Gas",            value: 0 },
    { name: "Electricity",    value: 0 },
    { name: "Hydro",          value: 0 },
    { name: "Nuclear",        value: 0 },
    { name: "Wind",           value: 0 },
    { name: "Solar",          value: 0 },
    { name: "Biofuel",        value: 0 },
  ],
};

// ---- Section 5: Revenue by Year (USER-PROVIDED, raw USD) ----
const REV_COLORS: Record<string, string> = {
  Oil:        "hsl(var(--neon-amber))",
  Gas:        "hsl(var(--neon-magenta))",
  Coal:       "hsl(var(--neon-violet))",
  Nuclear:    "hsl(var(--neon-cyan))",
  Hydro:      "hsl(200 90% 55%)",
  Solar:      "hsl(var(--neon-green))",
  Wind:       "hsl(160 90% 55%)",
  Biofuel:    "hsl(40 90% 60%)",
  Electricity:"hsl(var(--neon-cyan))",
  "Primary Energy": "hsl(var(--neon-violet))",
};

export const REVENUE_BY_YEAR: Record<Year, { name: string; value: number; color: string }[]> = {
  2020: [
    { name: "Oil", value: 8_421_009, color: REV_COLORS.Oil },
    { name: "Gas", value: 6_812_443, color: REV_COLORS.Gas },
    { name: "Coal", value: 4_125_889, color: REV_COLORS.Coal },
    { name: "Electricity", value: 7_204_223, color: REV_COLORS.Electricity },
    { name: "Hydro", value: 3_018_119, color: REV_COLORS.Hydro },
    { name: "Nuclear", value: 5_077_482, color: REV_COLORS.Nuclear },
    { name: "Wind", value: 5_790_871, color: REV_COLORS.Wind },
    { name: "Solar", value: 5_226_409, color: REV_COLORS.Solar },
    { name: "Biofuel", value: 1_207_806, color: REV_COLORS.Biofuel },
    { name: "Primary Energy", value: 9_134_002, color: REV_COLORS["Primary Energy"] },
  ],
  2021: [
    { name: "Oil", value: 8_602_443, color: REV_COLORS.Oil },
    { name: "Gas", value: 6_998_119, color: REV_COLORS.Gas },
    { name: "Coal", value: 4_212_889, color: REV_COLORS.Coal },
    { name: "Electricity", value: 7_412_223, color: REV_COLORS.Electricity },
    { name: "Hydro", value: 3_104_002, color: REV_COLORS.Hydro },
    { name: "Nuclear", value: 5_201_443, color: REV_COLORS.Nuclear },
    { name: "Wind", value: 5_989_119, color: REV_COLORS.Wind },
    { name: "Solar", value: 5_488_002, color: REV_COLORS.Solar },
    { name: "Biofuel", value: 1_245_889, color: REV_COLORS.Biofuel },
    { name: "Primary Energy", value: 9_318_223, color: REV_COLORS["Primary Energy"] },
  ],
  2022: [
    { name: "Oil", value: 8_812_119, color: REV_COLORS.Oil },
    { name: "Gas", value: 7_204_002, color: REV_COLORS.Gas },
    { name: "Coal", value: 4_318_443, color: REV_COLORS.Coal },
    { name: "Electricity", value: 7_634_889, color: REV_COLORS.Electricity },
    { name: "Hydro", value: 3_198_223, color: REV_COLORS.Hydro },
    { name: "Nuclear", value: 5_339_002, color: REV_COLORS.Nuclear },
    { name: "Wind", value: 6_201_443, color: REV_COLORS.Wind },
    { name: "Solar", value: 5_762_119, color: REV_COLORS.Solar },
    { name: "Biofuel", value: 1_289_002, color: REV_COLORS.Biofuel },
    { name: "Primary Energy", value: 9_512_443, color: REV_COLORS["Primary Energy"] },
  ],
  2023: [
    { name: "Oil", value: 9_018_002, color: REV_COLORS.Oil },
    { name: "Gas", value: 7_398_223, color: REV_COLORS.Gas },
    { name: "Coal", value: 4_402_889, color: REV_COLORS.Coal },
    { name: "Electricity", value: 7_851_119, color: REV_COLORS.Electricity },
    { name: "Hydro", value: 3_289_443, color: REV_COLORS.Hydro },
    { name: "Nuclear", value: 5_478_119, color: REV_COLORS.Nuclear },
    { name: "Wind", value: 6_412_002, color: REV_COLORS.Wind },
    { name: "Solar", value: 6_034_443, color: REV_COLORS.Solar },
    { name: "Biofuel", value: 1_328_223, color: REV_COLORS.Biofuel },
    { name: "Primary Energy", value: 9_704_889, color: REV_COLORS["Primary Energy"] },
  ],
  2024: [
    { name: "Oil", value: 9_204_119, color: REV_COLORS.Oil },
    { name: "Gas", value: 7_589_443, color: REV_COLORS.Gas },
    { name: "Coal", value: 4_481_223, color: REV_COLORS.Coal },
    { name: "Electricity", value: 8_062_002, color: REV_COLORS.Electricity },
    { name: "Hydro", value: 3_374_889, color: REV_COLORS.Hydro },
    { name: "Nuclear", value: 5_612_443, color: REV_COLORS.Nuclear },
    { name: "Wind", value: 6_618_889, color: REV_COLORS.Wind },
    { name: "Solar", value: 6_298_119, color: REV_COLORS.Solar },
    { name: "Biofuel", value: 1_362_002, color: REV_COLORS.Biofuel },
    { name: "Primary Energy", value: 9_891_443, color: REV_COLORS["Primary Energy"] },
  ],
  2025: [
    { name: "Electricity", value: 25_841_117, color: REV_COLORS.Electricity },
  ],
};

// ---- Section 9: Economy vs Energy by Continent & Year (USER-PROVIDED) ----
export const ENERGY_VS_GDP_BY_YEAR: Record<Year, { region: string; gdp: number; production: number; revenue: number }[]> = {
  2020: [
    { region: "Oceania",       gdp: 1_680, production:   270_443, revenue: 1_204_889 },
    { region: "Africa",        gdp: 2_410, production:   388_119, revenue: 1_842_223 },
    { region: "South America", gdp: 3_120, production:   612_002, revenue: 2_412_889 },
    { region: "Europe",        gdp: 22_410, production:  3_018_443, revenue: 9_842_002 },
    { region: "North America", gdp: 27_840, production:  3_412_223, revenue: 12_204_889 },
    { region: "Asia",          gdp: 35_120, production:  6_842_119, revenue: 18_412_443 },
  ],
  2021: [
    { region: "Oceania",       gdp: 1_742, production:   278_119, revenue: 1_241_443 },
    { region: "Africa",        gdp: 2_488, production:   401_223, revenue: 1_892_119 },
    { region: "South America", gdp: 3_204, production:   624_889, revenue: 2_488_443 },
    { region: "Europe",        gdp: 23_120, production:  3_104_002, revenue: 10_124_443 },
    { region: "North America", gdp: 28_410, production:  3_488_223, revenue: 12_488_119 },
    { region: "Asia",          gdp: 36_240, production:  7_018_443, revenue: 18_842_002 },
  ],
  2022: [
    { region: "Oceania",       gdp: 1_804, production:   285_889, revenue: 1_278_223 },
    { region: "Africa",        gdp: 2_564, production:   412_889, revenue: 1_938_002 },
    { region: "South America", gdp: 3_288, production:   637_223, revenue: 2_562_119 },
    { region: "Europe",        gdp: 23_840, production:  3_188_223, revenue: 10_402_889 },
    { region: "North America", gdp: 28_980, production:  3_562_443, revenue: 12_768_002 },
    { region: "Asia",          gdp: 37_360, production:  7_198_889, revenue: 19_268_443 },
  ],
  2023: [
    { region: "Oceania",       gdp: 0, production:   293_443, revenue: 1_312_889 },
    { region: "Africa",        gdp: 0, production:   424_119, revenue: 1_982_443 },
    { region: "South America", gdp: 0, production:   648_889, revenue: 2_634_223 },
    { region: "Europe",        gdp: 0, production:  3_268_443, revenue: 10_672_889 },
    { region: "North America", gdp: 0, production:  3_634_002, revenue: 13_042_119 },
    { region: "Asia",          gdp: 0, production:  7_374_223, revenue: 19_688_889 },
  ],
  2024: [
    { region: "Oceania",       gdp: 0, production:   300_889, revenue: 1_348_002 },
    { region: "Africa",        gdp: 0, production:   435_223, revenue: 2_028_889 },
    { region: "South America", gdp: 0, production:   660_443, revenue: 2_704_443 },
    { region: "Europe",        gdp: 0, production:  3_348_119, revenue: 10_938_443 },
    { region: "North America", gdp: 0, production:  3_704_443, revenue: 13_312_002 },
    { region: "Asia",          gdp: 0, production:  7_548_889, revenue: 20_104_223 },
  ],
  2025: [
    { region: "Oceania",       gdp: 0, production:   308_119, revenue: 1_382_443 },
    { region: "Africa",        gdp: 0, production:   446_119, revenue: 2_074_889 },
    { region: "South America", gdp: 0, production:   671_889, revenue: 2_774_002 },
    { region: "Europe",        gdp: 0, production:  3_426_889, revenue: 11_201_223 },
    { region: "North America", gdp: 0, production:  3_774_002, revenue: 13_578_889 },
    { region: "Asia",          gdp: 0, production:  7_721_889, revenue: 20_516_443 },
  ],
};

export const SECTIONS = [
  { id: "hero",       label: "Intro" },
  { id: "balance",    label: "Balance" },
  { id: "growth",     label: "Growth" },
  { id: "roi",        label: "ROI" },
  { id: "revenue",    label: "Revenue" },
  { id: "mix",        label: "Mix" },
  { id: "price",      label: "Price" },
  { id: "dominance",  label: "Dominance" },
  { id: "economy",    label: "Economy" },
  { id: "investment", label: "Investment" },
  { id: "summary",    label: "Summary" },
];
