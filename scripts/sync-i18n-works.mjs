import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const localesDir = path.join(root, "src", "locales");
const worksContentPath = path.join(root, "scripts", "works-i18n-content.json");

const extract = spawnSync(process.execPath, ["scripts/extract-works-i18n.mjs"], {
  cwd: root,
  stdio: "inherit",
});
if (extract.status !== 0) process.exit(extract.status ?? 1);

const worksContent = JSON.parse(fs.readFileSync(worksContentPath, "utf8"));
const enPath = path.join(localesDir, "en", "common.json");
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

const worksUiByLang = {
  de: {
    clientsCount: "{{count}} Kunden",
    breadcrumbWorks: "Ausgewählte Arbeiten",
    clientsTitle: "Kunden, mit denen wir gearbeitet haben",
    projectsCompleted: "{{count}} abgeschlossene Projekte",
    projectsTitle: "Projektbeispiele",
    portfolioHubDesc: "Entdecken Sie Arbeiten nach Kategorie — Animation, VFX, Motion und mehr.",
    closePreview: "Vorschau schließen",
    searchPlaceholder: "Projekte suchen…",
    filterYear: "Nach Jahr filtern",
    allYears: "Alle Jahre",
    noClients: "In dieser Kategorie gibt es noch keine Kunden.",
    noProjects: "Keine Projekte entsprechen Ihren Filtern.",
    relatedProjects: "Verwandte Projekte",
    timeline: "Zeitplan",
    services: "Erbrachte Leistungen",
    tools: "Tools & Software",
    ctaScript: "Bereit, wenn Sie es sind —",
    ctaTitle: "Starten Sie Ihr Projekt mit uns",
    ctaDesc: "Erzählen Sie uns von Marke, Zeitplan und Zielen.",
    ctaButton: "Projekt starten",
  },
  fr: {
    clientsCount: "{{count}} clients",
    breadcrumbWorks: "Travaux sélectionnés",
    clientsTitle: "Clients avec lesquels nous avons travaillé",
    projectsCompleted: "{{count}} projets réalisés",
    projectsTitle: "Exemples de projets",
    portfolioHubDesc: "Explorez nos travaux par catégorie — animation, VFX, motion et plus.",
    closePreview: "Fermer l'aperçu",
    searchPlaceholder: "Rechercher des projets…",
    filterYear: "Filtrer par année",
    allYears: "Toutes les années",
    noClients: "Aucun client dans cette catégorie pour le moment.",
    noProjects: "Aucun projet ne correspond à vos filtres.",
    relatedProjects: "Projets associés",
    timeline: "Calendrier",
    services: "Services fournis",
    tools: "Outils et logiciels",
    ctaScript: "Prêt quand vous l'êtes —",
    ctaTitle: "Lancez votre projet avec nous",
    ctaDesc: "Parlez-nous de votre marque, de vos délais et de vos objectifs.",
    ctaButton: "Démarrer un projet",
  },
  es: {
    clientsCount: "{{count}} clientes",
    breadcrumbWorks: "Trabajos seleccionados",
    clientsTitle: "Clientes con los que hemos trabajado",
    projectsCompleted: "{{count}} proyectos completados",
    projectsTitle: "Muestras de proyectos",
    portfolioHubDesc: "Explora el trabajo por categoría — animación, VFX, motion y más.",
    closePreview: "Cerrar vista previa",
    searchPlaceholder: "Buscar proyectos…",
    filterYear: "Filtrar por año",
    allYears: "Todos los años",
    noClients: "Aún no hay clientes en esta categoría.",
    noProjects: "Ningún proyecto coincide con tus filtros.",
    relatedProjects: "Proyectos relacionados",
    timeline: "Cronograma",
    services: "Servicios prestados",
    tools: "Herramientas y software",
    ctaScript: "Listos cuando tú lo estés —",
    ctaTitle: "Inicia tu proyecto con nosotros",
    ctaDesc: "Cuéntanos tu marca, plazos y objetivos.",
    ctaButton: "Iniciar un proyecto",
  },
};

