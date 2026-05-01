import { useMemo, useState } from "react";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { REVENUE_BY_YEAR, type Year } from "@/data/energy";

export const RevenueSection = () => {
  const [year, setYear] = useState<number | "all">(2024);
  const [hover, setHover] = useState<string | null>(null);

  const items = useMemo(() => {
    const y = (year === "all" ? 2024 : year) as Year;
    return [...REVENUE_BY_YEAR[y]].sort((a, b) => b.value - a.value);
  }, [year]);

  const total = items.reduce((a, b) => a + b.value, 0);

  return (
    <Section
      id="revenue"
      eyebrow="05 · Capital Concentration"
      title="Total Revenue by Energy Type"
      subtitle="Tile size encodes share of total revenue for the selected year."
    >
      <div className="mb-6">
        <YearFilter value={year} onChange={setYear} allowAll={false} />
      </div>

      {year === 2025 && (
        <div className="mb-4 px-4 py-2 rounded-lg border border-neon-amber/40 bg-neon-amber/5 text-xs text-neon-amber">
          Only Electricity revenue available for 2025.
        </div>
      )}

      <div className="surface-card rounded-2xl p-4 md:p-6">
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "minmax(70px, auto)",
            height: "min(70vh, 520px)",
          }}
        >
          {items.map((d, i) => {
            const share = d.value / total;
            const cols = items.length === 1 ? 12 : Math.max(2, Math.round(share * 24));
            const rows = items.length === 1 ? 7 : i === 0 ? 4 : i === 1 ? 3 : i < 4 ? 2 : 1;
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
                    {d.value.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <InsightCard>
        Primary Energy, Oil and Electricity consistently capture the largest revenue share. By 2025 only Electricity is reported — at <span className="font-mono-num text-neon-cyan">25,841,117</span> — concentrating the entire market into a single category.
      </InsightCard>
    </Section>
  );
};
