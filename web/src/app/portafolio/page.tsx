import type { Metadata } from "next";

export const metadata: Metadata = { title: "Portafolio" };

export default function PortafolioPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Portafolio</h1>
      <p className="mt-4 text-black/70">
        Pronto publicaremos aquí nuestros casos de éxito.
      </p>
    </>
  );
}
