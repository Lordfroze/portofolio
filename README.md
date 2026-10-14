# Portfolio — Yoga | Programmer & Agribusiness

Personal portfolio website showcasing my work as a programmer and agribusiness practitioner. Built with modern web technologies focusing on performance, accessibility, and clean design.

**Concept:** Technology meets Agriculture — combining digital solutions with real-world farming experience.

## 🚀 Quick Start

```bash
# Clone and navigate
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (static export ready) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Fonts:** Inter (UI), JetBrains Mono (Code) via `next/font`
- **Code Quality:** ESLint + TypeScript
- **Deployment:** Vercel (recommended), any Node.js host

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles, Tailwind imports, animations
│   ├── layout.tsx               # Root layout with metadata, fonts, providers
│   └── page.tsx                 # Homepage composing all sections
├── components/
│   ├── sections/                # Page sections (each self-contained)
│   │   ├── Navbar.tsx           # Sticky nav, mobile hamburger, scroll effects
│   │   ├── Hero.tsx             # Headline, CTAs, animated background visual
│   │   ├── About.tsx            # Personal story, experience cards, values
│   │   ├── Projects.tsx         # Featured projects grid with tech badges
│   │   ├── Agribusiness.tsx     # Farming activities, experiments, tech ideas
│   │   ├── Skills.tsx           # Categorized skills with proficiency bars
│   │   ├── Approach.tsx         # 5-step methodology cards
│   │   ├── Contact.tsx          # Contact form, social links, direct info
│   │   └── Footer.tsx           # Navigation, copyright, legal links
│   └── ui/                      # Reusable UI primitives
│       ├── Button.tsx           # Polymorphic (button/a), variants, loading
│       ├── Card.tsx             # Card, Header, Title, Description, Content, Footer
│       ├── Badge.tsx            # Status/tech badges (success/warning/info)
│       ├── Icon.tsx             # Type-safe Lucide icon wrapper
│       └── Section.tsx          # Section wrapper with size/background variants
├── data/                        # 🎯 Separated data from UI (easy to customize)
│   ├── projects.ts              # Portfolio projects with metadata
│   ├── skills.ts                # Skills categories, proficiency levels
│   └── site.ts                  # Site config, social links, SEO metadata
├── lib/
│   └── utils.ts                 # cn() class merger, formatYear, slugify
├── public/
│   ├── images/                  # Project images, OG image, farming photos
│   │   ├── kebunkita.svg
│   │   ├── personal-website.svg
│   │   ├── mobile-app.svg
│   │   ├── api-backend.svg
│   │   ├── farming-vegetables.svg
│   │   ├── farming-business.svg
│   │   ├── farming-fertilizer.svg
│   │   ├── farming-tech.svg
│   │   └── og-image.svg
│   └── icons/                   # PWA icons (maskable)
│       ├── icon-192.svg
│       └── icon-512.svg
├── tailwind.config.js           # Custom theme (charcoal + forest palette)
├── tsconfig.json                # Strict TypeScript config
├── package.json
├── .eslintrc.js                 # ESLint with TypeScript support
├── next.config.js               # Next.js config (image optimization)
├── next-env.d.ts
├── .gitignore
└── README.md
```

## 🎨 Design System

### Colors (Tailwind Config)

| Palette | Usage |
|---------|-------|
| `charcoal-50` to `charcoal-950` | Primary neutral scale (dark theme base) |
| `forest-50` to `forest-950` | Accent green (agriculture theme) |

### Typography

- **UI Font:** Inter (via `next/font/google`)
- **Code Font:** JetBrains Mono (via `next/font/google`)

### Spacing & Animations

Custom animations in `tailwind.config.js`:
- `fade-in`, `slide-up`, `slide-in-left`, `slide-in-right`
- `pulse-soft` for subtle breathing effects
- Respects `prefers-reduced-motion`

## 📄 Sections Overview

| Section | ID | Description |
|---------|-----|-------------|
| **Navbar** | — | Sticky, scroll-aware, mobile hamburger, social links |
| **Hero** | `#home` | Headline "Building Digital Solutions, Growing Real-World Businesses", dual CTAs, animated visual |
| **About** | `#about` | Personal narrative, 4 experience cards, 3 core values |
| **Projects** | `#projects` | 4 featured projects (KebunKita, Personal Website, Mobile App, API/Backend) |
| **Agribusiness** | `#agribusiness` | 4 farming activities + 5 digitalization ideas |
| **Skills** | `#skills` | 4 categories (Backend, Frontend, Tools, Agribusiness) with proficiency |
| **Approach** | `#approach` | 5-step methodology: Understand → Practical → Iterative → Right Tool → Learn |
| **Contact** | `#contact` | Contact cards, Formspree-ready form, social links |
| **Footer** | — | Navigation, projects, contact, copyright (dynamic year) |

