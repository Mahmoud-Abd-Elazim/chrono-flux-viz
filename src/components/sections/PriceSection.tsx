import { CartesianGrid, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { PRICE_TREND } from "@/data/energy";

export const PriceSection = () => {
  const values = PRICE_TREND.map((d) => d.price);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <Section
      id="price"
      eyebrow="07 · Price Stability"
      title="Average Energy Price Trend"
      subtitle="Composite price index. Volatility band shows period min–max envelope."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Stat label="Period Average" value={avg.toFixed(1)} />
        <Stat label="Period Low" value={min.toFixed(1)} tone="pos" />
        <Stat label="Period High" value={max.toFixed(1)} tone="neg" />
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={PRICE_TREND} margin={{ top: 16, right: 24, left: -10, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <ReferenceArea y1={min} y2={max} fill="hsl(var(--neon-cyan))" fillOpacity={0.06} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [`$${v.toFixed(1)}`, "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--neon-magenta))"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "hsl(var(--neon-magenta))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "hsl(var(--neon-cyan))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Prices remain relatively stable despite market imbalance — period swing is contained within a <span className="font-mono-num">{(max - min).toFixed(1)}-pt</span> band.
      </InsightCard>
    </Section>
  );
};

const Stat = ({ label, value, tone }: { label: string; value: string; tone?: "pos" | "neg" }) => (
  <div className="surface-card rounded-xl p-4">
    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    <div className={`mt-1 font-mono-num text-2xl font-semibold ${tone === "pos" ? "text-signal-positive" : tone === "neg" ? "text-signal-negative" : "text-foreground"}`}>${value}</div>
  </div>
);
