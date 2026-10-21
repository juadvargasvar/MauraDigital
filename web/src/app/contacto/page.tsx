import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BUSINESS_HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp y te mostramos cómo se vería tu página con cotizador. Sin compromiso.",
};

export default function ContactoPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Cuéntanos de tu negocio</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Escríbenos por WhatsApp y te mostramos cómo se vería tu página con
        cotizador, con tus productos. Sin compromiso. Si prefieres, déjanos tus
        datos y te escribimos.
      </p>
      <div className="mt-6">
        <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
      </div>
      <ContactForm />
      <p className="mt-10 text-sm text-black/60">
        Maura Digital, Pitalito, Huila
        {BUSINESS_HOURS && <> · Horario de atención: {BUSINESS_HOURS}</>}
      </p>
    </>
  );
}
