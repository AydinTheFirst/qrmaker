/**
 * Type definitions for internationalization
 * This file ensures all translation files have the same structure
 */

export interface TranslationSchema {
  // Common actions and states
  common: {
    generate: string;
    clear: string;
    download: string;
    free: string;
    highQuality: string;
    instantDownload: string;
    fastAndEasy: string;
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    copy: string;
    copied: string;
  };

  // Hero/Header section
  hero: {
    title: string;
    subtitle: string;
    pngDownload: string;
    description: string;
  };

  // Main navigation tabs
  tabs: {
    url: string;
    text: string;
    contact: string;
    wifi: string;
  };

  // Navigation menu
  nav: {
    github: string;
    features: string;
    documentation: string;
    support: string;
  };

  // Forms
  forms: {
    url: {
      title: string;
      websiteUrl: string;
      placeholder: string;
      helpText: string;
      tipsTitle: string;
      tips: string[];
      validation: {
        required: string;
        invalid: string;
      };
    };
    text: {
      title: string;
      textContent: string;
      placeholder: string;
      helpText: string;
      charactersCount: string;
      tipsTitle: string;
      tips: string[];
      validation: {
        required: string;
        tooLong: string;
      };
    };
    contact: {
      title: string;
      fullName: string;
      phoneNumber: string;
      emailAddress: string;
      organization: string;
      website: string;
      address: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      emailPlaceholder: string;
      orgPlaceholder: string;
      websitePlaceholder: string;
      addressPlaceholder: string;
      helpText: string;
      tipsTitle: string;
      tips: string[];
      validation: {
        nameRequired: string;
        invalidEmail: string;
        invalidPhone: string;
        atLeastOne: string;
      };
    };
    wifi: {
      title: string;
      networkName: string;
      password: string;
      security: string;
      hidden: string;
      networkPlaceholder: string;
      passwordPlaceholder: string;
      securityOptions: {
        WPA: string;
        wep: string;
        none: string;
      };
      helpText: string;
      tipsTitle: string;
      tips: string[];
      validation: {
        networkRequired: string;
        passwordRequired: string;
      };
    };
  };

  // QR Display component
  qrDisplay: {
    noData: string;
    downloadButton: string;
    qrInfo: {
      type: string;
      size: string;
      errorCorrection: string;
    };
  };

  // Footer
  footer: {
    description: string;
    codes: string;
    cards: string;
    settings: string;
    download: string;
    resources: string;
    apiReference: string;
    examples: string;
    faq: string;
    links: string;
    copyright: string;
    madeWith: string;
    inTurkey: string;
  };

  // Language selector
  language: {
    selectLanguage: string;
    currentLanguage: string;
  };

  // About section
  about: {
    title: string;
    description: string;
    technology: string;
    openSource: string;
  };
}

// Locale configuration
export interface LocaleInfo {
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const SUPPORTED_LOCALES = {
  en: { name: "English", nativeName: "English", flag: "🇺🇸" },
  tr: { name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
  es: { name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  fr: { name: "French", nativeName: "Français", flag: "🇫🇷" },
  de: { name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  it: { name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  pt: { name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  ru: { name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  ja: { name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  ko: { name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  zh: { name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  ar: { name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
} as const;

export type SupportedLocale = keyof typeof SUPPORTED_LOCALES;