function deepMergeMissing(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== "object") target[key] = {};
      deepMergeMissing(target[key], source[key]);
    } else if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return target;
}

/** Keep locale strings that differ from English (manual or machine translations). */
function preserveTranslatedTree(next, previous, english) {
  if (previous === undefined || previous === null) return next;

  if (typeof next === "string") {
    const enValue = typeof english === "string" ? english : next;
    if (typeof previous === "string" && previous !== enValue) return previous;
    return next;
  }

  if (next && typeof next === "object" && !Array.isArray(next)) {
    const out = { ...next };
    for (const key of Object.keys(out)) {
      out[key] = preserveTranslatedTree(out[key], previous?.[key], english?.[key]);
    }
    return out;
  }

  return next;
}

function applyServiceCategoryTitles(locale) {
  const items = locale.servicesPage?.items;
  if (!items || !locale.works?.categories) return;

  const map = {
    "2d-animation": items["2d"]?.title,
    "3d-animation": items["3d"]?.title,
    vfx: items.vfx?.title,
  };

  for (const [slug, title] of Object.entries(map)) {
    if (!title || !locale.works.categories[slug]) continue;
    locale.works.categories[slug].title = title;
    if (locale.works.showcase?.[slug]) {
      locale.works.showcase[slug].tag = title;
      locale.works.showcase[slug].title = title;
    }
  }
}

function applyHomeShowcaseTitles(locale) {
  const showcase = locale.home?.showcase;
  if (!showcase || !locale.works?.showcase) return;

  const map = {
    "motion-graphics": showcase.gameArt,
    "video-editing": showcase.motion,
    branding: showcase.creature,
  };

  for (const [slug, entry] of Object.entries(map)) {
    if (!entry || !locale.works.showcase[slug]) continue;
    locale.works.showcase[slug].tag = entry.tag;
    locale.works.showcase[slug].title = entry.title;
    if (locale.works.categories[slug]) {
      locale.works.categories[slug].title = entry.title;
    }
  }
}

en.works = {
  ...(en.works ?? {}),
  categories: worksContent.categories,
  showcase: worksContent.showcase,
  clients: worksContent.clients,
  projects: worksContent.projects,
};

fs.writeFileSync(enPath, `${JSON.stringify(en, null, 2)}\n`, "utf8");
console.log("Updated en/common.json works.clients + works.projects");

const englishWorks = structuredClone(en.works);

for (const lang of fs.readdirSync(localesDir)) {
  if (lang === "en") continue;
  const filePath = path.join(localesDir, lang, "common.json");
  const locale = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const previousWorks = locale.works
    ? {
        categories: structuredClone(locale.works.categories),
        showcase: structuredClone(locale.works.showcase),
        clients: structuredClone(locale.works.clients),
        projects: structuredClone(locale.works.projects),
      }
    : null;

  deepMergeMissing(locale, en);

  locale.works = {
    ...(locale.works ?? {}),
    ...structuredClone(englishWorks),
  };

  locale.works.categories = preserveTranslatedTree(
    locale.works.categories,
    previousWorks?.categories,
    englishWorks.categories,
  );
  locale.works.showcase = preserveTranslatedTree(
    locale.works.showcase,
    previousWorks?.showcase,
    englishWorks.showcase,
  );
  locale.works.clients = preserveTranslatedTree(
    locale.works.clients,
    previousWorks?.clients,
    englishWorks.clients,
  );
  locale.works.projects = preserveTranslatedTree(
    locale.works.projects,
    previousWorks?.projects,
    englishWorks.projects,
  );

  if (worksUiByLang[lang]) {
    Object.assign(locale.works, worksUiByLang[lang]);
  }

  applyServiceCategoryTitles(locale);
  applyHomeShowcaseTitles(locale);

  fs.writeFileSync(filePath, `${JSON.stringify(locale, null, 2)}\n`, "utf8");
  console.log(`Updated ${lang}/common.json`);
}

console.log("Done syncing i18n works keys.");
