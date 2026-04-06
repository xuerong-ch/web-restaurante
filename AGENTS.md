# AGENTS.md - Restaurante Chino HONG KONG II Website

## Execution & Stack
- **Stack**: Vite + React 18, Tailwind CSS v4, GSAP.
- **Commands**: 
  - `npm install`
  - `npm run dev` (Starts dev server at http://localhost:5173)
  - `npm run build`
  - `npm run lint` (ESLint verification)
- **Testing**: No automated tests are configured. Verify logic and UI changes visually in the browser.

## Toolchain Quirks (CRITICAL)
- **Tailwind CSS v4**: Uses `@tailwindcss/vite` plugin. 
  - Do **NOT** create `postcss.config.js` or `tailwind.config.js`. 
  - Theme colors and custom variables are defined entirely in `src/index.css` via `@theme`. 
  - CSS entry uses `@import "tailwindcss"`, NOT `@tailwind` directives.
- **Windows Module Resolution**: If Vite/Tailwind fails to load dependencies on Windows, run: `Remove-Item -Recurse -Force node_modules; Remove-Item package-lock.json; npm install`

## Architecture & Data Flow
- **No Routing**: All content is rendered as sequential `<section>` elements on a single page. 
- **ScrollSpy Navigation**: Active section tracking uses `IntersectionObserver` (`src/hooks/useScrollSpy.js`). Sidebar navigation uses `element.scrollIntoView`.
- **State Management**: Minimal. Global states (`lang`, `isMobileMenuOpen`) live in `src/App.jsx` and pass down via props. Mobile menu operates as an Off-Canvas overlay triggered by `MobileHeader`.
- **Data Orchestration**:
  - Menu data is loaded from JSON files in `resources/` directly into `App.jsx`.
  - Section ordering is explicitly hardcoded in `App.jsx` (`orderedCategories`: Drinks -> Starters -> Dim Sum -> ...rest).
  - Beverage categories (`white_wine`, `beer`, etc.) are intercepted and dynamically grouped under a single `drinks` section.
  - UI text translations (categories) are mapped in `src/data/categories.json`. Fallback language is always Spanish (`es`).

## Styling & Layout Conventions
- **Colors**: `bg-surface` (cream), `text-primary` (crimson), `text-secondary` (gold). Always ensure WCAG AA contrast ratios.
- **Hero / Cover**: Uses a "Dark Cinematic" approach. Requires an absolute `bg-black/70` overlay over the background image to ensure text legibility (`text-white` or `text-surface` and `drop-shadow-lg`).
- **Menu Items Layout**: Flexbox is used to align prices. The structure is strictly: `[Name (shrink-0)] [Dashed Line (flex-1 border-dashed)] [Price (shrink-0)]` inside a `flex items-center` container.
- **Fonts**: `font-serif` (Noto Serif) for headings, `font-body` (Manrope) for text, `Fjalla One` (inline or custom utility) for the brand title.

## Additional References
- `goal.md` - Project vision (Spanish)
- `progress.md` - Current state and upcoming To-Dos (e.g., GSAP scroll animations are currently pending).
- `gemini.md` - Team roles and the "Zero Assumptions Rule".
- **Git**: Use conventional commits (`feat:`, `fix:`, `style:`, `refactor:`).