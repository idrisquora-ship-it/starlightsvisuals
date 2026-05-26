import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { StaggerReveal } from "@/components/SectionReveal";
import { TestimonialCard, type TextTestimonial } from "@/components/TestimonialCard";
import { SectionReveal } from "@/components/SectionReveal";

const testimonials: TextTestimonial[] = [
  {
    quote:
      "The cinematic quality instantly elevated our brand perception. Engagement on our hero campaign jumped within the first week — the visuals feel premium, intentional, and impossible to scroll past.",
    name: "Elena Vasquez",
    company: "Raycon",
    role: "VP of Brand Marketing",
    result: "+43% Engagement",
    initials: "EV",
    rating: 5,
  },
  {
    quote:
      "Starlights delivered a launch film that felt like a theatrical trailer, not a product ad. Our retention on paid social doubled and the creative became the benchmark for every campaign after.",
    name: "James Whitfield",
    company: "Crossrope",
    role: "Founder & CEO",
    result: "5x Better Retention",
    initials: "JW",
    rating: 5,
  },
  {
    quote:
      "From storyboard to final grade, the team was surgical about craft and deadlines. We shipped a global campaign with 2M+ views and a brand lift our leadership still references in board meetings.",
    name: "Amara Okonkwo",
    company: "Depology",
    role: "Head of Creative",
    result: "2M+ Views",
    initials: "AO",
    rating: 5,
  },
];

export function TextTestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: "-5% 0px" });

  return (
    <section className="relative isolate overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.88_0.27_142/0.06),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-14 md:py-32">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[10px] uppercase tracking-[0.35em] text-neon-green">
            Client results
          </p>
          <h2 className="mt-4 font-display text-2xl uppercase leading-tight tracking-tight text-balance sm:text-3xl md:mt-5 md:text-4xl">
            <span className="block text-foreground">They trusted our creative vision —</span>
            <span className="mt-1 block text-outline-green">and got results.</span>
          </h2>
          <p className="mt-4 text-xs uppercase leading-relaxed tracking-[0.12em] text-muted-foreground sm:text-sm md:mt-5">
            Real brands. Real growth. Real cinematic storytelling.
          </p>
        </SectionReveal>

        {/* Desktop & tablet grid */}
        <StaggerReveal className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </StaggerReveal>

        {/* Mobile swipe carousel */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, y: 32 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:hidden"
        >
          <div className="testimonial-carousel -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
            {testimonials.map((t) => (
              <div key={t.name} className="w-[min(88vw,340px)] shrink-0 snap-center">
                <TestimonialCard testimonial={t} className="min-h-[360px]" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
