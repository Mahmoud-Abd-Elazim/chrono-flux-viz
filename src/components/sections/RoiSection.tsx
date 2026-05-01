import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { ROI_BY_YEAR, type Year } from "@/data/energy";

export const RoiSection = () => {
  const [year, setYear] = useState<number | "all">(2024);

  const data = useMemo(() => {
    const y = (year === "all" ? 2024 : year) as Year;
    return [...ROI_BY_YEAR[y]].sort((a, b) => b.value - a.value);
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
        <YearFilter value={year} onChange={setYear} allowAll={false} />
        {top && (
          <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-magenta/50 bg-neon-magenta/10 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta animate-pulse-glow" />
            Top performer: <span className="font-medium text-neon-magenta">{top}</span>
          </div>
        )}
      </div>

      {year === 2025 && (
        <div className="mb-4 px-4 py-2 rounded-lg border border-neon-amber/40 bg-neon-amber/5 text-xs text-neon-amber">
          2025: only Primary Energy reported a return (0.74%). All other types posted 0%.
        </div>
      )}

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 8, right: 60, left: 24, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} width={110} />
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
                <Cell key={d.name} fill={d.name === top ? "hsl(var(--neon-magenta))" : "hsl(var(--neon-cyan))"} />
              ))}
              <LabelList
                dataKey="value"
                position="right"
                formatter={(v: number) => `${v.toFixed(2)}%`}
                style={{ fill: "hsl(var(--foreground))", fontSize: 11, fontWeight: 600 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Primary Energy and Oil consistently deliver the highest returns, while renewables (Solar, Wind) climb steadily year over year — narrowing the gap by 2024 before the broad 2025 collapse.
      </InsightCard>
    </Section>
  );
};
