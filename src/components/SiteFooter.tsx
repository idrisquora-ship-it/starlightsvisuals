import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, Youtube, Twitter, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative border-t border-border/40 bg-card/40 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      {/* Newsletter */}
      <div className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h3 className="font-display text-3xl md:text-4xl tracking-wider">
            JOIN THE <span className="neon-text">CONSTELLATION</span>
          </h3>
          <p className="mt-3 text-muted-foreground">
            Behind-the-scenes drops, project reveals, and trailer premieres.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="mt-6 mx-auto flex max-w-md gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-md border border-border bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md neon-gradient px-5 py-3 text-sm font-display uppercase tracking-widest text-background transition hover:glow-purple"
            >
              <Send className="h-4 w-4" /> Join
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-sm text-neon-blue">✦ You're in. Welcome to Starlights.</p>
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-neon-blue" />
            <span className="font-display text-lg font-bold tracking-widest">
              STAR<span className="neon-text">LIGHTS</span> VISUALS
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            A creative studio bringing imagination to life through immersive game
            development, cinematic 2D animation, and high-quality 3D experiences.
          </p>
          <a
            href="mailto:sternlichtespeciale@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-neon-blue hover:text-glow"
          >
            <Mail className="h-4 w-4" />
            <span>sternlichtespeciale@gmail.com</span>
          </a>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-widest text-neon-purple mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-neon-blue transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-widest text-neon-purple mb-4">Follow</p>
          <div className="flex gap-3">
            {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="rounded-md border border-border p-2 text-muted-foreground hover:text-neon-blue hover:border-neon-blue hover:glow-blue transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Starlights Visuals. Crafted with light & code.
      </div>
    </footer>
  );
}
