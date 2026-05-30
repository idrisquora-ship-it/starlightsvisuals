import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

type Crumb = {
  label: string;
  to?: string;
  params?: Record<string, string>;
};

type WorksBreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

export function WorksBreadcrumb({ items, className }: WorksBreadcrumbProps) {
  const { t } = useTranslation();

  return (
    <nav aria-label={t("works.breadcrumbLabel")} className={cn("flex flex-wrap items-center gap-1.5 text-xs", className)}>
      <Link
        to="/"
        className="font-display uppercase tracking-widest text-muted-foreground transition hover:text-neon-green"
      >
        {t("works.breadcrumbHome")}
      </Link>
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden />
          {item.to ? (
            <Link
              to={item.to as "/portfolio" | "/works/$category"}
              {...(item.params ? { params: item.params as { category: string } } : {})}
              className="font-display uppercase tracking-widest text-muted-foreground transition hover:text-neon-green"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-display uppercase tracking-widest text-neon-green">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
