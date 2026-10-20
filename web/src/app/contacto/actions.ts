"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: los bots llenan este campo oculto; fingimos éxito.
  if (formData.get("website")) {
    return { ok: true, message: "¡Gracias! Te responderemos pronto." };
  }

  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  if (!nombre || nombre.length > 100) {
    return { ok: false, message: "Escribe tu nombre (máximo 100 caracteres)." };
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, message: "Escribe un correo válido." };
  }
  if (telefono.length > 30) {
    return { ok: false, message: "El teléfono es demasiado largo." };
  }
  if (mensaje.length < 10 || mensaje.length > 2000) {
    return {
      ok: false,
      message: "El mensaje debe tener entre 10 y 2000 caracteres.",
    };
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
    from: process.env.CONTACT_FROM_EMAIL ?? "Maura Digital <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Nueva solicitud de contacto: ${nombre.replace(/[\r\n]+/g, " ")}`,
    text: `Nombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono || "-"}\n\n${mensaje}`,
  });

  if (error) {
    console.error("Contact form: error de Resend", error);
    return {
      ok: false,
      message: "No pudimos enviar tu mensaje. Inténtalo de nuevo más tarde.",
    };
  }

  return { ok: true, message: "¡Gracias! Te responderemos pronto." };
}
