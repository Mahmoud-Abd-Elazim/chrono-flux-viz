import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { TOP_COUNTRIES } from "@/data/energy";

export const DominanceSection = () => {
  const data = [...TOP_COUNTRIES].sort((a, b) => b.value - a.value);

  return (
    <Section
      id="dominance"
      eyebrow="08 · Global Dominance"
      title="Top Countries by Energy Production"
      subtitle="Annual production (TWh). Leaders highlighted in magenta."
    >
      <div className="surface-card rounded-2xl p-4 md:p-6 h-[480px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 24, left: -8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} interval={0} angle={-30} textAnchor="end" height={70} />
            <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
            <Tooltip
              cursor={{ fill: "hsl(var(--neon-cyan) / 0.05)" }}
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--neon-cyan) / 0.4)",
                borderRadius: 8,
                fontSize: 12,
              }}
              formatter={(v: number) => [`${v.toLocaleString()} TWh`, "Production"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((d) => (
                <Cell key={d.country} fill={d.leader ? "hsl(var(--neon-magenta))" : "hsl(var(--neon-cyan))"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {data.filter((d) => d.leader).map((d, i) => (
          <div key={d.country} className="surface-card rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[9px] uppercase tracking-widest text-neon-magenta">Leader · #{i + 1}</div>
            <div className="text-2xl font-display font-semibold text-glow-magenta text-neon-magenta">{d.country}</div>
            <div className="font-mono-num text-sm text-muted-foreground mt-1">{d.value.toLocaleString()} TWh</div>
          </div>
        ))}
      </div>

      <InsightCard>
        China and the US dominate global energy production — together they account for over <span className="text-neon-magenta font-medium">half</span> of the top-10 output.
      </InsightCard>
    </Section>
  );
};
