## Goal

Replace placeholder numbers across 7 charts with the exact datasets you provided, add a **Year filter (2020 → 2025)** wherever it makes sense, show clear value labels on bars/lines, and clean up incorrect items (extra countries, wrong currency suffixes, etc.).

All data updates happen in `src/data/energy.ts`; chart components are updated to consume the new shapes and to render year selectors.

---

## 1. `src/data/energy.ts` — rebuild datasets

Replace the placeholder constants with these real ones:

- **`INVESTMENT_BY_YEAR`** — new shape: `{ year, Biofuel, Coal, Electricity, Gas, Hydro, Nuclear, Oil, "Primary Energy", Solar, Wind }` for 2020–2025 using the exact figures (in raw USD; we will display in **$B** with 2 decimals — e.g. `8,634,789,091 → $8.63B`).
- **`PRICE_TREND`** — replace with: 2020:136.14, 2021:135.08, 2022:134.25, 2023:134.97, 2024:135.42, 2025:134.31.
- **`PRODUCTION_BY_COUNTRY_BY_YEAR`** — new shape `Record<Year, {country, value}[]>` for the 10 countries you listed (China, USA, India, Japan, Canada, South Korea, Germany, Brazil, Saudi Arabia, Egypt) per year. Saudi Arabia omitted in 2025.
- **`MIX_BY_YEAR`** — new shape `Record<Year, {name, value (production), pct, color}[]>` with Mixed / Fossil / Utility / Renewable / Clean per year. 2025 contains only Utility (100%).
- **`ROI_BY_YEAR`** — new shape `Record<Year, {name, value}[]>` with the 10 energy types (Primary Energy, Oil, Coal, Gas, Electricity, Hydro, Nuclear, Wind, Solar, Biofuel) per year. 2025 has 0% for everything except Primary Energy (0.74%).
- **`REVENUE_BY_YEAR`** — new shape `Record<Year, {name, value, color}[]>` per year. 2025 contains only Electricity (25,841,117).
- **`ENERGY_VS_GDP_BY_YEAR`** — new shape `Record<Year, {region, gdp, production, revenue}[]>` for the 6 continents (Oceania, Africa, South America, Europe, North America, Asia) per year. GDP is 0 for 2023–2025 (data gap) — those years will show a notice and plot Production vs Revenue instead, while 2020–2022 plot the requested GDP vs Production with revenue as bubble size.

Old constants no longer needed: `INVESTMENT_TREND`, `TOP_COUNTRIES`, `ENERGY_MIX`, `REVENUE_BY_TYPE`, `ROI_BY_TYPE`, `ENERGY_VS_GDP` — remove or repurpose.

---

## 2. Chart updates

### a. `InvestmentSection.tsx` — Total Investment by Year
- Keep the multi-line chart but rebuild lines from `INVESTMENT_BY_YEAR` with all 10 energy types.
- Add a **Year filter dropdown (All / 2020–2025)**:
  - "All" → current multi-year line chart.
  - Single year → switches to a horizontal bar chart of that year's value per energy type, with the **value labeled on each bar in $B** (e.g. `$8.63B`).
- Tooltip & axis ticks formatted as `$X.XXB`.
- Update the insight text to reflect the real story (steady ~$8B 2020–2024, sharp drop to ~$3.4B in 2025).

### b. `EconomySection.tsx` — Scatter (continents only)
- Remove all country points. Use `ENERGY_VS_GDP_BY_YEAR` (6 continents).
- Add **Year filter (2020–2025)**.
- For 2020–2022: X = Avg GDP, Y = Avg Production, bubble size = Total Revenue. Each point labeled with the continent name directly on the chart.
- For 2023–2025 (GDP missing): show a small notice "GDP data unavailable — showing Production vs Revenue" and plot X = Total Revenue, Y = Avg Production.
- Tooltip shows continent + the 3 metrics with thousand separators.

### c. `DominanceSection.tsx` — Top Countries Bar
- Switch to `PRODUCTION_BY_COUNTRY_BY_YEAR`. Default year = 2025; **Year filter dropdown** to switch.
- Render bars with the **value labeled on top of each bar** (formatted with thousand separators).
- China highlighted in magenta (always #1); others in cyan. Saudi Arabia excluded automatically in 2025.
- Update insight: "China leads every year of the period."

### d. `PriceSection.tsx` — Avg Price by Year
- Replace data with the 6 real values (134–136 range).
- Tighten Y-axis domain to roughly `[133, 137]` so the variation is readable.
- Add **value labels** on each line dot (e.g. `136.14`).
- No year filter needed (the chart already spans all years), but add a **min/avg/max stat row** computed from the new values.

### e. `MixSection.tsx` — Donut by Category
- Use `MIX_BY_YEAR`. Default year = 2024; **Year filter dropdown**.
- Show the year's segments with both **% and absolute production** (e.g. `Mixed — 1,121,385 (44%)`) in the legend list and tooltip.
- For 2025, render a single full-circle Utility segment with a small caption "Only Utility data available for 2025".

### f. `RoiSection.tsx` — ROI by Energy Type
- Already has a year filter — keep it but rebuild from `ROI_BY_YEAR` (10 types incl. Primary Energy).
- Add **value labels at the end of each bar** formatted as `X.XX%`.
- Sort descending by value within each year. Top performer highlighted in magenta.
- For 2025, show all bars (most are 0%) plus a banner "2025: only Primary Energy reported a return (0.74%)".

### g. `RevenueSection.tsx` — Treemap
- Use `REVENUE_BY_YEAR`. Default year = 2024; **Year filter dropdown**.
- Tile size proportional to share of that year's total. Each tile shows: name, **raw value with thousand separators** (not `$XB`), and `%` of total.
- 2025 renders a single Electricity tile filling the grid with "Only Electricity data available for 2025".

---

## 3. Shared UI

- Build one tiny shared `<YearFilter />` component (`src/components/site/YearFilter.tsx`) that renders the existing styled `<select>` used in `RoiSection`, so all 5 filtered charts look identical.
- All numeric labels use `toLocaleString()` for thousand separators; investment uses `$X.XXB`.

---

## Technical details

- No new dependencies. Recharts `LabelList` will render the on-bar/line value labels.
- Type changes in `src/data/energy.ts` will ripple to `RoiSection`, `MixSection`, `RevenueSection`, `DominanceSection`, `EconomySection`, `InvestmentSection`, `PriceSection` — all updated in this pass.
- `SECTIONS` nav array stays the same.
- Insight copy under each chart updated to reflect the real numbers.

After approval I'll implement everything in one pass.