import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sparkles className="h-6 w-6 text-neon-blue transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 blur-md bg-neon-blue/50" />
          </div>
          <span className="font-display text-lg font-bold tracking-widest">
            STAR<span className="neon-text">LIGHTS</span>
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-neon-blue"
              activeProps={{ className: "text-neon-blue text-glow" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md border border-neon-blue/60 bg-neon-blue/10 px-4 py-2 font-display text-xs uppercase tracking-widest text-neon-blue transition hover:bg-neon-blue hover:text-background hover:glow-blue"
        >
          Hire Us
        </Link>
      </div>
    </header>
  );
}
