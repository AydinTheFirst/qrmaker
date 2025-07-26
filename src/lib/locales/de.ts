import type { TranslationSchema } from "./types";

export const de: TranslationSchema = {
  // Common
  common: {
    generate: "Generieren",
    clear: "Löschen",
    download: "Herunterladen",
    free: "Kostenlos",
    highQuality: "Hohe Qualität",
    instantDownload: "Sofortiger Download",
    fastAndEasy: "Schnell und Einfach",
    loading: "Laden...",
    error: "Fehler",
    success: "Erfolg",
    cancel: "Abbrechen",
    save: "Speichern",
    edit: "Bearbeiten",
    delete: "Löschen",
    copy: "Kopieren",
    copied: "Kopiert!",
  },

  // Hero/Header section
  hero: {
    title: "QR-Code Generator",
    subtitle:
      "Erstellen Sie QR-Codes für URLs, Text, Kontaktinformationen und Wi-Fi-Netzwerke mit unserem modernen und benutzerfreundlichen Tool.",
    pngDownload: "PNG Download",
    description:
      "Generieren Sie sofort hochwertige QR-Codes kostenlos. Unterstützung für mehrere Formate und sofortigen Download.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Text",
    contact: "Kontakt",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Funktionen",
    documentation: "Dokumentation",
    support: "Support",
  },

  // Forms
  forms: {
    url: {
      title: "URL QR-Code",
      websiteUrl: "Website URL",
      placeholder: "https://beispiel.com",
      helpText:
        "Geben Sie die vollständige Adresse Ihrer Website ein (kann mit https:// oder http:// beginnen)",
      tipsTitle: "Tipps für URL QR-Codes:",
      tips: [
        "Geben Sie die vollständige Adresse Ihrer Website ein",
        "https:// wird automatisch hinzugefügt, wenn nicht enthalten",
        "Perfekt für Social Media Profile, E-Commerce-Seiten",
      ],
      validation: {
        required: "URL ist erforderlich",
        invalid: "Bitte geben Sie eine gültige URL ein",
      },
    },
    text: {
      title: "Text QR-Code",
      textContent: "Textinhalt",
      placeholder:
        "Geben Sie den Text ein, den Sie zu Ihrem QR-Code hinzufügen möchten...",
      helpText:
        "Sie können jeden Text, jede Nachricht oder Information hinzufügen",
      charactersCount: "{{count}}/500",
      tipsTitle: "Tipps für Text QR-Codes:",
      tips: [
        "Kurze und prägnante Texte funktionieren besser",
        "Sonderzeichen und Emojis werden unterstützt",
        "Sehr lange Texte können den QR-Code komplex machen",
      ],
      validation: {
        required: "Textinhalt ist erforderlich",
        tooLong: "Text ist zu lang (maximal 500 Zeichen)",
      },
    },
    contact: {
      title: "Kontakt QR-Code",
      fullName: "Vollständiger Name",
      phoneNumber: "Telefonnummer",
      emailAddress: "E-Mail-Adresse",
      organization: "Organisation (Optional)",
      website: "Website (Optional)",
      address: "Adresse (Optional)",
      namePlaceholder: "Max Mustermann",
      phonePlaceholder: "+49 (555) 123-4567",
      emailPlaceholder: "max@beispiel.com",
      orgPlaceholder: "Firmenname",
      websitePlaceholder: "https://firma.com",
      addressPlaceholder: "Hauptstraße 123, Stadt, Land",
      helpText:
        "Füllen Sie mindestens ein Feld aus, um einen Kontakt-QR-Code zu erstellen",
      tipsTitle: "Tipps für Kontakt QR-Codes:",
      tips: [
        "Mindestens ein Feld muss ausgefüllt werden",
        "Telefonnummern können Ländercodes enthalten",
        "Erstellt ein vCard-Format, das auf allen Telefonen funktioniert",
      ],
      validation: {
        nameRequired: "Vollständiger Name ist erforderlich",
        atLeastOne: "Bitte füllen Sie mindestens ein Feld aus",
        invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
        invalidPhone: "Bitte geben Sie eine gültige Telefonnummer ein",
      },
    },
    wifi: {
      title: "Wi-Fi QR-Code",
      networkName: "Netzwerkname (SSID)",
      password: "Passwort",
      security: "Sicherheitstyp",
      securityType: "Sicherheitstyp",
      hidden: "Verstecktes Netzwerk",
      hiddenNetwork: "Verstecktes Netzwerk",
      networkPlaceholder: "MeinWiFiNetzwerk",
      passwordPlaceholder: "wifi_passwort_123",
      securityOptions: {
        none: "Keine (Offen)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        WPA: "WPA/WPA2",
      },
      helpText: "Erstellen Sie einen QR-Code für einfache Wi-Fi-Verbindung",
      tipsTitle: "Tipps für Wi-Fi QR-Codes:",
      tips: [
        "Netzwerkname ist erforderlich",
        "Passwort ist optional für offene Netzwerke",
        "Funktioniert automatisch mit den meisten modernen Geräten",
      ],
      validation: {
        networkRequired: "Netzwerkname (SSID) ist erforderlich",
        passwordRequired: "Passwort ist für gesicherte Netzwerke erforderlich",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    title: "QR-Code-Vorschau",
    description: "Ihr generierter QR-Code bereit zum Scannen und Herunterladen",
    noData: "Keine QR-Code-Daten verfügbar",
    downloadButton: "PNG Herunterladen",
    preview: "Vorschau",
    qrInfo: {
      type: "Typ",
      size: "Größe",
      errorCorrection: "Fehlerkorrektur",
    },
  },

  // Footer
  footer: {
    description:
      "Schneller und einfacher QR-Code-Generator. Professionelle QR-Codes für URLs, Text, Kontaktinformationen und Wi-Fi.",
    codes: "Codes",
    cards: "Karten",
    settings: "Einstellungen",
    download: "Download",
    resources: "Ressourcen",
    apiReference: "API-Referenz",
    examples: "Beispiele",
    faq: "FAQ",
    links: "Links",
    copyright: "© 2025 QR Maker. Alle Rechte vorbehalten.",
    madeWith: "Erstellt mit",
    inTurkey: "in der Türkei",
  },

  // Language selector
  language: {
    selectLanguage: "Sprache Auswählen",
    currentLanguage: "Aktuelle Sprache: {{language}}",
  },

  // About section
  about: {
    title: "Über den QR-Code Generator",
    description:
      "Ein moderner, schneller und benutzerfreundlicher QR-Code-Generator, der mit den neuesten Web-Technologien erstellt wurde.",
    technology: "Erstellt mit React Router 7, TypeScript und Tailwind CSS",
    openSource: "Open Source und kostenlos zu verwenden",
  },
} as const;
