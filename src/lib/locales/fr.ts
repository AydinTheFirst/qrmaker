import type { TranslationSchema } from "./types";

export const fr: TranslationSchema = {
  // Common
  common: {
    generate: "Générer",
    clear: "Effacer",
    download: "Télécharger",
    free: "Gratuit",
    highQuality: "Haute Qualité",
    instantDownload: "Téléchargement Instantané",
    fastAndEasy: "Rapide et Facile",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    cancel: "Annuler",
    save: "Enregistrer",
    edit: "Modifier",
    delete: "Supprimer",
    copy: "Copier",
    copied: "Copié !",
  },

  // Hero/Header section
  hero: {
    title: "Générateur de Codes QR",
    subtitle:
      "Créez des codes QR pour les URLs, texte, informations de contact et réseaux Wi-Fi avec notre outil moderne et convivial.",
    pngDownload: "Téléchargement PNG",
    description:
      "Générez des codes QR de haute qualité instantanément et gratuitement. Support pour plusieurs formats et téléchargement instantané.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Texte",
    contact: "Contact",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Fonctionnalités",
    documentation: "Documentation",
    support: "Support",
  },

  // Forms
  forms: {
    url: {
      title: "Code QR d'URL",
      websiteUrl: "URL du Site Web",
      placeholder: "https://exemple.com",
      helpText:
        "Entrez l'adresse complète de votre site web (peut commencer par https:// ou http://)",
      tipsTitle: "Conseils pour les Codes QR d'URL :",
      tips: [
        "Entrez l'adresse complète de votre site web",
        "https:// sera ajouté automatiquement s'il n'est pas inclus",
        "Parfait pour les profils de réseaux sociaux, sites e-commerce",
      ],
      validation: {
        required: "L'URL est requise",
        invalid: "Veuillez entrer une URL valide",
      },
    },
    text: {
      title: "Code QR de Texte",
      textContent: "Contenu du Texte",
      placeholder: "Entrez le texte que vous voulez ajouter à votre code QR...",
      helpText:
        "Vous pouvez ajouter n'importe quel texte, message ou information",
      charactersCount: "{{count}}/500",
      tipsTitle: "Conseils pour les Codes QR de Texte :",
      tips: [
        "Les textes courts et concis fonctionnent mieux",
        "Les caractères spéciaux et emojis sont supportés",
        "Les textes très longs peuvent rendre le code QR complexe",
      ],
      validation: {
        required: "Le contenu du texte est requis",
        tooLong: "Le texte est trop long (maximum 500 caractères)",
      },
    },
    contact: {
      title: "Code QR de Contact",
      fullName: "Nom Complet",
      phoneNumber: "Numéro de Téléphone",
      emailAddress: "Adresse Email",
      organization: "Organisation (Optionnel)",
      website: "Site Web (Optionnel)",
      address: "Adresse (Optionnel)",
      namePlaceholder: "Jean Dupont",
      phonePlaceholder: "+33 (555) 123-4567",
      emailPlaceholder: "jean@exemple.com",
      orgPlaceholder: "Nom de l'Entreprise",
      websitePlaceholder: "https://entreprise.com",
      addressPlaceholder: "123 Rue Principale, Ville, Pays",
      helpText: "Remplissez au moins un champ pour créer un code QR de contact",
      tipsTitle: "Conseils pour les Codes QR de Contact :",
      tips: [
        "Au moins un champ doit être rempli",
        "Les numéros de téléphone peuvent inclure les codes pays",
        "Crée un format vCard qui fonctionne sur tous les téléphones",
      ],
      validation: {
        nameRequired: "Le nom complet est requis",
        atLeastOne: "Veuillez remplir au moins un champ",
        invalidEmail: "Veuillez entrer une adresse email valide",
        invalidPhone: "Veuillez entrer un numéro de téléphone valide",
      },
    },
    wifi: {
      title: "Code QR Wi-Fi",
      networkName: "Nom du Réseau (SSID)",
      password: "Mot de Passe",
      security: "Type de Sécurité",
      securityType: "Type de Sécurité",
      hidden: "Réseau Caché",
      hiddenNetwork: "Réseau Caché",
      networkPlaceholder: "MonReseauWiFi",
      passwordPlaceholder: "mot_de_passe_wifi_123",
      securityOptions: {
        none: "Aucune (Ouvert)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        WPA: "WPA/WPA2",
      },
      helpText: "Créez un code QR pour une connexion Wi-Fi facile",
      tipsTitle: "Conseils pour les Codes QR Wi-Fi :",
      tips: [
        "Le nom du réseau est requis",
        "Le mot de passe est optionnel pour les réseaux ouverts",
        "Fonctionne automatiquement avec la plupart des appareils modernes",
      ],
      validation: {
        networkRequired: "Le nom du réseau (SSID) est requis",
        passwordRequired:
          "Le mot de passe est requis pour les réseaux sécurisés",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    title: "Aperçu du code QR",
    description:
      "Votre code QR généré apparaîtra ici. Vous pouvez le télécharger en tant qu'image PNG de haute qualité.",
    noData: "Aucune donnée de code QR disponible",
    downloadButton: "Télécharger PNG",
    preview: "Aperçu",
    qrInfo: {
      type: "Type",
      size: "Taille",
      errorCorrection: "Correction d'Erreurs",
    },
  },

  // Footer
  footer: {
    description:
      "Générateur de codes QR rapide et facile. Codes QR professionnels pour URLs, texte, informations de contact et Wi-Fi.",
    codes: "Codes",
    cards: "Cartes",
    settings: "Paramètres",
    download: "Téléchargement",
    resources: "Ressources",
    apiReference: "Référence API",
    examples: "Exemples",
    faq: "FAQ",
    links: "Liens",
    copyright: "© 2025 QR Maker. Tous droits réservés.",
    madeWith: "Fait avec",
    inTurkey: "en Turquie",
  },

  // Language selector
  language: {
    selectLanguage: "Sélectionner la Langue",
    currentLanguage: "Langue actuelle : {{language}}",
  },

  // About section
  about: {
    title: "À Propos du Générateur de Codes QR",
    description:
      "Un générateur de codes QR moderne, rapide et convivial construit avec les dernières technologies web.",
    technology: "Construit avec React Router 7, TypeScript et Tailwind CSS",
    openSource: "Open source et gratuit d'utilisation",
  },
} as const;
