# Germán David Alvarez Portfolio — Project Overview

## Purpose and scope
- Single-page portfolio plus project detail views.
- Showcases UX/product design work across 8020REI, Habi, and freelance case studies.
- Built to communicate design thinking, outcomes, and visual work, not to serve as a product app.

## Tech stack
- Vite + React 19 + TypeScript.
- React Router (HashRouter) for client-side navigation.
- Framer Motion for page transitions and scroll-based reveal animations.
- Tailwind CSS via CDN (utility classes in JSX, no local Tailwind build step).
- Lucide icons.

## Runtime structure
- Entry point: `index.html` loads fonts, Tailwind CDN, and theme bootstrap.
- React entry: `index.tsx` mounts `App`.
- Main router: `App.tsx` uses `HashRouter` with routes for home and project detail pages.
- Global UI: `CursorGlow` plus a fixed background layer.

## Routing and navigation
- Routes:
  - `/` -> `Home` (`pages/Home.tsx`)
  - `/project/:id` -> `ProjectDetail` (`pages/ProjectDetail.tsx`)
- Scroll restoration:
  - `ScrollManager` caches scroll positions on navigation.
  - Home page uses `sessionStorage` to return to the previously hovered/selected project.
- HashRouter chosen for static hosting compatibility.

## Content model
All content is sourced from `constants.ts` and typed in `types.ts`.

- `PROJECTS` contains all project case studies.
  - Each project includes: title, subtitle, category, type, role, duration, tools, tags, narrative, images.
  - Narrative sections: introduction, role, challenge (pain points, constraints, insights), approach, outcome.
- `EXPERIENCE` is the professional history list.
- `SKILLS` is grouped expertise and tooling.

## Pages
### Home (`pages/Home.tsx`)
Sections:
- Hero: rotating “Designing and building …” titles with timed animation.
- About: summary + education.
- Experience: expandable cards per role.
- Expertise: skill groups as chips.
- Selected Work: categorized list with active preview image on desktop.
- CTA: Calendly + WhatsApp links.
- Footer: attribution and copyright.

Behavioral highlights:
- Work list categories sorted by explicit order arrays.
- Project hover/focus changes the sticky preview image on desktop.
- Smooth scroll buttons for About/Work/CTA.

### Project Detail (`pages/ProjectDetail.tsx`)
Content layout:
- Header with category, type, title, and intro summary.
- Role: responsibilities, duration, tools.
- Challenge & Discovery: pain points, constraints, insights.
- Approach and Outcome lists.
- Image rail on desktop; stacked images on mobile.

Case study extras:
- “NowApp” (`freelance-1`) includes a PDF research document link from `assets/docs/nowapp-research.pdf`.

## Components
- `NavBar` (`components/NavBar.tsx`)
  - Brand mark on home.
  - Back button on detail pages.
  - Theme toggle stored in `localStorage`.
  - External links (LinkedIn, email).
- `ScrollReveal` (`components/ScrollReveal.tsx`)
  - Reusable motion wrapper for staggered reveal.
- `CursorGlow` (`components/CursorGlow.tsx`)
  - Custom pointer glow and dot that follows the cursor.
  - Disabled for reduced-motion or coarse pointers.
- `ProjectCard` exists but is not used on the current pages.

## Styling and design system
- Tailwind utility classes across all JSX.
- Custom CSS in `index.css`:
  - CSS variables for light/dark theming.
  - Global selection colors, cursor glow, and hover effects.
  - Light-theme overrides for Tailwind color classes.
- `index.html` contains inline CSS for background and custom scrollbars.

Typography:
- Google Fonts: Inter (sans) and JetBrains Mono (mono).

Theme:
- `data-theme` on `html` toggles light/dark.
- Theme initialized in `index.html` before React mounts.

## Motion and interaction
- Global page fade via `AnimatePresence` in `App.tsx`.
- Scroll-based reveal animations via `ScrollReveal`.
- Hero title rotation on a 3.5s interval with blur/slide transitions.
- Custom cursor glow that reacts to elements with `.glow-reactive`.

## Assets
- Project images in `assets/projects/*`.
- Case study PDF in `assets/docs/nowapp-research.pdf`.
- Some projects use external Unsplash URLs for placeholder imagery.

## Build and run
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Deployment model
- Static Vite build output to `dist`.
- Hash-based routing makes the site friendly to static hosting.

## Data update workflow
To update portfolio content:
- Edit project content in `constants.ts`.
- Add or replace images in `assets/projects/`.
- Update resume/experience in `EXPERIENCE`.
- Update skill groups in `SKILLS`.

## Notable characteristics
- Data-driven content with strict typing.
- Strong focus on narrative framing (problem, approach, outcome).
- High-contrast visual style with optional light theme.
- Motion used for hierarchy and pacing, not micro-interactions.
- Reduced motion and coarse pointer detection for accessibility.

## Known constraints
- Tailwind is loaded from CDN; there is no local Tailwind build step.
- `ProjectCard` component is present but unused in the current layout.
