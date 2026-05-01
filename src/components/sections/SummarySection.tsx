import { TrendingUp, TrendingDown, AlertTriangle, Flame, Sun } from "lucide-react";
import { Section } from "@/components/site/Section";

const POINTS = [
  { icon: TrendingUp, color: "hsl(var(--signal-positive))", title: "Energy demand is rising", body: "Steady global growth with a sharp 2025 rebound after a 2024 dip." },
  { icon: TrendingDown, color: "hsl(var(--neon-magenta))", title: "Investment is declining", body: "Capital deployment has retreated from its 2022 peak across most sectors." },
  { icon: AlertTriangle, color: "hsl(var(--signal-negative))", title: "Energy deficit is increasing", body: "Asia and Europe show structural supply gaps — Asia hits −15 in 2025." },
  { icon: Flame, color: "hsl(var(--neon-amber))", title: "Fossil fuels dominate short-term", body: "Oil and Gas lead ROI and capture the majority of sector revenue today." },
  { icon: Sun, color: "hsl(var(--neon-green))", title: "Renewables are the future opportunity", body: "Solar and wind ROI is rising annually — the gap with fossils is closing." },
];

export const SummarySection = () => {
  return (
    <Section
      id="summary"
      eyebrow="11 · Final Read"
      title="Executive Summary"
      subtitle="Five conclusions every decision-maker should carry from this analysis."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {POINTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className="surface-card rounded-2xl p-6 group transition-all hover:-translate-y-1"
              style={{ boxShadow: `inset 0 1px 0 0 ${p.color}33` }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{ background: `${p.color}1a`, border: `1px solid ${p.color}55`, boxShadow: `0 0 24px ${p.color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <div className="font-display text-lg font-semibold mb-1">{p.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 relative rounded-3xl p-10 md:p-16 text-center overflow-hidden surface-card">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at center, hsl(var(--neon-cyan) / 0.25), transparent 70%)" }}
        />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">The Final Read</div>
          <p className="font-display text-2xl md:text-4xl leading-tight max-w-3xl mx-auto">
            The energy market is entering a <span className="text-gradient-energy">transition phase</span>.
            <br className="hidden md:block" />
            Those who invest early and strategically will gain the most advantage.
          </p>
        </div>
      </div>

      <footer className="mt-16 text-center text-xs text-muted-foreground font-mono-num tracking-widest">
        DATA WINDOW · 2020 — 2025  ·  EXECUTIVE BRIEFING
      </footer>
    </Section>
  );
};
