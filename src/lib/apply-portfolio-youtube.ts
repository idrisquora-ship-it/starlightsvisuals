import { projectYoutubeIds } from "@/data/portfolio-youtube";
import { PROJECT_PLACEHOLDER } from "@/data/portfolio-placeholder";
import { resolveVideoEmbed } from "@/lib/youtube";
import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

function mapProject(project: WorkProject): WorkProject | null {
  if (project.mediaType === "image") return null;

  if (
    project.mediaType !== "video" &&
    project.mediaType !== "youtube" &&
    project.mediaType !== "vimeo"
  ) {
    return null;
  }

  const configured = projectYoutubeIds[project.id as keyof typeof projectYoutubeIds] ?? "";
  const resolved = resolveVideoEmbed(configured);

  if (resolved) {
    return {
      ...project,
      mediaType: resolved.provider,
      mediaSrc: resolved.watchUrl,
      thumbnail: resolved.thumbnail,
    };
  }

  return {
    ...project,
    mediaType: "video",
    mediaSrc: "",
    thumbnail: PROJECT_PLACEHOLDER,
  };
}

function mapClient(client: WorkClient): WorkClient {
  const projects = client.projects
    .map(mapProject)
    .filter((project): project is WorkProject => project !== null);

  const hero =
    projects.find((p) => p.mediaType === "youtube" || p.mediaType === "vimeo") ?? projects[0];

  return {
    ...client,
    logo: hero?.thumbnail ?? client.logo ?? PROJECT_PLACEHOLDER,
    banner: hero?.thumbnail ?? client.banner ?? PROJECT_PLACEHOLDER,
    projectCount: projects.length,
    projects,
  };
}

export function applyPortfolioYoutube(categories: WorkCategory[]): WorkCategory[] {
  return categories.map((category) => ({
    ...category,
    clients: category.clients.map(mapClient),
  }));
}
