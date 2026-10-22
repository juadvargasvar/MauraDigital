"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

const fieldClass = "mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40";
const helpClass = "block text-sm font-normal text-white/60";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );

  if (state.ok) {
    return (
      <p
        role="status"
        className="mt-6 rounded border border-green-400/40 bg-green-400/10 p-6 text-green-200"
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
      <p aria-live="polite" className="text-sm text-red-400">
        {state.message}
      </p>
      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Quiero mi demo"}
      </button>
    </form>
  );
}
