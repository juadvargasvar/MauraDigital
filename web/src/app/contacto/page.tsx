import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-4 text-black/70">
        Cuéntanos sobre tu negocio y te enviaremos una cotización.
      </p>
      <ContactForm />
    </>
  );
}
