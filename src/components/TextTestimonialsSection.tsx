import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

import { StaggerReveal } from "@/components/SectionReveal";
import { TestimonialCard, type TextTestimonial } from "@/components/TestimonialCard";
import { SectionReveal } from "@/components/SectionReveal";

export function TextTestimonialsSection() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: "-5% 0px" });

  const testimonials: TextTestimonial[] = useMemo(
    () => [
      {
        headline: t("testimonials.items.elena.headline"),
        quote: t("testimonials.items.elena.quote"),
        name: "Elena Vasquez",
        company: "Raycon",
        role: t("testimonials.items.elena.role"),
        initials: "EV",
        rating: 5,
      },
      {
        headline: t("testimonials.items.james.headline"),
        quote: t("testimonials.items.james.quote"),
        name: "James Whitfield",
        company: "Crossrope",
        role: t("testimonials.items.james.role"),
        initials: "JW",
        rating: 5,
      },
      {
        headline: t("testimonials.items.amara.headline"),
        quote: t("testimonials.items.amara.quote"),
        name: "Amara Okonkwo",
        company: "Depology",
        role: t("testimonials.items.amara.role"),
        initials: "AO",
        rating: 5,
      },
    ],
    [t],
  );

  return (
    <section className="relative isolate overflow-hidden border-b border-border/40 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.88_0.27_142/0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-20" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-14 md:py-28">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <span className="trusted-by-badge inline-flex items-center rounded-full border border-neon-green/30 bg-neon-green px-4 py-1.5 font-display text-[9px] font-bold uppercase tracking-[0.22em] text-background md:text-[10px] md:tracking-[0.25em]">
            {t("testimonials.badge")}
          </span>

          <h2 className="mt-5 font-display text-2xl uppercase leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none">
            <span className="text-foreground">{t("testimonials.title1")}</span>{" "}
            <span className="neon-text text-glow">{t("testimonials.title2")}</span>
          </h2>
        </SectionReveal>

        <StaggerReveal className="mt-12 hidden gap-5 md:mt-16 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} testimonial={item} />
          ))}
        </StaggerReveal>

        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 32 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:hidden"
        >
          <div className="testimonial-carousel -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
            {testimonials.map((item) => (
              <div key={item.name} className="w-[min(92vw,380px)] shrink-0 snap-center">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
