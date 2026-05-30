import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, "..", "src", "locales");
const translationsPath = path.join(__dirname, "accordion-i18n.json");

const translations = JSON.parse(fs.readFileSync(translationsPath, "utf8"));

for (const [lang, data] of Object.entries(translations)) {
  const filePath = path.join(localesDir, lang, "common.json");
  const locale = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!locale.nav) locale.nav = {};
  locale.nav.faq = data.navFaq;
  locale.accordionPage = data.accordionPage;

  fs.writeFileSync(filePath, `${JSON.stringify(locale, null, 2)}\n`, "utf8");
  console.log(`Updated accordion i18n in ${lang}/common.json`);
}

console.log("Done syncing accordion i18n keys.");
