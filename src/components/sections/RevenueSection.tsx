import { useState } from "react";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { REVENUE_BY_TYPE } from "@/data/energy";

// Custom CSS grid treemap with neon styling.
export const RevenueSection = () => {
  const total = REVENUE_BY_TYPE.reduce((a, b) => a + b.value, 0);
  const sorted = [...REVENUE_BY_TYPE].sort((a, b) => b.value - a.value);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <Section
      id="revenue"
      eyebrow="05 · Capital Concentration"
      title="Total Revenue by Energy Type"
      subtitle="Cumulative revenue 2020–2025 ($B). Tile size encodes share of total."
    >
      <div className="surface-card rounded-2xl p-4 md:p-6">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "minmax(60px, auto)",
            height: "min(70vh, 520px)",
          }}
        >
          {sorted.map((d, i) => {
            const share = d.value / total;
            // Span columns/rows roughly proportional to share, with a sensible floor.
            const cols = Math.max(2, Math.round(share * 24));
            const rows = i === 0 ? 4 : i === 1 ? 3 : i < 4 ? 2 : 1;
            const isHover = hover === d.name;
            return (
              <div
                key={d.name}
                onMouseEnter={() => setHover(d.name)}
                onMouseLeave={() => setHover(null)}
                className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  gridColumn: `span ${cols}`,
                  gridRow: `span ${rows}`,
                  background: `linear-gradient(135deg, ${d.color}33, ${d.color}10)`,
                  border: `1px solid ${d.color}66`,
                  boxShadow: isHover ? `0 0 30px ${d.color}80, inset 0 0 30px ${d.color}30` : "none",
                  transform: isHover ? "translateY(-2px)" : "none",
                }}
              >
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                  <div>
                    <div className="text-xs md:text-sm font-medium" style={{ color: d.color }}>
                      {d.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {(share * 100).toFixed(1)}% of total
                    </div>
                  </div>
                  <div className="font-mono-num text-base md:text-2xl font-semibold text-foreground">
                    ${d.value.toLocaleString()}B
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <InsightCard>
        Fossil fuels still generate the majority of global revenue — Oil and Gas alone capture <span className="text-neon-magenta font-medium">~60%</span> of cumulative sector revenue.
      </InsightCard>
    </Section>
  );
};
