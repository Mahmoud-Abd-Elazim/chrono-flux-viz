import { ChevronDown, Droplet, Flame, Zap, Sun, Wind } from "lucide-react";
import { HeroCanvas } from "@/components/site/HeroCanvas";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade animate-grid-shift opacity-50" />
      <HeroCanvas />

      {/* Floating energy glyphs */}
      <Droplet className="absolute top-[18%] left-[8%] w-8 h-8 text-neon-cyan/60 animate-float-slow" style={{ animationDelay: "0s" }} />
      <Flame   className="absolute top-[28%] right-[12%] w-10 h-10 text-neon-magenta/70 animate-float-slow" style={{ animationDelay: "1s" }} />
      <Zap     className="absolute bottom-[24%] left-[14%] w-9 h-9 text-neon-amber/70 animate-float-slow" style={{ animationDelay: "2s" }} />
      <Sun     className="absolute top-[20%] right-[28%] w-8 h-8 text-neon-amber/60 animate-float-slow" style={{ animationDelay: "1.5s" }} />
      <Wind    className="absolute bottom-[20%] right-[10%] w-10 h-10 text-neon-green/70 animate-float-slow" style={{ animationDelay: "0.7s" }} />

      <div className="container relative z-10 max-w-5xl text-center px-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-neon-cyan font-mono-num">Executive Briefing · Q4 2025</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
          Global <span className="text-gradient-energy">Energy</span>
          <br />
          Market Analysis
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-foreground/80 font-light">
          Understanding Crisis, Growth, and Investment Opportunities
          <span className="block mt-1 text-neon-cyan font-mono-num text-base md:text-lg tracking-widest">2020 — 2025</span>
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
          This project analyzes global energy data to uncover market trends, energy shortages,
          investment opportunities, and future risks — distilled for decision-makers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#balance"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium text-background bg-neon-cyan transition-transform hover:scale-105"
            style={{ boxShadow: "var(--glow-cyan)" }}
          >
            <span>Start Analysis</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#summary"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-sm border border-border hover:border-neon-magenta/60 hover:text-neon-magenta transition-colors"
          >
            Jump to Executive Summary
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
