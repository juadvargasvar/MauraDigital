# Servicios, marca y público

Fuente: documento "Textos del sitio de Maura Digital" (21 oct 2026). Los textos completos están en las páginas de `web/src/app/`.

## Propuesta de valor
Páginas web que cotizan solas: el cliente elige, pone medidas o cantidades, ve el precio al instante y el pedido llega armado por WhatsApp. Hecho en Pitalito, Huila.

## Servicios (tres paquetes)
1. **Página con cotizador interactivo** — negocios que cobran por medidas, tipo o servicio (vidrios y aluminios, carpintería, impresión, tapicería). Entrega en 2 a 3 días desde la información completa.
2. **Tienda con cotización de productos** — negocios con catálogo (dulcerías, ferreterías, distribuidores). Entrega en 5 a 7 días según cantidad de productos. El pago se acuerda directamente, no en la página.
3. **Cotizador + Anuncios en Meta** (recomendado, nov 2026) — paquete 1 o 2 más configuración de Facebook, Instagram y cuenta de anuncios de Meta con seguimiento de visitas, campañas hacia el cotizador o WhatsApp, optimización, informe mensual (inversión, clientes que escribieron, costo por cliente) y mantenimiento incluido. Videos para anuncios con valor por video. La inversión en anuncios la paga el cliente directo a Meta. Plan mínimo de 3 meses. Primer caso: propuesta a Domisureño (app de pedidos en domi-sureno.vercel.app).

Todos incluyen diseño para celular, logo y colores del cliente, y envío de cada cotización a WhatsApp.

- **Mantenimiento mensual:** actualización de precios/productos, soporte y que el sitio siga funcionando.
- **Servicios complementarios** (después del cotizador): manejo de redes sociales, publicidad en Google, diseño de marca.

## Público objetivo
Negocios locales de Pitalito y el Huila que reciben consultas de precio por WhatsApp/Instagram y no tienen página propia.

## Marca
Logo, colores y tipografía de Maura Digital: _pendiente._

## Precios
Sin precios publicados. Se cotiza por WhatsApp. _Pendiente decidir si se publican precios "desde"._

Paquete 3 (no publicado en el sitio; usado en la propuesta a Domisureño, nov 2026):
- Gestión mensual fija por rango de inversión en anuncios: hasta $900.000/mes → $600.000; de $900.001 a $2.000.000/mes → $900.000; más de eso se cotiza.
- Video para anuncios: $150.000 por video.
- Antes se cobraba la gestión 1 a 1 con la inversión en pauta; se cambió a rangos para que escalar la inversión no dispare el cobro.

## Datos de contacto
- Ubicación: Maura Digital, Pitalito, Huila.
- WhatsApp: +57 317 870 5913.
- Horario: lunes a viernes de 7 a.m. a 5 p.m. y sábados de 9 a.m. a 1 p.m.
- Ambos se configuran en `web/src/lib/site.ts`.

## Pendientes
- [ ] Cuántos productos incluye el Paquete 2 antes de un cobro adicional.
- [ ] Mostrar foto y nombre en "Quiénes somos".
- [ ] Publicar precios "desde" o cotizar por WhatsApp.
- [ ] Portafolio: revisar la descripción del trabajo 3 (Protocolo O.S.F.); confirmar si alguno fue para un cliente y si acepta mostrarse; revisar que el trabajo 3 no prometa resultados médicos que no se puedan respaldar.

## Portafolio
El cuarto trabajo es una demo de cotizador de vidrios y aluminios (`/portafolio/demo-cotizador`). Sus precios y reglas son de ejemplo y están marcados como demostración; viven en `web/src/app/portafolio/demo-cotizador/Quoter.tsx`.
