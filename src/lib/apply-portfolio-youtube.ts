import { projectYoutubeIds } from "@/data/portfolio-youtube";
import { extractYouTubeId, youTubeThumbnail, youTubeWatchUrl } from "@/lib/youtube";
import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

const MOCK_CLIENT_SLUGS = new Set(["exa", "kurk", "huya", "mirrorskin", "bello", "moxeys"]);

function resolveYoutubeProject(project: WorkProject): WorkProject | null {
  const configuredId = projectYoutubeIds[project.id as keyof typeof projectYoutubeIds];
  const youtubeId = extractYouTubeId(configuredId ?? "");
  if (!youtubeId) return null;

  return {
    ...project,
    mediaType: "youtube",
    mediaSrc: youTubeWatchUrl(youtubeId),
    thumbnail: youTubeThumbnail(youtubeId),
  };
}

function mapClient(client: WorkClient): WorkClient | null {
  if (MOCK_CLIENT_SLUGS.has(client.slug)) return null;

  const projects = client.projects
    .map((project) => {
      if (project.mediaType === "image") return null;
      if (project.mediaType === "video" || project.mediaType === "youtube") {
        return resolveYoutubeProject(project);
      }
      return null;
    })
    .filter((project): project is WorkProject => project !== null);

  if (projects.length === 0) return null;

  const hero = projects[0]!;

  return {
    ...client,
    logo: hero.thumbnail,
    banner: hero.thumbnail,
    projectCount: projects.length,
    projects,
  };
}

export function applyPortfolioYoutube(categories: WorkCategory[]): WorkCategory[] {
  return categories
    .map((category) => ({
      ...category,
      clients: category.clients
        .map(mapClient)
        .filter((client): client is WorkClient => client !== null),
    }))
    .filter((category) => category.clients.length > 0);
}
