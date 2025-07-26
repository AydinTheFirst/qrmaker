import type { TranslationSchema } from "./types";

export const zh: TranslationSchema = {
  // Common
  common: {
    generate: "生成",
    clear: "清除",
    download: "下载",
    free: "免费",
    highQuality: "高质量",
    instantDownload: "即时下载",
    fastAndEasy: "快速简单",
    loading: "加载中...",
    error: "错误",
    success: "成功",
    cancel: "取消",
    save: "保存",
    edit: "编辑",
    delete: "删除",
    copy: "复制",
    copied: "已复制！",
  },

  // Hero/Header section
  hero: {
    title: "二维码生成器",
    subtitle:
      "使用我们现代且易于使用的工具为 URL、文本、联系信息和 Wi-Fi 创建二维码。",
    pngDownload: "下载 PNG",
    description: "即时免费生成高质量二维码。支持多种格式和即时下载。",
  },

  // Main navigation tabs
  tabs: {
    url: "网址",
    text: "文本",
    contact: "联系人",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "功能",
    documentation: "文档",
    support: "支持",
  },

  // Forms
  forms: {
    url: {
      title: "网址二维码",
      websiteUrl: "网站网址",
      placeholder: "https://example.com",
      helpText: "输入您网站的完整地址（可以以 https:// 或 http:// 开头）",
      tipsTitle: "网址二维码小贴士：",
      tips: [
        "输入您网站的完整地址",
        "如果未包含，将自动添加 https://",
        "非常适合社交媒体档案、电商网站",
      ],
      validation: {
        required: "网址是必填项",
        invalid: "请输入有效的网址",
      },
    },
    text: {
      title: "文本二维码",
      textContent: "文本内容",
      placeholder: "输入您想要添加到二维码中的文本...",
      helpText: "您可以添加任何文本、消息或信息",
      charactersCount: "{{count}}/500",
      tipsTitle: "文本二维码小贴士：",
      tips: [
        "简短简洁的文本效果最佳",
        "支持特殊字符和表情符号",
        "过长的文本可能会使二维码变得复杂",
      ],
      validation: {
        required: "文本内容是必填项",
        tooLong: "文本过长（最多 500 个字符）",
      },
    },
    contact: {
      title: "联系人二维码",
      fullName: "全名",
      phoneNumber: "电话号码",
      emailAddress: "电子邮箱地址",
      organization: "组织（可选）",
      website: "网站（可选）",
      address: "地址（可选）",
      namePlaceholder: "张三",
      phonePlaceholder: "+86 138-0013-8000",
      emailPlaceholder: "zhang@example.com",
      orgPlaceholder: "公司名称",
      websitePlaceholder: "https://company.com",
      addressPlaceholder: "北京市朝阳区建国路123号",
      helpText: "至少填写一个字段以创建联系人二维码",
      tipsTitle: "联系人二维码小贴士：",
      tips: [
        "至少需要填写一个字段",
        "电话号码可以包含国家代码",
        "创建适用于所有手机的 vCard 格式",
      ],
      validation: {
        nameRequired: "全名是必填项",
        atLeastOne: "请至少填写一个字段",
        invalidEmail: "请输入有效的电子邮箱地址",
        invalidPhone: "请输入有效的电话号码",
      },
    },
    wifi: {
      title: "Wi-Fi 二维码",
      networkName: "网络名称（SSID）",
      password: "密码",
      security: "安全类型",
      hidden: "隐藏网络",
      networkPlaceholder: "我的WiFi网络",
      passwordPlaceholder: "wifi_password_123",
      securityOptions: {
        none: "无（开放）",
        wep: "WEP",
        WPA: "WPA/WPA2",
      },
      helpText: "创建便于 Wi-Fi 连接的二维码",
      tipsTitle: "Wi-Fi 二维码小贴士：",
      tips: [
        "网络名称是必填项",
        "开放网络的密码是可选的",
        "在大多数现代设备上自动工作",
      ],
      validation: {
        networkRequired: "网络名称（SSID）是必填项",
        passwordRequired: "安全网络需要密码",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    noData: "没有二维码数据",
    downloadButton: "下载 PNG",
    qrInfo: {
      type: "类型",
      size: "大小",
      errorCorrection: "错误纠正",
    },
  },

  // Footer
  footer: {
    description:
      "快速简单的二维码生成器。为 URL、文本、联系信息和 Wi-Fi 生成专业二维码。",
    codes: "代码",
    cards: "卡片",
    settings: "设置",
    download: "下载",
    resources: "资源",
    apiReference: "API 参考",
    examples: "示例",
    faq: "常见问题",
    links: "链接",
    copyright: "© 2025 QR Maker. 保留所有权利。",
    madeWith: "制作于",
    inTurkey: "土耳其",
  },

  // Language selector
  language: {
    selectLanguage: "选择语言",
    currentLanguage: "当前语言：{{language}}",
  },

  // About section
  about: {
    title: "关于二维码生成器",
    description: "使用最新网络技术构建的现代、快速且易于使用的二维码生成器。",
    technology: "使用 React Router 7、TypeScript 和 Tailwind CSS 构建",
    openSource: "开源且免费使用",
  },
} as const;
