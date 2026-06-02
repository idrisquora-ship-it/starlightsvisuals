/**
 * Parse portfolio-works.ts (text only) → works i18n JSON for locale sync.
 * Run: node scripts/extract-works-i18n.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = fs.readFileSync(path.join(root, "src", "data", "portfolio-works.ts"), "utf8");

function readQuotedValue(text, startIndex) {
  const slice = text.slice(startIndex).trimStart();
  const inline = slice.match(/^"((?:\\.|[^"\\])*)"/);
  if (inline) return inline[1];

  const multiline = slice.match(/^\n\s*"((?:\\.|[^"\\])*)"/);
  if (multiline) return multiline[1];

  return null;
}

function fieldValue(block, field) {
  const re = new RegExp(`${field}:\\s*`, "m");
  const match = re.exec(block);
  if (!match) return null;
  return readQuotedValue(block, match.index + match[0].length);
}

function fieldStringArray(block, field) {
  const re = new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`, "s");
  const match = re.exec(block);
  if (!match) return [];
  return [...match[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) => m[1]);
}

function extractProjects(block, prefix) {
  const projects = {};
  const projectsStart = block.indexOf("projects: [");
  if (projectsStart === -1) return projects;

  const after = block.slice(projectsStart + "projects: [".length);
  const projectParts = after.split(/\n            \{/g).slice(1);

  projectParts.forEach((part, index) => {
    const body = `{${part.split("\n          }")[0]}`;
    const title = fieldValue(body, "title");
    if (!title) return;
    const id = `${prefix}-p${index + 1}`;
    projects[id] = {
      title,
      description: fieldValue(body, "description") ?? "",
      tags: Object.fromEntries(
        fieldStringArray(body, "tags").map((tag, i) => [String(i), tag]),
      ),
    };
  });

  return projects;
}

function extractClients(categoryBlock) {
  const clients = {};
  const projects = {};
  const clientRegex = /client\(\s*\{([\s\S]*?)\n        \},\s*\n        "([^"]+)"/g;

  let match;
  while ((match = clientRegex.exec(categoryBlock)) !== null) {
    const body = match[1];
    const prefix = match[2];
    const slug = fieldValue(body, "slug");
    if (!slug) continue;

    const testimonial = fieldValue(body, "testimonial");
    clients[slug] = {
      name: fieldValue(body, "name") ?? slug,
      industry: fieldValue(body, "industry") ?? "",
      description: fieldValue(body, "description") ?? "",
      ...(testimonial ? { testimonial } : {}),
      timeline: fieldValue(body, "timeline") ?? "",
      services: Object.fromEntries(
        fieldStringArray(body, "services").map((value, index) => [String(index), value]),
      ),
      tools: Object.fromEntries(
        fieldStringArray(body, "tools").map((value, index) => [String(index), value]),
      ),
    };

    Object.assign(projects, extractProjects(body, prefix));
  }

  return { clients, projects };
}

function extractCategories() {
  const section = source.match(
    /export const workCategories[\s\S]*?=\s*\[([\s\S]*?)\];\s*\r?\n\r?\nconst showcaseLabels/,
  )?.[1];

  if (!section) throw new Error("Could not find workCategories array in portfolio-works.ts");

  const chunks = section.split(/    \],\r?\n  \},\r?\n  \{\r?\n    slug: /);

  const categories = {};
  const clients = {};
  const projects = {};

  for (let index = 0; index < chunks.length; index++) {
    const chunk =
      index === 0 ? chunks[index] : `slug: ${chunks[index]}`;
    const slug = fieldValue(chunk, "slug");
    if (!slug) continue;

    categories[slug] = {
      title: fieldValue(chunk, "title") ?? slug,
      tagline: fieldValue(chunk, "tagline") ?? "",
      description: fieldValue(chunk, "description") ?? "",
    };

    const extracted = extractClients(chunk);
    clients[slug] = extracted.clients;
    Object.assign(projects, extracted.projects);
  }

  const showcase = Object.fromEntries(
    Object.entries(categories).map(([slug, value]) => [
      slug,
      { tag: value.title, title: value.title },
    ]),
  );

  return { categories, showcase, clients, projects };
}

const content = extractCategories();
const outPath = path.join(root, "scripts", "works-i18n-content.json");
fs.writeFileSync(outPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");

const clientCount = Object.values(content.clients).reduce(
  (n, group) => n + Object.keys(group).length,
  0,
);
console.log(
  `Wrote ${outPath} — ${Object.keys(content.categories).length} categories, ${clientCount} clients, ${Object.keys(content.projects).length} projects`,
);
