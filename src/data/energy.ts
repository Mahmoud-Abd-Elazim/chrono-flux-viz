// Centralized data for the Global Energy Market Analysis site.
// Sections marked PLACEHOLDER use illustrative numbers — swap with the user's data.

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

// ---- Section 4: ROI by Energy Type (PLACEHOLDER — illustrative) ----
export const ROI_BY_TYPE: Record<string, number[]> = {
  Oil:        [12.4, 14.1, 18.6, 16.2, 13.8, 15.1],
  Gas:        [10.2, 11.8, 17.3, 14.9, 12.4, 13.7],
  Coal:        [ 6.1,  7.4,  9.8,  8.1,  5.6,  6.9],
  Nuclear:     [ 5.8,  6.2,  6.8,  6.5,  6.1,  6.4],
  Hydro:       [ 4.9,  5.1,  5.4,  5.6,  5.3,  5.7],
  Solar:       [ 3.2,  4.0,  4.7,  5.3,  5.9,  6.6],
  Wind:        [ 3.0,  3.8,  4.5,  5.0,  5.6,  6.2],
  Geothermal:  [ 2.4,  2.7,  3.1,  3.4,  3.6,  3.9],
};

// ---- Section 5: Revenue by Energy Type ($ Billions, PLACEHOLDER) ----
export const REVENUE_BY_TYPE = [
  { name: "Oil",        value: 2400, color: "hsl(var(--neon-amber))" },
  { name: "Gas",        value: 1650, color: "hsl(var(--neon-magenta))" },
  { name: "Coal",       value:  920, color: "hsl(var(--neon-violet))" },
  { name: "Nuclear",    value:  540, color: "hsl(var(--neon-cyan))" },
  { name: "Hydro",      value:  430, color: "hsl(200 90% 55%)" },
  { name: "Solar",      value:  380, color: "hsl(var(--neon-green))" },
  { name: "Wind",       value:  310, color: "hsl(160 90% 55%)" },
  { name: "Geothermal", value:  120, color: "hsl(var(--neon-amber))" },
];

// ---- Section 6: Energy Production Mix (PLACEHOLDER) ----
export const ENERGY_MIX = [
  { name: "Fossil",    value: 61, color: "hsl(var(--neon-magenta))" },
  { name: "Mixed",     value: 12, color: "hsl(var(--neon-violet))" },
  { name: "Utility",   value: 10, color: "hsl(var(--neon-amber))" },
  { name: "Renewable", value: 11, color: "hsl(var(--neon-green))" },
  { name: "Clean",     value:  6, color: "hsl(var(--neon-cyan))" },
];

// ---- Section 7: Average Energy Price (PLACEHOLDER) ----
export const PRICE_TREND = [
  { year: 2020, price: 78.4 },
  { year: 2021, price: 82.1 },
  { year: 2022, price: 96.3 },
  { year: 2023, price: 88.7 },
  { year: 2024, price: 84.2 },
  { year: 2025, price: 87.5 },
];

// ---- Section 8: Top Countries by Production (PLACEHOLDER, TWh) ----
export const TOP_COUNTRIES = [
  { country: "China",    value: 8900, leader: true },
  { country: "USA",      value: 4400, leader: true },
  { country: "India",    value: 1750, leader: true },
  { country: "Russia",   value: 1180 },
  { country: "Japan",    value: 1020 },
  { country: "Canada",   value:  680 },
  { country: "Germany",  value:  580 },
  { country: "Brazil",   value:  640 },
  { country: "France",   value:  540 },
  { country: "S. Korea", value:  590 },
];

// ---- Section 9: Energy vs GDP (PLACEHOLDER) ----
export const ENERGY_VS_GDP = [
  { country: "China",    energy: 8900, gdp: 17700, pop: 1410 },
  { country: "USA",      energy: 4400, gdp: 25460, pop:  333 },
  { country: "India",    energy: 1750, gdp:  3390, pop: 1420 },
  { country: "Russia",   energy: 1180, gdp:  2240, pop:  144 },
  { country: "Japan",    energy: 1020, gdp:  4230, pop:  125 },
  { country: "Germany",  energy:  580, gdp:  4070, pop:   83 },
  { country: "Brazil",   energy:  640, gdp:  1920, pop:  214 },
  { country: "Canada",   energy:  680, gdp:  2140, pop:   39 },
  { country: "France",   energy:  540, gdp:  2780, pop:   65 },
  { country: "UK",       energy:  330, gdp:  3070, pop:   67 },
  { country: "Mexico",   energy:  320, gdp:  1660, pop:  127 },
  { country: "Australia",energy:  270, gdp:  1680, pop:   26 },
];

// ---- Section 10: Investment Trend by Energy Type ($B, PLACEHOLDER) ----
export const INVESTMENT_TREND = [
  { year: 2020, Oil: 380, Gas: 290, Coal: 150, Nuclear: 60, Solar: 145, Wind: 130 },
  { year: 2021, Oil: 360, Gas: 300, Coal: 140, Nuclear: 58, Solar: 168, Wind: 142 },
  { year: 2022, Oil: 410, Gas: 330, Coal: 135, Nuclear: 62, Solar: 195, Wind: 158 },
  { year: 2023, Oil: 350, Gas: 280, Coal: 110, Nuclear: 55, Solar: 184, Wind: 149 },
  { year: 2024, Oil: 300, Gas: 240, Coal:  90, Nuclear: 50, Solar: 170, Wind: 138 },
  { year: 2025, Oil: 270, Gas: 220, Coal:  72, Nuclear: 48, Solar: 162, Wind: 132 },
];

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
