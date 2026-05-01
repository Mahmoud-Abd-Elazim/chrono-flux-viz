import { useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { INVESTMENT_TREND } from "@/data/energy";

const SERIES = [
  { key: "Oil", color: "hsl(var(--neon-amber))" },
  { key: "Gas", color: "hsl(var(--neon-magenta))" },
  { key: "Coal", color: "hsl(var(--neon-violet))" },
  { key: "Nuclear", color: "hsl(var(--neon-cyan))" },
  { key: "Solar", color: "hsl(var(--neon-green))" },
  { key: "Wind", color: "hsl(160 90% 55%)" },
];

export const InvestmentSection = () => {
  const [active, setActive] = useState<Record<string, boolean>>(
    Object.fromEntries(SERIES.map((s) => [s.key, true]))
  );

  return (
    <Section
      id="investment"
      eyebrow="10 · Capital Flow"
      title="Investment Trends by Energy Type"
      subtitle="Annual capital deployment ($B). Toggle series in the legend."
    >
      <div className="flex flex-wrap gap-2 mb-6">
        {SERIES.map((s) => {
          const on = active[s.key];
          return (
            <button
              key={s.key}
              onClick={() => setActive((a) => ({ ...a, [s.key]: !a[s.key] }))}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                on ? "border-border bg-secondary" : "border-border/50 opacity-40"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color, boxShadow: on ? `0 0 8px ${s.color}` : "none" }} />
              {s.key}
            </button>
          );
        })}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={INVESTMENT_TREND} margin={{ top: 16, right: 24, left: -10, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number, k: string) => [`$${v}B`, k]}
            />
            {SERIES.map(
              (s) =>
                active[s.key] && (
                  <Line
                    key={s.key}
                    type="monotone"
                    dataKey={s.key}
                    stroke={s.color}
                    strokeWidth={2.2}
                    dot={{ r: 3, fill: s.color }}
                    activeDot={{ r: 6 }}
                  />
                )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Investment is declining across most energy sectors after the 2022 peak — capital is becoming more selective, favoring projects with shorter payback windows.
      </InsightCard>
    </Section>
  );
};
