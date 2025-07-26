import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { localeConfig } from "./locales";
import { en } from "./locales/en";
import { tr } from "./locales/tr";

// Translation resources
const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localeConfig.defaultLocale,
    fallbackLng: localeConfig.fallbackLocale,

    detection: localeConfig.detection,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
