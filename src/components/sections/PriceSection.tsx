import { CartesianGrid, LabelList, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
      subtitle="Composite price index 2020–2025. The market remains remarkably stable inside a narrow band."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Stat label="Period Average" value={avg.toFixed(2)} />
        <Stat label="Period Low" value={min.toFixed(2)} tone="pos" />
        <Stat label="Period High" value={max.toFixed(2)} tone="neg" />
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={PRICE_TREND} margin={{ top: 24, right: 32, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
              domain={[133, 137]}
              tickFormatter={(v) => v.toFixed(1)}
            />
            <ReferenceArea y1={min} y2={max} fill="hsl(var(--neon-cyan))" fillOpacity={0.06} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [v.toFixed(2), "Price"]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--neon-magenta))"
              strokeWidth={2.5}
              dot={{ r: 5, fill: "hsl(var(--neon-magenta))", stroke: "hsl(var(--background))", strokeWidth: 2 }}
              activeDot={{ r: 7, fill: "hsl(var(--neon-cyan))" }}
            >
              <LabelList
                dataKey="price"
                position="top"
                formatter={(v: number) => v.toFixed(2)}
                style={{ fill: "hsl(var(--foreground))", fontSize: 11, fontWeight: 600 }}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Despite the wider energy market turbulence, prices stay locked inside a tiny <span className="font-mono-num">{(max - min).toFixed(2)}-pt</span> band — a sign of strong policy intervention and stabilization mechanisms.
      </InsightCard>
    </Section>
  );
};

const Stat = ({ label, value, tone }: { label: string; value: string; tone?: "pos" | "neg" }) => (
  <div className="surface-card rounded-xl p-4">
    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    <div className={`mt-1 font-mono-num text-2xl font-semibold ${tone === "pos" ? "text-signal-positive" : tone === "neg" ? "text-signal-negative" : "text-foreground"}`}>{value}</div>
  </div>
);
