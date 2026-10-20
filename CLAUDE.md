# Maura Digital

Agencia de marketing digital. Monorepo por fases: `web/` (sitio público, Next.js + TypeScript + Tailwind) y `app/` (plataforma interna, futura).

## Convenciones
- Idioma: contenido del sitio y documentación en español; código (nombres, commits) en inglés.
- TypeScript estricto; componentes en `web/src/components`, utilidades en `web/src/lib`.
- Antes de dar algo por terminado: `npm run lint` y `npm run build` en `web/`.
- Decisiones de arquitectura importantes se registran en `docs/decisiones/`.
- El contenido de negocio (servicios, precios, marca) sale de `docs/negocio/`; no inventar datos.
