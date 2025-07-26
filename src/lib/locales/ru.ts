import type { TranslationSchema } from './types';

export const ru: TranslationSchema = {
  // Common
  common: {
    generate: "Генерировать",
    clear: "Очистить",
    download: "Скачать",
    free: "Бесплатно",
    highQuality: "Высокое качество",
    instantDownload: "Мгновенная загрузка",
    fastAndEasy: "Быстро и просто",
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успех",
    cancel: "Отмена",
    save: "Сохранить",
    edit: "Изменить",
    delete: "Удалить",
    copy: "Копировать",
    copied: "Скопировано!",
  },

  // Hero/Header section
  hero: {
    title: "Генератор QR-кодов",
    subtitle:
      "Создавайте QR-коды для URL-адресов, текста, контактной информации и Wi-Fi с помощью нашего современного и простого в использовании инструмента.",
    pngDownload: "Скачать PNG",
    description:
      "Мгновенно генерируйте высококачественные QR-коды бесплатно. Поддержка множественных форматов и мгновенная загрузка.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Текст",
    contact: "Контакт",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Возможности",
    documentation: "Документация",
    support: "Поддержка",
  },

  // Forms
  forms: {
    url: {
      title: "QR-код URL",
      websiteUrl: "URL веб-сайта",
      placeholder: "https://example.com",
      helpText:
        "Введите полный адрес вашего веб-сайта (может начинаться с https:// или http://)",
      tipsTitle: "Советы для QR-кодов URL:",
      tips: [
        "Введите полный адрес вашего веб-сайта",
        "https:// будет добавлен автоматически, если не включен",
        "Идеально подходит для профилей в соцсетях, сайтов электронной коммерции",
      ],
      validation: {
        required: "URL обязателен",
        invalid: "Пожалуйста, введите действительный URL",
      },
    },
    text: {
      title: "QR-код текста",
      textContent: "Содержимое текста",
      placeholder: "Введите текст, который хотите добавить в QR-код...",
      helpText: "Вы можете добавить любой текст, сообщение или информацию",
      charactersCount: "{{count}}/500",
      tipsTitle: "Советы для QR-кодов текста:",
      tips: [
        "Короткие и лаконичные тексты работают лучше всего",
        "Поддерживаются специальные символы и эмодзи",
        "Очень длинные тексты могут сделать QR-код сложным",
      ],
      validation: {
        required: "Содержимое текста обязательно",
        tooLong: "Текст слишком длинный (максимум 500 символов)",
      },
    },
    contact: {
      title: "QR-код контакта",
      fullName: "Полное имя",
      phoneNumber: "Номер телефона",
      emailAddress: "Адрес электронной почты",
      organization: "Организация (Необязательно)",
      website: "Веб-сайт (Необязательно)",
      address: "Адрес (Необязательно)",
      namePlaceholder: "Иван Иванов",
      phonePlaceholder: "+7 (495) 123-45-67",
      emailPlaceholder: "ivan@example.com",
      orgPlaceholder: "Название компании",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "Главная улица 123, Москва, Россия",
      helpText: "Заполните хотя бы одно поле для создания QR-кода контакта",
      tipsTitle: "Советы для QR-кодов контакта:",
      tips: [
        "Должно быть заполнено хотя бы одно поле",
        "Номера телефонов могут включать коды страны",
        "Создает формат vCard, который работает на всех телефонах",
      ],
      validation: {
        nameRequired: "Полное имя обязательно",
        atLeastOne: "Пожалуйста, заполните хотя бы одно поле",
        invalidEmail: "Пожалуйста, введите действительный адрес электронной почты",
        invalidPhone: "Пожалуйста, введите действительный номер телефона",
      },
    },
    wifi: {
      title: "QR-код Wi-Fi",
      networkName: "Имя сети (SSID)",
      password: "Пароль",
      security: "Тип безопасности",
      hidden: "Скрытая сеть",
      networkPlaceholder: "МояWiFiСеть",
      passwordPlaceholder: "пароль_wifi_123",
      securityOptions: {
        none: "Нет (Открытая)",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "Создайте QR-код для легкого подключения к Wi-Fi",
      tipsTitle: "Советы для QR-кодов Wi-Fi:",
      tips: [
        "Имя сети обязательно",
        "Пароль необязателен для открытых сетей",
        "Работает автоматически с большинством современных устройств",
      ],
      validation: {
        networkRequired: "Имя сети (SSID) обязательно",
        passwordRequired: "Пароль обязателен для защищенных сетей",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "Данные QR-кода недоступны",
    downloadButton: "Скачать PNG",
    qrInfo: {
      type: "Тип",
      size: "Размер",
      errorCorrection: "Исправление ошибок",
    },
  },

  // Footer
  footer: {
    description: "Быстрый и простой генератор QR-кодов. Профессиональные QR-коды для URL, текста, контактной информации и Wi-Fi.",
    codes: "Коды",
    cards: "Карты",
    settings: "Настройки",
    download: "Скачать",
    resources: "Ресурсы",
    apiReference: "Справочник API",
    examples: "Примеры",
    faq: "FAQ",
    links: "Ссылки",
    copyright: "© 2025 QR Maker. Все права защищены.",
    madeWith: "Сделано с",
    inTurkey: "в Турции",
  },

  // Language selector
  language: {
    selectLanguage: "Выбрать язык",
    currentLanguage: "Текущий язык: {{language}}",
  },

  // About section
  about: {
    title: "О генераторе QR-кодов",
    description:
      "Современный, быстрый и простой в использовании генератор QR-кодов, созданный с использованием новейших веб-технологий.",
    technology: "Создан с React Router 7, TypeScript и Tailwind CSS",
    openSource: "Открытый исходный код и бесплатен в использовании",
  },
} as const;
