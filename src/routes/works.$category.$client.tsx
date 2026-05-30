import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionReveal } from "@/components/SectionReveal";
import { ProjectLightbox } from "@/components/works/ProjectLightbox";
import { getCategory, getClient } from "@/lib/portfolio-works";
import { useLocalizedClient } from "@/hooks/use-localized-works";
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
  const { category: staticCategory, client: staticClient } = Route.useLoaderData();
  const client = useLocalizedClient(staticCategory.slug, staticClient.slug) ?? staticClient;
  const [lightboxProject, setLightboxProject] = useState<WorkProject | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ProjectLightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />

      <SectionReveal as="section" className="mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-14 md:pt-32">
        <h1 className="font-display text-3xl tracking-tight md:text-4xl">{t("works.projectsTitle")}</h1>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {client.projects.map((project, i) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightboxProject(project)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card/30 transition hover:border-neon-green/60 hover:shadow-[0_0_24px_-10px_rgba(76,255,61,0.45)]"
            >
              {project.mediaType === "video" ? (
                <>
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition group-hover:bg-background/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 bg-background/80 backdrop-blur-sm transition group-hover:border-neon-green group-hover:text-neon-green">
                      <Play className="h-6 w-6 fill-current pl-0.5" />
                    </span>
                  </div>
                </>
              ) : (
                <img
                  src={project.thumbnail}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </motion.button>
          ))}
        </div>
      </SectionReveal>

      <SiteFooter />
    </div>
  );
}
