import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/find-us", label: "Find Us" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <Flame className="h-6 w-6 text-copper transition-transform group-hover:rotate-12" />
          <span className="font-display text-2xl tracking-wider">
            Ember <span className="text-copper">&</span> Oak
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm tracking-widest text-muted-foreground transition-colors hover:text-copper"
              activeProps={{ className: "text-copper" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/find-us"
          className="hidden md:inline-flex items-center rounded-sm border border-copper bg-copper/10 px-4 py-2 font-display text-sm tracking-widest text-copper transition hover:bg-copper hover:text-charcoal"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}
