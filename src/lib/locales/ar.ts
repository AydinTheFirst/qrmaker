import type { TranslationSchema } from "./types";

export const ar: TranslationSchema = {
  // Common
  common: {
    generate: "إنشاء",
    clear: "مسح",
    download: "تحميل",
    free: "مجاني",
    highQuality: "جودة عالية",
    instantDownload: "تحميل فوري",
    fastAndEasy: "سريع وسهل",
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجح",
    cancel: "إلغاء",
    save: "حفظ",
    edit: "تعديل",
    delete: "حذف",
    copy: "نسخ",
    copied: "تم النسخ!",
  },

  // Hero/Header section
  hero: {
    title: "مولد رموز QR",
    subtitle:
      "أنشئ رموز QR للروابط والنصوص ومعلومات الاتصال وشبكات Wi-Fi باستخدام أداتنا الحديثة وسهلة الاستخدام.",
    pngDownload: "تحميل PNG",
    description:
      "قم بإنشاء رموز QR عالية الجودة فوراً ومجاناً. دعم تنسيقات متعددة وتحميل فوري.",
  },

  // Main navigation tabs
  tabs: {
    url: "رابط",
    text: "نص",
    contact: "جهة اتصال",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "الميزات",
    documentation: "التوثيق",
    support: "الدعم",
  },

  // Forms
  forms: {
    url: {
      title: "رمز QR للرابط",
      websiteUrl: "رابط الموقع",
      placeholder: "https://example.com",
      helpText:
        "أدخل العنوان الكامل لموقعك الإلكتروني (يمكن أن يبدأ بـ https:// أو http://)",
      tipsTitle: "نصائح لرموز QR للروابط:",
      tips: [
        "أدخل العنوان الكامل لموقعك الإلكتروني",
        "سيتم إضافة https:// تلقائياً إذا لم يكن مضمناً",
        "مثالي لملفات وسائل التواصل الاجتماعي ومواقع التجارة الإلكترونية",
      ],
      validation: {
        required: "الرابط مطلوب",
        invalid: "يرجى إدخال رابط صحيح",
      },
    },
    text: {
      title: "رمز QR للنص",
      textContent: "محتوى النص",
      placeholder: "أدخل النص الذي تريد إضافته إلى رمز QR...",
      helpText: "يمكنك إضافة أي نص أو رسالة أو معلومات",
      charactersCount: "{{count}}/500",
      tipsTitle: "نصائح لرموز QR للنص:",
      tips: [
        "النصوص القصيرة والمقتضبة تعمل بشكل أفضل",
        "الرموز الخاصة والرموز التعبيرية مدعومة",
        "النصوص الطويلة جداً قد تجعل رمز QR معقداً",
      ],
      validation: {
        required: "محتوى النص مطلوب",
        tooLong: "النص طويل جداً (الحد الأقصى 500 حرف)",
      },
    },
    contact: {
      title: "رمز QR لجهة الاتصال",
      fullName: "الاسم الكامل",
      phoneNumber: "رقم الهاتف",
      emailAddress: "عنوان البريد الإلكتروني",
      organization: "المنظمة (اختياري)",
      website: "الموقع الإلكتروني (اختياري)",
      address: "العنوان (اختياري)",
      namePlaceholder: "أحمد محمد",
      phonePlaceholder: "+966 50 123 4567",
      emailPlaceholder: "ahmed@example.com",
      orgPlaceholder: "اسم الشركة",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "شارع الملك فهد 123، الرياض، السعودية",
      helpText: "املأ حقلاً واحداً على الأقل لإنشاء رمز QR لجهة الاتصال",
      tipsTitle: "نصائح لرموز QR لجهات الاتصال:",
      tips: [
        "يجب ملء حقل واحد على الأقل",
        "يمكن أن تتضمن أرقام الهاتف رموز البلدان",
        "ينشئ تنسيق vCard يعمل على جميع الهواتف",
      ],
      validation: {
        nameRequired: "الاسم الكامل مطلوب",
        atLeastOne: "يرجى ملء حقل واحد على الأقل",
        invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
        invalidPhone: "يرجى إدخال رقم هاتف صحيح",
      },
    },
    wifi: {
      title: "رمز QR لـ Wi-Fi",
      networkName: "اسم الشبكة (SSID)",
      password: "كلمة المرور",
      security: "نوع الأمان",
      hidden: "شبكة مخفية",
      networkPlaceholder: "شبكة WiFi الخاصة بي",
      passwordPlaceholder: "wifi_password_123",
      securityOptions: {
        none: "لا يوجد (مفتوح)",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "أنشئ رمز QR للاتصال السهل بـ Wi-Fi",
      tipsTitle: "نصائح لرموز QR لـ Wi-Fi:",
      tips: [
        "اسم الشبكة مطلوب",
        "كلمة المرور اختيارية للشبكات المفتوحة",
        "يعمل تلقائياً مع معظم الأجهزة الحديثة",
      ],
      validation: {
        networkRequired: "اسم الشبكة (SSID) مطلوب",
        passwordRequired: "كلمة المرور مطلوبة للشبكات الآمنة",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "لا توجد بيانات رمز QR",
    downloadButton: "تحميل PNG",
    qrInfo: {
      type: "النوع",
      size: "الحجم",
      errorCorrection: "تصحيح الأخطاء",
    },
  },

  // Footer
  footer: {
    description:
      "مولد رموز QR سريع وسهل. رموز QR احترافية للروابط والنصوص ومعلومات الاتصال وشبكات Wi-Fi.",
    codes: "الرموز",
    cards: "البطاقات",
    settings: "الإعدادات",
    download: "تحميل",
    resources: "الموارد",
    apiReference: "مرجع API",
    examples: "أمثلة",
    faq: "الأسئلة الشائعة",
    links: "الروابط",
    copyright: "© 2025 QR Maker. جميع الحقوق محفوظة.",
    madeWith: "صُنع بـ",
    inTurkey: "في تركيا",
  },

  // Language selector
  language: {
    selectLanguage: "اختر اللغة",
    currentLanguage: "اللغة الحالية: {{language}}",
  },

  // About section
  about: {
    title: "حول مولد رموز QR",
    description:
      "مولد رموز QR حديث وسريع وسهل الاستخدام مبني بأحدث تقنيات الويب.",
    technology: "مبني باستخدام React Router 7 و TypeScript و Tailwind CSS",
    openSource: "مفتوح المصدر ومجاني للاستخدام",
  },
} as const;
