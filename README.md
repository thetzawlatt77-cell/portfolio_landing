# Thet Zaw Latt — Flutter Developer Portfolio

Modern, responsive portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. Showcases hero, skills, projects, experience timeline, contact info, dark mode, and smooth animations.

## Tech
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS v4 (no config file needed)
- Framer Motion for micro-interactions
- Reusable component architecture + data-driven content

## Getting Started
Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Visit http://localhost:3000.

## Project Structure
- `src/app/layout.tsx` — metadata, fonts, and global theme provider.
- `src/app/page.tsx` — page composition with all sections.
- `src/components/` — reusable UI: hero, skills, projects, experience, contact, navbar, theme toggle.
- `src/data/portfolio.ts` — all portfolio content (skills, projects, experience, contact).
- `public/projects/` — placeholder project images.
- `public/thet-zaw-latt-cv.txt` — downloadable CV stub.

## Customization
- Update content in `src/data/portfolio.ts`.
- Replace placeholder images in `public/projects/`.
- Swap the CV file in `public/thet-zaw-latt-cv.txt` with your PDF.

## Linting
```bash
npm run lint
```

## Deployment
Any Next.js-compatible host works (Vercel recommended):
```bash
npm run build
npm start
```
