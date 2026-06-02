import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { translateText } from "./lib/translate-text.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const localesDir = path.join(root, "src", "locales");
const cachePath = path.join(__dirname, "translation-cache.json");

const TARGET_LANGS = fs
  .readdirSync(localesDir)
  .filter((code) => code !== "en");

const googleLang = {
  zh: "zh-CN",
  no: "no",
};

function loadCache() {
  if (!fs.existsSync(cachePath)) return {};
  return JSON.parse(fs.readFileSync(cachePath, "utf8"));
}

function saveCache(cache) {
  fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
}

function shouldSkipKey(path, key) {
  if (key === "name" && (path === "clients" || path.startsWith("clients."))) return true;
  return false;
}

async function translateLeaves(node, englishNode, path, lang, cache) {
  if (typeof node === "string") {
    const enValue = typeof englishNode === "string" ? englishNode : node;
    if (!enValue.trim() || node !== enValue) return node;

    const cacheKey = `${lang}::${enValue}`;
    if (cache[cacheKey]) return cache[cacheKey];

    const tl = googleLang[lang] ?? lang;
    const translated = await translateText(enValue, tl, "en");
    cache[cacheKey] = translated;
    return translated;
  }

  if (!node || typeof node !== "object" || Array.isArray(node)) return node;

  const out = {};
  for (const key of Object.keys(node)) {
    const childPath = path ? `${path}.${key}` : key;
    if (shouldSkipKey(childPath, key)) {
      out[key] = node[key];
      continue;
    }
    out[key] = await translateLeaves(
      node[key],
      englishNode?.[key],
      childPath,
      lang,
      cache,
    );
  }
  return out;
}

const en = JSON.parse(fs.readFileSync(path.join(localesDir, "en", "common.json"), "utf8"));
const englishWorks = en.works;
if (!englishWorks?.clients || !englishWorks?.projects) {
  console.error("Run npm run sync:i18n first to populate works.clients and works.projects.");
  process.exit(1);
}

const cache = loadCache();
let translatedCount = 0;

function worksAlreadyTranslated(locale, englishWorks) {
  const sample =
    locale.works?.clients?.["2d-animation"]?.raycon?.description;
  const enSample = englishWorks.clients?.["2d-animation"]?.raycon?.description;
  return Boolean(sample && enSample && sample !== enSample);
}

for (const lang of TARGET_LANGS) {
  const filePath = path.join(localesDir, lang, "common.json");
  const locale = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (!locale.works) locale.works = {};

  if (worksAlreadyTranslated(locale, englishWorks)) {
    console.log(`Skipping ${lang} (works copy already translated)`);
    continue;
  }

  console.log(`Translating works copy → ${lang}…`);

  locale.works.categories = await translateLeaves(
    englishWorks.categories,
    englishWorks.categories,
    "categories",
    lang,
    cache,
  );
  locale.works.showcase = await translateLeaves(
    englishWorks.showcase,
    englishWorks.showcase,
    "showcase",
    lang,
    cache,
  );
  locale.works.clients = await translateLeaves(
    englishWorks.clients,
    englishWorks.clients,
    "clients",
    lang,
    cache,
  );
  locale.works.projects = await translateLeaves(
    englishWorks.projects,
    englishWorks.projects,
    "projects",
    lang,
    cache,
  );

  fs.writeFileSync(filePath, `${JSON.stringify(locale, null, 2)}\n`, "utf8");
  translatedCount += 1;
  saveCache(cache);
  console.log(`  ✓ ${lang}/common.json`);
}

console.log(`Done. Updated works translations in ${translatedCount} locales.`);
