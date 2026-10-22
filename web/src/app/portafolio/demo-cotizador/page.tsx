import type { Metadata } from "next";
import Link from "next/link";
import Quoter from "./Quoter";

export const metadata: Metadata = {
  title: "Demo de cotizador para vidrios y aluminios",
  description:
    "Demostración de un cotizador interactivo: el cliente elige, escribe las medidas y ve el precio al instante.",
};

export default function DemoCotizadorPage() {
  return (
    <>
      <Link href="/portafolio" className="text-sm text-cyan-300 underline underline-offset-4">
        ← Volver al portafolio
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Demo: cotizador para vidrios y aluminios
      </h1>
      <p
        role="note"
        className="mt-4 rounded border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-amber-200"
      >
        <strong>Esto es una demostración.</strong> Los precios y las reglas son
        de ejemplo y no corresponden a ningún negocio real. En tu página los
        reemplazamos por los tuyos.
      </p>
      <p className="mt-4 max-w-2xl text-white/75">
        Elige el producto, escribe las medidas y mira cómo cambia el precio al
        instante. Al final, la cotización llega armada a tu WhatsApp.
      </p>
      <Quoter />
    </>
  );
}
