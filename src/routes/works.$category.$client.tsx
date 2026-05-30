import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectLightbox } from "@/components/works/ProjectLightbox";
import { WorksBreadcrumb } from "@/components/works/WorksBreadcrumb";
import { WorksCta } from "@/components/works/WorksCta";
import { WorksFilters } from "@/components/works/WorksFilters";
import type { WorkCategorySlug } from "@/data/portfolio-works";
import {
  filterProjects,
  getCategory,
  getClient,
  getProjectYears,
  getRelatedProjects,
} from "@/lib/portfolio-works";
import type { WorkProject } from "@/types/portfolio-works";

export const Route = createFileRoute("/works/$category/$client")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    const client = getClient(params.category, params.client);
    if (!category || !client) throw notFound();
    return { category, client };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.client.name ?? "Client"} — ${loaderData?.category.title ?? ""} | Starlights Visuals`,
      },
      {
        name: "description",
        content: loaderData?.client.description ?? "",
      },
    ],
  }),
  component: ClientProjectsPage,
});

function ClientProjectsPage() {
  const { t } = useTranslation();
  const { category, client } = Route.useLoaderData();
  const categorySlug = category.slug as WorkCategorySlug;

  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [lightboxProject, setLightboxProject] = useState<WorkProject | null>(null);

  const years = useMemo(() => getProjectYears(client.projects), [client.projects]);

  const filtered = useMemo(
    () => filterProjects(client.projects, query, year || null),
    [client.projects, query, year],
  );

  const related = useMemo(
    () => getRelatedProjects(categorySlug, client.slug, filtered[0]?.id ?? ""),
    [categorySlug, client.slug, filtered],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ProjectLightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative isolate border-b border-border/40"
      >
        <div className="absolute inset-0 -z-10">
          <img src={client.banner} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-14 md:pt-32">
          <WorksBreadcrumb
            items={[
              { label: t("works.breadcrumbWorks"), to: "/portfolio" },
              {
                label: category.title,
                to: "/works/$category",
                params: { category: category.slug },
              },
              { label: client.name },
            ]}
          />
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-border/60 bg-background/80 p-3">
                <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <p className="font-display text-[10px] uppercase tracking-widest text-neon-green">
                  {client.industry}
                </p>
                <h1 className="font-display text-4xl tracking-tight md:text-6xl">{client.name}</h1>
              </div>
            </div>
            <p className="max-w-xl text-muted-foreground">{client.description}</p>
          </div>
          <dl className="mt-10 grid gap-6 border-t border-border/40 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("works.timeline")}
              </dt>
              <dd className="mt-1 font-display text-lg">{client.timeline}</dd>
            </div>
            <div>
              <dt className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("works.services")}
              </dt>
              <dd className="mt-1 text-sm text-foreground/90">{client.services.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("works.tools")}
              </dt>
              <dd className="mt-1 text-sm text-foreground/90">{client.tools.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("works.projectsCompleted", { count: client.projectCount })}
              </dt>
              <dd className="mt-1 font-display text-lg text-neon-green">{client.projects.length}+</dd>
            </div>
          </dl>
        </div>
      </motion.section>

      <SectionReveal as="section" className="mx-auto max-w-7xl px-6 py-14 md:px-14">
        <WorksFilters query={query} onQueryChange={setQuery} year={year} onYearChange={setYear} years={years} />

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">{t("works.noProjects")}</p>
        ) : (
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filtered.map((project, i) => (
              <motion.button
                key={project.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightboxProject(project)}
                className="group mb-5 w-full cursor-pointer break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card/30 text-left backdrop-blur-sm transition hover:border-neon-green/60 hover:shadow-[0_0_24px_-10px_rgba(76,255,61,0.45)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-[10px] uppercase tracking-widest text-neon-green">
                    {project.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl tracking-tight">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 px-2 py-0.5 text-[9px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </SectionReveal>

      {related.length > 0 && (
        <SectionReveal as="section" className="border-t border-border/40 bg-card/20">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-14">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">{t("works.relatedProjects")}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setLightboxProject(p)}
                  className="overflow-hidden rounded-lg border border-border/60 text-left transition hover:border-neon-green"
                >
                  <img src={p.thumbnail} alt={p.title} className="aspect-video w-full object-cover" />
                  <div className="p-3">
                    <p className="font-display text-sm tracking-tight">{p.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
      )}

      <WorksCta />
      <SiteFooter />
    </div>
  );
}
