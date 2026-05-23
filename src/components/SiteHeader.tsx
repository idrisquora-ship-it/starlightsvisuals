import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contacts" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop fixed sidebar */}
      <header className="fixed left-0 top-0 z-40 hidden h-screen w-[200px] flex-col justify-between border-r border-border/40 bg-background/80 px-8 py-8 backdrop-blur md:flex">
        <Link to="/" className="block">
          <div className="font-display text-2xl leading-none tracking-tight">
            STAR<span className="neon-text">LIGHTS</span>
          </div>
          <div className="font-display text-2xl leading-none tracking-tight text-muted-foreground">
            VISUALS
          </div>
        </Link>

        <nav className="flex flex-col gap-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative font-display text-sm uppercase tracking-widest text-foreground/80 transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              <span className="relative inline-block">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon-green transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()}
        </div>
      </header>

      {/* Right vertical "Portfolio" tab */}
      <Link
        to="/portfolio"
        className="fixed right-6 top-10 z-40 hidden font-script text-2xl text-neon-green hover:text-glow md:block"
      >
        Portfolio →
      </Link>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/40 bg-background/80 px-5 py-4 backdrop-blur md:hidden">
        <Link to="/" className="font-display text-lg tracking-tight">
          STAR<span className="neon-text">LIGHTS</span> VISUALS
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded border border-border p-2 text-foreground"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </header>
      {open && (
        <div className="fixed inset-0 top-[57px] z-30 flex flex-col gap-6 bg-background px-8 pt-12 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl tracking-tight"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
