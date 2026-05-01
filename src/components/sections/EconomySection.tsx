import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis, ReferenceLine } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { ENERGY_VS_GDP } from "@/data/energy";

// Simple linear regression for trendline
const xs = ENERGY_VS_GDP.map((d) => d.energy);
const ys = ENERGY_VS_GDP.map((d) => d.gdp);
const n = xs.length;
const sx = xs.reduce((a, b) => a + b, 0);
const sy = ys.reduce((a, b) => a + b, 0);
const sxy = xs.reduce((a, b, i) => a + b * ys[i], 0);
const sxx = xs.reduce((a, b) => a + b * b, 0);
const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx);
const intercept = (sy - slope * sx) / n;
const minX = Math.min(...xs), maxX = Math.max(...xs);
const trend = [
  { energy: minX, gdp: slope * minX + intercept },
  { energy: maxX, gdp: slope * maxX + intercept },
];

export const EconomySection = () => {
  return (
    <Section
      id="economy"
      eyebrow="09 · Economy vs Energy"
      title="Energy Production vs GDP"
      subtitle="Each point = country. Bubble size = population. Trendline shows the correlation."
    >
      <div className="surface-card rounded-2xl p-4 md:p-6 h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 16, right: 24, left: 8, bottom: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              type="number"
              dataKey="energy"
              name="Energy (TWh)"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
              label={{ value: "Energy Production (TWh)", position: "insideBottom", offset: -10, fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey="gdp"
              name="GDP ($B)"
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
              label={{ value: "GDP ($B)", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            />
            <ZAxis type="number" dataKey="pop" range={[60, 600]} name="Population (M)" />
            <Tooltip
              cursor={{ stroke: "hsl(var(--neon-cyan))", strokeOpacity: 0.3 }}
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number, key: string) => [typeof v === "number" ? v.toLocaleString() : v, key]}
              labelFormatter={() => ""}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d: any = payload[0].payload;
                return (
                  <div className="bg-popover border border-neon-cyan/40 rounded-lg p-3 text-xs">
                    <div className="font-medium text-base text-neon-cyan">{d.country}</div>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono-num">
                      <span className="text-muted-foreground">Energy</span><span>{d.energy.toLocaleString()} TWh</span>
                      <span className="text-muted-foreground">GDP</span><span>${d.gdp.toLocaleString()}B</span>
                      <span className="text-muted-foreground">Pop</span><span>{d.pop}M</span>
                    </div>
                  </div>
                );
              }}
            />
            <Scatter data={ENERGY_VS_GDP} fill="hsl(var(--neon-cyan))" fillOpacity={0.7} stroke="hsl(var(--neon-cyan))" />
            <Scatter data={trend} line={{ stroke: "hsl(var(--neon-magenta))", strokeWidth: 2, strokeDasharray: "6 4" }} shape={() => <g />} legendType="none" />
            <ReferenceLine />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        There is a strong correlation between energy production and economic strength — high-output economies cluster along the upper trendline.
      </InsightCard>
    </Section>
  );
};
