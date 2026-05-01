import { useMemo, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { ENERGY_BALANCE, YEARS } from "@/data/energy";

const REGIONS = Object.keys(ENERGY_BALANCE);

export const BalanceSection = () => {
  const [yearFilter, setYearFilter] = useState<"all" | number>("all");

  const data = useMemo(() => {
    return REGIONS.map((region) => {
      const row: Record<string, number | string> = { region };
      YEARS.forEach((y, i) => {
        if (yearFilter === "all" || yearFilter === y) {
          row[String(y)] = ENERGY_BALANCE[region][i];
        }
      });
      return row;
    });
  }, [yearFilter]);

  const visibleYears = yearFilter === "all" ? YEARS : [yearFilter];

  return (
    <Section
      id="balance"
      eyebrow="02 · Crisis View"
      title="Global Energy Balance by Region"
      subtitle="Surplus vs deficit (PWh equivalent). Negative values indicate regional shortfall."
    >
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setYearFilter("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono-num border transition-all ${
            yearFilter === "all"
              ? "bg-neon-cyan text-background border-neon-cyan glow-cyan"
              : "border-border text-muted-foreground hover:text-foreground hover:border-neon-cyan/50"
          }`}
        >
          All Years
        </button>
        {YEARS.map((y) => (
          <button
            key={y}
            onClick={() => setYearFilter(y)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono-num border transition-all ${
              yearFilter === y
                ? "bg-neon-cyan text-background border-neon-cyan glow-cyan"
                : "border-border text-muted-foreground hover:text-foreground hover:border-neon-cyan/50"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[460px] md:h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 12, left: -10, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <Tooltip
              cursor={{ fill: "hsl(var(--neon-cyan) / 0.05)" }}
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [`${v.toFixed(1)}`, "Balance"]}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {visibleYears.map((y, idx) => (
              <Bar key={y} dataKey={String(y)} radius={[4, 4, 0, 0]}>
                {data.map((row, ri) => {
                  const v = row[String(y)] as number | undefined;
                  const positive = (v ?? 0) >= 0;
                  // Vary lightness slightly per year for visual rhythm
                  const lightnessShift = idx * 4;
                  const fill = positive
                    ? `hsl(165 95% ${50 - lightnessShift}%)`
                    : `hsl(340 95% ${60 - lightnessShift}%)`;
                  return <Cell key={ri} fill={fill} />;
                })}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Several regions show consistent energy deficits, especially <span className="text-neon-magenta font-medium">Asia</span> and <span className="text-neon-magenta font-medium">Europe</span>. Asia's 2025 collapse to <span className="font-mono-num text-signal-negative">-15</span> signals a structural supply gap.
      </InsightCard>
    </Section>
  );
};
