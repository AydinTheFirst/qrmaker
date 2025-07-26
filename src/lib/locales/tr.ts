import type { TranslationSchema } from './types';

export const tr: TranslationSchema = {
  // Common
  common: {
    generate: "Oluştur",
    clear: "Temizle",
    download: "İndir",
    free: "Ücretsiz",
    highQuality: "Yüksek Kalite",
    instantDownload: "Anında İndirme",
    fastAndEasy: "Hızlı & Kolay",
    loading: "Yükleniyor...",
    error: "Hata",
    success: "Başarılı",
    cancel: "İptal",
    save: "Kaydet",
    edit: "Düzenle",
    delete: "Sil",
    copy: "Kopyala",
    copied: "Kopyalandı!",
  },

  // Header/Hero
  hero: {
    title: "QR Kod Oluşturucu",
    subtitle:
      "URL, metin, iletişim bilgileri ve Wi-Fi ağları için QR kodları oluşturun. Modern ve kullanıcı dostu aracımızla kolayca QR kod üretin.",
    pngDownload: "PNG İndirme",
    description:
      "Yüksek kaliteli QR kodları anında ve ücretsiz oluşturun. Çoklu format desteği ve anında indirme.",
  },

  // Navigation/Tabs
  tabs: {
    url: "URL",
    text: "Metin",
    contact: "İletişim",
    wifi: "Wi-Fi",
  },

  // Navigation
  nav: {
    github: "GitHub",
    features: "Özellikler",
    documentation: "Dokümantasyon",
    support: "Destek",
  },

  // Forms
  forms: {
    url: {
      title: "URL QR Kodu",
      websiteUrl: "Web Sitesi URL'si",
      placeholder: "https://example.com",
      helpText:
        "Web sitenizin tam adresini girin (https:// veya http:// ile başlayabilir)",
      tipsTitle: "URL QR Kodları İçin İpuçları:",
      tips: [
        "Web sitenizin tam adresini girin",
        "https:// eklemezseniz otomatik olarak eklenecektir",
        "Sosyal medya profilleri, e-ticaret siteleri için idealdir",
      ],
      validation: {
        required: "URL gereklidir",
        invalid: "Lütfen geçerli bir URL girin",
      },
    },
    text: {
      title: "Metin QR Kodu",
      textContent: "Metin İçeriği",
      placeholder: "QR kodunuza eklemek istediğiniz metni yazın...",
      helpText: "Herhangi bir metin, mesaj veya bilgi ekleyebilirsiniz",
      charactersCount: "{{count}}/500",
      tipsTitle: "Metin QR Kodları İçin İpuçları:",
      tips: [
        "Kısa ve öz metinler daha iyi çalışır",
        "Özel karakterler ve emojiler desteklenir",
        "Çok uzun metinler QR kodunu karmaşık hale getirebilir",
      ],
      validation: {
        required: "Metin içeriği gereklidir",
        tooLong: "Metin çok uzun (maksimum 500 karakter)",
      },
    },
    contact: {
      title: "İletişim QR Kodu",
      fullName: "Ad Soyad",
      phoneNumber: "Telefon Numarası",
      emailAddress: "E-posta Adresi",
      organization: "Organizasyon (Opsiyonel)",
      website: "Web Sitesi (Opsiyonel)",
      address: "Adres (Opsiyonel)",
      namePlaceholder: "Ahmet Yılmaz",
      phonePlaceholder: "+90 (555) 123-4567",
      emailPlaceholder: "ahmet@example.com",
      orgPlaceholder: "Şirket Adı",
      websitePlaceholder: "https://sirket.com",
      addressPlaceholder: "Atatürk Cad. No:123, İstanbul, Türkiye",
      helpText: "İletişim QR kodu oluşturmak için en az bir alanı doldurun",
      tipsTitle: "İletişim QR Kodları İçin İpuçları:",
      tips: [
        "En az bir alan doldurulmalıdır",
        "Telefon numaraları ülke kodunu içerebilir",
        "Tüm telefonlarda çalışan vCard formatı oluşturur",
      ],
      validation: {
        nameRequired: "Ad soyad gereklidir",
        atLeastOne: "Lütfen en az bir alanı doldurun",
        invalidEmail: "Lütfen geçerli bir e-posta adresi girin",
        invalidPhone: "Lütfen geçerli bir telefon numarası girin",
      },
    },
    wifi: {
      title: "Wi-Fi QR Kodu",
      networkName: "Ağ Adı (SSID)",
      password: "Şifre",
      security: "Güvenlik Türü",
      hidden: "Gizli Ağ",
      networkPlaceholder: "BenimWiFiAgim",
      passwordPlaceholder: "wifi_sifre_123",
      securityOptions: {
        none: "Yok (Açık)",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "Kolay Wi-Fi bağlantısı için QR kod oluşturun",
      tipsTitle: "Wi-Fi QR Kodları İçin İpuçları:",
      tips: [
        "Ağ adı zorunludur",
        "Açık ağlar için şifre opsiyoneldir",
        "Çoğu modern cihazda otomatik olarak çalışır",
      ],
      validation: {
        networkRequired: "Ağ adı (SSID) gereklidir",
        passwordRequired: "Güvenli ağlar için şifre gereklidir",
      },
    },
  },

  // QR Display
  qrDisplay: {
    noData: "QR kod verisi mevcut değil",
    downloadButton: "PNG İndir",
    qrInfo: {
      type: "Tür",
      size: "Boyut",
      errorCorrection: "Hata Düzeltme",
    },
  },

  // Footer
  footer: {
    description:
      "Hızlı ve kolay QR kod oluşturucu. URL, metin, iletişim bilgileri ve Wi-Fi için profesyonel QR kodlar.",
    codes: "Kodları",
    cards: "Kartları",
    settings: "Ayarları",
    download: "İndirme",
    resources: "Kaynaklar",
    apiReference: "API Referansı",
    examples: "Örnekler",
    faq: "Sık Sorulanlar",
    links: "Bağlantılar",
    copyright: "© 2025 QR Maker. Tüm hakları saklıdır.",
    madeWith: "ile yapıldı",
    inTurkey: "Türkiye'de",
  },

  // Language Selector
  language: {
    selectLanguage: "Dil Seçin",
    currentLanguage: "Mevcut dil: {{language}}",
  },

  // About
  about: {
    title: "QR Kod Oluşturucu Hakkında",
    description:
      "En son web teknolojileri ile geliştirilmiş modern, hızlı ve kullanıcı dostu QR kod oluşturucu.",
    technology: "React Router 7, TypeScript ve Tailwind CSS ile geliştirildi",
    openSource: "Açık kaynak ve ücretsiz kullanım",
  },
} as const;
