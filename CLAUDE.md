# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for SCADA Solutions Inc, a company specializing in wind and solar energy SCADA systems, communications, and integration services.

## Development Commands

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Tech Stack

- **Vue 3** with `<script setup>` composition API
- **Vite 7** for build tooling (includes vue-devtools plugin)
- **Tailwind CSS 4** with **daisyUI 5** for styling (corporate theme)
- **Vue Router 5** using hash history (`createWebHashHistory`)
- **Pinia** for state management
- **Font Awesome** for icons (via `@fortawesome/vue-fontawesome`)
- **Axios** for HTTP requests
- **SCSS** for custom styles

## Architecture

### Directory Structure

- `src/views/` - Page components (lazy-loaded via router except Home)
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout wrappers (MainLayout provides Header/Footer)
- `src/composables/` - Vue composables/utilities
- `src/stores/` - Pinia stores
- `src/router/` - Vue Router configuration

### Global Components

These components are registered globally in `main.js` and can be used without importing:
- `ContentLeftSection` - Content section with image on left
- `ContentRightSection` - Content section with image on right
- `ContentFullSection` - Full-width content section
- `ContactButton` - Contact CTA button
- `FontAwesomeIcon` - Font Awesome icon component

### Commonly Used Components

These must be imported in each view:
- `ListItem` - Bulleted list item with chevron icon
- `Gallery` - Image gallery with optional labels (`:labels="true"`)
- `PageHero` - Page header hero section
- `Accordion` - Collapsible content sections

### Static Assets

Images are stored in `public/images/` and referenced by filename only in components (e.g., `image="turbines.webp"`). SVG diagrams are preferred over raster images for technical illustrations.

### Layout Pattern

All routes use `MainLayout` which wraps pages with the site `Header` and `Footer`. Routes are defined as children of the MainLayout route.

## Styling Guidelines

### daisyUI Usage

The project uses daisyUI 5 with Tailwind CSS 4. Key rules:
- Use daisyUI component classes (btn, card, etc.) with Tailwind utilities
- Use daisyUI semantic colors (`primary`, `secondary`, `base-100`, etc.) instead of Tailwind color names for theme compatibility
- No `tailwind.config.js` needed - Tailwind v4 uses CSS-based configuration
- daisyUI is configured in `src/style.scss` with the corporate theme

Reference `.github/instructions/daisyui.instructions.md` for complete daisyUI 5 component documentation.

### Custom Styles

- `.headline` - Uses Noto Serif Georgian font for headings
- `.fixed-bg` - Fixed background image styling
- `.scroll-target` - Anchor offset for fixed header navigation

## Font Awesome Icons

Icons are registered in `main.js`. To use an icon:
1. Import from the appropriate icon package in `main.js`
2. Add to the library with `library.add()`
3. Use `<FontAwesomeIcon :icon="['fas', 'icon-name']" />` in templates

Currently registered: `faBars`, `faPhone`, `faEnvelope`, `faTimes`, `faCircle`, `faChevronRight`, `faLinkedin`

## Content Section Components

The `ContentLeftSection`, `ContentRightSection`, and `ContentFullSection` components share common props:
- `name` - Section identifier
- `id` - Scroll target ID
- `image` - Image filename from `public/images/`
- `title` - Section heading
- `bgClasses` - Background Tailwind classes
- `contentClasses` - Content area Tailwind classes
- `containerClasses` - Container Tailwind classes
- `:button` - Set to `false` to hide contact button
