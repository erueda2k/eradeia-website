# Prompting — Era de IA website

## Identidad

| Campo | Valor |
|---|---|
| Repo | `erueda2k/eradeia-website` |
| Ruta local | `C:\ERueda\Era de IA\eradeia-website` |
| Producción | `https://eradeia.com/` (apex canónico) |
| Qué es | Sitio de marketing (consultoría de IA para PyMEs), multipágina estática: home + `/conocer-mi-historia/`. Reconstruido desde WordPress |

## Stack

- Vite + React 18 + TypeScript strict + Tailwind CSS 4 (configuración en CSS)
- Multipágina: entradas HTML en `vite.config.ts`, sin router
- ESLint con flat config
- Vercel (deploy automático desde `main`)
- Windows / PowerShell como entorno de desarrollo

## Entorno de datos

Estado: **ninguno**. Sitio estático, sin Supabase, sin base de datos, sin backend ni variables de entorno.

## Convenciones propias

- Ramas `work/sesion-YYYY-MM-DD` desde `main`; merge a `main` (`--no-ff`) solo al cierre de sesión.
- Commits lógicos y separados (scaffold / contenido / docs / secciones).
- UI en español; el copy sale de `docs/legacy/content.md` (y `content-historia.md`) tal cual.
- Secciones en `src/components/sections/`, piezas UI en `src/components/ui/`, Header/Footer compartidos.
- Imágenes en `public/images/`, nombres descriptivos en kebab-case.
- `npm run build` y `npm run lint` en 0 errores antes de commitear.
- `CLAUDE.md` y `docs/` se versionan (no ignorar).

## Trampas

- **Página nueva = entrada HTML nueva en `vite.config.ts`.** No hay router; si falta la entrada, 404 en Vercel.
- **Enlaces internos relativos** (`/`, `/#contacto`, `/conocer-mi-historia/`), nunca URLs absolutas de eradeia.com.
- **Dominio canónico: apex `https://eradeia.com/`**, no `www`.
- **Tailwind 4:** configuración basada en CSS; no existe `tailwind.config`.
- **Enlaces de contacto solo en `src/lib/links.ts`.**
- **DNS compartido** con ttadmin/tt/viejito (Vercel) y Zoho Mail; este proyecto nunca toca DNS. El corte desde Hostinger lo hace el usuario a mano.
- Push a `main` despliega a producción.
- El sitio legacy no tenía analítica; no añadirla sin pedirlo.

## Alcance prohibido por defecto

- Tocar DNS, registros de dominio o correo.
- Backend, Supabase, bases de datos, formularios con servidor.
- Borrar ramas remotas o mergear/pushear a `main` sin autorización.
- Reescribir o "mejorar" el copy en español.
- Agregar tracking o analítica.

## Estado

Backlog: `docs/plans/backlog.md`
