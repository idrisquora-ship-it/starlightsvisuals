import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-cosmic.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import trailerVid from "@/assets/portfolio-trailer.mp4";
import characterVid from "@/assets/portfolio-character.mp4";
import creatureVid from "@/assets/portfolio-creature.mp4";

const trustedBy = [
  "UBISOFT", "RIOT GAMES", "EA SPORTS", "BANDAI", "SEGA", "EPIC GAMES", "NETFLIX", "WARNER BROS",
];

const testimonials = [
  {
    quote:
      "Starlights Visuals transformed our cinematic trailer into something players couldn't stop talking about. Pre-orders jumped 40% the week it dropped.",
    name: "Marcus Chen",
    role: "Creative Director, Apex Studios",
    result: "+40% pre-orders",
  },
  {
    quote:
      "Their character animation work elevated our entire IP. The level of polish and storytelling in every frame is unmatched in the industry.",
    name: "Sophia Reyes",
    role: "Executive Producer, Nova Games",
    result: "8M+ views",
  },
  {
    quote:
      "We shipped on time, on budget, and with VFX that punched way above our weight class. The team is now part of every roadmap we build.",
    name: "Daniel Okafor",
    role: "Head of Production, Iron Forge",
    result: "Game of the Year nominee",
  },
];

const videoTestimonials = [
  { video: trailerVid, poster: portfolioTrailer, name: "Alex Morgan", role: "CEO, Lumen Worlds", quote: "They made our launch unforgettable." },
  { video: characterVid, poster: portfolioCharacter, name: "Priya Shah", role: "Art Director, Nova Vanguard", quote: "Best animation partner we've worked with." },
  { video: creatureVid, poster: portfolioCreature, name: "Jonas Weber", role: "Founder, Abyss Studios", quote: "From concept to cinematic in record time." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starlights Visuals — Animation, VFX & Game Art Studio" },
      { name: "description", content: "A creative studio for 2D / 3D animation, VFX, and game art. We bring fantasy worlds, characters and cinematics to life." },
      { property: "og:title", content: "Starlights Visuals — Animation & VFX Studio" },
      { property: "og:description", content: "Animation, VFX, and game art. Worlds, characters, cinematics." },
    ],
  }),
  component: Home,
});

const services = [
  { num: "01", title: "Animation & VFX", desc: "Cinematic 2D & 3D animation, character rigs, and visual effects for games and films." },
  { num: "02", title: "Game Development", desc: "Full-cycle production — concept, art, code, audio, ship." },
  { num: "03", title: "Concept & Character Art", desc: "Original characters, creatures, environments, and props that anchor your IP." },
  { num: "04", title: "Cinematic Trailers", desc: "Story-driven trailers built to launch games and franchises." },
];

const showcase = [
  { img: portfolioCharacter, tag: "Character", title: "Nova Vanguard" },
  { img: portfolioGame, tag: "Game Art", title: "Lumen Worlds" },
  { img: portfolio2d, tag: "2D Animation", title: "Neon Skyline" },
  { img: portfolioTrailer, tag: "Cinematic", title: "Iron Sentinel" },
  { img: portfolioCreature, tag: "Creature", title: "Abyss Drake" },
  { img: portfolioMotion, tag: "Motion", title: "Pulse" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/40">
        <div className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — typography */}
          <div className="relative flex flex-col justify-center px-6 pt-16 pb-12 md:px-14 md:pt-24">
            <p className="font-script text-3xl text-neon-green">Bringing worlds to life —</p>

            <h1 className="mt-6 font-display text-[14vw] leading-[0.9] tracking-tight md:text-[9rem]">
              <span className="block">ANIMATION</span>
              <span className="block text-outline">&amp; VFX</span>
            </h1>

            {/* hand-drawn squiggle */}
            <svg
              viewBox="0 0 600 80"
              className="draw-squiggle mt-6 h-12 w-72 text-neon-green"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M5 50 C 80 5, 150 90, 230 40 S 380 10, 460 55 S 580 30, 595 45" />
            </svg>

            <p className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Starlights Visuals brings games to life with animation and visual effects
              that keep players engrossed in gameplay. We animate fantasy creatures,
              human characters, vehicles, environments, props, and even hard-surface objects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 rounded-full bg-neon-green px-7 py-3.5 font-display text-sm uppercase tracking-widest text-background transition hover:glow-blue"
              >
                See Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-foreground/40 px-7 py-3.5 font-display text-sm uppercase tracking-widest text-foreground transition hover:border-neon-green hover:text-neon-green"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Starlights Visuals cinematic hero"
              width={1920}
              height={1088}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background" />
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="overflow-hidden border-b border-border/40 bg-background py-6">
        <div className="flex animate-pulse-glow items-center justify-center gap-10 px-6 text-xs uppercase tracking-[0.4em] text-muted-foreground md:gap-16">
          <span>Unreal Engine</span>
          <span className="text-neon-green">✦</span>
          <span>Unity</span>
          <span className="text-neon-green">✦</span>
          <span>Maya</span>
          <span className="text-neon-green">✦</span>
          <span>Blender</span>
          <span className="text-neon-green">✦</span>
          <span>Houdini</span>
        </div>
      </section>

      {/* SERVICES — editorial list */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-script text-2xl text-neon-green">What we do</p>
              <h2 className="mt-2 font-display text-5xl tracking-tight md:text-7xl">
                SERVICES
              </h2>
            </div>
            <Link to="/services" className="font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-neon-green inline-flex items-center gap-2">
              All Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="group grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-[80px_1fr_1fr_40px] md:gap-10"
              >
                <span className="font-display text-xs text-muted-foreground">{s.num}</span>
                <h3 className="font-display text-3xl tracking-tight transition group-hover:text-neon-green md:text-5xl">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">{s.desc}</p>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition group-hover:text-neon-green group-hover:rotate-45" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <div className="mb-12 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="font-script text-2xl text-neon-green">Recent work</p>
              <h2 className="mt-2 font-display text-5xl tracking-tight md:text-7xl">
                <span className="text-outline">SELECTED</span> WORK
              </h2>
            </div>
            <Link to="/portfolio" className="font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-neon-green inline-flex items-center gap-2">
              Full Portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-border bg-card transition hover:border-neon-green"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-widest text-neon-green">{item.tag}</p>
                    <h3 className="mt-1 font-display text-2xl tracking-tight">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground transition group-hover:text-neon-green" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
          <p className="font-script text-3xl text-neon-green">Let&apos;s build something —</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight md:text-8xl">
            <span className="block">READY TO</span>
            <span className="block text-outline-green">COLLABORATE?</span>
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-neon-green px-9 py-4 font-display text-sm uppercase tracking-widest text-background hover:glow-blue"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
