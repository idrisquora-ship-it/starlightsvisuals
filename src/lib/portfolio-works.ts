import {
  workCategories,
  type WorkCategorySlug,
} from "@/data/portfolio-works";
import type { WorkCategory, WorkClient, WorkProject } from "@/types/portfolio-works";

export function getAllCategories(): WorkCategory[] {
  return workCategories;
}

export function getCategory(slug: string): WorkCategory | undefined {
  return workCategories.find((c) => c.slug === slug);
}

export function getClient(categorySlug: string, clientSlug: string): WorkClient | undefined {
  const category = getCategory(categorySlug);
  return category?.clients.find((c) => c.slug === clientSlug);
}

export function getCategorySlugs(): WorkCategorySlug[] {
  return workCategories.map((c) => c.slug);
}

export function getRelatedProjects(
  categorySlug: string,
  clientSlug: string,
  projectId: string,
  limit = 3,
): WorkProject[] {
  const category = getCategory(categorySlug);
  if (!category) return [];

  const all = category.clients.flatMap((c) =>
    c.projects.map((p) => ({ ...p, clientSlug: c.slug, clientName: c.name })),
  );

  return all
    .filter((p) => !(p.clientSlug === clientSlug && p.id === projectId))
    .slice(0, limit);
}

export function filterProjects(
  projects: WorkProject[],
  query: string,
  year: string | null,
): WorkProject[] {
  const q = query.trim().toLowerCase();
  return projects.filter((p) => {
    const matchesYear = !year || String(p.year) === year;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesYear && matchesQuery;
  });
}

export function getProjectYears(projects: WorkProject[]): number[] {
  return [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);
}
