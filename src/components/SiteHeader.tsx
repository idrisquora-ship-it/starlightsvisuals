import { Link } from "@tanstack/react-router";
import { Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";

import { useSidebar } from "@/contexts/sidebar-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Contacts" },
];

export function SiteHeader() {
  const isMobile = useIsMobile();
  const {
    desktopOpen,
    mobileOpen,
    toggleDesktop,
    toggleMobile,
    closeMobile,
    sidebarWidth,
  } = useSidebar();

  const sidebarVisible = isMobile ? mobileOpen : desktopOpen;

  return (
    <>
      {isMobile && mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Desktop — single toggle (fixes duplicate icon when collapsed) */}
      {!isMobile && (
        <button
          type="button"
          onClick={toggleDesktop}
          aria-label={desktopOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={desktopOpen}
          aria-controls="site-sidebar"
          className={cn(
            "fixed top-8 z-[60] hidden items-center justify-center rounded border border-border bg-background p-2.5 text-foreground shadow-sm backdrop-blur transition-all duration-300 ease-out hover:border-neon-green hover:text-neon-green md:flex",
          )}
          style={{ left: desktopOpen ? sidebarWidth - 44 : 16 }}
        >
          {desktopOpen ? (
            <PanelLeftClose className="h-5 w-5" aria-hidden />
          ) : (
            <PanelLeftOpen className="h-5 w-5" aria-hidden />
          )}
        </button>
      )}

      <aside
        id="site-sidebar"
        style={{ width: sidebarWidth }}
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col justify-between border-r border-border/40 bg-background/95 px-8 py-8 backdrop-blur transition-transform duration-300 ease-out",
          sidebarVisible ? "translate-x-0" : "-translate-x-full",
          !sidebarVisible && "pointer-events-none",
        )}
        aria-hidden={!sidebarVisible}
        inert={!sidebarVisible ? true : undefined}
      >
        <div className={cn("flex items-start gap-3", isMobile ? "justify-between" : "justify-start")}>
          <Link to="/" className="block" onClick={closeMobile}>
            <div className="font-display text-2xl leading-none tracking-tight">
              STAR<span className="neon-text">LIGHTS</span>
            </div>
            <div className="font-display text-2xl leading-none tracking-tight text-muted-foreground">
              VISUALS
            </div>
          </Link>
          {isMobile && (
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              className="shrink-0 rounded border border-border p-2 text-foreground transition hover:border-neon-green hover:text-neon-green"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>

        <nav className="flex flex-col gap-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={closeMobile}
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
      </aside>

      <Link
        to="/portfolio"
        className="fixed right-6 top-10 z-40 hidden font-script text-2xl text-neon-green hover:text-glow md:block"
      >
        Portfolio →
      </Link>

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/40 bg-background/80 px-5 py-4 backdrop-blur md:hidden">
        <Link to="/" className="font-display text-lg tracking-tight">
          STAR<span className="neon-text">LIGHTS</span> VISUALS
        </Link>
        <button
          type="button"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="site-sidebar"
          className="rounded border border-border p-2 text-foreground transition hover:border-neon-green hover:text-neon-green"
        >
          {mobileOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
        </button>
      </header>
    </>
  );
}
