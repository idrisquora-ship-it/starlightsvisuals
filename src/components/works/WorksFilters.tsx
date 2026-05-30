import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

type WorksFiltersProps = {
  query: string;
  onQueryChange: (value: string) => void;
  year: string;
  onYearChange: (value: string) => void;
  years: number[];
};

export function WorksFilters({ query, onQueryChange, year, onYearChange, years }: WorksFiltersProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <label className="relative flex-1 max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={t("works.searchPlaceholder")}
          className="w-full rounded-full border border-border/60 bg-background/60 py-2.5 pl-10 pr-4 text-sm backdrop-blur transition focus:border-neon-green/50 focus:outline-none focus:ring-1 focus:ring-neon-green/30"
        />
      </label>
      <select
        value={year}
        onChange={(e) => onYearChange(e.target.value)}
        className="rounded-full border border-border/60 bg-background/60 px-4 py-2.5 font-display text-xs uppercase tracking-widest backdrop-blur transition focus:border-neon-green/50 focus:outline-none"
        aria-label={t("works.filterYear")}
      >
        <option value="">{t("works.allYears")}</option>
        {years.map((y) => (
          <option key={y} value={String(y)}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}
