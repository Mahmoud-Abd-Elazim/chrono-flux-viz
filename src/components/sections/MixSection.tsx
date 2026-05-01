import { useMemo, useState } from "react";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { MIX_BY_YEAR, type Year } from "@/data/energy";

export const MixSection = () => {
  const [year, setYear] = useState<number | "all">(2024);
  const [hover, setHover] = useState<number | null>(null);

  const items = useMemo(() => {
    const y = (year === "all" ? 2024 : year) as Year;
    return MIX_BY_YEAR[y];
  }, [year]);

  const totalPct = items.reduce((a, b) => a + b.pct, 0);
  const totalValue = items.reduce((a, b) => a + b.value, 0);

  const size = 320;
  const r = 130;
  const inner = 80;
  const cx = size / 2;
  const cy = size / 2;

  let cumulative = 0;
  const arcs = items.map((d, i) => {
    const start = (cumulative / totalPct) * Math.PI * 2 - Math.PI / 2;
    cumulative += d.pct;
    const end = (cumulative / totalPct) * Math.PI * 2 - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    // Full circle case (single segment 100%)
    const isFull = items.length === 1;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end - (isFull ? 0.0001 : 0));
    const y2 = cy + r * Math.sin(end - (isFull ? 0.0001 : 0));
    const xi1 = cx + inner * Math.cos(end - (isFull ? 0.0001 : 0));
    const yi1 = cy + inner * Math.sin(end - (isFull ? 0.0001 : 0));
    const xi2 = cx + inner * Math.cos(start);
    const yi2 = cy + inner * Math.sin(start);
    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${isFull ? 1 : large} 1 ${x2} ${y2} L ${xi1} ${yi1} A ${inner} ${inner} 0 ${isFull ? 1 : large} 0 ${xi2} ${yi2} Z`;
    return { path, color: d.color, name: d.name, pct: d.pct, value: d.value, i };
  });

  const active = hover != null ? items[hover] : null;

  return (
    <Section
      id="mix"
      eyebrow="06 · Production Mix"
      title="Energy Production by Category"
      subtitle="Share of global production. Hover slices to inspect each category."
    >
      <div className="mb-6">
        <YearFilter value={year} onChange={setYear} allowAll={false} />
      </div>

      {year === 2025 && (
        <div className="mb-4 px-4 py-2 rounded-lg border border-neon-amber/40 bg-neon-amber/5 text-xs text-neon-amber">
          Only Utility data available for 2025.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="surface-card rounded-2xl p-6 flex justify-center">
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-sm">
            {arcs.map((a) => {
              const isActive = hover === a.i;
              return (
                <path
                  key={a.i}
                  d={a.path}
                  fill={a.color}
                  fillOpacity={hover == null || isActive ? 0.9 : 0.25}
                  stroke={a.color}
                  strokeWidth={isActive ? 2 : 1}
                  style={{ transition: "all 250ms ease", cursor: "pointer", transform: isActive ? "scale(1.04)" : "scale(1)", transformOrigin: `${cx}px ${cy}px` }}
                  onMouseEnter={() => setHover(a.i)}
                  onMouseLeave={() => setHover(null)}
                />
              );
            })}
            <text x={cx} y={cy - 6} textAnchor="middle" className="font-mono-num" fill="hsl(var(--foreground))" fontSize="22" fontWeight="600">
              {active ? `${active.pct}%` : `${totalPct}%`}
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" letterSpacing="2">
              {active ? active.name.toUpperCase() : "TOTAL"}
            </text>
          </svg>
        </div>

        <div className="space-y-2">
          {items.map((d, i) => {
            const isActive = hover === i;
            return (
              <div
                key={d.name}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                  isActive ? "bg-secondary border-neon-cyan/50" : "border-border hover:border-neon-cyan/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-sm" style={{ background: d.color, boxShadow: `0 0 10px ${d.color}` }} />
                  <span className="font-medium text-sm">{d.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-mono-num text-sm">{d.pct}%</div>
                  {year !== 2025 && (
                    <div className="font-mono-num text-[10px] text-muted-foreground">{d.value.toLocaleString()}</div>
                  )}
                </div>
              </div>
            );
          })}
          {year !== 2025 && (
            <div className="px-4 py-2 text-[11px] text-muted-foreground">
              Total production: <span className="font-mono-num text-foreground">{totalValue.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>

      <InsightCard>
        Mixed and Fossil sources still dominate (over <span className="text-neon-magenta font-medium">70%</span> combined), but the Renewable + Clean share grows steadily from 15% (2020) to 23% (2024).
      </InsightCard>
    </Section>
  );
};
