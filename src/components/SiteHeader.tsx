import { Link } from "@tanstack/react-router";
import { Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useSidebar } from "@/contexts/sidebar-context";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const {
    desktopOpen,
    mobileOpen,
    toggleDesktop,
    toggleMobile,
    closeMobile,
    sidebarWidth,
  } = useSidebar();

  const nav = useMemo(
    () => [
      { to: "/portfolio", label: t("nav.portfolio") },
      { to: "/services", label: t("nav.services") },
      { to: "/blog", label: t("nav.blog") },
      { to: "/about", label: t("nav.company") },
      { to: "/contact", label: t("nav.contacts") },
    ],
    [t],
  );

  const sidebarVisible = isMobile ? mobileOpen : desktopOpen;

  return (
    <>
      {isMobile && mobileOpen && (
        <button
          type="button"
          aria-label={t("header.closeMenu")}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {!isMobile && (
        <button
          type="button"
          onClick={toggleDesktop}
          aria-label={desktopOpen ? t("header.closeSidebar") : t("header.openSidebar")}
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
              {t("brand.star")}
              <span className="neon-text">{t("brand.lights")}</span>
            </div>
            <div className="font-display text-2xl leading-none tracking-tight text-muted-foreground">
              {t("brand.visuals")}
            </div>
          </Link>
          {isMobile && (
            <button
              type="button"
              onClick={closeMobile}
              aria-label={t("header.closeMenu")}
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

        <div className="space-y-4">
          <LanguageSwitcher />
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()}
          </div>
        </div>
      </aside>

      <div className="fixed right-6 top-10 z-40 hidden items-center gap-4 md:flex">
        <LanguageSwitcher />
        <Link
          to="/portfolio"
          className="font-script text-2xl text-neon-green hover:text-glow"
        >
          {t("nav.portfolioCta")}
        </Link>
      </div>

      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border/40 bg-background/80 px-5 py-4 backdrop-blur md:hidden">
        <Link to="/" className="font-display text-lg tracking-tight">
          {t("brand.star")}
          <span className="neon-text">{t("brand.lights")}</span> {t("brand.visuals")}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleMobile}
            aria-label={mobileOpen ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={mobileOpen}
            aria-controls="site-sidebar"
            className="rounded border border-border p-2 text-foreground transition hover:border-neon-green hover:text-neon-green"
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </header>
    </>
  );
}
