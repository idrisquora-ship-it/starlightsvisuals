import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Flame, TreePine, Truck } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Ember & Oak" },
      { name: "description", content: "How a matte-black truck and a wood fire became Austin's favorite mobile kitchen." },
      { property: "og:title", content: "Our Story — Ember & Oak" },
      { property: "og:description", content: "How a matte-black truck and a wood fire became Austin's favorite mobile kitchen." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-border">
        <img src={heroImg} alt="Ember & Oak truck at night" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-background/60" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
          <p className="font-display tracking-widest text-copper text-sm">Since 2019</p>
          <h1 className="mt-2 font-display text-6xl md:text-8xl text-balance">
            A truck, a fire, <br /> and a <span className="text-copper">stubborn idea.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p>
          Ember & Oak started in a Hill Country backyard with a beat-up offset smoker,
          a borrowed flat-top, and the conviction that food cooked over real fire just
          hits different.
        </p>
        <p>
          Five years and one matte-black 1978 step van later, we're still doing the same
          thing — sourcing from Texas ranchers, splitting our own oak, and serving until
          the line runs out (which, fair warning, it usually does).
        </p>
        <p>
          No freezers. No microwaves. No shortcuts. Just smoke, fire, and the kind of
          flavor you can't fake.
        </p>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-3">
          {[
            { icon: Flame, title: "Real Fire", body: "Every patty smashed, every brisket smoked over Texas post oak. No gas, no shortcuts." },
            { icon: TreePine, title: "Local Sourced", body: "Beef from a ranch outside Lockhart. Produce from the Mueller farmers market." },
            { icon: Truck, title: "Always Moving", body: "Five neighborhoods a week. Follow us on Instagram to catch the truck near you." },
          ].map((v) => (
            <div key={v.title} className="rounded-md border border-border bg-background p-8">
              <v.icon className="h-8 w-8 text-copper" />
              <h3 className="mt-4 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
