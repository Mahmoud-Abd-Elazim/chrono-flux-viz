import { useState } from "react";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { ENERGY_MIX } from "@/data/energy";

export const MixSection = () => {
  const total = ENERGY_MIX.reduce((a, b) => a + b.value, 0);
  const [hover, setHover] = useState<number | null>(null);
  const size = 320;
  const r = 130;
  const inner = 80;
  const cx = size / 2;
  const cy = size / 2;

  let cumulative = 0;
  const arcs = ENERGY_MIX.map((d, i) => {
    const start = (cumulative / total) * Math.PI * 2 - Math.PI / 2;
    cumulative += d.value;
    const end = (cumulative / total) * Math.PI * 2 - Math.PI / 2;
    const large = end - start > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const xi1 = cx + inner * Math.cos(end);
    const yi1 = cy + inner * Math.sin(end);
    const xi2 = cx + inner * Math.cos(start);
    const yi2 = cy + inner * Math.sin(start);
    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi1} ${yi1} A ${inner} ${inner} 0 ${large} 0 ${xi2} ${yi2} Z`;
    return { path, color: d.color, name: d.name, value: d.value, i };
  });

  const active = hover != null ? ENERGY_MIX[hover] : null;

  return (
    <Section
      id="mix"
      eyebrow="06 · Production Mix"
      title="Energy Production by Category"
      subtitle="Share of global production. Hover slices to inspect each category."
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="surface-card rounded-2xl p-6 flex justify-center">
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-sm">
            <defs>
              {arcs.map((a) => (
                <filter key={a.i} id={`glow-${a.i}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
            </defs>
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
                  filter={isActive ? `url(#glow-${a.i})` : undefined}
                  style={{ transition: "all 250ms ease", cursor: "pointer", transform: isActive ? "scale(1.04)" : "scale(1)", transformOrigin: `${cx}px ${cy}px` }}
                  onMouseEnter={() => setHover(a.i)}
                  onMouseLeave={() => setHover(null)}
                />
              );
            })}
            <text x={cx} y={cy - 6} textAnchor="middle" className="font-mono-num" fill="hsl(var(--foreground))" fontSize="22" fontWeight="600">
              {active ? `${active.value}%` : `${total}%`}
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" letterSpacing="2">
              {active ? active.name.toUpperCase() : "TOTAL"}
            </text>
          </svg>
        </div>

        <div className="space-y-2">
          {ENERGY_MIX.map((d, i) => {
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
                <span className="font-mono-num text-sm">{d.value}%</span>
              </div>
            );
          })}
        </div>
      </div>

      <InsightCard>
        Renewable and clean categories together represent only <span className="font-mono-num text-neon-green">~17%</span> of total production. Fossil sources remain dominant despite policy momentum.
      </InsightCard>
    </Section>
  );
};
