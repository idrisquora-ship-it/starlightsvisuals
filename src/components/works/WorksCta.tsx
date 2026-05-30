import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SectionReveal } from "@/components/SectionReveal";

export function WorksCta() {
  const { t } = useTranslation();

  return (
    <SectionReveal as="section" className="border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="font-script text-2xl text-neon-green">{t("works.ctaScript")}</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{t("works.ctaTitle")}</h2>
        <p className="mt-4 text-muted-foreground">{t("works.ctaDesc")}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon-green px-8 py-3.5 font-display text-sm uppercase tracking-widest text-background transition hover:glow-blue"
        >
          {t("works.ctaButton")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionReveal>
  );
}
