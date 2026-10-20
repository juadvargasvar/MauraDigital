import type { Metadata } from "next";

export const metadata: Metadata = { title: "Servicios" };

// Provisional: confirmar con Maura (docs/negocio/servicios.md)
const servicios = [
  { nombre: "Redes sociales", detalle: "Gestión de contenido y comunidad." },
  { nombre: "Publicidad digital", detalle: "Campañas en Meta y Google." },
  { nombre: "Marca", detalle: "Identidad visual y tono de comunicación." },
  { nombre: "Sitios web", detalle: "Páginas rápidas y optimizadas para SEO." },
];

export default function ServiciosPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Servicios</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {servicios.map((s) => (
          <li key={s.nombre} className="rounded border border-black/10 p-6">
            <h2 className="text-xl font-semibold">{s.nombre}</h2>
            <p className="mt-2 text-black/70">{s.detalle}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
