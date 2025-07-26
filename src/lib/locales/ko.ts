import type { TranslationSchema } from "./types";

export const ko: TranslationSchema = {
  // Common
  common: {
    generate: "생성",
    clear: "지우기",
    download: "다운로드",
    free: "무료",
    highQuality: "고품질",
    instantDownload: "즉시 다운로드",
    fastAndEasy: "빠르고 쉬운",
    loading: "로딩 중...",
    error: "오류",
    success: "성공",
    cancel: "취소",
    save: "저장",
    edit: "편집",
    delete: "삭제",
    copy: "복사",
    copied: "복사됨!",
  },

  // Hero/Header section
  hero: {
    title: "QR 코드 생성기",
    subtitle:
      "현대적이고 사용하기 쉬운 도구로 URL, 텍스트, 연락처 정보 및 Wi-Fi용 QR 코드를 만들어보세요.",
    pngDownload: "PNG 다운로드",
    description:
      "고품질 QR 코드를 즉시 무료로 생성하세요. 다중 형식 지원과 즉시 다운로드 기능.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "텍스트",
    contact: "연락처",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "기능",
    documentation: "문서",
    support: "지원",
  },

  // Forms
  forms: {
    url: {
      title: "URL QR 코드",
      websiteUrl: "웹사이트 URL",
      placeholder: "https://example.com",
      helpText:
        "웹사이트의 전체 주소를 입력하세요 (https:// 또는 http://로 시작할 수 있습니다)",
      tipsTitle: "URL QR 코드 팁:",
      tips: [
        "웹사이트의 전체 주소를 입력하세요",
        "포함되지 않은 경우 https://가 자동으로 추가됩니다",
        "소셜 미디어 프로필, 전자상거래 사이트에 완벽합니다",
      ],
      validation: {
        required: "URL은 필수입니다",
        invalid: "유효한 URL을 입력해주세요",
      },
    },
    text: {
      title: "텍스트 QR 코드",
      textContent: "텍스트 내용",
      placeholder: "QR 코드에 추가하고 싶은 텍스트를 입력하세요...",
      helpText: "텍스트, 메시지 또는 정보를 추가할 수 있습니다",
      charactersCount: "{{count}}/500",
      tipsTitle: "텍스트 QR 코드 팁:",
      tips: [
        "짧고 간결한 텍스트가 가장 잘 작동합니다",
        "특수 문자와 이모지가 지원됩니다",
        "너무 긴 텍스트는 QR 코드를 복잡하게 만들 수 있습니다",
      ],
      validation: {
        required: "텍스트 내용은 필수입니다",
        tooLong: "텍스트가 너무 깁니다 (최대 500자)",
      },
    },
    contact: {
      title: "연락처 QR 코드",
      fullName: "전체 이름",
      phoneNumber: "전화번호",
      emailAddress: "이메일 주소",
      organization: "조직 (선택사항)",
      website: "웹사이트 (선택사항)",
      address: "주소 (선택사항)",
      namePlaceholder: "홍길동",
      phonePlaceholder: "+82 10-1234-5678",
      emailPlaceholder: "hong@example.com",
      orgPlaceholder: "회사명",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "서울특별시 강남구 테헤란로 123",
      helpText: "연락처 QR 코드를 만들려면 최소 하나의 필드를 채워주세요",
      tipsTitle: "연락처 QR 코드 팁:",
      tips: [
        "최소 하나의 필드는 채워야 합니다",
        "전화번호에는 국가 코드가 포함될 수 있습니다",
        "모든 전화에서 작동하는 vCard 형식을 만듭니다",
      ],
      validation: {
        nameRequired: "전체 이름은 필수입니다",
        atLeastOne: "최소 하나의 필드를 채워주세요",
        invalidEmail: "유효한 이메일 주소를 입력해주세요",
        invalidPhone: "유효한 전화번호를 입력해주세요",
      },
    },
    wifi: {
      title: "Wi-Fi QR 코드",
      networkName: "네트워크 이름 (SSID)",
      password: "비밀번호",
      security: "보안 유형",
      securityType: "보안 유형",
      hidden: "숨겨진 네트워크",
      hiddenNetwork: "숨겨진 네트워크",
      networkPlaceholder: "내WiFi네트워크",
      passwordPlaceholder: "wifi_password_123",
      securityOptions: {
        none: "없음 (오픈)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        WPA: "WPA/WPA2",
      },
      helpText: "쉬운 Wi-Fi 연결을 위한 QR 코드를 만드세요",
      tipsTitle: "Wi-Fi QR 코드 팁:",
      tips: [
        "네트워크 이름은 필수입니다",
        "오픈 네트워크의 경우 비밀번호는 선택사항입니다",
        "대부분의 현대 기기에서 자동으로 작동합니다",
      ],
      validation: {
        networkRequired: "네트워크 이름 (SSID)은 필수입니다",
        passwordRequired: "보안 네트워크에는 비밀번호가 필요합니다",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    title: "QR 코드 미리보기",
    description: "생성된 QR 코드가 스캔 및 다운로드 준비가 완료되었습니다",
    noData: "QR 코드 데이터가 없습니다",
    downloadButton: "PNG 다운로드",
    preview: "미리보기",
    qrInfo: {
      type: "유형",
      size: "크기",
      errorCorrection: "오류 수정",
    },
  },

  // Footer
  footer: {
    description:
      "빠르고 쉬운 QR 코드 생성기. URL, 텍스트, 연락처 정보 및 Wi-Fi용 전문 QR 코드.",
    codes: "코드",
    cards: "카드",
    settings: "설정",
    download: "다운로드",
    resources: "리소스",
    apiReference: "API 참조",
    examples: "예제",
    faq: "FAQ",
    links: "링크",
    copyright: "© 2025 QR Maker. All rights reserved.",
    madeWith: "Made with",
    inTurkey: "in Turkey",
  },

  // Language selector
  language: {
    selectLanguage: "언어 선택",
    currentLanguage: "현재 언어: {{language}}",
  },

  // About section
  about: {
    title: "QR 코드 생성기 소개",
    description:
      "최신 웹 기술로 구축된 현대적이고 빠르며 사용하기 쉬운 QR 코드 생성기입니다.",
    technology: "React Router 7, TypeScript, Tailwind CSS로 구축",
    openSource: "오픈 소스이며 무료로 사용 가능",
  },
} as const;
