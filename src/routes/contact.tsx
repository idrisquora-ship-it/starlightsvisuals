import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, Clock, Send, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Starlights Visuals" },
      {
        name: "description",
        content:
          "Get in touch with Starlights Visuals for game development, 2D & 3D animation, motion graphics, VFX and cinematic trailer projects.",
      },
      { property: "og:title", content: "Contact Starlights Visuals" },
      { property: "og:description", content: "Start a project with our game & animation studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const projectTypes = useMemo(
    () => [
      t("contactPage.projectTypes.game"),
      t("contactPage.projectTypes.2d"),
      t("contactPage.projectTypes.3d"),
      t("contactPage.projectTypes.trailer"),
      t("contactPage.projectTypes.character"),
      t("contactPage.projectTypes.motion"),
      t("contactPage.projectTypes.other"),
    ],
    [t],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-blue">
            {t("contactPage.label")}
          </p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-balance">
            <span className="neon-text text-glow">{t("contactPage.title")}</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            {t("contactPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-xl border border-border bg-card/40 p-8 md:p-10">
          <h2 className="font-display text-2xl tracking-wider">{t("contactPage.formTitle")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contactPage.formDesc")}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-8 grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  {t("contactPage.name")}
                </label>
                <input
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                />
              </div>
              <div>
                <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  {t("contactPage.email")}
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
                />
              </div>
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                {t("contactPage.projectType")}
              </label>
              <select className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none">
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                {t("contactPage.message")}
              </label>
              <textarea
                rows={5}
                required
                className="mt-2 w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md neon-gradient px-6 py-3 font-display text-sm uppercase tracking-widest text-background hover:glow-purple transition"
            >
              <Send className="h-4 w-4" /> {t("contactPage.send")}
            </button>
            {sent && <p className="text-sm text-neon-blue">{t("contactPage.sent")}</p>}
          </form>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <Mail className="h-7 w-7 text-neon-blue" />
            <h3 className="mt-4 font-display text-xl tracking-wider">{t("contactPage.emailUs")}</h3>
            <a
              href={`mailto:${t("brand.email")}`}
              className="mt-2 block text-neon-blue hover:text-glow break-all"
            >
              {t("brand.email")}
            </a>
            <p className="mt-2 text-xs text-muted-foreground">{t("contactPage.emailDesc")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <MapPin className="h-7 w-7 text-neon-purple" />
            <h3 className="mt-4 font-display text-xl tracking-wider">{t("contactPage.studio")}</h3>
            <p className="mt-2 text-muted-foreground">{t("contactPage.studioDesc")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <Clock className="h-7 w-7 text-neon-blue" />
            <h3 className="mt-4 font-display text-xl tracking-wider">
              {t("contactPage.responseTime")}
            </h3>
            <p className="mt-2 text-muted-foreground">{t("contactPage.responseDesc")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-8">
            <p className="font-display text-xs uppercase tracking-widest text-neon-purple">
              {t("footer.follow")}
            </p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={t("footer.social")}
                  className="rounded-md border border-border p-2 text-muted-foreground hover:text-neon-blue hover:border-neon-blue hover:glow-blue transition"
                >
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
