import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Flame, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-truck.jpg";
import burgerImg from "@/assets/menu-burger.jpg";
import brisketImg from "@/assets/menu-brisket.jpg";
import friesImg from "@/assets/menu-fries.jpg";
import chickenImg from "@/assets/menu-chicken.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember & Oak — Wood-Fired Food Truck in Austin" },
      { name: "description", content: "Smash burgers, brisket sandwiches, and loaded fries — cooked over wood fire from a matte-black truck rolling through Austin, TX." },
      { property: "og:title", content: "Ember & Oak — Wood-Fired Food Truck" },
      { property: "og:description", content: "Smash burgers, brisket and loaded fries from Austin's wood-fired food truck." },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "The Ember Smash", price: "$12", img: burgerImg, tag: "Bestseller", desc: "Double smashed patty, aged cheddar, ember jam." },
  { name: "Oakwood Brisket", price: "$15", img: brisketImg, tag: "House Specialty", desc: "14-hour smoked brisket, pickles, brioche." },
  { name: "Copper Fries", price: "$8", img: friesImg, tag: "Loaded", desc: "Crispy fries, smoked cheese sauce, chives." },
  { name: "Charred Chicken", price: "$13", img: chickenImg, tag: "New", desc: "Wood-fired chicken thigh, slaw, hot honey." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ember & Oak food truck at golden hour with wood-fired grill"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-4 py-1.5 text-xs font-display tracking-widest text-copper">
              <Flame className="h-3.5 w-3.5" /> Wood-Fired · Austin, TX
            </div>
            <h1 className="mt-6 font-display text-6xl leading-[0.9] sm:text-7xl md:text-[9rem] text-balance">
              Smoke. <br />
              <span className="text-copper">Fire.</span> <br />
              <span className="text-stroke">Flavor.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              A matte-black truck. A wood fire that never goes out. Smash burgers
              and slow-smoked brisket served until the line runs out.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-sm bg-copper px-7 py-4 font-display tracking-widest text-charcoal transition hover:bg-cream"
              >
                See the Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/find-us"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 px-7 py-4 font-display tracking-widest text-foreground transition hover:border-copper hover:text-copper"
              >
                Where We're At
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-charcoal/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { k: "14", l: "Hour Smoked Brisket" },
            { k: "100%", l: "Local Oak Wood" },
            { k: "5★", l: "Average Rating" },
            { k: "2019", l: "Slinging Since" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl text-copper md:text-6xl">{s.k}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-display tracking-widest text-copper text-sm">From the Fire</p>
            <h2 className="mt-2 font-display text-5xl md:text-6xl">The Heavy Hitters</h2>
          </div>
          <Link to="/menu" className="font-display tracking-widest text-sm text-muted-foreground hover:text-copper inline-flex items-center gap-2">
            Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-md border border-border bg-card transition hover:border-copper"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-3 left-3 rounded-sm bg-charcoal/80 px-2 py-1 text-[10px] font-display tracking-widest text-copper backdrop-blur">
                {item.tag}
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                  <span className="font-display text-xl text-copper">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="flex justify-center gap-1 text-copper">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-copper" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-3xl md:text-5xl leading-tight text-balance">
            "Best damn brisket sandwich I've had outside of central Texas.
            Worth standing in the sun for."
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
            — Austin Chronicle
          </p>
        </div>
      </section>

      {/* WHERE / WHEN */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-8 md:p-10">
            <MapPin className="h-7 w-7 text-copper" />
            <h3 className="mt-4 font-display text-3xl">This Week</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Wed – Thu</span><span className="text-foreground">Rainey St.</span></li>
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Fri</span><span className="text-foreground">East 6th</span></li>
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Sat</span><span className="text-foreground">Zilker Park</span></li>
              <li className="flex justify-between"><span>Sun</span><span className="text-foreground">South Congress</span></li>
            </ul>
          </div>
          <div className="rounded-md border border-border bg-card p-8 md:p-10">
            <Clock className="h-7 w-7 text-copper" />
            <h3 className="mt-4 font-display text-3xl">Hours</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Mon – Tue</span><span className="text-foreground">Closed</span></li>
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Wed – Thu</span><span className="text-foreground">11am – 9pm</span></li>
              <li className="flex justify-between border-b border-border/60 pb-3"><span>Fri – Sat</span><span className="text-foreground">11am – 11pm</span></li>
              <li className="flex justify-between"><span>Sun</span><span className="text-foreground">12pm – 8pm</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 ember-gradient opacity-30" />
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h2 className="font-display text-5xl md:text-7xl text-balance">
            Hungry yet?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Catering, private events, or just craving a smash burger?
          </p>
          <Link
            to="/find-us"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-copper px-8 py-4 font-display tracking-widest text-charcoal transition hover:bg-cream"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
