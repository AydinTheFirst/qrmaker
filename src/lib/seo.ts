import type { MetaDescriptor } from "react-router";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  siteName?: string;
  twitterHandle?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const DEFAULT_CONFIG = {
  siteName: "QR Maker",
  image: "/og-image.svg",
  type: "website" as const,
  twitterHandle: "@AydinTheFirst",
  baseUrl: "https://qrmaker.aydinthefirst.com",
};

/**
 * Generate SEO meta tags for React Router 7
 * @param config SEO configuration object
 * @param request Optional request object for URL extraction
 * @returns Array of MetaDescriptor objects
 */
export function generateMeta(
  config: SEOConfig,
  request?: Request
): MetaDescriptor[] {
  const {
    title,
    description,
    keywords,
    image = DEFAULT_CONFIG.image,
    url,
    type = DEFAULT_CONFIG.type,
    siteName = DEFAULT_CONFIG.siteName,
    twitterHandle = DEFAULT_CONFIG.twitterHandle,
    noIndex = false,
  } = config;

  // Generate canonical URL from request or provided URL
  const canonicalUrl =
    url || (request ? new URL(request.url).toString() : DEFAULT_CONFIG.baseUrl);
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${DEFAULT_CONFIG.baseUrl}${image}`;

  const meta: MetaDescriptor[] = [
    // Basic Meta Tags
    { title },
    { name: "description", content: description },
    { name: "author", content: siteName },
    { name: "robots", content: noIndex ? "noindex,nofollow" : "index,follow" },

    // Open Graph Protocol
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: fullImageUrl },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImageUrl },
    { name: "twitter:creator", content: twitterHandle },

    // PWA & Mobile
    { name: "theme-color", content: "#3b82f6" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: siteName },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];

  // Add keywords if provided
  if (keywords) {
    meta.push({ name: "keywords", content: keywords });
  }

  return meta;
}

/**
 * Create Web Application structured data schema
 */
export function createWebApplicationSchema(config: {
  name: string;
  description: string;
  url: string;
  features: string[];
  author?: string;
  version?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.name,
    description: config.description,
    url: config.url,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: config.version || "1.0.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    creator: {
      "@type": "Organization",
      name: config.author || "QR Maker",
      url: "https://github.com/AydinTheFirst/qrmaker",
    },
    featureList: config.features,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "150",
    },
  };
}

/**
 * Create Organization structured data schema
 */
export function createOrganizationSchema(config: {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    url: config.url,
    logo: config.logo || `${DEFAULT_CONFIG.baseUrl}/logo.png`,
    sameAs: config.sameAs || [],
  };
}

/**
 * Default SEO content for different pages
 */
export const SEO_DEFAULTS = {
  home: {
    title: "QR Code Generator - Free Online QR Maker",
    description:
      "Create QR codes instantly for URLs, text, contact info, and WiFi. Free online QR code generator with download options. Mobile-friendly and fast.",
    keywords:
      "QR code generator, QR maker, free QR code, online QR generator, URL QR code, contact QR code, WiFi QR code, text QR code, mobile QR scanner, free QR generator",
  },
  url: {
    title: "URL QR Code Generator - Create QR Codes for Links",
    description:
      "Generate QR codes for websites and URLs instantly. Perfect for sharing links, social media profiles, and web pages. Free and mobile-friendly.",
    keywords:
      "URL QR code, website QR code, link QR generator, social media QR code, web QR code",
  },
  text: {
    title: "Text QR Code Generator - Create QR Codes for Messages",
    description:
      "Convert any text or message into a QR code. Perfect for sharing information, notes, and messages. Up to 500 characters supported.",
    keywords:
      "text QR code, message QR code, note QR generator, information QR code, text to QR",
  },
  contact: {
    title: "Contact QR Code Generator - vCard QR Codes",
    description:
      "Create QR codes for contact information. Generate vCard QR codes with name, phone, email, and organization details. Works on all devices.",
    keywords:
      "contact QR code, vCard QR code, business card QR, contact info QR, phone number QR code",
  },
  wifi: {
    title: "WiFi QR Code Generator - Share Network Credentials",
    description:
      "Generate QR codes for WiFi networks. Share WiFi credentials easily with QR codes. Supports WPA, WEP, and open networks.",
    keywords:
      "WiFi QR code, network QR code, WiFi password QR, wireless QR generator, network sharing QR",
  },
} as const;
