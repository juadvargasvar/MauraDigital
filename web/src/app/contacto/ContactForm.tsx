"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

const fieldClass = "mt-1 w-full rounded border border-black/20 px-3 py-2";
const helpClass = "block text-sm font-normal text-black/60";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );

  if (state.ok) {
    return (
      <p
        role="status"
        className="mt-6 rounded border border-green-600/40 bg-green-50 p-6 text-green-900"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-8 flex max-w-xl flex-col gap-4">
      <label>
        Tu nombre
        <input
          name="nombre"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          className={fieldClass}
        />
      </label>
      <label>
        Nombre de tu negocio
        <input
          name="negocio"
          type="text"
          required
          maxLength={100}
          autoComplete="organization"
          className={fieldClass}
        />
      </label>
      <label>
        Tu WhatsApp
        <span className={helpClass}>Te escribimos por aquí, no te llamamos</span>
        <input
          name="whatsapp"
          type="tel"
          required
          maxLength={20}
          autoComplete="tel"
          className={fieldClass}
        />
      </label>
      <label>
        ¿Qué vendes o qué cotizas hoy?
        <span className={helpClass}>
          Por ejemplo: vidrios y aluminios, dulces, ferretería
        </span>
        <input
          name="vende"
          type="text"
          required
          maxLength={500}
          className={fieldClass}
        />
      </label>
      <label>
        Correo (opcional)
        <span className={helpClass}>
          Solo si prefieres que te escribamos por correo
        </span>
        <input
          name="email"
          type="email"
          maxLength={200}
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      {/* Honeypot anti-spam: oculto para personas */}
      <div aria-hidden="true" className="hidden">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p aria-live="polite" className="text-sm text-red-700">
        {state.message}
      </p>
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded bg-black px-6 py-3 text-white disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Quiero mi demo"}
      </button>
    </form>
  );
}
