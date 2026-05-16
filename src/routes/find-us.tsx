import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export const Route = createFileRoute("/find-us")({
  head: () => ({
    meta: [
      { title: "Find Us — Ember & Oak" },
      { name: "description", content: "Where the Ember & Oak food truck is this week, plus catering and event booking." },
      { property: "og:title", content: "Find Us — Ember & Oak" },
      { property: "og:description", content: "Weekly locations, hours, and booking for the Ember & Oak food truck in Austin." },
    ],
  }),
  component: FindUsPage,
});

const schedule = [
  { day: "Wednesday", time: "11am – 9pm", spot: "Rainey Street", area: "Downtown" },
  { day: "Thursday", time: "11am – 9pm", spot: "Rainey Street", area: "Downtown" },
  { day: "Friday", time: "11am – 11pm", spot: "East 6th & Comal", area: "East Austin" },
  { day: "Saturday", time: "11am – 11pm", spot: "Zilker Park", area: "South Austin" },
  { day: "Sunday", time: "12pm – 8pm", spot: "South Congress", area: "SoCo" },
];

function FindUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-display tracking-widest text-copper text-sm">Find Us</p>
          <h1 className="mt-2 font-display text-6xl md:text-8xl text-balance">
            Catch us on the <span className="text-copper">road.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl text-copper mb-10">This Week</h2>
        <div className="overflow-hidden rounded-md border border-border">
          <table className="w-full text-left">
            <thead className="bg-card font-display tracking-widest text-xs text-muted-foreground">
              <tr>
                <th className="p-4">Day</th>
                <th className="p-4">Spot</th>
                <th className="p-4 hidden md:table-cell">Area</th>
                <th className="p-4 text-right">Hours</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s) => (
                <tr key={s.day} className="border-t border-border hover:bg-card/40 transition">
                  <td className="p-4 font-display text-xl">{s.day}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-copper" /> {s.spot}
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell text-muted-foreground">{s.area}</td>
                  <td className="p-4 text-right text-muted-foreground">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Book the Truck</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Weddings, corporate events, backyard parties — we'll roll up and feed
              your crew. Tell us a bit about it and we'll get back within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:+15125550199" className="flex items-center gap-3 text-foreground hover:text-copper transition">
                <Phone className="h-5 w-5 text-copper" /> (512) 555-0199
              </a>
              <a href="mailto:hello@emberandoak.co" className="flex items-center gap-3 text-foreground hover:text-copper transition">
                <Mail className="h-5 w-5 text-copper" /> hello@emberandoak.co
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-copper transition">
                <Instagram className="h-5 w-5 text-copper" /> @emberandoak
              </a>
            </div>
          </div>

          <form className="rounded-md border border-border bg-background p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-display tracking-widest text-xs text-muted-foreground">Name</label>
              <input className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 outline-none focus:border-copper transition" placeholder="Your name" />
            </div>
            <div>
              <label className="font-display tracking-widest text-xs text-muted-foreground">Email</label>
              <input type="email" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 outline-none focus:border-copper transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="font-display tracking-widest text-xs text-muted-foreground">Tell us about the event</label>
              <textarea rows={4} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 outline-none focus:border-copper transition resize-none" placeholder="Date, headcount, location..." />
            </div>
            <button className="w-full rounded-sm bg-copper px-6 py-4 font-display tracking-widest text-charcoal transition hover:bg-cream">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
