# 🚀 QR Code Generator

A modern, fast, and user-friendly QR code generator built with React Router 7, ShadCN UI, and Tailwind CSS. Create QR codes for URLs, text, contact information, and Wi-Fi networks with ease.

![QR Code Generator](https://img.shields.io/badge/QR_Code_Generator-v1.0.0-blue?style=for-the-badge)
![React Router 7](https://img.shields.io/badge/React_Router-7-blue?style=for-the-badge&logo=react-router)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎯 Core Features

- **Multiple QR Types**: URL, Text, Contact (vCard), Wi-Fi
- **Real-time Preview**: See your QR code as you type
- **Instant Download**: Download as high-quality PNG
- **Responsive Design**: Works perfectly on all devices
- **Multi-language**: English and Turkish support with i18n

### �️ Technical Features

- **Modern Stack**: React Router 7 + TypeScript + Tailwind CSS v4
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Performance**: Optimized for speed and efficiency
- **Accessibility**: WCAG 2.1 AA compliant
- **Code Quality**: ESLint + Prettier + Perfectionist for clean code

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm/yarn
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/AydinTheFirst/qrmaker.git
cd qrmaker

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build the application
pnpm build

# Preview production build
pnpm preview

# Run all quality checks
pnpm check
```

## 📱 Usage

### URL QR Code

1. Select the "URL" tab
2. Enter your website URL (https:// is added automatically)
3. Preview and download your QR code

### Text QR Code

1. Select the "Text" tab
2. Enter any text or message (up to 500 characters)
3. Generate and download

### Contact QR Code

1. Select the "Contact" tab
2. Fill in contact details (name, phone, email, organization)
3. Creates vCard format QR code compatible with all devices

### Wi-Fi QR Code

1. Select the "Wi-Fi" tab
2. Enter network name (SSID) and password
3. Choose security type (WPA/WPA2, WEP, or None)
4. Generate QR code for easy network sharing

## 🌐 Multi-language Support

The application supports multiple languages with automatic detection:

- 🇺🇸 **English** (default)
- 🇹🇷 **Turkish** (Türkçe)

Language is automatically detected from browser settings and can be changed using the language selector in the navigation bar.

## 🛠️ Technology Stack

### Frontend Framework

- **React 19**: Latest React with concurrent features
- **React Router 7**: Modern routing with file-based routing
- **TypeScript**: Full type safety and developer experience

### Styling & UI

- **Tailwind CSS v4**: Utility-first CSS framework
- **ShadCN UI**: Beautiful, accessible component library
- **Lucide React**: Comprehensive icon library

### Development Tools

- **Vite**: Lightning-fast build tool and dev server
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting with Tailwind plugin
- **Perfectionist**: Import sorting and organization

### Internationalization

- **react-i18next**: React integration for i18next
- **i18next**: Powerful internationalization framework
- **Language Detection**: Automatic browser language detection

## 📋 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm typecheck        # TypeScript type checking
pnpm lint             # ESLint checking
pnpm format           # Format with Prettier
pnpm check            # Run all checks (typecheck + lint + format)
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # ShadCN UI components
│   ├── Navbar.tsx      # Navigation with language selector
│   ├── Footer.tsx      # Footer component
│   └── LanguageSelector.tsx  # Language switching
├── pages/              # Page components (React Router 7)
│   ├── page.tsx        # Main QR generator page
│   ├── layout.tsx      # Layout wrapper
│   ├── components/     # Page-specific components
│   │   └── QRDisplay.tsx    # QR code preview & download
│   └── forms/          # QR type forms
│       ├── UrlForm.tsx      # URL input form
│       ├── TextForm.tsx     # Text input form
│       ├── ContactForm.tsx  # Contact details form
│       └── WifiForm.tsx     # Wi-Fi credentials form
├── lib/                # Utilities and configuration
│   ├── utils.ts        # Helper functions
│   └── i18n.ts         # Internationalization setup
├── app.css            # Global styles and Tailwind imports
└── root.tsx           # App root component
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm check` to ensure quality
5. Submit a Pull Request

For detailed development workflow, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📄 Documentation

- **[Requirements](./REQUIREMENTS.md)**: Project requirements and specifications
- **[Contributing](./CONTRIBUTING.md)**: Development workflow and guidelines
- **[Tasks](./TASKS.md)**: Project roadmap and task management
- **[Design](./DESIGN.md)**: Design system and UI guidelines

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/qrcode/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/qrcode/discussions)

---

<div align="center">

**Made with ❤️ using React Router 7, TypeScript, and Tailwind CSS**

⭐ Star this repo if you find it helpful!

</div>
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
