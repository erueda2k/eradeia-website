# Prompting — Era de IA website

## Identidad

| Campo | Valor |
|---|---|
| Repo | `erueda2k/eradeia-website` |
| Ruta local | `C:\ERueda\Era de IA\eradeia-website\eradeia-website` |
| Producción | `www.eradeia.com` |
| Qué es | Sitio de marketing de una sola página (consultoría de IA para PyMEs), reconstruido desde WordPress como sitio estático |

## Stack

- Vite + React 18 + TypeScript strict + Tailwind CSS 4
- ESLint con flat config
- Vercel (deploy automático desde `main`)
- Windows / PowerShell como entorno de desarrollo

## Entorno de datos

Estado: **ninguno**. Sitio estático, sin Supabase, sin base de datos, sin backend ni variables de entorno.

## Convenciones propias

- Ramas `work/sesion-YYYY-MM-DD` desde `main`; merge a `main` solo al cierre de sesión.
- Commits lógicos y separados (scaffold / contenido / docs / secciones).
- UI en español; el copy sale de `docs/legacy/content.md` tal cual.
- Imágenes en `public/images/`, nombres descriptivos en kebab-case.
- `npm run build` y `npm run lint` en 0 errores antes de commitear.
- `CLAUDE.md` y `docs/` se versionan (no ignorar).

## Trampas

- **DNS compartido:** el dominio eradeia.com también sirve los subdominios `ttadmin`, `tt` y `viejito` (en Vercel) y el correo (Zoho Mail). El sitio nunca debe tocar DNS; el corte desde Hostinger lo hace el usuario manualmente.
- Push a `main` despliega a producción.
- El enlace "Conocer mi historia" apunta a una página WordPress que no existe en el nuevo sitio (ver backlog).
- El sitio legacy no tenía analítica; no añadirla sin pedirlo.

## Alcance prohibido por defecto

- Tocar DNS, registros de dominio o correo.
- Backend, Supabase, bases de datos, formularios con servidor.
- Borrar ramas remotas o mergear/pushear a `main` sin autorización.
- Reescribir o "mejorar" el copy en español.
- Agregar tracking o analítica.

## Estado

Backlog: `docs/plans/backlog.md`