## 🔧 Customization Guide

### 1. Personal Information (`data/site.ts`)

```typescript
export const siteConfig = {
  name: 'Portfolio',
  title: 'Your Name — Programmer & Agribusiness',
  description: 'Your tagline here...',
  url: 'https://yourdomain.dev',
  ogImage: '/images/og-image.svg',
  author: 'Your Name',
  keywords: ['your', 'keywords', 'here'],
};

export const socialLinks = [
  { id: 'email', name: 'Email', url: 'mailto:you@domain.com', icon: 'Mail', label: 'Email me' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/yourusername', icon: 'Github', label: 'GitHub' },
  // ... add/remove as needed
];
```

### 2. Projects (`data/projects.ts`)

```typescript
export const projects: Project[] = [
  {
    id: 'my-project',
    name: 'Project Name',
    description: 'What it does...',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/my-project.png',        // Add real screenshot
    liveDemo: 'https://demo.com',           // Or undefined
    sourceCode: 'https://github.com/...',   // Or undefined
    status: 'Completed',                    // 'In Progress' | 'Planned'
    category: 'web',                        // 'web' | 'mobile' | 'api' | 'agribusiness'
    featured: true,
  },
];
```

### 3. Skills (`data/skills.ts`)

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'your-category',
    title: 'Category Name',
    icon: 'IconName',  // Must match Lucide icon name (PascalCase)
    skills: [
      { name: 'Technology', level: 'Advanced', description: 'Optional context' },
    ],
  },
];
```

### 4. Images

Replace placeholder SVGs in `public/images/` with real assets:
- `og-image.svg` → 1200×630 PNG/JPG for social sharing
- `kebunkita.svg` → Project screenshot (800×450 recommended)
- `farming-*.svg` → Real farm photos (optional)

### 5. Theme Colors (`tailwind.config.js`)

```javascript
colors: {
  charcoal: { ... },  // Modify neutral scale
  forest: { ... },    // Modify accent green
},
```

### 6. Favicon & PWA Icons

Replace `public/favicon.svg`, `public/icons/icon-192.svg`, `public/icons/icon-512.svg` with your brand.

## ♿ Accessibility

- ✅ Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation (focus-visible rings)
- ✅ Color contrast (WCAG AA)
- ✅ `prefers-reduced-motion` respected
- ✅ Alt text for all images
- ✅ Form labels and validation

## ⚡ Performance

- Static generation (no server needed)
- Next.js Image optimization (when using real images)
- Font optimization with `next/font` (self-hosted, no layout shift)
- Code splitting by route
- Minimal dependencies (~100KB First Load JS)
- No third-party analytics/tracking by default

## 🔍 SEO

- Dynamic metadata via `metadata` export in `layout.tsx`
- Open Graph + Twitter Card tags
- Structured data ready (add JSON-LD if needed)
- Semantic heading hierarchy (h1 → h2 → h3)
- Sitemap/robots.txt: add `next-sitemap` package if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy — zero config required

```bash
# Or deploy via CLI
npx vercel --prod
```

### Other Platforms

```bash
npm run build
npm run start
```

Set `NODE_ENV=production`. Ensure Node.js 18.17+.

### Docker (Optional)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## 📝 License

MIT License — feel free to use as a template for your own portfolio.

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by [Lucide](https://lucide.dev/)
- Fonts by Google Fonts (Inter, JetBrains Mono)
- Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/)

---

## 📋 Implementation Checklist (Completed)

- [x] Next.js 14 App Router with TypeScript
- [x] Tailwind CSS with custom design system
- [x] Responsive Navbar with mobile menu
- [x] Hero section with animated background
- [x] About section with personal story
- [x] Projects showcase with status badges
- [x] Agribusiness section with farming activities
- [x] Skills with proficiency visualization
- [x] Approach methodology section
- [x] Contact form + social links
- [x] Footer with dynamic copyright
- [x] SEO metadata (Open Graph, Twitter)
- [x] PWA manifest + icons
- [x] ESLint + TypeScript strict mode
- [x] Build passes with no errors
- [x] Development server runs successfully

**Status: ✅ Production Ready**