# Era de IA — sitio web

Sitio de marketing de Era de IA (consultoría de IA para PyMEs, Emilio Rueda), producción en https://eradeia.com/ (dominio canónico: apex, no www). Reconstrucción estática del sitio WordPress anterior.

## Stack

- Vite + React 18 + TypeScript (strict) + Tailwind CSS 4 (`@tailwindcss/vite`, configuración en CSS, sin `tailwind.config`)
- ESLint (flat config)
- Despliegue: Vercel. Sin backend, sin Supabase, sin base de datos.

## Estructura

- Sitio multipágina con Vite, sin router: cada página es un HTML de entrada declarado en `vite.config.ts` → `build.rollupOptions.input` (`index.html` = home, `conocer-mi-historia/index.html`). Página nueva = entrada nueva; si falta, da 404 en Vercel.
- `src/main.tsx` / `src/App.tsx` — home. `src/historia-main.tsx` + `src/pages/historia/` — "Conocer mi historia".
- `src/components/sections/` — secciones de la home (Hero, Servicios, Contacto, Footer, etc.); `src/components/ui/` — piezas reutilizables.
- `Header` y `Footer` compartidos por ambas páginas.
- `src/lib/links.ts` — única fuente de enlaces de contacto (Calendly, WhatsApp, LinkedIn, email) y de navegación.
- Enlaces internos siempre relativos (`/`, `/#contacto`, `/conocer-mi-historia/`).
- `public/` — imágenes (`public/images/`) y `site.webmanifest`.

## Comandos

```
npm run dev       # servidor de desarrollo
npm run build     # tsc -b + vite build
npm run lint      # eslint
npm run preview   # sirve el build
```

`build` y `lint` deben pasar con 0 errores antes de cada commit.

## Ramas y despliegue

- Una rama por sesión: `work/sesion-YYYY-MM-DD`, creada desde `main`.
- Merge a `main` solo al cierre de sesión.
- **Push a `main` = deploy a producción en Vercel.** No hacer push a `main` sin intención explícita.
- No borrar ramas ajenas a la sesión sin autorización del usuario.

## Contenido e idioma

- Idioma de la UI: español. Copy verbatim, no reescribir ni "mejorar" textos.
- Fuente de verdad del contenido: `docs/legacy/content.md` (HTML original en `docs/legacy/eradeia-wordpress.html`).
- Imágenes en `public/images/` (nombres kebab-case).
- No agregar analítica ni tracking (el sitio legacy no tenía).

## Prohibido

- Tocar DNS (compartido con subdominios y correo; el corte DNS lo hace el usuario a mano).
- Agregar backend, Supabase o dependencias de servidor.

## Docs

- `docs/prompting.md` — identidad, convenciones, trampas, alcance prohibido.
- `docs/plans/backlog.md` — pendientes.
