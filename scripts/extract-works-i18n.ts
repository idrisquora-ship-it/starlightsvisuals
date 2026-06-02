/**
 * Build works.clients + works.projects for locale files from portfolio data.
 * Run: npx vite-node --config vite.config.ts scripts/extract-works-i18n.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { workCategories } from "../src/data/portfolio-works";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function buildWorksContent() {
  const clients: Record<string, Record<string, unknown>> = {};
  const projects: Record<string, unknown> = {};

  for (const category of workCategories) {
    clients[category.slug] = {};

    for (const client of category.clients) {
      clients[category.slug][client.slug] = {
        name: client.name,
        industry: client.industry,
        description: client.description,
        ...(client.testimonial ? { testimonial: client.testimonial } : {}),
        timeline: client.timeline,
        services: Object.fromEntries(
          client.services.map((service, index) => [String(index), service]),
        ),
        tools: Object.fromEntries(client.tools.map((tool, index) => [String(index), tool])),
      };

      for (const project of client.projects) {
        projects[project.id] = {
          title: project.title,
          description: project.description,
          tags: Object.fromEntries(project.tags.map((tag, index) => [String(index), tag])),
        };
      }
    }
  }

  const categories = Object.fromEntries(
    workCategories.map((category) => [
      category.slug,
      {
        title: category.title,
        tagline: category.tagline,
        description: category.description,
      },
    ]),
  );

  const showcase = Object.fromEntries(
    workCategories.map((category) => [
      category.slug,
      { tag: category.title, title: category.title },
    ]),
  );

  return { categories, showcase, clients, projects };
}

const content = buildWorksContent();
const outPath = path.join(root, "scripts", "works-i18n-content.json");
fs.writeFileSync(outPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
console.log(`Wrote ${outPath}`);
