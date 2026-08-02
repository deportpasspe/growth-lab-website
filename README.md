# Growth Lab Website

Sitio corporativo de **Growth Lab Consulting** con **Astro** + **Sanity**, i18n ES/EN, formularios Resend + Turnstile, deploy en Vercel.

## Stack

- `frontend/` — Astro (SSR) + Tailwind + Vercel adapter
- `studio/` — Sanity Studio standalone
- Locales: `/es/...` y `/en/...`

## Requisitos

- Node 22+ (`nvm use` lee `.nvmrc`)

## Setup

```bash
nvm use
npm install
cp frontend/.env.example frontend/.env
cp studio/.env.example studio/.env
# Completa projectId / dataset de Sanity
npm run dev
```

- Web: http://localhost:4321  
- Studio: http://localhost:3333  

Sin Sanity configurado, el Home usa fixtures temporales.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Frontend + Studio |
| `npm run check` | `astro check` |
| `npm run build` | Build frontend + studio |
| `npm run test:e2e` | Playwright smoke |
| `npm run typegen` | Sanity TypeGen |

## Arquitectura

Imports solo hacia abajo: `pages` → `modules` → `components/ui`.  
Queries GROQ en `frontend/src/lib/sanity/queries/`.  
Guía editorial: [docs/EDITOR.md](docs/EDITOR.md).
