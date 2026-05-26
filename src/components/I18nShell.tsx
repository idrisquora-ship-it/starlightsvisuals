import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { TranslationPopup } from "@/components/TranslationPopup";
import { isRtlLanguage } from "@/i18n/languages";

export function I18nShell({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split("-")[0] ?? "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtlLanguage(lang) ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      {children}
      <TranslationPopup />
    </>
  );
}
