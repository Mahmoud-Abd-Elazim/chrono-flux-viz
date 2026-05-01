import { Lightbulb } from "lucide-react";

export const InsightCard = ({ children }: { children: React.ReactNode }) => (
  <div className="surface-card rounded-xl p-5 md:p-6 mt-8 flex gap-4 items-start relative overflow-hidden">
    <div
      className="absolute inset-x-0 top-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(var(--neon-cyan)), transparent)" }}
    />
    <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/40">
      <Lightbulb className="w-5 h-5 text-neon-cyan" />
    </div>
    <div className="text-sm md:text-base text-foreground/90 leading-relaxed">
      <div className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan mb-1">Executive Insight</div>
      {children}
    </div>
  </div>
);
