# Era de IA — sitio web

Sitio de marketing de Era de IA (consultoría de IA para PyMEs, Emilio Rueda), producción en www.eradeia.com. Reconstrucción estática del sitio WordPress anterior (una sola página).

## Stack

- Vite + React 18 + TypeScript (strict) + Tailwind CSS 4 (`@tailwindcss/vite`)
- ESLint (flat config)
- Despliegue: Vercel. Sin backend, sin Supabase, sin base de datos.

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
