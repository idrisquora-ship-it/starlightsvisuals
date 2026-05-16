import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import burgerImg from "@/assets/menu-burger.jpg";
import brisketImg from "@/assets/menu-brisket.jpg";
import friesImg from "@/assets/menu-fries.jpg";
import chickenImg from "@/assets/menu-chicken.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ember & Oak" },
      { name: "description", content: "Smash burgers, smoked brisket, charred chicken, loaded fries, and craft sides — full menu from Ember & Oak food truck." },
      { property: "og:title", content: "Menu — Ember & Oak" },
      { property: "og:description", content: "Wood-fired smash burgers, brisket sandwiches, loaded fries and more." },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "From the Fire",
    items: [
      { name: "The Ember Smash", price: "$12", desc: "Double smashed patty, aged cheddar, ember jam, brioche.", img: burgerImg },
      { name: "Oakwood Brisket", price: "$15", desc: "14-hour smoked brisket, house pickles, mustard aioli.", img: brisketImg },
      { name: "Charred Chicken", price: "$13", desc: "Wood-fired chicken thigh, slaw, hot honey.", img: chickenImg },
      { name: "Smoked Pork Belly", price: "$14", desc: "Crispy pork belly, apple kraut, chipotle mayo." },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Copper Fries", price: "$8", desc: "Crispy fries, smoked cheese sauce, chives.", img: friesImg },
      { name: "Charred Corn", price: "$6", desc: "Cotija, lime, tajín, cilantro." },
      { name: "Smoked Mac", price: "$7", desc: "Three-cheese mac with brisket crumb." },
      { name: "House Slaw", price: "$5", desc: "Cabbage, apple, buttermilk dressing." },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Texas Sweet Tea", price: "$3", desc: "Brewed strong, served cold." },
      { name: "Mexican Coke", price: "$4", desc: "The real thing. Glass bottle." },
      { name: "Smoked Lemonade", price: "$5", desc: "Charred lemon, mint, raw sugar." },
      { name: "Local Lager", price: "$6", desc: "Austin Beerworks Pearl-Snap." },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="border-b border-border bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-display tracking-widest text-copper text-sm">The Menu</p>
          <h1 className="mt-2 font-display text-6xl md:text-8xl text-balance">
            Everything off the <span className="text-copper">fire.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Sourced local. Smoked low. Served hot. Menu rotates with the season and
            whatever the pitmaster found at the farmers market.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 space-y-24">
        {sections.map((sec) => (
          <section key={sec.title}>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-display text-4xl md:text-5xl text-copper">{sec.title}</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {sec.items.map((item) => (
                <article key={item.name} className="group flex gap-5 border-b border-border pb-8">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-24 w-24 flex-shrink-0 rounded-md object-cover md:h-32 md:w-32"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                      <span className="font-display text-xl text-copper whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
