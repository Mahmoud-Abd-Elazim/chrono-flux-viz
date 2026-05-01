import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, subtitle, children, className }: Props) => {
  const { ref, shown } = useReveal<HTMLDivElement>(0.12);
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "scroll-mt-nav relative min-h-screen w-full py-20 md:py-28 px-4 md:px-8",
        className
      )}
    >
      <div className={cn("container max-w-7xl transition-all duration-700", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
        <div className="mb-10 md:mb-14 max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-neon-cyan" />
              <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan font-mono-num">{eyebrow}</span>
            </div>
          )}
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};
