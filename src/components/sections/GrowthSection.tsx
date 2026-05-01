import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { DEMAND_GROWTH } from "@/data/energy";

export const GrowthSection = () => {
  const min = Math.min(...DEMAND_GROWTH.map((d) => d.value));
  const max = Math.max(...DEMAND_GROWTH.map((d) => d.value));

  return (
    <Section
      id="growth"
      eyebrow="03 · Demand Trajectory"
      title="Energy Demand Growth Trend"
      subtitle="Aggregate global demand index. Growth continues with notable mid-period instability."
    >
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "2020 Baseline", value: DEMAND_GROWTH[0].value.toFixed(2) },
          { label: "2025 Latest", value: DEMAND_GROWTH[5].value.toFixed(2), accent: true },
          { label: "Period Low", value: min.toFixed(2), tone: "neg" as const },
          { label: "Period High", value: max.toFixed(2), tone: "pos" as const },
        ].map((s) => (
          <div key={s.label} className="surface-card rounded-xl p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
            <div
              className={`mt-1 font-mono-num text-2xl font-semibold ${
                s.accent ? "text-neon-cyan text-glow-cyan" : s.tone === "neg" ? "text-signal-negative" : s.tone === "pos" ? "text-signal-positive" : ""
              }`}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DEMAND_GROWTH} margin={{ top: 20, right: 24, left: -10, bottom: 8 }}>
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--neon-cyan))" stopOpacity={0.55} />
                <stop offset="100%" stopColor="hsl(var(--neon-cyan))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis domain={[7.2, 8.0]} stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [v.toFixed(2), "Demand Index"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--neon-cyan))"
              strokeWidth={2.5}
              fill="url(#growthFill)"
              activeDot={{ r: 6, fill: "hsl(var(--neon-magenta))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
              dot={{ r: 4, fill: "hsl(var(--neon-cyan))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        The market is expanding steadily, but with slight instability — the <span className="text-signal-negative">2024 dip</span> followed by a sharp <span className="text-signal-positive">2025 rebound</span> suggests volatility-driven repricing risk.
      </InsightCard>
    </Section>
  );
};
