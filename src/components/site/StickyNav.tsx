import { useEffect, useState } from "react";
import { SECTIONS } from "@/data/energy";

export const StickyNav = () => {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      let current = "hero";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="h-0.5 w-full bg-border/40">
        <div
          className="h-full transition-[width] duration-150"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)))",
            boxShadow: "0 0 12px hsl(var(--neon-cyan) / 0.7)",
          }}
        />
      </div>
      <nav className="backdrop-blur-xl bg-background/60 border-b border-border/60">
        <div className="container flex items-center justify-between h-14">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse-glow" />
            <span className="font-display font-semibold tracking-tight text-sm md:text-base">
              <span className="text-gradient-energy">ENERGY</span>
              <span className="text-muted-foreground"> / 2020–2025</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative px-3 py-2 text-xs uppercase tracking-wider transition-colors ${
                    active === s.id ? "text-neon-cyan text-glow-cyan" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <span className="absolute left-3 right-3 -bottom-px h-px bg-neon-cyan" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex gap-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={s.label}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  active === s.id ? "bg-neon-cyan w-4" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
