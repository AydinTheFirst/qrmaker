import type { MetaFunction } from "react-router";

import {
  Contact,
  Download,
  Link,
  MessageSquare,
  QrCode,
  Sparkles,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";

import StructuredData from "~/components/structured-data";
import { Button } from "~/components/ui/button";
import {
  createWebApplicationSchema,
  generateMeta,
  SEO_DEFAULTS,
} from "~/lib/seo";

import QRDisplay from "./components/QRDisplay";
import ContactForm from "./forms/contact-form";
import TextForm from "./forms/text-form";
import UrlForm from "./forms/url-form";
import WifiForm from "./forms/wifi-form";

// SEO Meta Function
export const meta: MetaFunction = ({ location }) => {
  const url = new URL(
    location.pathname + location.search,
    "https://qrmaker.aydinthefirst.com"
  );
  const tab = url.searchParams.get("tab") || "home";

  // Get appropriate SEO content based on active tab
  const seoContent =
    tab in SEO_DEFAULTS
      ? SEO_DEFAULTS[tab as keyof typeof SEO_DEFAULTS]
      : SEO_DEFAULTS.home;

  return generateMeta({
    title: seoContent.title,
    description: seoContent.description,
    keywords: seoContent.keywords,
    url: url.toString(),
  });
};

interface QRData {
  value: string;
  type: string;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
}

interface WifiFormData {
  ssid: string;
  password: string;
  security: string;
  hidden: boolean;
}

type TabType = "url" | "text" | "contact" | "wifi";

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [qrData, setQrData] = useState<QRData | null>(null);
  const { t } = useTranslation();

  // Structured data for SEO
  const structuredData = createWebApplicationSchema({
    name: "QR Code Generator",
    description:
      "Create QR codes instantly for URLs, text, contact info, and WiFi. Free online QR code generator with download options.",
    url: "https://qrmaker.aydinthefirst.com",
    features: [
      "URL QR Code Generation",
      "Text QR Code Generation",
      "Contact Info QR Code Generation (vCard)",
      "WiFi QR Code Generation",
      "High-Quality PNG Download",
      "Mobile Responsive Design",
      "Real-time QR Code Preview",
      "Free to Use",
    ],
    author: "QR Maker",
    version: "1.0.0",
  });

  const tabs = [
    { color: "blue", icon: Link, id: "url", label: t("tabs.url") },
    { color: "green", icon: MessageSquare, id: "text", label: t("tabs.text") },
    { color: "purple", icon: Contact, id: "contact", label: t("tabs.contact") },
    { color: "orange", icon: Wifi, id: "wifi", label: t("tabs.wifi") },
  ] as const;

  // Form state'leri
  const [urlForm, setUrlForm] = useState("");
  const [textForm, setTextForm] = useState("");
  const [contactForm, setContactForm] = useState<ContactFormData>({
    email: "",
    name: "",
    organization: "",
    phone: "",
  });
  const [wifiForm, setWifiForm] = useState<WifiFormData>({
    hidden: false,
    password: "",
    security: "WPA",
    ssid: "",
  });

  // URL'den aktif tab'ı al
  const activeTab = (searchParams.get("tab") as TabType) || "url";

  // Tab değiştirme fonksiyonu
  const changeTab = (tab: TabType) => {
    setSearchParams({ tab });
  };

  // Form verilerini sıfırlama
  const clearCurrentForm = () => {
    switch (activeTab) {
      case "url":
        setUrlForm("");
        break;
      case "text":
        setTextForm("");
        break;
      case "contact":
        setContactForm({ email: "", name: "", organization: "", phone: "" });
        break;
      case "wifi":
        setWifiForm({ hidden: false, password: "", security: "WPA", ssid: "" });
        break;
    }
    setQrData(null);
  };

  const generateQRCode = () => {
    let qrValue = "";
    const type = activeTab;

    switch (activeTab) {
      case "url":
        if (!urlForm) return;
        qrValue = urlForm.startsWith("http") ? urlForm : `https://${urlForm}`;
        break;
      case "text":
        if (!textForm) return;
        qrValue = textForm;
        break;
      case "contact":
        if (!contactForm.name && !contactForm.phone && !contactForm.email)
          return;
        qrValue = `MECARD:N:${contactForm.name};TEL:${contactForm.phone};EMAIL:${contactForm.email};ORG:${contactForm.organization};;`;
        break;
      case "wifi":
        if (!wifiForm.ssid) return;
        qrValue = `WIFI:T:${wifiForm.security};S:${wifiForm.ssid};P:${
          wifiForm.password
        };H:${wifiForm.hidden ? "true" : "false"};;`;
        break;
    }

    setQrData({ type, value: qrValue });
  };

  const downloadQRCode = () => {
    if (!qrData) return;

    const svg = document.querySelector("#qr-code-svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = 512;
    canvas.height = 512;

    img.onload = () => {
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 512, 512);
        ctx.drawImage(img, 0, 0, 512, 512);
      }
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `qr-code-${qrData.type}-${Date.now()}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  // Aktif form bileşenini render et
  const renderActiveForm = () => {
    switch (activeTab) {
      case "url":
        return <UrlForm onChange={setUrlForm} value={urlForm} />;
      case "text":
        return <TextForm onChange={setTextForm} value={textForm} />;
      case "contact":
        return <ContactForm onChange={setContactForm} value={contactForm} />;
      case "wifi":
        return <WifiForm onChange={setWifiForm} value={wifiForm} />;
      default:
        return null;
    }
  };

  // Form doluluk kontrolü
  const isFormValid = () => {
    switch (activeTab) {
      case "url":
        return urlForm.trim() !== "";
      case "text":
        return textForm.trim() !== "";
      case "contact":
        return (
          contactForm.name.trim() !== "" ||
          contactForm.phone.trim() !== "" ||
          contactForm.email.trim() !== ""
        );
      case "wifi":
        return wifiForm.ssid.trim() !== "";
      default:
        return false;
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
          <QrCode className="h-10 w-10 text-white" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {t("hero.subtitle")}
        </p>
        <div className="text-muted-foreground mt-6 flex items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span>{t("common.free")}</span>
          </div>
          <div className="bg-border h-4 w-px"></div>
          <div className="flex items-center gap-1">
            <Download className="h-4 w-4 text-green-500" />
            <span>{t("hero.pngDownload")}</span>
          </div>
          <div className="bg-border h-4 w-px"></div>
          <div className="flex items-center gap-1">
            <QrCode className="h-4 w-4 text-blue-500" />
            <span>{t("common.highQuality")}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Form Section */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl border p-6 shadow-sm">
            {/* Custom Tab Navigation */}
            <div className="bg-muted/50 mb-6 grid grid-cols-4 gap-2 rounded-lg p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-r from-${tab.color}-500 to-${tab.color}-600 text-white shadow-sm`
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    key={tab.id}
                    onClick={() => changeTab(tab.id as TabType)}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Form */}
            {renderActiveForm()}

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">
              <Button
                className="h-12 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 font-medium text-white hover:from-blue-600 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!isFormValid()}
                onClick={generateQRCode}
                size="lg"
              >
                <QrCode className="mr-2 h-5 w-5" />
                {t("common.generate")} QR Code
              </Button>

              <Button
                className="h-12 px-6"
                onClick={clearCurrentForm}
                size="lg"
                variant="outline"
              >
                {t("common.clear")}
              </Button>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center">
          <QRDisplay onDownload={downloadQRCode} qrData={qrData} />
        </div>
      </div>
    </>
  );
}
