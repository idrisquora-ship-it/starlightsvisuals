import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** Normalize user-facing copy: replace slashes and hyphens with readable punctuation. */
export function normalizeCopy(text) {
  if (typeof text !== "string" || !text) return text;

  let s = text;

  s = s.replace(/\s+\/\s+/g, " and ");
  s = s.replace(/([A-Z0-9]{2,})\/([A-Z0-9]{2,})/g, "$1 and $2");
  s = s.replace(/\blook-dev\b/gi, "look development");
  s = s.replace(/(\d{4})\s*[—–\-|]\s*(\d{4})/g, "$1 to $2");
  s = s.replace(/Mon\s*[—–\-|]\s*Fri/g, "Mon to Fri");
  s = s.replace(/\s*[—–]\s*(?=[a-z])/g, ", ");
  s = s.replace(/\s*[—–|]\s*/g, ", ");
  s = s.replace(/([A-Za-z0-9])-([A-Za-z0-9])/g, "$1 $2");
  s = s.replace(/,\s+for\b/g, " for");
  s = s.replace(/,\s*,/g, ",");
  s = s.replace(/\s{2,}/g, " ");
  s = s.replace(/\s+([,.!?])/g, "$1");

  return s.trim();
}

export function normalizeMetaTitle(text) {
  if (typeof text !== "string" || !text) return text;

  let s = text;
  s = s.replace(/\s+\/\s+/g, " and ");
  s = s.replace(/\s+—\s+/g, " | ");
  s = s.replace(/\s+–\s+/g, " | ");
  s = s.replace(/([A-Za-z0-9])-([A-Za-z0-9])/g, "$1 $2");
  s = s.replace(/\s{2,}/g, " ");

  return s.trim();
}

const META_KEYS = new Set(["metaTitle", "rootTitle"]);

function walkObject(obj, fn, keyPath = []) {
  if (typeof obj === "string") {
    const key = keyPath[keyPath.length - 1];
    return META_KEYS.has(String(key)) ? normalizeMetaTitle(obj) : fn(obj);
  }
  if (Array.isArray(obj)) return obj.map((item, i) => walkObject(item, fn, [...keyPath, i]));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [key, child] of Object.entries(obj)) {
      out[key] = walkObject(child, fn, [...keyPath, key]);
    }
    return out;
  }
  return obj;
}

function normalizeJsonFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const next = walkObject(data, normalizeCopy);
  fs.writeFileSync(filePath, `${JSON.stringify(next, null, 2)}\n`, "utf8");
}

function normalizeQuotedFields(filePath, fields) {
  let content = fs.readFileSync(filePath, "utf8");
  const fieldPattern = fields.join("|");
  const re = new RegExp(`(${fieldPattern}):\\s*"((?:[^"\\\\]|\\\\.)*)"`, "g");

  content = content.replace(re, (_, key, value) => {
    const decoded = value.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    const normalized = normalizeCopy(decoded);
    const encoded = normalized.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `${key}: "${encoded}"`;
  });

  fs.writeFileSync(filePath, content, "utf8");
}

const portfolioWorksPath = path.join(root, "src", "data", "portfolio-works.ts");
normalizeQuotedFields(portfolioWorksPath, [
  "title",
  "description",
  "tagline",
  "testimonial",
  "name",
  "industry",
]);

let portfolioWorks = fs.readFileSync(portfolioWorksPath, "utf8");
portfolioWorks = portfolioWorks.replace(/name: "Chbi ART"/g, 'name: "Chibi Art"');
portfolioWorks = portfolioWorks.replace(/name: "Vtuber"/g, 'name: "VTuber"');
fs.writeFileSync(portfolioWorksPath, portfolioWorks, "utf8");
console.log("Normalized src/data/portfolio-works.ts");

const blogPostsPath = path.join(root, "src", "data", "blog-posts.ts");
normalizeQuotedFields(blogPostsPath, [
  "title",
  "excerpt",
  "category",
  "readTime",
  "author",
  "heading",
]);

let blogPosts = fs.readFileSync(blogPostsPath, "utf8");
blogPosts = blogPosts.replace(/"((?:[^"\\]|\\.)*)"/g, (match, inner, offset) => {
  const before = blogPosts.slice(Math.max(0, offset - 30), offset);
  if (/slug:\s*$/.test(before)) return match;
  if (/from\s+$/.test(before) || before.includes("@/assets/")) return match;
  if (!/[\u2014\u2013\-/]/.test(inner)) return match;
  return `"${normalizeCopy(inner)}"`;
});
blogPosts = blogPosts.replace(/\bin a app icon\b/g, "in an app icon");
fs.writeFileSync(blogPostsPath, blogPosts, "utf8");
console.log("Normalized src/data/blog-posts.ts");

const localesDir = path.join(root, "src", "locales");
for (const lang of fs.readdirSync(localesDir)) {
  const filePath = path.join(localesDir, lang, "common.json");
  if (!fs.existsSync(filePath)) continue;
  normalizeJsonFile(filePath);
  console.log(`Normalized ${lang}/common.json`);
}

const worksContentPath = path.join(root, "scripts", "works-i18n-content.json");
if (fs.existsSync(worksContentPath)) {
  normalizeJsonFile(worksContentPath);
  console.log("Normalized scripts/works-i18n-content.json");
}

console.log("Done normalizing site copy.");
