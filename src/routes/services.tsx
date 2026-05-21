import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Gamepad2, Film, Box, Palette, Wand2, Sparkles, Clapperboard, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Starlights Visuals" },
      { name: "description", content: "2D animation, 3D animation, game development, character design, motion graphics, VFX, and cinematic trailers." },
      { property: "og:title", content: "Services — Starlights Visuals" },
      { property: "og:description", content: "Full-stack creative services for games, animation, and cinematic storytelling." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Film, title: "2D Animation", desc: "Frame-by-frame & rigged 2D for series, shorts, explainers, and games. We blend classic craft with digital pipelines." },
  { icon: Box, title: "3D Animation", desc: "Stylized and photoreal 3D — characters, environments, and full cinematic sequences with feature-quality polish." },
  { icon: Gamepad2, title: "Game Development", desc: "End-to-end game production: concept, art, code, audio, and launch. Unreal, Unity, and custom pipelines." },
  { icon: Palette, title: "Character Design", desc: "Original characters, creatures, and concept art that anchor your IP and merch potential." },
  { icon: Wand2, title: "Motion Graphics", desc: "Branded motion, UI animation, broadcast packages, and explainer videos with cinematic polish." },
  { icon: Sparkles, title: "Visual Effects (VFX)", desc: "Compositing, particle FX, and CG integration for games, film, and digital campaigns." },
  { icon: Clapperboard, title: "Cinematic Trailers", desc: "Story-driven trailers built to launch games, IPs, and brands with maximum impact." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">What We Build</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance">
            <span className="neon-text text-glow">SERVICES</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            One studio, every stage of production — from first sketch to final pixel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-xl border border-border bg-card/40 p-8 transition hover:border-neon-blue hover:-translate-y-1 hover:glow-blue"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg neon-gradient text-background">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wider">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-t border-border/40">
        <div className="absolute inset-0 -z-10 neon-gradient opacity-20" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-balance">
            HAVE A <span className="neon-text">PROJECT</span> IN MIND?
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us your vision — we'll bring the firepower.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md neon-gradient px-8 py-4 font-display text-sm uppercase tracking-widest text-background hover:glow-purple"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
