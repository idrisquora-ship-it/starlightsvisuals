import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Clock, Send, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Starlights Visuals" },
      { name: "description", content: "Get in touch with Starlights Visuals for game development, 2D & 3D animation, motion graphics, VFX and cinematic trailer projects." },
      { property: "og:title", content: "Contact Starlights Visuals" },
      { property: "og:description", content: "Start a project with our game & animation studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">Let's Talk</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance">
            <span className="neon-text text-glow">CONTACT</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            Production inquiries, collaborations, or just want to say hi — drop us a signal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3 rounded-xl border border-border bg-card/40 p-8 md:p-10">
          <h2 className="font-display text-2xl tracking-wider">START A PROJECT</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill the form below and we'll get back within 24 hours.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input required className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue" />
              </div>
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" required className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue" />
              </div>
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">Project Type</label>
              <select className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none">
                <option>Game Development</option>
                <option>2D Animation</option>
                <option>3D Animation</option>
                <option>Cinematic Trailer</option>
                <option>Character Design</option>
                <option>Motion Graphics / VFX</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">Tell us about it</label>
              <textarea rows={5} required className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md neon-gradient px-6 py-3 font-display text-sm uppercase tracking-widest text-background hover:glow-purple transition"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="text-sm text-neon-blue">✦ Message received. We'll be in touch shortly.</p>}
          </form>
        </div>

        {/* INFO */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <Mail className="h-7 w-7 text-neon-blue" />
            <h3 className="mt-4 font-display text-xl tracking-wider">EMAIL US</h3>
            <a href="mailto:sternlichtespeciale@gmail.com" className="mt-2 block text-neon-blue hover:text-glow break-all">
              sternlichtespeciale@gmail.com
            </a>
            <p className="mt-2 text-xs text-muted-foreground">For new projects, press, and partnerships.</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <MapPin className="h-7 w-7 text-neon-purple" />
            <h3 className="mt-4 font-display text-xl tracking-wider">STUDIO</h3>
            <p className="mt-2 text-muted-foreground">Remote-first · Global delivery</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <Clock className="h-7 w-7 text-neon-blue" />
            <h3 className="mt-4 font-display text-xl tracking-wider">RESPONSE TIME</h3>
            <p className="mt-2 text-muted-foreground">Within 24 hours, Mon – Fri.</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <p className="font-display text-xs uppercase tracking-widest text-neon-purple">Follow</p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-md border border-border p-2 text-muted-foreground hover:text-neon-blue hover:border-neon-blue hover:glow-blue transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
