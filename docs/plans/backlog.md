# Backlog

## Hecho

- [x] Construir las secciones de la página según `docs/legacy/content.md`.
- [x] Página "Conocer mi historia" (`/conocer-mi-historia/`), reconstruida como página propia.
- [x] Meta description y Open Graph.
- [x] Decidir rama `codex/generate-html-and-css-for-landing-page`: obsoleta, eliminada.

## Pendiente

- [ ] **Corte de DNS de Hostinger a Vercel** (manual, lo hace el usuario):
  - Apex `eradeia.com` como dominio primario; `www` redirige al apex.
  - Borrar los registros AAAA en `@` y `www` que apunten a Hostinger.
  - No tocar nameservers, MX/TXT de Zoho ni los CNAME de ttadmin/tt/viejito.
  - Mantener el plan de Hostinger ~2 semanas tras el corte; conservar el registro del dominio.
- [ ] (Opcional) Auto-alojar las fuentes Inter y Outfit en vez de cargarlas desde Google Fonts.
- [ ] Revisar las meta descriptions de home e historia (redactadas por la IA).
