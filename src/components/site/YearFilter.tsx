import { YEARS } from "@/data/energy";

type Props = {
  value: number | "all";
  onChange: (v: number | "all") => void;
  allowAll?: boolean;
  label?: string;
};

export const YearFilter = ({ value, onChange, allowAll = true, label = "Year" }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="relative">
        <select
          value={String(value)}
          onChange={(e) => {
            const v = e.target.value;
            onChange(v === "all" ? "all" : Number(v));
          }}
          className="appearance-none bg-secondary border border-border rounded-lg pl-4 pr-10 py-2 text-sm font-mono-num focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
        >
          {allowAll && <option value="all">All years</option>}
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</div>
      </div>
    </div>
  );
};
