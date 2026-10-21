"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s-]{7,20}$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: los bots llenan este campo oculto; fingimos éxito.
  if (formData.get("website")) {
    return {
      ok: true,
      message: "¡Listo! Recibimos tus datos y te escribimos pronto por WhatsApp.",
    };
  }

  const field = (name: string) => String(formData.get(name) ?? "").trim();
  const nombre = field("nombre");
  const negocio = field("negocio");
  const whatsapp = field("whatsapp");
  const vende = field("vende");
  const email = field("email");

  if (!nombre || nombre.length > 100) {
    return { ok: false, message: "Escribe tu nombre (máximo 100 caracteres)." };
  }
  if (!negocio || negocio.length > 100) {
    return {
      ok: false,
      message: "Escribe el nombre de tu negocio (máximo 100 caracteres).",
    };
  }
  if (!PHONE_RE.test(whatsapp)) {
    return { ok: false, message: "Escribe un número de WhatsApp válido." };
  }
  if (!vende || vende.length > 500) {
    return {
      ok: false,
      message: "Cuéntanos qué vendes o qué cotizas (máximo 500 caracteres).",
    };
  }
  if (email && (!EMAIL_RE.test(email) || email.length > 200)) {
    return { ok: false, message: "Escribe un correo válido o déjalo vacío." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: faltan RESEND_API_KEY o CONTACT_TO_EMAIL");
    return {
      ok: false,
      message: "El formulario no está disponible en este momento.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from:
      process.env.CONTACT_FROM_EMAIL ?? "Maura Digital <onboarding@resend.dev>",
    to,
    ...(email ? { replyTo: email } : {}),
    subject: `Nueva solicitud de demo: ${negocio.replace(/[\r\n]+/g, " ")}`,
    text: [
      `Nombre: ${nombre}`,
      `Negocio: ${negocio}`,
      `WhatsApp: ${whatsapp}`,
      `Correo: ${email || "-"}`,
      "",
      `Qué vende o cotiza: ${vende}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form: error de Resend", error);
    return {
      ok: false,
      message: "No pudimos enviar tus datos. Inténtalo de nuevo más tarde.",
    };
  }

  return {
    ok: true,
    message: "¡Listo! Recibimos tus datos y te escribimos pronto por WhatsApp.",
  };
}
