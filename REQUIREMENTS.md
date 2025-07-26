# Requirements

## Project Overview

QR Code Generator - Modern QR code generation app built with React Router 7.

## Functional Requirements

### Core Features

- [ ] QR code generation (URL, Text, Contact, Wi-Fi)
- [ ] Tab-based navigation with URL parameters (?tab=url)
- [ ] Real-time QR code preview
- [ ] PNG format QR code download
- [ ] Responsive design (mobile-first)

### QR Code Types

#### 1. URL QR Code

- URL input and validation
- Automatic HTTP/HTTPS addition
- QR code generation

#### 2. Text QR Code

- Free text input
- Long text support
- QR code generation

#### 3. Contact QR Code (vCard)

- Name, phone, email, organization fields
- MECARD format QR code generation
- Optional fields

#### 4. Wi-Fi QR Code

- SSID, password, security type
- Hidden network support
- WIFI format QR code generation

## Technical Requirements

### Technology Stack

- **Frontend Framework**: React 19+ with TypeScript
- **Routing**: React Router 7 (Next.js style routing)
- **Styling**: Tailwind CSS v4 + ShadCN UI
- **QR Generation**: qrcode.react library
- **Build Tool**: Vite
- **Package Manager**: pnpm

### Code Quality

- **ESLint**: TypeScript ESLint + Perfectionist plugin
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Strict mode enabled
- **Git Hooks**: Pre-commit formatting/linting

### Performance Requirements

- Fast initial load (< 2s)
- Real-time QR generation (< 100ms)
- Mobile responsive design
- SEO friendly structure

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Non-Functional Requirements

### Usability

- Intuitive user interface
- Clear error messages
- Accessible design (WCAG 2.1 AA)
- English language interface

### Security

- Input validation and sanitization
- No sensitive data storage
- Client-side only processing

### Maintainability

- Modular component structure
- Clear code documentation
- Consistent coding standards
- Type-safe development

## Future Enhancements (Nice to Have)

- [ ] QR code scanning (camera-based)
- [ ] Batch QR code generation
- [ ] QR code history
- [ ] Custom logo embedding
- [ ] Color customization
- [ ] SVG export
- [ ] Multi-language support
- [ ] PWA features

## Success Criteria

- ✅ All QR code types working
- ✅ URL-based tab navigation
- ✅ Mobile responsive
- ✅ PNG download functionality
- ✅ Type-safe codebase
- ✅ Clean code architecture
