// Datos de contacto del sitio. Completar los pendientes (ver docs/negocio/servicios.md).
export const WHATSAPP_NUMBER = ""; // Con indicativo, solo dígitos. Ej.: "573001234567"
export const BUSINESS_HOURS = ""; // Ej.: "Lunes a sábado, 8 a.m. a 6 p.m."

export const WHATSAPP_MESSAGE =
  "Hola, Maura Digital. Tengo un negocio de [lo que vendes] y quiero ver cómo se vería mi página con cotizador.";

/** Enlace a WhatsApp; si aún no hay número configurado, lleva al formulario. */
export function whatsappHref(message: string = WHATSAPP_MESSAGE): string {
  if (!WHATSAPP_NUMBER) return "/contacto";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsapp = WHATSAPP_NUMBER !== "";
