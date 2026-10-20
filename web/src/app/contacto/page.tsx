import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-4 text-black/70">
        Cuéntanos sobre tu negocio y te enviaremos una cotización.
      </p>
      {/* TODO: formulario con envío a correo (pendiente definir correo y proveedor) */}
      <p className="mt-6 rounded border border-dashed border-black/20 p-6 text-sm text-black/60">
        Formulario de contacto en construcción.
      </p>
    </>
  );
}
