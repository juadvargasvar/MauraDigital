// Datos de contacto del sitio. Completar los pendientes (ver docs/negocio/servicios.md).
export const WHATSAPP_NUMBER: string = "573178705913"; // Con indicativo, solo dígitos
export const BUSINESS_HOURS: string =
  "Lunes a viernes de 7 a.m. a 5 p.m. y sábados de 9 a.m. a 1 p.m.";

export const WHATSAPP_MESSAGE =
  "Hola, Maura Digital. Tengo un negocio de [lo que vendes] y quiero ver cómo se vería mi página con cotizador.";

/** Enlace a WhatsApp; si aún no hay número configurado, lleva al formulario. */
export function whatsappHref(message: string = WHATSAPP_MESSAGE): string {
  if (!WHATSAPP_NUMBER) return "/contacto";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsapp = WHATSAPP_NUMBER !== "";
