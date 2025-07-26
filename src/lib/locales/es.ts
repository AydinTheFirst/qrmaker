import type { TranslationSchema } from "./types";

export const es: TranslationSchema = {
  // Common
  common: {
    generate: "Generar",
    clear: "Limpiar",
    download: "Descargar",
    free: "Gratis",
    highQuality: "Alta Calidad",
    instantDownload: "Descarga Instantánea",
    fastAndEasy: "Rápido y Fácil",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    copy: "Copiar",
    copied: "¡Copiado!",
  },

  // Hero/Header section
  hero: {
    title: "Generador de Códigos QR",
    subtitle:
      "Crea códigos QR para URLs, texto, información de contacto y redes Wi-Fi con nuestra herramienta moderna y fácil de usar.",
    pngDownload: "Descarga PNG",
    description:
      "Genera códigos QR de alta calidad al instante y gratis. Soporte para múltiples formatos y descarga instantánea.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Texto",
    contact: "Contacto",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Características",
    documentation: "Documentación",
    support: "Soporte",
  },

  // Forms
  forms: {
    url: {
      title: "Código QR de URL",
      websiteUrl: "URL del Sitio Web",
      placeholder: "https://ejemplo.com",
      helpText:
        "Ingresa la dirección completa de tu sitio web (puede comenzar con https:// o http://)",
      tipsTitle: "Consejos para Códigos QR de URL:",
      tips: [
        "Ingresa la dirección completa de tu sitio web",
        "https:// se agregará automáticamente si no se incluye",
        "Perfecto para perfiles de redes sociales, sitios de comercio electrónico",
      ],
      validation: {
        required: "La URL es requerida",
        invalid: "Por favor ingresa una URL válida",
      },
    },
    text: {
      title: "Código QR de Texto",
      textContent: "Contenido del Texto",
      placeholder: "Ingresa el texto que quieres agregar a tu código QR...",
      helpText: "Puedes agregar cualquier texto, mensaje o información",
      charactersCount: "{{count}}/500",
      tipsTitle: "Consejos para Códigos QR de Texto:",
      tips: [
        "Los textos cortos y concisos funcionan mejor",
        "Se admiten caracteres especiales y emojis",
        "Los textos muy largos pueden hacer el código QR complejo",
      ],
      validation: {
        required: "El contenido del texto es requerido",
        tooLong: "El texto es demasiado largo (máximo 500 caracteres)",
      },
    },
    contact: {
      title: "Código QR de Contacto",
      fullName: "Nombre Completo",
      phoneNumber: "Número de Teléfono",
      emailAddress: "Dirección de Email",
      organization: "Organización (Opcional)",
      website: "Sitio Web (Opcional)",
      address: "Dirección (Opcional)",
      namePlaceholder: "Juan Pérez",
      phonePlaceholder: "+34 (555) 123-4567",
      emailPlaceholder: "juan@ejemplo.com",
      orgPlaceholder: "Nombre de la Empresa",
      websitePlaceholder: "https://empresa.com",
      addressPlaceholder: "Calle Principal 123, Ciudad, País",
      helpText:
        "Completa al menos un campo para crear un código QR de contacto",
      tipsTitle: "Consejos para Códigos QR de Contacto:",
      tips: [
        "Al menos un campo debe ser completado",
        "Los números de teléfono pueden incluir códigos de país",
        "Crea un formato vCard que funciona en todos los teléfonos",
      ],
      validation: {
        nameRequired: "El nombre completo es requerido",
        atLeastOne: "Por favor completa al menos un campo",
        invalidEmail: "Por favor ingresa una dirección de email válida",
        invalidPhone: "Por favor ingresa un número de teléfono válido",
      },
    },
    wifi: {
      title: "Código QR de Wi-Fi",
      networkName: "Nombre de Red (SSID)",
      password: "Contraseña",
      security: "Tipo de Seguridad",
      hidden: "Red Oculta",
      networkPlaceholder: "MiRedWiFi",
      passwordPlaceholder: "contraseña_wifi_123",
      securityOptions: {
        none: "Ninguna (Abierta)",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "Crea un código QR para conexión fácil a Wi-Fi",
      tipsTitle: "Consejos para Códigos QR de Wi-Fi:",
      tips: [
        "El nombre de red es requerido",
        "La contraseña es opcional para redes abiertas",
        "Funciona automáticamente con la mayoría de dispositivos modernos",
      ],
      validation: {
        networkRequired: "El nombre de red (SSID) es requerido",
        passwordRequired: "La contraseña es requerida para redes seguras",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "No hay datos de código QR disponibles",
    downloadButton: "Descargar PNG",
    qrInfo: {
      type: "Tipo",
      size: "Tamaño",
      errorCorrection: "Corrección de Errores",
    },
  },

  // Footer
  footer: {
    description:
      "Generador de códigos QR rápido y fácil. Códigos QR profesionales para URLs, texto, información de contacto y Wi-Fi.",
    codes: "Códigos",
    cards: "Tarjetas",
    settings: "Configuración",
    download: "Descarga",
    resources: "Recursos",
    apiReference: "Referencia API",
    examples: "Ejemplos",
    faq: "Preguntas Frecuentes",
    links: "Enlaces",
    copyright: "© 2025 QR Maker. Todos los derechos reservados.",
    madeWith: "Hecho con",
    inTurkey: "en Turquía",
  },

  // Language selector
  language: {
    selectLanguage: "Seleccionar Idioma",
    currentLanguage: "Idioma actual: {{language}}",
  },

  // About section
  about: {
    title: "Acerca del Generador de Códigos QR",
    description:
      "Un generador de códigos QR moderno, rápido y fácil de usar construido con las últimas tecnologías web.",
    technology: "Construido con React Router 7, TypeScript y Tailwind CSS",
    openSource: "Código abierto y de uso gratuito",
  },
} as const;
