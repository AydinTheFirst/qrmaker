import type { TranslationSchema } from './types';

export const it: TranslationSchema = {
  // Common
  common: {
    generate: "Genera",
    clear: "Cancella",
    download: "Scarica",
    free: "Gratuito",
    highQuality: "Alta Qualità",
    instantDownload: "Download Istantaneo",
    fastAndEasy: "Veloce e Facile",
    loading: "Caricamento...",
    error: "Errore",
    success: "Successo",
    cancel: "Annulla",
    save: "Salva",
    edit: "Modifica",
    delete: "Elimina",
    copy: "Copia",
    copied: "Copiato!",
  },

  // Hero/Header section
  hero: {
    title: "Generatore di Codici QR",
    subtitle:
      "Crea codici QR per URL, testo, informazioni di contatto e reti Wi-Fi con il nostro strumento moderno e user-friendly.",
    pngDownload: "Download PNG",
    description:
      "Genera codici QR di alta qualità istantaneamente e gratuitamente. Supporto per più formati e download istantaneo.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Testo",
    contact: "Contatto",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Caratteristiche",
    documentation: "Documentazione",
    support: "Supporto",
  },

  // Forms
  forms: {
    url: {
      title: "Codice QR URL",
      websiteUrl: "URL del Sito Web",
      placeholder: "https://esempio.com",
      helpText:
        "Inserisci l'indirizzo completo del tuo sito web (può iniziare con https:// o http://)",
      tipsTitle: "Suggerimenti per i Codici QR URL:",
      tips: [
        "Inserisci l'indirizzo completo del tuo sito web",
        "https:// verrà aggiunto automaticamente se non incluso",
        "Perfetto per profili social media, siti e-commerce",
      ],
      validation: {
        required: "L'URL è obbligatoria",
        invalid: "Inserisci un URL valido",
      },
    },
    text: {
      title: "Codice QR Testo",
      textContent: "Contenuto del Testo",
      placeholder: "Inserisci il testo che vuoi aggiungere al tuo codice QR...",
      helpText: "Puoi aggiungere qualsiasi testo, messaggio o informazione",
      charactersCount: "{{count}}/500",
      tipsTitle: "Suggerimenti per i Codici QR Testo:",
      tips: [
        "I testi brevi e concisi funzionano meglio",
        "Caratteri speciali ed emoji sono supportati",
        "Testi molto lunghi possono rendere il codice QR complesso",
      ],
      validation: {
        required: "Il contenuto del testo è obbligatorio",
        tooLong: "Il testo è troppo lungo (massimo 500 caratteri)",
      },
    },
    contact: {
      title: "Codice QR Contatto",
      fullName: "Nome Completo",
      phoneNumber: "Numero di Telefono",
      emailAddress: "Indirizzo Email",
      organization: "Organizzazione (Opzionale)",
      website: "Sito Web (Opzionale)",
      address: "Indirizzo (Opzionale)",
      namePlaceholder: "Mario Rossi",
      phonePlaceholder: "+39 (555) 123-4567",
      emailPlaceholder: "mario@esempio.com",
      orgPlaceholder: "Nome Azienda",
      websitePlaceholder: "https://azienda.com",
      addressPlaceholder: "Via Principale 123, Città, Paese",
      helpText: "Compila almeno un campo per creare un codice QR di contatto",
      tipsTitle: "Suggerimenti per i Codici QR Contatto:",
      tips: [
        "Almeno un campo deve essere compilato",
        "I numeri di telefono possono includere prefissi internazionali",
        "Crea un formato vCard che funziona su tutti i telefoni",
      ],
      validation: {
        nameRequired: "Il nome completo è obbligatorio",
        atLeastOne: "Compila almeno un campo",
        invalidEmail: "Inserisci un indirizzo email valido",
        invalidPhone: "Inserisci un numero di telefono valido",
      },
    },
    wifi: {
      title: "Codice QR Wi-Fi",
      networkName: "Nome Rete (SSID)",
      password: "Password",
      security: "Tipo di Sicurezza",
      hidden: "Rete Nascosta",
      networkPlaceholder: "LaMiaReteWiFi",
      passwordPlaceholder: "password_wifi_123",
      securityOptions: {
        none: "Nessuna (Aperta)",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "Crea un codice QR per connessione Wi-Fi facile",
      tipsTitle: "Suggerimenti per i Codici QR Wi-Fi:",
      tips: [
        "Il nome della rete è obbligatorio",
        "La password è opzionale per reti aperte",
        "Funziona automaticamente con la maggior parte dei dispositivi moderni",
      ],
      validation: {
        networkRequired: "Il nome della rete (SSID) è obbligatorio",
        passwordRequired: "La password è obbligatoria per reti sicure",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "Nessun dato del codice QR disponibile",
    downloadButton: "Scarica PNG",
    qrInfo: {
      type: "Tipo",
      size: "Dimensione",
      errorCorrection: "Correzione Errori",
    },
  },

  // Footer
  footer: {
    description: "Generatore di codici QR veloce e facile. Codici QR professionali per URL, testo, informazioni di contatto e Wi-Fi.",
    codes: "Codici",
    cards: "Schede",
    settings: "Impostazioni",
    download: "Download",
    resources: "Risorse",
    apiReference: "Riferimento API",
    examples: "Esempi",
    faq: "FAQ",
    links: "Collegamenti",
    copyright: "© 2025 QR Maker. Tutti i diritti riservati.",
    madeWith: "Realizzato con",
    inTurkey: "in Turchia",
  },

  // Language selector
  language: {
    selectLanguage: "Seleziona Lingua",
    currentLanguage: "Lingua corrente: {{language}}",
  },

  // About section
  about: {
    title: "Informazioni sul Generatore di Codici QR",
    description:
      "Un generatore di codici QR moderno, veloce e user-friendly costruito con le più recenti tecnologie web.",
    technology: "Costruito con React Router 7, TypeScript e Tailwind CSS",
    openSource: "Open source e gratuito da usare",
  },
} as const;
