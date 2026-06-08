# Lucas Demarré — Portfolio

Personal portfolio of **Lucas Demarré** — AI &amp; Software Developer building voice agents, chatbots, and automation for businesses.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

🔗 **Live:** [lucas-portfolio-tau.vercel.app](https://lucas-portfolio-tau.vercel.app)

---

## About

A bilingual (ES/EN) single-page portfolio showcasing my work in **conversational AI** (voice agents &amp; chatbots), **process automation**, and **full-stack development** — presented as concise case studies (problem → solution → stack → result).

## Features

- 🌐 **Bilingual ES/EN** with an instant toggle (auto-detects browser language, persists choice)
- 🎨 **Dark, modern design** with an electric-blue accent and a dedicated brand-styled section
- 🧩 **Project case studies** with category filtering and detail modals
- ⚡ **Static-generated**, fast and fully **responsive** (mobile-first)
- ♿ Respects `prefers-reduced-motion` and degrades gracefully without JS

## Tech stack

| Area | Tech |
|------|------|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | Lenis (smooth scroll) + IntersectionObserver reveals |
| Hosting | Vercel (auto-deploy on push) |

## Getting started

```bash
git clone https://github.com/LDemarre/lucas-portfolio.git
cd lucas-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build && npm start
```

## Project structure

```
app/             # App Router — layout, page, global styles
components/      # UI sections (Hero, Projects, Krownsoft, Stack, Experience, About, Contact…)
data/content.ts  # Bilingual content — single source of truth
lib/             # i18n context + smooth scroll
public/          # Static assets (logos, etc.)
```

All copy lives in `data/content.ts` as `{ es, en }` pairs, so adding or editing content never touches the components.

## Contact

- **Email:** lucasdemarre@krownsoft.com.ar
- **LinkedIn:** [lucas-demarre](https://www.linkedin.com/in/lucas-demarre-18362221a)

---

© 2026 Lucas Demarré
