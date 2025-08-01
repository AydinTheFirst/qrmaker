import type { TranslationSchema } from "./types";

export const en: TranslationSchema = {
  // Common
  common: {
    generate: "Generate",
    clear: "Clear",
    download: "Download",
    free: "Free",
    highQuality: "High Quality",
    instantDownload: "Instant Download",
    fastAndEasy: "Fast & Easy",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    copy: "Copy",
    copied: "Copied!",
  },

  // Header/Hero
  hero: {
    title: "QR Code Generator",
    subtitle:
      "Create QR codes for URLs, text, contact information, and Wi-Fi networks with our modern and user-friendly tool.",
    pngDownload: "PNG Download",
    description:
      "Generate high-quality QR codes instantly for free. Support for multiple formats and instant download.",
  },

  // Navigation/Tabs
  tabs: {
    url: "URL",
    text: "Text",
    contact: "Contact",
    wifi: "Wi-Fi",
  },

  // Navigation
  nav: {
    github: "GitHub",
    features: "Features",
    documentation: "Documentation",
    support: "Support",
  },

  // Forms
  forms: {
    url: {
      title: "URL QR Code",
      websiteUrl: "Website URL",
      placeholder: "https://example.com",
      helpText:
        "Enter the full address of your website (can start with https:// or http://)",
      tipsTitle: "Tips for URL QR Codes:",
      tips: [
        "Enter the full address of your website",
        "https:// will be added automatically if not included",
        "Perfect for social media profiles, e-commerce sites",
      ],
      validation: {
        required: "URL is required",
        invalid: "Please enter a valid URL",
      },
    },
    text: {
      title: "Text QR Code",
      textContent: "Text Content",
      placeholder: "Enter the text you want to add to your QR code...",
      helpText: "You can add any text, message or information",
      charactersCount: "{{count}}/500",
      tipsTitle: "Tips for Text QR Codes:",
      tips: [
        "Short and concise texts work better",
        "Special characters and emojis are supported",
        "Very long texts can make the QR code complex",
      ],
      validation: {
        required: "Text content is required",
        tooLong: "Text is too long (maximum 500 characters)",
      },
    },
    contact: {
      title: "Contact QR Code",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      organization: "Organization (Optional)",
      website: "Website (Optional)",
      address: "Address (Optional)",
      namePlaceholder: "John Doe",
      phonePlaceholder: "+1 (555) 123-4567",
      emailPlaceholder: "john@example.com",
      orgPlaceholder: "Company Name",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "123 Main St, City, Country",
      helpText: "Fill in at least one field to create a contact QR code",
      tipsTitle: "Tips for Contact QR Codes:",
      tips: [
        "At least one field must be filled",
        "Phone numbers can include country codes",
        "Creates vCard format that works with all phones",
      ],
      validation: {
        nameRequired: "Full name is required",
        atLeastOne: "Please fill in at least one field",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Please enter a valid phone number",
      },
    },
    wifi: {
      title: "Wi-Fi QR Code",
      networkName: "Network Name (SSID)",
      password: "Password",
      security: "Security Type",
      securityType: "Security Type",
      hidden: "Hidden Network",
      hiddenNetwork: "Hidden Network",
      networkPlaceholder: "MyWiFiNetwork",
      passwordPlaceholder: "wifi_password_123",
      securityOptions: {
        none: "None (Open)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        WPA: "WPA/WPA2",
      },
      helpText: "Create a QR code for easy Wi-Fi connection",
      tipsTitle: "Tips for Wi-Fi QR Codes:",
      tips: [
        "Network name is required",
        "Password is optional for open networks",
        "Works with most modern devices automatically",
      ],
      validation: {
        networkRequired: "Network name (SSID) is required",
        passwordRequired: "Password is required for secured networks",
      },
    },
  },

  // QR Display
  qrDisplay: {
    title: "QR Code Preview",
    description:
      "Your generated QR code will appear here. You can download it as a high-quality PNG image.",
    noData: "No QR code data available",
    downloadButton: "Download PNG",
    preview: "Preview",
    qrInfo: {
      type: "Type",
      size: "Size",
      errorCorrection: "Error Correction",
    },
  },

  // Footer
  footer: {
    description:
      "Fast and easy QR code generator. Professional QR codes for URLs, text, contact information and Wi-Fi.",
    codes: "Codes",
    cards: "Cards",
    settings: "Settings",
    download: "Download",
    resources: "Resources",
    apiReference: "API Reference",
    examples: "Examples",
    faq: "FAQ",
    links: "Links",
    copyright: "© 2025 QR Maker. All rights reserved.",
    madeWith: "Made with",
    inTurkey: "in Turkey",
  },

  // Language Selector
  language: {
    selectLanguage: "Select Language",
    currentLanguage: "Current language: {{language}}",
  },

  // About
  about: {
    title: "About QR Code Generator",
    description:
      "A modern, fast, and user-friendly QR code generator built with the latest web technologies.",
    technology: "Built with React Router 7, TypeScript, and Tailwind CSS",
    openSource: "Open source and free to use",
  },
} as const;
