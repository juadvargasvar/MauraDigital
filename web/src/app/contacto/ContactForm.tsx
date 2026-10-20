"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { ok: false, message: "" };

const fieldClass = "mt-1 w-full rounded border border-black/20 px-3 py-2";

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
    <form action={formAction} className="mt-6 flex max-w-xl flex-col gap-4">
      <label>
        Nombre
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
        Correo
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label>
        Teléfono (opcional)
        <input
          name="telefono"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          className={fieldClass}
        />
      </label>
      <label>
        ¿Cómo podemos ayudarte?
        <textarea
          name="mensaje"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
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
        {pending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
