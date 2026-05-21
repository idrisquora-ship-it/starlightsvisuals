import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowRight, Sparkles, Gamepad2, Film, Box, Palette,
  Wand2, Clapperboard, Star, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-cosmic.jpg";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starlights Visuals — Bringing Imagination to Life" },
      { name: "description", content: "Creative studio for game development, 2D animation, and cinematic 3D animation. Bringing imagination to life through games & animation." },
      { property: "og:title", content: "Starlights Visuals — Game & Animation Studio" },
      { property: "og:description", content: "Immersive game development, cinematic 2D animation, and high-quality 3D experiences." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Gamepad2, title: "Game Development", desc: "Full-cycle game design, from concept to launch." },
  { icon: Film, title: "2D Animation", desc: "Cinematic frame-by-frame storytelling." },
  { icon: Box, title: "3D Animation", desc: "Photoreal & stylized 3D worlds and characters." },
  { icon: Palette, title: "Character Design", desc: "Iconic heroes, creatures & concept art." },
  { icon: Wand2, title: "Motion Graphics", desc: "Branded motion, UI animation & titles." },
  { icon: Clapperboard, title: "Cinematic Trailers", desc: "Story-driven trailers that ignite hype." },
];

const showcase = [
  { img: portfolioCharacter, tag: "Character", title: "Nova Vanguard" },
  { img: portfolioGame, tag: "Game Art", title: "Lumen Worlds" },
  { img: portfolio2d, tag: "2D Animation", title: "Neon Skyline" },
  { img: portfolioTrailer, tag: "3D / Trailer", title: "Iron Sentinel" },
];

const testimonials = [
  { quote: "Starlights delivered a cinematic trailer that doubled our launch wishlists.", name: "Mei Tanaka", role: "Indie Game Director" },
  { quote: "Their 3D pipeline is world-class. Pure magic from brief to final frame.", name: "Daniel Rios", role: "Creative Lead, Aurora Studios" },
  { quote: "We've shipped three series with them. Always on brand, always on time.", name: "Anika Patel", role: "Producer, Halo Media" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Starlights Visuals cinematic neon hero backdrop"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 -z-10 grid-bg" />

        <div className="mx-auto max-w-7xl px-6 pt-28 pb-36 md:pt-40 md:pb-52 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-blue/40 bg-neon-blue/10 px-4 py-1.5 text-xs font-display uppercase tracking-widest text-neon-blue animate-pulse-glow">
            <Sparkles className="h-3.5 w-3.5" /> Game · 2D · 3D Animation Studio
          </div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-balance">
            BRINGING <span className="neon-text text-glow">IMAGINATION</span><br />
            TO LIFE THROUGH<br />
            <span className="neon-text text-glow">GAMES & ANIMATION</span>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground">
            A futuristic creative studio crafting immersive worlds, unforgettable
            characters, and cinematic experiences for global brands & studios.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-md neon-gradient px-7 py-4 font-display text-sm uppercase tracking-widest text-background transition hover:glow-blue"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-neon-purple/60 bg-neon-purple/10 px-7 py-4 font-display text-sm uppercase tracking-widest text-foreground transition hover:bg-neon-purple/30 hover:border-neon-purple hover:glow-purple"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-14">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">What We Do</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
              FEATURED <span className="neon-text">SERVICES</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-xl border border-border bg-background/50 p-8 transition hover:border-neon-blue hover:-translate-y-1 hover:glow-blue"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg neon-gradient text-background">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wider">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple">Recent Work</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
              SELECTED <span className="neon-text">SHOWCASE</span>
            </h2>
          </div>
          <Link to="/portfolio" className="font-display text-xs uppercase tracking-widest text-muted-foreground hover:text-neon-blue inline-flex items-center gap-2">
            Full Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition hover:border-neon-blue"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-[10px] uppercase tracking-widest text-neon-blue">{item.tag}</p>
                <h3 className="mt-1 font-display text-xl tracking-wide">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/40 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-14">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">Client Voices</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
              <span className="neon-text">TESTIMONIALS</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-background/60 p-8 backdrop-blur">
                <Quote className="h-7 w-7 text-neon-purple" />
                <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-1 text-neon-blue">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-neon-blue" />)}
                </div>
                <div className="mt-4">
                  <p className="font-display tracking-wider">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 neon-gradient opacity-20" />
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-balance">
            LET'S BUILD<br /><span className="neon-text text-glow">SOMETHING LEGENDARY</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Got a story, a game, or a vision? We're ready to make it shine.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md neon-gradient px-8 py-4 font-display text-sm uppercase tracking-widest text-background hover:glow-purple"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
