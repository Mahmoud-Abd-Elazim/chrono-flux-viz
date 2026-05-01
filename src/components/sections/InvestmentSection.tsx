import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { INVESTMENT_BY_YEAR, INVESTMENT_TYPES, YEARS, type Year } from "@/data/energy";

const COLORS: Record<string, string> = {
  Biofuel: "hsl(40 90% 60%)",
  Coal: "hsl(var(--neon-violet))",
  Electricity: "hsl(var(--neon-cyan))",
  Gas: "hsl(var(--neon-magenta))",
  Hydro: "hsl(200 90% 55%)",
  Nuclear: "hsl(280 90% 65%)",
  Oil: "hsl(var(--neon-amber))",
  "Primary Energy": "hsl(var(--neon-green))",
  Solar: "hsl(60 95% 60%)",
  Wind: "hsl(160 90% 55%)",
};

const fmtB = (v: number) => `$${(v / 1e9).toFixed(2)}B`;

export const InvestmentSection = () => {
  const [year, setYear] = useState<number | "all">("all");

  const lineData = useMemo(
    () =>
      YEARS.map((y) => {
        const row: any = { year: y };
        INVESTMENT_TYPES.forEach((t) => (row[t] = INVESTMENT_BY_YEAR[y][t]));
        return row;
      }),
    []
  );

  const barData = useMemo(() => {
    if (year === "all") return [];
    const y = year as Year;
    return INVESTMENT_TYPES.map((t) => ({ name: t, value: INVESTMENT_BY_YEAR[y][t] })).sort(
      (a, b) => b.value - a.value
    );
  }, [year]);

  return (
    <Section
      id="investment"
      eyebrow="10 · Capital Flow"
      title="Total Investment by Year & Energy Type"
      subtitle="Investment held near $8B annually from 2020–2024, then collapsed to ~$3.4B in 2025."
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <YearFilter value={year} onChange={setYear} />
        <span className="text-xs text-muted-foreground">
          {year === "all" ? "Showing all energy types across years" : `Snapshot for ${year}`}
        </span>
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          {year === "all" ? (
            <LineChart data={lineData} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => fmtB(v)}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(v: number, k: string) => [fmtB(v), k]}
              />
              {INVESTMENT_TYPES.map((t) => (
                <Line
                  key={t}
                  type="monotone"
                  dataKey={t}
                  stroke={COLORS[t]}
                  strokeWidth={2}
                  dot={{ r: 3, fill: COLORS[t] }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={barData} layout="vertical" margin={{ top: 8, right: 80, left: 32, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} tickFormatter={(v) => fmtB(v)} />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 12 }} width={110} />
              <Tooltip
                cursor={{ fill: "hsl(var(--neon-cyan) / 0.05)" }}
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(v: number) => [fmtB(v), "Investment"]}
              />
              <Bar dataKey="value" fill="hsl(var(--neon-cyan))" radius={[0, 6, 6, 0]}>
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => fmtB(v)}
                  style={{ fill: "hsl(var(--foreground))", fontSize: 11, fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Capital deployment was steady at <span className="font-mono-num text-neon-cyan">~$8B</span> per energy type from 2020–2024, then dropped sharply to <span className="font-mono-num text-neon-magenta">~$3.4B</span> in 2025 — a clear signal that investors are pulling back and becoming more selective.
      </InsightCard>
    </Section>
  );
};
