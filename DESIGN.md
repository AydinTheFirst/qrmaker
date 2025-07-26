# Design System & Guidelines

## Overview

This document outlines the design system, UI/UX guidelines, and visual standards for the QR Code Generator application.

## Design Philosophy

### Core Principles

- **Simplicity First**: Clean, minimal interface that doesn't overwhelm users
- **Accessibility**: WCAG 2.1 AA compliant design for all users
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Performance**: Fast, lightweight interface with smooth interactions
- **Consistency**: Unified design language across all components

### Brand Identity

- **Modern**: Contemporary design with gradient accents
- **Professional**: Clean typography and structured layouts
- **Friendly**: Approachable colors and micro-interactions
- **Trustworthy**: Clear visual hierarchy and reliable UX patterns

## Color System

### Primary Palette

```css
/* Primary Colors */
--blue-500: #3b82f6; /* Primary Blue */
--blue-600: #2563eb; /* Primary Blue Dark */
--purple-500: #8b5cf6; /* Secondary Purple */
--purple-600: #7c3aed; /* Secondary Purple Dark */

/* Gradient */
--gradient-primary: linear-gradient(
  to right,
  var(--blue-500),
  var(--purple-500)
);
--gradient-primary-hover: linear-gradient(
  to right,
  var(--blue-600),
  var(--purple-600)
);
```

### Secondary Palette

```css
/* QR Type Colors */
--green-500: #10b981; /* Text QR */
--orange-500: #f97316; /* Wi-Fi QR */
--yellow-500: #eab308; /* Accent */

/* Status Colors */
--red-500: #ef4444; /* Error */
--emerald-500: #10b981; /* Success */
--amber-500: #f59e0b; /* Warning */
```

### Neutral Palette

```css
/* Light Mode */
--background: #ffffff;
--foreground: #0f172a;
--muted: #f1f5f9;
--muted-foreground: #64748b;
--border: #e2e8f0;
--card: #ffffff;

/* Dark Mode */
--background-dark: #0f172a;
--foreground-dark: #f8fafc;
--muted-dark: #1e293b;
--muted-foreground-dark: #94a3b8;
--border-dark: #334155;
--card-dark: #1e293b;
```

## Typography

### Font Family

```css
font-family:
  "Inter",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

### Type Scale

```css
/* Headlines */
--text-4xl: 2.25rem; /* 36px - Main title */
--text-3xl: 1.875rem; /* 30px - Section titles */
--text-2xl: 1.5rem; /* 24px - Component titles */
--text-xl: 1.25rem; /* 20px - Large labels */
--text-lg: 1.125rem; /* 18px - Card titles */

/* Body Text */
--text-base: 1rem; /* 16px - Default body */
--text-sm: 0.875rem; /* 14px - Small labels */
--text-xs: 0.75rem; /* 12px - Helper text */
```

### Font Weights

```css
--font-normal: 400; /* Regular text */
--font-medium: 500; /* Labels, buttons */
--font-semibold: 600; /* Card titles */
--font-bold: 700; /* Main headlines */
```

## Spacing System

### Base Unit: 4px (0.25rem)

```css
/* Spacing Scale */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
```

### Component Spacing

- **Form Elements**: 1rem (16px) vertical spacing
- **Cards**: 1.5rem (24px) internal padding
- **Sections**: 3rem (48px) vertical margins
- **Grid Gaps**: 1.5rem (24px) for cards, 2rem (32px) for sections

## Layout & Grid

### Container Widths

```css
/* Responsive Containers */
--container-sm: 640px; /* Small screens */
--container-md: 768px; /* Medium screens */
--container-lg: 1024px; /* Large screens */
--container-xl: 1280px; /* Extra large screens */
```

### Grid System

```css
/* Main Layout */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Two-Column Layout (Large Screens) */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Mobile-First Responsive */
@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

## Component Design

### Buttons

#### Primary Button

```css
.btn-primary {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: linear-gradient(to right, #2563eb, #7c3aed);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

#### Secondary Button

```css
.btn-secondary {
  background: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: var(--muted);
  border-color: var(--border);
}
```

### Form Elements

#### Input Fields

```css
.input {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

#### Labels

```css
.label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: 0.5rem;
}
```

### Cards

#### Main Card Container

```css
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

#### Tab Navigation

```css
.tab-container {
  background: var(--muted);
  border-radius: 0.5rem;
  padding: 0.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.tab-active {
  background: linear-gradient(to right, var(--blue-500), var(--purple-500));
  color: white;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
}

.tab-inactive {
  color: var(--muted-foreground);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.tab-inactive:hover {
  background: var(--muted);
  color: var(--foreground);
}
```

## Icons & Graphics

### Icon System

- **Library**: Lucide React
- **Style**: Outlined, consistent stroke width
- **Sizes**: 16px (sm), 20px (md), 24px (lg)
- **Colors**: Match text color or use accent colors

### QR Code Display

```css
.qr-container {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.qr-code {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* xs: 0px - 639px (default) */
/* sm: 640px+ */
@media (min-width: 640px) {
}

/* md: 768px+ */
@media (min-width: 768px) {
}

/* lg: 1024px+ */
@media (min-width: 1024px) {
}

/* xl: 1280px+ */
@media (min-width: 1280px) {
}
```

### Mobile Optimizations

- Touch-friendly button sizes (minimum 44px)
- Simplified navigation for small screens
- Collapsible content sections
- Optimized font sizes for readability

## Animations & Interactions

### Micro-Interactions

```css
/* Smooth Transitions */
.transition-smooth {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Loading States */
.loading-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### Form Feedback

- Success: Green border + checkmark icon
- Error: Red border + error icon
- Loading: Subtle pulse animation
- Focus: Blue glow effect

## Accessibility Guidelines

### Color Contrast

- **AAA Level**: 7:1 for normal text, 4.5:1 for large text
- **Color Independence**: Information not conveyed by color alone
- **Focus Indicators**: Visible focus states for all interactive elements

### Navigation

- **Keyboard Navigation**: Tab order follows logical flow
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Alternative Text**: Descriptive alt text for all images

### Form Accessibility

- **Labels**: All inputs have associated labels
- **Error Messages**: Clear, descriptive error feedback
- **Required Fields**: Properly marked and announced
- **Help Text**: Contextual assistance where needed

## Performance Considerations

### Optimization Strategies

- **Lazy Loading**: Non-critical components load on demand
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Route-based bundle splitting
- **CSS Optimization**: Purged unused styles

### Loading States

- **Skeleton Screens**: For initial page loads
- **Progressive Enhancement**: Core functionality loads first
- **Graceful Degradation**: Fallbacks for JavaScript failures

## Design Tokens

### CSS Custom Properties

```css
:root {
  /* Colors */
  --primary: #3b82f6;
  --secondary: #8b5cf6;

  /* Spacing */
  --space-unit: 0.25rem;

  /* Typography */
  --font-family: "Inter", sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;

  /* Borders */
  --border-radius: 0.5rem;
  --border-width: 1px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

## Component Library Integration

### ShadCN UI Components

- **Button**: Consistent styling across all buttons
- **Input**: Uniform form field appearance
- **Label**: Standardized label styling
- **Card**: Container component for sections
- **Dropdown**: Language selector implementation

### Custom Components

- **QRDisplay**: QR code preview and download
- **LanguageSelector**: Multi-language support
- **TabNavigation**: QR type selection
- **FormComponents**: Type-specific input forms

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintained by**: Development Team
