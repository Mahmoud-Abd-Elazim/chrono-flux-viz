import { useMemo, useState } from "react";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis, LabelList } from "recharts";
import { Section } from "@/components/site/Section";
import { InsightCard } from "@/components/site/InsightCard";
import { YearFilter } from "@/components/site/YearFilter";
import { ENERGY_VS_GDP_BY_YEAR, type Year } from "@/data/energy";

export const EconomySection = () => {
  const [year, setYear] = useState<number | "all">(2022);

  const { data, gdpAvailable } = useMemo(() => {
    const y = (year === "all" ? 2022 : year) as Year;
    const rows = ENERGY_VS_GDP_BY_YEAR[y];
    const hasGdp = rows.some((r) => r.gdp > 0);
    return { data: rows, gdpAvailable: hasGdp };
  }, [year]);

  // X/Y depend on whether GDP is available
  const xKey = gdpAvailable ? "gdp" : "revenue";
  const yKey = "production";
  const xLabel = gdpAvailable ? "Avg GDP ($B)" : "Total Revenue";
  const yLabel = "Avg Production";

  return (
    <Section
      id="economy"
      eyebrow="09 · Economy vs Energy"
      title="Energy Production vs Economy by Continent"
      subtitle="Each point = continent. Bubble size = total revenue. Filter by year."
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <YearFilter value={year} onChange={setYear} allowAll={false} />
        {!gdpAvailable && (
          <span className="text-xs text-neon-amber">
            GDP data unavailable for {String(year)} — showing Production vs Revenue
          </span>
        )}
      </div>

      <div className="surface-card rounded-2xl p-4 md:p-6 h-[520px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 16, right: 32, left: 24, bottom: 32 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              type="number"
              dataKey={xKey}
              name={xLabel}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => v.toLocaleString()}
              label={{ value: xLabel, position: "insideBottom", offset: -16, fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
            />
            <YAxis
              type="number"
              dataKey={yKey}
              name={yLabel}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => v.toLocaleString()}
              label={{ value: yLabel, angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              width={90}
            />
            <ZAxis type="number" dataKey="revenue" range={[120, 1200]} name="Revenue" />
            <Tooltip
              cursor={{ stroke: "hsl(var(--neon-cyan))", strokeOpacity: 0.3 }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d: any = payload[0].payload;
                return (
                  <div className="bg-popover border border-neon-cyan/40 rounded-lg p-3 text-xs">
                    <div className="font-medium text-base text-neon-cyan">{d.region}</div>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 font-mono-num">
                      {d.gdp > 0 && (<><span className="text-muted-foreground">GDP</span><span>${d.gdp.toLocaleString()}B</span></>)}
                      <span className="text-muted-foreground">Production</span><span>{d.production.toLocaleString()}</span>
                      <span className="text-muted-foreground">Revenue</span><span>{d.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                );
              }}
            />
            <Scatter data={data} fill="hsl(var(--neon-cyan))" fillOpacity={0.7} stroke="hsl(var(--neon-magenta))" strokeWidth={1.5}>
              <LabelList
                dataKey="region"
                position="top"
                style={{ fill: "hsl(var(--foreground))", fontSize: 11, fontWeight: 600 }}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <InsightCard>
        Asia leads on both production and revenue every year, far outpacing other continents. Europe and North America cluster as the second tier, while Oceania and Africa anchor the lower end.
      </InsightCard>
    </Section>
  );
};
