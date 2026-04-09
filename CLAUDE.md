# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build → dist/
npm run preview   # serve the dist/ build locally
```

No test runner is configured. There is no lint script.

## Architecture

This is a static portfolio site — Vite + React 19 + TypeScript. Full project context is in [PORTFOLIO.md](PORTFOLIO.md).

**Key architectural decisions:**
- **Tailwind via CDN** — no local Tailwind build step, no `tailwind.config`. Utility classes work at runtime.
- **HashRouter** — all navigation uses hash-based URLs (`/#/project/:id`) for static hosting compatibility.
- **All content in `constants.ts`** — projects, experience, and skills are plain TypeScript arrays typed by `types.ts`. Updating content = editing `constants.ts`.
- **`@` path alias** resolves to the repo root (configured in both `vite.config.ts` and `tsconfig.json`).

**Data flow:**
1. `constants.ts` → typed data (projects, experience, skills)
2. `App.tsx` → `HashRouter` with two routes: `/` (Home) and `/project/:id` (ProjectDetail)
3. `pages/Home.tsx` reads all constants and renders the full single-page layout
4. `pages/ProjectDetail.tsx` looks up a project by `id` from `PROJECTS` in constants

**Styling:**
- Global CSS variables for light/dark theming live in `index.css`
- Theme toggled via `data-theme` attribute on `<html>`, initialized in `index.html` before React mounts (avoids flash)
- Elements with `.glow-reactive` class get the cursor glow effect from `CursorGlow.tsx`

**Unused code:**
- `ProjectCard.tsx` is present but not used in any current page
- `vite.config.ts` defines `GEMINI_API_KEY` env vars — these are scaffolding remnants and not used by the portfolio
