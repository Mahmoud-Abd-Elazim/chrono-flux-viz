# Global Energy Market Analysis — Executive Site

A cinematic, dark, single-page storytelling experience for executives. Long-scroll with sticky top navigation; each section snaps and animates in. Electric cyan + magenta neon accents on a near-black/deep-navy base.

## Design system

- Base: near-black `#05070D` with deep navy gradient surfaces
- Primary accent: electric cyan (glow, lines, positive signal)
- Secondary accent: magenta (highlights, hover, top performer)
- Semantics: cyan-green for positive, hot magenta-red for negative
- Typography: Inter for body, Space Grotesk for display headlines, JetBrains Mono for numerics
- Effects: animated radial gradients, particle/grid canvas in hero, soft neon glow on cards and chart strokes, subtle scanlines on section dividers
- Motion: scroll-driven fade/slide-in via IntersectionObserver, chart values animate from 0 on entry, hover micro-interactions on every data point

## Global structure

- Sticky top nav with 11 anchor dots and labels (Hero, Balance, Growth, ROI, Revenue, Mix, Price, Dominance, Economy, Investment, Summary). Active section underlines with cyan glow.
- Scroll progress bar (cyan→magenta) along the top edge.
- Each section: full-viewport min-height, headline, chart, and an "Insight" callout card with icon and short executive takeaway.
- Footer: project credit + "2020–2025 dataset" note.

## Page-by-page

1. **Hero** — Animated particle/grid canvas background simulating power lines and energy waves. Title "Global Energy Market Analysis", subtitle, intro paragraph, glowing "Start Analysis" CTA that smooth-scrolls to section 2. Floating SVG glyphs (oil drop, gas flame, lightning bolt, sun, wind turbine) drift slowly with parallax.

2. **Energy Balance (Crisis View)** — Clustered column chart, 6 regions × 6 years, **using your exact values**. Negative bars render in magenta-red, positive in cyan-green, with glow. Year filter chips (All / 2020…2025) re-render the chart. Tooltip shows region, year, surplus/deficit. Insight card: "Several regions show consistent energy deficits, especially Asia and Europe."

3. **Market Growth** — Smooth line chart with gradient area fill, **exact values 2020–2025**. Animated draw-on. Hover crosshair with year + demand value. Min/max markers labeled. Insight: "The market is expanding steadily, but with slight instability."

4. **ROI Analysis** — Horizontal bar chart, sorted descending. Year dropdown filter (2020–2025 + "All years average"). Top performer bar pulses magenta. Tooltip with %. Insight: "Oil and Gas dominate short-term returns, while renewables lag." *Energy types and values to be filled from the data you'll paste.*

5. **Revenue Distribution** — Treemap of revenue by energy type, neon-bordered tiles, size by revenue, color intensity by share. Hover lifts tile and shows exact figure. Insight: "Fossil fuels still generate the majority of global revenue." *Awaiting your values.*

6. **Energy Mix** — Donut chart (Mixed, Fossil, Utility, Renewable, Clean) with center label showing hovered slice's % and absolute value. Animated arc draw. Insight: "Renewable energy still represents a small portion of total production."

7. **Price Stability** — Line chart of average energy price 2020–2025 with shaded volatility band. Insight: "Prices remain relatively stable despite market imbalance." *Awaiting your values.*

8. **Global Dominance** — Bar chart of top countries by production. China, USA, India bars highlighted in magenta with a "Leader" badge. Insight: "China and the US dominate global energy production." *Awaiting your values.*

9. **Economy vs Energy** — Scatter plot, X = energy production, Y = GDP, point size = population (or fixed if not provided). Trendline drawn in cyan. Hover shows country card. Insight: "There is a strong correlation between energy production and economic strength." *Awaiting your values.*

10. **Investment Flow** — Multi-line chart, one line per energy type 2020–2025, distinct neon hues, legend toggles series. Insight: "Investment is declining across most energy sectors." *Awaiting your values.*

11. **Executive Summary** — Five glowing insight tiles in a grid (Demand rising, Investment declining, Deficit increasing, Fossils dominate short-term, Renewables = future). Closing cinematic statement centered: "The energy market is entering a transition phase. Those who invest early and strategically will gain the most advantage."

## Placeholder strategy for missing data

For sections 4, 5, 7, 8, 9, 10 I'll wire fully working interactive charts using clearly-marked placeholder arrays in a single file (`src/data/energy.ts`). Once you paste the real numbers, swapping them in is a one-line change per dataset — no chart code touched.

## Technical notes

- Charts: Recharts (already compatible with the stack) for column/line/bar/scatter/multi-line; a custom CSS-grid + flex treemap for section 5; SVG arcs for the donut to get the neon glow look.
- Animations: Tailwind keyframes (`fade-in`, `scale-in`, plus new `draw-line`, `pulse-glow`, `float`) and an IntersectionObserver hook to trigger on scroll.
- Hero background: lightweight `<canvas>` particle/line network (no heavy deps).
- All data centralized in `src/data/energy.ts`.
- Fully responsive: charts collapse to stacked layouts on mobile, sticky nav becomes a compact dot rail.
- All colors added as HSL tokens in `index.css` (`--neon-cyan`, `--neon-magenta`, `--signal-positive`, `--signal-negative`, surface gradients) and exposed via `tailwind.config.ts`.
- `src/pages/Index.tsx` becomes the single long-scroll page composed of section components in `src/components/sections/`.

After you approve, I'll build it and you can paste the remaining datasets at any point.