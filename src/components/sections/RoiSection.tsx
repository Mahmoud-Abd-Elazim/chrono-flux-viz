import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { ROI_BY_TYPE, YEARS } from "@/data/energy";

type YearKey = "avg" | (typeof YEARS)[number];

export const RoiSection = () => {
  const [year, setYear] = useState<YearKey>(2025);

  const data = useMemo(() => {
    const rows = Object.entries(ROI_BY_TYPE).map(([name, arr]) => {
      const value = year === "avg" ? arr.reduce((a, b) => a + b, 0) / arr.length : arr[YEARS.indexOf(year as any)];
      return { name, value: Number(value.toFixed(2)) };
    });
    return rows.sort((a, b) => b.value - a.value);
  }, [year]);

  const top = data[0]?.name;

  return (
    <Section
      id="roi"
      eyebrow="04 · Capital Returns"
      title="Return on Investment by Energy Type"
      subtitle="Annualized ROI (%). Filter by year to compare cycles."
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Year</span>
        <div className="relative">
          <select
            value={String(year)}
            onChange={(e) => {
              const v = e.target.value;
              setYear(v === "avg" ? "avg" : (Number(v) as YearKey));
            }}
            className="appearance-none bg-secondary border border-border rounded-lg pl-4 pr-10 py-2 text-sm font-mono-num focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
            <option value="avg">All-years average</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</div>
        </div>
        {top && (
          <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-magenta/50 bg-neon-magenta/10 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta animate-pulse-glow" />
            Top performer: <span className="font-medium text-neon-magenta">{top}</span>
          </div>
        )}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 8, right: 32, left: 16, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} width={90} />
            <Tooltip
              cursor={{ fill: "hsl(var(--neon-cyan) / 0.05)" }}
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [`${v.toFixed(2)}%`, "ROI"]}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {data.map((d) => (
                <Cell
                  key={d.name}
                  fill={d.name === top ? "hsl(var(--neon-magenta))" : "hsl(var(--neon-cyan))"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Oil and Gas dominate short-term returns, while renewables lag — but the gap is narrowing each year as solar and wind ROI climbs steadily.
      </InsightCard>
    </Section>
  );
};
