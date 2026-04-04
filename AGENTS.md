# AGENTS.md - Chinese Restaurant Website

## Project Overview

This is a **Chinese restaurant website** built as an SPA (Single Page Application) following the "interactive brochure" concept. The goal is a frictionless, visually attractive user experience for menu exploration with scroll-based navigation.

### Key Features
- **Architecture**: SPA with scroll navigation (no page reloads)
- **Navigation**: Fixed sidebar on desktop, hamburger menu on mobile, with Scrollspy
- **Internationalization**: Spanish (ES), English (EN), German (DE) - language selector in sidebar
- **Design**: Traditional Chinese style with crimson red accents, gold details, warm white/cream backgrounds

---

## Build / Lint / Test Commands

### Current Status
This project is in early development. **No build system is configured yet.**

The current `code.html` uses:
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`)
- **Google Fonts**: Noto Serif (headings), Manrope (body)
- **Material Symbols** icons

### When Build Tools Are Added
Update this section with the following commands:

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Run tests
npm test

# Run single test file
npm test -- path/to/test.spec.js
```

### Recommended Setup (Future)
Consider adding:
- **Vite** or **Astro** for build tooling
- **ESLint** + **Prettier** for code formatting
- **TypeScript** for type safety
- **Vitest** for unit tests
- **Playwright** for E2E tests

---

## Project Structure

```
web-restaurante/
├── resources/
│   └── images/              # Food images, logos, etc.
├── goal.md                  # Project vision and specs (Spanish)
├── gemini.md                # Team roles and interaction rules
└── AGENTS.md                # This file
```

### Expected Future Structure
```
web-restaurante/
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable UI components
│   ├── i18n/                # Translation files (es.json, en.json, de.json)
│   ├── layouts/             # Page layouts
│   ├── pages/               # Page sections
│   ├── styles/              # Global styles
│   └── utils/               # Helper functions
├── public/                  # Static files
├── resources/               # Original reference images
└── tests/                   # Test files
```

---

## Code Style Guidelines

### General Principles

1. **Zero Assumptions Rule** (from `gemini.md`)
   - If information is missing or ambiguous, **STOP and ask the user**
   - Never assume implementation details without confirmation

2. **Readability First**
   - Code should be self-explanatory
   - Use descriptive variable/function names
   - Minimize non-essential comments
   - Code should "speak for itself"

3. **Simplicity Over Complexity**
   - Prefer simple solutions over clever ones
   - Avoid over-engineering
   - Keep functions focused and small

---

### HTML

```html
<!-- Use semantic HTML5 elements -->
<section id="starters">
  <header>
    <h2>Category Title</h2>
  </header>
  <article class="menu-item">
    <!-- Content -->
  </article>
</section>

<!-- Use data attributes for i18n -->
<button data-i18n="menu.reservation">Reserva</button>

<!-- Accessibility: always include alt text -->
<img src="..." alt="Description of the image" loading="lazy" />
```

### CSS / Tailwind

```css
/* Use the defined color palette from Tailwind config */
/* Primary colors: crimson red (#6b000e, #960018) */
/* Secondary colors: gold (#735c00, #e9c349) */
/* Surface colors: warm whites and creams (#fbf9f1, #f5f4ec) */

/* Preferred Tailwind classes */
.bg-surface          /* Main background */
.text-primary        /* Crimson accent text */
.text-secondary      /* Gold accent text */
.font-serif          /* Noto Serif - for headings */
.font-body           /* Manrope - for body text */

/* Custom utility classes from the design */
.letter-spacing-tight { letter-spacing: -0.02em; }
.letter-spacing-wide { letter-spacing: 0.1em; }
```

### JavaScript / TypeScript

```typescript
// Use TypeScript when build system is added
// Prefer named exports
export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// Use const over let when possible
const MENU_SECTIONS = ['starters', 'mains', 'desserts'] as const;

// Use descriptive names
const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

// Error handling: throw meaningful errors
function validateLanguage(lang: string): Language {
  const supported = ['es', 'en', 'de'] as const;
  if (!supported.includes(lang as Language)) {
    throw new Error(`Unsupported language: ${lang}. Supported: ${supported.join(', ')}`);
  }
  return lang as Language;
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Files (components) | PascalCase | `MenuItem.vue` |
| Files (utilities) | camelCase | `scrollUtils.ts` |
| CSS classes | kebab-case | `.menu-item` |
| Functions | camelCase | `scrollToSection()` |
| Constants | SCREAMING_SNAKE_CASE | `MENU_SECTIONS` |
| Types/Interfaces | PascalCase | `Language` |

---

## UI/UX Guidelines

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Crimson) | `#6b000e` | Headlines, accents |
| Primary Container | `#960018` | Buttons, highlights |
| Secondary (Gold) | `#735c00` | Prices, decorative |
| Surface (Warm White) | `#fbf9f1` | Background |
| On-Surface | `#1b1c17` | Body text |

### Typography

- **Headings**: Noto Serif (serif, traditional feel)
- **Body**: Manrope (sans-serif, clean and readable)
- **Labels**: Uppercase tracking-widest (0.1em - 0.3em)

### Transitions

```css
/* Preferred transition duration */
transition-all duration-500  /* For major changes */
transition-all duration-700  /* For image effects */
transition-colors            /* For color-only changes */
```

---

## Internationalization (i18n)

### Language Codes
- `es` - Spanish (default)
- `en` - English
- `de` - German

### Translation Structure (Expected)
```json
// i18n/es.json
{
  "nav": {
    "starters": "Entrantes",
    "mains": "Principales",
    "desserts": "Postres"
  },
  "menu": {
    "reservation": "Reserva"
  }
}
```

---

## Git Workflow

### Commit Messages

Use conventional commits:
```
feat: add language selector component
fix: resolve scrollspy navigation issue
style: adjust typography spacing
docs: update AGENTS.md with new commands
refactor: simplify i18n logic
test: add unit tests for scrollUtils
```

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code improvements

---

## Accessibility

1. **Images**: Always include descriptive `alt` attributes
2. **Buttons**: Use semantic `<button>` elements, not `<div>` with click handlers
3. **Navigation**: Ensure keyboard navigation works
4. **Contrast**: Maintain WCAG AA contrast ratios
5. **Focus**: Visible focus states for interactive elements

---

## Testing Strategy (Future)

### Unit Tests (Vitest)
```bash
# Run all tests
npm test

# Run single test file
npm test -- src/utils/scrollUtils.test.ts

# Run tests with coverage
npm test -- --coverage
```

### E2E Tests (Playwright)
```bash
# Run E2E tests
npm run test:e2e

# Run specific test
npm run test:e2e -- tests/navigation.spec.ts
```

---

## Important Notes

1. **Communication Style**: When explaining concepts to the user (Human), use practical analogies and examples
2. **Both Gemini and Code Agent work together**: This project uses two AI assistants working in collaboration
3. **Visual References**: Check `resources/images/` and `resources/restaurante_hongkong_portada_y_men_editorial/` for design reference
4. **Single Page Architecture**: All content should be sections within the same HTML, not separate pages
5. **Mobile-First Responsive**: Check both desktop (256px sidebar) and mobile (hamburger menu) layouts