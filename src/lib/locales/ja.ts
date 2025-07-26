import type { TranslationSchema } from './types';

export const ja: TranslationSchema = {
  // Common
  common: {
    generate: "生成",
    clear: "クリア",
    download: "ダウンロード",
    free: "無料",
    highQuality: "高品質",
    instantDownload: "瞬時ダウンロード",
    fastAndEasy: "簡単で高速",
    loading: "読み込み中...",
    error: "エラー",
    success: "成功",
    cancel: "キャンセル",
    save: "保存",
    edit: "編集",
    delete: "削除",
    copy: "コピー",
    copied: "コピーしました！",
  },

  // Hero/Header section
  hero: {
    title: "QRコードジェネレーター",
    subtitle:
      "現代的で使いやすいツールで、URL、テキスト、連絡先情報、Wi-Fi用のQRコードを作成します。",
    pngDownload: "PNG ダウンロード",
    description:
      "高品質なQRコードを瞬時に無料で生成します。複数フォーマット対応で瞬時ダウンロード。",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "テキスト",
    contact: "連絡先",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "機能",
    documentation: "ドキュメント",
    support: "サポート",
  },

  // Forms
  forms: {
    url: {
      title: "URL QRコード",
      websiteUrl: "ウェブサイトURL",
      placeholder: "https://example.com",
      helpText:
        "ウェブサイトの完全なアドレスを入力してください（https:// または http:// で始まることがあります）",
      tipsTitle: "URL QRコードのヒント：",
      tips: [
        "ウェブサイトの完全なアドレスを入力してください",
        "https:// が含まれていない場合、自動的に追加されます",
        "ソーシャルメディアプロフィール、Eコマースサイトに最適",
      ],
      validation: {
        required: "URLは必須です",
        invalid: "有効なURLを入力してください",
      },
    },
    text: {
      title: "テキスト QRコード",
      textContent: "テキスト内容",
      placeholder: "QRコードに追加したいテキストを入力してください...",
      helpText: "任意のテキスト、メッセージ、または情報を追加できます",
      charactersCount: "{{count}}/500",
      tipsTitle: "テキスト QRコードのヒント：",
      tips: [
        "短くて簡潔なテキストが最も効果的です",
        "特殊文字と絵文字がサポートされています",
        "非常に長いテキストはQRコードを複雑にする可能性があります",
      ],
      validation: {
        required: "テキスト内容は必須です",
        tooLong: "テキストが長すぎます（最大500文字）",
      },
    },
    contact: {
      title: "連絡先 QRコード",
      fullName: "フルネーム",
      phoneNumber: "電話番号",
      emailAddress: "メールアドレス",
      organization: "組織（オプション）",
      website: "ウェブサイト（オプション）",
      address: "住所（オプション）",
      namePlaceholder: "田中太郎",
      phonePlaceholder: "+81 3-1234-5678",
      emailPlaceholder: "tanaka@example.com",
      orgPlaceholder: "会社名",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "東京都新宿区本町1-2-3",
      helpText: "連絡先QRコードを作成するには、少なくとも1つのフィールドを入力してください",
      tipsTitle: "連絡先 QRコードのヒント：",
      tips: [
        "少なくとも1つのフィールドを入力する必要があります",
        "電話番号には国番号を含めることができます",
        "すべての電話で動作するvCard形式を作成します",
      ],
      validation: {
        nameRequired: "フルネームは必須です",
        atLeastOne: "少なくとも1つのフィールドを入力してください",
        invalidEmail: "有効なメールアドレスを入力してください",
        invalidPhone: "有効な電話番号を入力してください",
      },
    },
    wifi: {
      title: "Wi-Fi QRコード",
      networkName: "ネットワーク名（SSID）",
      password: "パスワード",
      security: "セキュリティタイプ",
      hidden: "隠しネットワーク",
      networkPlaceholder: "私のWiFiネットワーク",
      passwordPlaceholder: "wifi_password_123",
      securityOptions: {
        none: "なし（オープン）",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "簡単なWi-Fi接続用のQRコードを作成します",
      tipsTitle: "Wi-Fi QRコードのヒント：",
      tips: [
        "ネットワーク名は必須です",
        "パスワードはオープンネットワークではオプションです",
        "ほとんどの現代のデバイスで自動的に動作します",
      ],
      validation: {
        networkRequired: "ネットワーク名（SSID）は必須です",
        passwordRequired: "セキュアネットワークにはパスワードが必要です",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "QRコードデータがありません",
    downloadButton: "PNG ダウンロード",
    qrInfo: {
      type: "タイプ",
      size: "サイズ",
      errorCorrection: "エラー訂正",
    },
  },

  // Footer
  footer: {
    description: "高速で簡単なQRコードジェネレーター。URL、テキスト、連絡先情報、Wi-Fi用のプロフェッショナルなQRコード。",
    codes: "コード",
    cards: "カード",
    settings: "設定",
    download: "ダウンロード",
    resources: "リソース",
    apiReference: "API リファレンス",
    examples: "例",
    faq: "FAQ",
    links: "リンク",
    copyright: "© 2025 QR Maker. All rights reserved.",
    madeWith: "Made with",
    inTurkey: "in Turkey",
  },

  // Language selector
  language: {
    selectLanguage: "言語を選択",
    currentLanguage: "現在の言語：{{language}}",
  },

  // About section
  about: {
    title: "QRコードジェネレーターについて",
    description:
      "最新のウェブ技術で構築された、現代的で高速、使いやすいQRコードジェネレーター。",
    technology: "React Router 7、TypeScript、Tailwind CSS で構築",
    openSource: "オープンソースで無料利用可能",
  },
} as const;
