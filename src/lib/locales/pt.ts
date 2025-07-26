import type { TranslationSchema } from "./types";

export const pt: TranslationSchema = {
  // Common
  common: {
    generate: "Gerar",
    clear: "Limpar",
    download: "Baixar",
    free: "Grátis",
    highQuality: "Alta Qualidade",
    instantDownload: "Download Instantâneo",
    fastAndEasy: "Rápido e Fácil",
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    edit: "Editar",
    delete: "Excluir",
    copy: "Copiar",
    copied: "Copiado!",
  },

  // Hero/Header section
  hero: {
    title: "Gerador de Códigos QR",
    subtitle:
      "Crie códigos QR para URLs, texto, informações de contato e redes Wi-Fi com nossa ferramenta moderna e fácil de usar.",
    pngDownload: "Download PNG",
    description:
      "Gere códigos QR de alta qualidade instantaneamente e gratuitamente. Suporte para múltiplos formatos e download instantâneo.",
  },

  // Main navigation tabs
  tabs: {
    url: "URL",
    text: "Texto",
    contact: "Contato",
    wifi: "Wi-Fi",
  },

  // Navigation menu
  nav: {
    github: "GitHub",
    features: "Recursos",
    documentation: "Documentação",
    support: "Suporte",
  },

  // Forms
  forms: {
    url: {
      title: "Código QR de URL",
      websiteUrl: "URL do Site",
      placeholder: "https://exemplo.com",
      helpText:
        "Digite o endereço completo do seu site (pode começar com https:// ou http://)",
      tipsTitle: "Dicas para Códigos QR de URL:",
      tips: [
        "Digite o endereço completo do seu site",
        "https:// será adicionado automaticamente se não incluído",
        "Perfeito para perfis de redes sociais, sites de e-commerce",
      ],
      validation: {
        required: "URL é obrigatória",
        invalid: "Por favor, digite uma URL válida",
      },
    },
    text: {
      title: "Código QR de Texto",
      textContent: "Conteúdo do Texto",
      placeholder: "Digite o texto que você quer adicionar ao seu código QR...",
      helpText: "Você pode adicionar qualquer texto, mensagem ou informação",
      charactersCount: "{{count}}/500",
      tipsTitle: "Dicas para Códigos QR de Texto:",
      tips: [
        "Textos curtos e concisos funcionam melhor",
        "Caracteres especiais e emojis são suportados",
        "Textos muito longos podem tornar o código QR complexo",
      ],
      validation: {
        required: "Conteúdo do texto é obrigatório",
        tooLong: "Texto muito longo (máximo 500 caracteres)",
      },
    },
    contact: {
      title: "Código QR de Contato",
      fullName: "Nome Completo",
      phoneNumber: "Número de Telefone",
      emailAddress: "Endereço de Email",
      organization: "Organização (Opcional)",
      website: "Site (Opcional)",
      address: "Endereço (Opcional)",
      namePlaceholder: "João Silva",
      phonePlaceholder: "+55 (11) 123-4567",
      emailPlaceholder: "joao@exemplo.com",
      orgPlaceholder: "Nome da Empresa",
      websitePlaceholder: "https://empresa.com",
      addressPlaceholder: "Rua Principal 123, Cidade, País",
      helpText:
        "Preencha pelo menos um campo para criar um código QR de contato",
      tipsTitle: "Dicas para Códigos QR de Contato:",
      tips: [
        "Pelo menos um campo deve ser preenchido",
        "Números de telefone podem incluir códigos de país",
        "Cria um formato vCard que funciona em todos os telefones",
      ],
      validation: {
        nameRequired: "Nome completo é obrigatório",
        atLeastOne: "Por favor, preencha pelo menos um campo",
        invalidEmail: "Por favor, digite um endereço de email válido",
        invalidPhone: "Por favor, digite um número de telefone válido",
      },
    },
    wifi: {
      title: "Código QR Wi-Fi",
      networkName: "Nome da Rede (SSID)",
      password: "Senha",
      security: "Tipo de Segurança",
      securityType: "Tipo de Segurança",
      hidden: "Rede Oculta",
      hiddenNetwork: "Rede Oculta",
      networkPlaceholder: "MinhaRedeWiFi",
      passwordPlaceholder: "senha_wifi_123",
      securityOptions: {
        none: "Nenhuma (Aberta)",
        wep: "WEP",
        wpa: "WPA/WPA2",
        WPA: "WPA/WPA2",
      },
      helpText: "Crie um código QR para conexão Wi-Fi fácil",
      tipsTitle: "Dicas para Códigos QR Wi-Fi:",
      tips: [
        "Nome da rede é obrigatório",
        "Senha é opcional para redes abertas",
        "Funciona automaticamente com a maioria dos dispositivos modernos",
      ],
      validation: {
        networkRequired: "Nome da rede (SSID) é obrigatório",
        passwordRequired: "Senha é obrigatória para redes seguras",
      },
    },
  },

  // QR Display component
  qrDisplay: {
    title: "Pré-visualização do Código QR",
    description: "Seu código QR gerado pronto para escaneamento e download",
    noData: "Nenhum dado de código QR disponível",
    downloadButton: "Baixar PNG",
    preview: "Pré-visualização",
    qrInfo: {
      type: "Tipo",
      size: "Tamanho",
      errorCorrection: "Correção de Erros",
    },
  },

  // Footer
  footer: {
    description:
      "Gerador de códigos QR rápido e fácil. Códigos QR profissionais para URLs, texto, informações de contato e Wi-Fi.",
    codes: "Códigos",
    cards: "Cartões",
    settings: "Configurações",
    download: "Download",
    resources: "Recursos",
    apiReference: "Referência da API",
    examples: "Exemplos",
    faq: "FAQ",
    links: "Links",
    copyright: "© 2025 QR Maker. Todos os direitos reservados.",
    madeWith: "Feito com",
    inTurkey: "na Turquia",
  },

  // Language selector
  language: {
    selectLanguage: "Selecionar Idioma",
    currentLanguage: "Idioma atual: {{language}}",
  },

  // About section
  about: {
    title: "Sobre o Gerador de Códigos QR",
    description:
      "Um gerador de códigos QR moderno, rápido e fácil de usar construído com as mais recentes tecnologias web.",
    technology: "Construído com React Router 7, TypeScript e Tailwind CSS",
    openSource: "Código aberto e gratuito para usar",
  },
} as const;
