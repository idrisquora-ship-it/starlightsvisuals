import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Sparkles, Target, Zap, Heart } from "lucide-react";
import heroImg from "@/assets/hero-cosmic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Starlights Visuals" },
      { name: "description", content: "Starlights Visuals is a passionate creative studio specializing in immersive game development, cinematic 2D animation, and high-quality 3D animation experiences." },
      { property: "og:title", content: "About Starlights Visuals" },
      { property: "og:description", content: "Meet the creative studio behind cinematic games, 2D & 3D animation." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Imagination First", desc: "Every project starts with a bold idea and a blank canvas." },
  { icon: Target, title: "Craft Obsessed", desc: "Frame by frame, pixel by pixel — quality is non-negotiable." },
  { icon: Zap, title: "Cinematic Energy", desc: "We chase the goosebumps. If it doesn't move us, we refine." },
  { icon: Heart, title: "Story-Driven", desc: "Tech serves story. Always." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-border/40">
        <img src={heroImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-background/70" />
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">Who We Are</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance">
            A STUDIO BUILT ON<br /><span className="neon-text text-glow">LIGHT, CODE & STORY</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          <span className="text-foreground font-semibold">Starlights Visuals</span> is a passionate
          creative studio at the intersection of games, animation, and cinematic storytelling.
          We exist to bring imagination to life — whether that's a sprawling open-world game,
          a hand-crafted 2D series, or a photoreal 3D trailer.
        </p>
        <p>
          From our concept artists and 3D sculptors to our gameplay engineers and motion designers,
          every member of our team is obsessed with one thing: making audiences feel something.
          We don't just build pretty pixels — we build worlds people want to live in.
        </p>
        <p>
          We partner with indie creators, AAA studios, and global brands to deliver work that
          punches above its weight, hits deadlines without compromise, and looks like it cost
          twice the budget.
        </p>
      </section>

      <section className="border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-purple">Core Values</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">WHAT DRIVES US</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-background/60 p-8 hover:border-neon-blue hover:glow-blue transition">
                <v.icon className="h-8 w-8 text-neon-blue" />
                <h3 className="mt-4 font-display text-xl tracking-wider">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { k: "120+", l: "Projects Shipped" },
          { k: "40+", l: "Global Clients" },
          { k: "15", l: "Awards Won" },
          { k: "8", l: "Years Crafting" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-display text-5xl md:text-6xl font-black neon-text">{s.k}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
