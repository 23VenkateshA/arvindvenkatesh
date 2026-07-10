# Lessons Learned — Portfolio Rebuild

One architectural decision or lesson per entry, newest first.

## New app lives in `portfolio/`, old static site untouched
The repo root was mid-rebase with a merge conflict in the old static `index.html`. The React rebuild was scaffolded in `portfolio/` (Vite + React 19 + Tailwind v4 + Framer Motion) so the git state and legacy site stay intact until the rebase is resolved and the old files are retired.

## Tailwind v4 uses CSS-first config
No `tailwind.config.js`. Design tokens (colors, fonts) live in `@theme` inside `portfolio/src/index.css`, and the build hooks in via the `@tailwindcss/vite` plugin in `vite.config.js`. Utilities like `text-accent` / `bg-paper` come from those tokens.

## Content is data-driven
All résumé content (experience, projects, leadership, hobbies) lives in `portfolio/src/data.js`. Edit that file to update the site — no component changes needed.

## Accessibility decisions
- Accent color is `#9a4508` (≥ 4.5:1 on the `#faf7f2` paper background) so it can be used for small text.
- Custom cursor renders only on `(pointer: fine)` devices and is disabled entirely under `prefers-reduced-motion`; the native cursor is hidden via a `body.custom-cursor` class, never unconditionally.
- Skip link, landmark regions, labeled nav, and `:focus-visible` outlines are in place — keep them when adding sections.

## Framer Motion + headless screenshots
Screenshots taken immediately after page load catch mount animations at frame zero (everything `opacity: 0`). Wait ~1.5s before judging visual state; it is not a bug.
