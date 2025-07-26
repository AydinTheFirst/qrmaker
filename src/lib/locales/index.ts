import { ar } from "./ar";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { pt } from "./pt";
import { ru } from "./ru";
import { tr } from "./tr";
import { SUPPORTED_LOCALES, type SupportedLocale } from "./types";
import { zh } from "./zh";

export const locales = SUPPORTED_LOCALES;

export type Locale = SupportedLocale;
export const defaultLocale: Locale = "en";

export const resources = {
  en: { translation: en },
  tr: { translation: tr },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ru: { translation: ru },
  ja: { translation: ja },
  ko: { translation: ko },
  zh: { translation: zh },
  ar: { translation: ar },
} as const;

export const localeConfig = {
  defaultLocale,
  locales: Object.keys(locales) as Locale[],
  fallbackLocale: "en" as const,
  detection: {
    order: ["localStorage", "navigator", "htmlTag"] as string[],
    caches: ["localStorage"] as string[],
  },
} as const;
