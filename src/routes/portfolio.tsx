import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Play } from "lucide-react";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Starlights Visuals" },
      { name: "description", content: "Selected projects: animated series, game trailers, character designs, and studio showcase reels by Starlights Visuals." },
      { property: "og:title", content: "Portfolio — Starlights Visuals" },
      { property: "og:description", content: "Animated projects, game trailers, character design, and studio showcase." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: portfolioTrailer, tag: "Cinematic Trailer", title: "Iron Sentinel", desc: "AAA game launch trailer.", span: "lg:col-span-2 lg:row-span-2" },
  { img: portfolioCharacter, tag: "Character Design", title: "Nova Vanguard", desc: "Hero protagonist sheet." },
  { img: portfolioGame, tag: "Game Art", title: "Lumen Worlds", desc: "Open-world environment art." },
  { img: portfolio2d, tag: "2D Animation", title: "Neon Skyline", desc: "Anime-inspired pilot episode." },
  { img: portfolioCreature, tag: "Creature Design", title: "Crystal Wyrm", desc: "Boss creature concept.", span: "lg:col-span-2" },
  { img: portfolioMotion, tag: "Motion Graphics", title: "Pulse Identity", desc: "Brand motion system." },
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple">Selected Work</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance">
            <span className="neon-text text-glow">PORTFOLIO</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            A glimpse into the worlds, characters, and stories we've helped bring to life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px]">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition hover:border-neon-blue ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full border border-neon-blue/40 bg-background/60 px-3 py-1 backdrop-blur">
                <span className="font-display text-[10px] uppercase tracking-widest text-neon-blue">{p.tag}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="h-14 w-14 rounded-full neon-gradient flex items-center justify-center text-background glow-blue">
                  <Play className="h-6 w-6 fill-background" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-2xl tracking-wider">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
