# Contributing to QR Code Generator

Thank you for contributing to the project! 🎉

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (package manager)
- Git

### Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/qrcode.git
cd qrcode

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173
```

## Development Workflow

### Code Style

This project uses **strict code standards**:

```bash
# Run all checks
pnpm check

# Individual checks
pnpm typecheck  # TypeScript validation
pnpm lint       # ESLint checking
pnpm format     # Prettier formatting
```

### Pre-commit Requirements

All PRs must pass these checks:

- ✅ TypeScript compilation
- ✅ ESLint validation (no errors)
- ✅ Prettier formatting
- ✅ Test coverage (if applicable)

## Project Structure

```
src/
├── components/          # Global reusable components
│   ├── ui/             # ShadCN UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components (Next.js style)
│   ├── page.tsx        # Main QR generator page
│   ├── layout.tsx      # Layout wrapper
│   ├── components/     # Page-specific components
│   └── forms/          # Form components
├── lib/                # Utility functions
└── root.tsx           # App root component
```

## Contributing Guidelines

### 1. Issues

- **Bug Reports**: Include steps to reproduce, expected vs actual behavior
- **Feature Requests**: Describe the use case and proposed solution
- **Questions**: Check existing issues first

### 2. Pull Requests

#### Branch Naming

```
feature/add-svg-export
bugfix/fix-mobile-layout
docs/update-readme
```

#### Commit Messages

```
feat: add SVG export functionality
fix: resolve mobile layout issues
docs: update installation instructions
style: format code with prettier
refactor: extract form validation logic
```

#### PR Requirements

- [ ] Clear description of changes
- [ ] All checks pass (`pnpm check`)
- [ ] Screenshots for UI changes
- [ ] Updated documentation if needed

### 3. Code Standards

#### TypeScript

- Use strict TypeScript settings
- Prefer interfaces over types
- Add JSDoc comments for complex functions
- No `any` types (use `unknown` if needed)

#### React

- Functional components with hooks
- Props interface definitions
- Use ShadCN UI components when possible
- Follow React best practices

#### Styling

- Tailwind CSS classes
- Mobile-first responsive design
- Use CSS variables for theme colors
- Consistent spacing (Tailwind scale)

## Component Guidelines

### Creating New Components

```typescript
// components/ui/NewComponent.tsx
import React from "react";
import { cn } from "~/lib/utils";

interface NewComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function NewComponent({ className, children }: NewComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
}
```

### Form Components

- Use controlled components
- Implement proper validation
- Provide clear error messages
- Follow accessibility guidelines

### Page Components

- Export as default function
- Use TypeScript interfaces for props
- Implement proper error boundaries

## Testing Guidelines

### Manual Testing Checklist

- [ ] All QR code types generate correctly
- [ ] Tab navigation works with URL parameters
- [ ] Download functionality works
- [ ] Mobile responsive design
- [ ] Accessibility compliance
- [ ] Error handling

### Browser Testing

Test on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Release Process

### Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH`
- Breaking changes → Major
- New features → Minor
- Bug fixes → Patch

### Deployment

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview

# Deploy (platform specific)
pnpm deploy
```

## Getting Help

### Resources

- [React Router 7 Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [ShadCN UI Docs](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Contact

- 🐛 **Bugs**: Open an issue
- 💡 **Ideas**: Start a discussion
- ❓ **Questions**: Check existing issues

## Recognition

Contributors will be added to the README.md file. Thank you for making this project better! 🚀

---

**Happy Coding!** 🎊
