export const locales = {
  en: "English",
  tr: "Türkçe",
} as const;

export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "en";

export const localeConfig = {
  defaultLocale,
  locales: Object.keys(locales) as Locale[],
  fallbackLocale: "en" as const,
  detection: {
    order: ["localStorage", "navigator", "htmlTag"] as string[],
    caches: ["localStorage"] as string[],
  },
} as const;
