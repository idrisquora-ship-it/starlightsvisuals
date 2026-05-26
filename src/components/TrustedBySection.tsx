import { LogoMarquee } from "@/components/LogoMarquee";
import { SectionReveal } from "@/components/SectionReveal";

export function TrustedBySection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/40 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,oklch(0.88_0.27_142/0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-25" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-14 md:py-16">
        <SectionReveal className="flex flex-col items-center text-center">
          <span className="trusted-by-badge inline-flex items-center rounded-full border border-neon-green/30 bg-neon-green px-3.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.22em] text-background md:text-[10px] md:tracking-[0.25em]">
            500+ DTC brands
          </span>

          <h2 className="trusted-by-title mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl md:mt-5 md:text-[3.25rem] md:leading-none lg:text-[3.5rem]">
            <span className="neon-text text-glow">Trusted</span>{" "}
            <span className="text-foreground">By</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-6 md:mt-8">
          <LogoMarquee />
        </SectionReveal>
      </div>
    </section>
  );
}
