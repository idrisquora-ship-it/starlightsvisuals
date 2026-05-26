import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_PREFERENCE_KEY,
  supportedLanguageCodes,
} from "@/i18n/languages";

import en from "@/locales/en/common.json";

const localeLoaders: Record<string, () => Promise<{ default: typeof en }>> = {
  de: () => import("@/locales/de/common.json"),
  fr: () => import("@/locales/fr/common.json"),
  es: () => import("@/locales/es/common.json"),
  ar: () => import("@/locales/ar/common.json"),
  ko: () => import("@/locales/ko/common.json"),
  pt: () => import("@/locales/pt/common.json"),
  it: () => import("@/locales/it/common.json"),
  ja: () => import("@/locales/ja/common.json"),
  zh: () => import("@/locales/zh/common.json"),
  ru: () => import("@/locales/ru/common.json"),
  nl: () => import("@/locales/nl/common.json"),
  pl: () => import("@/locales/pl/common.json"),
  tr: () => import("@/locales/tr/common.json"),
  hi: () => import("@/locales/hi/common.json"),
  sv: () => import("@/locales/sv/common.json"),
  da: () => import("@/locales/da/common.json"),
  no: () => import("@/locales/no/common.json"),
  fi: () => import("@/locales/fi/common.json"),
  id: () => import("@/locales/id/common.json"),
  th: () => import("@/locales/th/common.json"),
  vi: () => import("@/locales/vi/common.json"),
  he: () => import("@/locales/he/common.json"),
  uk: () => import("@/locales/uk/common.json"),
  cs: () => import("@/locales/cs/common.json"),
};

const loadedLocales = new Set<string>([DEFAULT_LANGUAGE]);

export async function loadLocale(lang: string): Promise<void> {
  const code = lang.split("-")[0];
  if (loadedLocales.has(code) || code === DEFAULT_LANGUAGE) return;

  const loader = localeLoaders[code];
  if (!loader) return;

  const module = await loader();
  i18n.addResourceBundle(code, "common", module.default, true, true);
  loadedLocales.add(code);
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
    },
    supportedLngs: supportedLanguageCodes,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: LANGUAGE_PREFERENCE_KEY,
    },
    react: {
      useSuspense: false,
    },
    partialBundledLanguages: true,
  });

i18n.on("languageChanged", (lng) => {
  void loadLocale(lng);
});

if (typeof window !== "undefined") {
  void loadLocale(i18n.language || DEFAULT_LANGUAGE);
}

export default i18n;

/** Future-ready locale path helper for SEO routing e.g. /de/services */
export function localePath(locale: string, path: string): string {
  if (locale === DEFAULT_LANGUAGE) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

export type LocaleResource = typeof en;
