import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { PRODUCTION_BY_COUNTRY_BY_YEAR, type Year } from "@/data/energy";

export const DominanceSection = () => {
  const [year, setYear] = useState<number | "all">(2025);

  const data = useMemo(() => {
    const y = (year === "all" ? 2025 : year) as Year;
    return [...PRODUCTION_BY_COUNTRY_BY_YEAR[y]].sort((a, b) => b.value - a.value);
  }, [year]);

  const leader = data[0]?.country;

  return (
    <Section
      id="dominance"
      eyebrow="08 · Global Dominance"
      title="Top Countries by Energy Production"
      subtitle="Annual production output. Switch the year to track who leads each year."
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <YearFilter value={year} onChange={setYear} allowAll={false} />
        {leader && (
          <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-magenta/50 bg-neon-magenta/10 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta animate-pulse-glow" />
            #1: <span className="font-medium text-neon-magenta">{leader}</span>
          </div>
        )}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 32, right: 24, left: 0, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} interval={0} angle={-30} textAnchor="end" height={70} />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} tickFormatter={(v) => v.toLocaleString()} width={80} />
            <Tooltip
              cursor={{ fill: "hsl(var(--neon-cyan) / 0.05)" }}
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [v.toLocaleString(), "Production"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((d) => (
                <Cell key={d.country} fill={d.country === leader ? "hsl(var(--neon-magenta))" : "hsl(var(--neon-cyan))"} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(v: number) => v.toLocaleString()}
                style={{ fill: "hsl(var(--foreground))", fontSize: 10, fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        China dominates every year of the period — by 2025 producing nearly <span className="font-mono-num text-neon-magenta">2.4×</span> more than the US and over <span className="font-mono-num text-neon-magenta">3.6×</span> India. Saudi Arabia drops out of the top 10 in 2025.
      </InsightCard>
    </Section>
  );
};
