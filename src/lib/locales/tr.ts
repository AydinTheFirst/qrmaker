export const tr = {
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
        atLeastOne: "Lütfen en az bir alanı doldurun",
        invalidEmail: "Lütfen geçerli bir e-posta adresi girin",
        invalidPhone: "Lütfen geçerli bir telefon numarası girin",
      },
    },
    wifi: {
      title: "Wi-Fi QR Kodu",
      networkName: "Ağ Adı (SSID)",
      password: "Şifre",
      securityType: "Güvenlik Türü",
      hiddenNetwork: "Gizli Ağ",
      networkPlaceholder: "BenimWiFiAgim",
      passwordPlaceholder: "wifi_sifre_123",
      securityOptions: {
        none: "Yok (Açık)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        wpa2: "WPA2",
        wpa3: "WPA3",
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
    title: "QR Kodunuz",
    description: "QR kodunuzu oluşturmak için formu doldurun",
    downloadButton: "PNG İndir",
    downloadSvg: "SVG İndir",
    generatedSuccess: "QR kod başarıyla oluşturuldu!",
    downloadSuccess: "QR kod başarıyla indirildi!",
    copySuccess: "QR kod panoya kopyalandı!",
    noData: "QR kod verisi mevcut değil",
    generating: "QR kod oluşturuluyor...",
    preview: "Önizleme",
    downloadOptions: "İndirme Seçenekleri",
    size: "Boyut",
    format: "Format",
    quality: "Kalite",
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
    english: "English",
    turkish: "Türkçe",
    currentLanguage: "Mevcut dil: {{language}}",
    switchTo: "{{language}} diline geç",
  },

  // Error Messages
  errors: {
    general: "Bir hata oluştu",
    networkError: "Ağ hatası. Lütfen bağlantınızı kontrol edin.",
    qrGenerationFailed: "QR kod oluşturulamadı",
    downloadFailed: "QR kod indirilemedi",
    invalidInput: "Geçersiz giriş sağlandı",
    fileTooLarge: "Dosya çok büyük",
    unsupportedFormat: "Desteklenmeyen dosya formatı",
  },

  // Success Messages
  success: {
    qrGenerated: "QR kod başarıyla oluşturuldu!",
    downloaded: "QR kod başarıyla indirildi!",
    copied: "Panoya kopyalandı!",
    saved: "Ayarlar başarıyla kaydedildi!",
  },

  // Loading States
  loading: {
    generating: "QR kod oluşturuluyor...",
    downloading: "İndirme hazırlanıyor...",
    processing: "İşleniyor...",
    saving: "Kaydediliyor...",
  },

  // Features
  features: {
    multipleTypes: {
      title: "Çoklu QR Türleri",
      description: "URL, Metin, İletişim ve Wi-Fi QR kodları desteği",
    },
    instantPreview: {
      title: "Anında Önizleme",
      description:
        "Yazdığınız anda QR kodunuzun gerçek zamanlı güncellemesini görün",
    },
    highQuality: {
      title: "Yüksek Kalite",
      description: "Net, yüksek çözünürlüklü QR kodları oluşturun",
    },
    freeToUse: {
      title: "Ücretsiz Kullanım",
      description: "Kayıt gerekmez, tamamen ücretsiz",
    },
    responsive: {
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda ve ekran boyutlarında mükemmel çalışır",
    },
    privacy: {
      title: "Gizlilik Öncelikli",
      description:
        "Tüm işlemler yerel olarak yapılır, sunuculara veri gönderilmez",
    },
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
