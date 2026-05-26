import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import portfolioCharacter from "@/assets/portfolio-character.jpg";
import portfolioGame from "@/assets/portfolio-game.jpg";
import portfolio2d from "@/assets/portfolio-2d.jpg";
import portfolioMotion from "@/assets/portfolio-motion.jpg";
import portfolioTrailer from "@/assets/portfolio-trailer.jpg";
import portfolioCreature from "@/assets/portfolio-creature.jpg";
import trailerVid from "@/assets/portfolio-trailer.mp4.asset.json";
import characterVid from "@/assets/portfolio-character.mp4.asset.json";
import gameVid from "@/assets/portfolio-game.mp4.asset.json";
import twoDVid from "@/assets/portfolio-2d.mp4.asset.json";
import creatureVid from "@/assets/portfolio-creature.mp4.asset.json";
import motionVid from "@/assets/portfolio-motion.mp4.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Starlights Visuals" },
      {
        name: "description",
        content:
          "Selected projects: animated series, game trailers, character designs, and studio showcase reels by Starlights Visuals.",
      },
      { property: "og:title", content: "Portfolio — Starlights Visuals" },
      {
        property: "og:description",
        content: "Animated projects, game trailers, character design, and studio showcase.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useTranslation();

  const projects = useMemo(
    () => [
      {
        poster: portfolioTrailer,
        video: trailerVid.url,
        tag: t("portfolioPage.projects.trailer.tag"),
        title: t("portfolioPage.projects.trailer.title"),
        desc: t("portfolioPage.projects.trailer.desc"),
        span: "lg:col-span-2 lg:row-span-2",
      },
      {
        poster: portfolioCharacter,
        video: characterVid.url,
        tag: t("portfolioPage.projects.character.tag"),
        title: t("portfolioPage.projects.character.title"),
        desc: t("portfolioPage.projects.character.desc"),
      },
      {
        poster: portfolioGame,
        video: gameVid.url,
        tag: t("portfolioPage.projects.game.tag"),
        title: t("portfolioPage.projects.game.title"),
        desc: t("portfolioPage.projects.game.desc"),
      },
      {
        poster: portfolio2d,
        video: twoDVid.url,
        tag: t("portfolioPage.projects.2d.tag"),
        title: t("portfolioPage.projects.2d.title"),
        desc: t("portfolioPage.projects.2d.desc"),
      },
      {
        poster: portfolioCreature,
        video: creatureVid.url,
        tag: t("portfolioPage.projects.creature.tag"),
        title: t("portfolioPage.projects.creature.title"),
        desc: t("portfolioPage.projects.creature.desc"),
        span: "lg:col-span-2",
      },
      {
        poster: portfolioMotion,
        video: motionVid.url,
        tag: t("portfolioPage.projects.motion.tag"),
        title: t("portfolioPage.projects.motion.title"),
        desc: t("portfolioPage.projects.motion.desc"),
      },
    ],
    [t],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <p className="font-script text-2xl text-neon-green">{t("portfolioPage.label")}</p>
          <h1 className="mt-4 font-display text-6xl md:text-8xl tracking-tight">
            {t("portfolioPage.title1")}
            <span className="text-outline">{t("portfolioPage.title2")}</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("portfolioPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px]">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden border border-border bg-card transition hover:border-neon-green ${p.span ?? ""}`}
            >
              <video
                src={p.video}
                poster={p.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full border border-neon-green/40 bg-background/60 px-3 py-1 backdrop-blur">
                <span className="font-display text-[10px] uppercase tracking-widest text-neon-green">
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-foreground transition group-hover:text-neon-green" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
