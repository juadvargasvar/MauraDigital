import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Aplicaciones y páginas que hemos construido. Ábrelas y pruébalas.",
};

const trabajos = [
  {
    nombre: "ROOTMAP: Pon tu idea en línea",
    descripcion:
      "Una guía interactiva para quien quiere poner una idea en internet aunque nunca haya escrito código. Tiene seis niveles, dos caminos (emplearse o emprender) y un avance que se guarda para seguir donde lo dejaste.",
    demuestra:
      "Una micro aplicación con navegación por niveles y seguimiento de progreso.",
    url: "https://pon-tu-idea-en-linea.vercel.app/",
    imagen: "/portafolio/pon-tu-idea-en-linea.png",
    alt: "Pantalla de ROOTMAP con la barra de progreso y los niveles del camino",
  },
  {
    nombre: "IA Box Pack: generador de prompts",
    descripcion:
      "Una app que arma, en tres pasos, un prompt listo para copiar y crear logotipos con texto legible o avatares humanos realistas. La persona elige qué necesita, completa los datos de su marca y obtiene su resultado. Guarda el historial en su propio dispositivo.",
    demuestra:
      "Un formulario paso a paso que entrega un resultado personalizado al instante, la misma lógica de un cotizador.",
    url: "https://app-imagenes.vercel.app/",
    imagen: "/portafolio/app-imagenes.png",
    alt: "Pantalla de la app IA Box Pack",
  },
  {
    nombre: "Protocolo O.S.F.: página de ventas",
    descripcion:
      "Una página larga, pensada para verse bien en el celular, que presenta una guía digital de alimentación y ejercicio. Lleva a la persona paso a paso: el titular con la propuesta, el problema, el método en tres fases, lo que incluye el paquete con sus bonos, la garantía y el llamado final a pedir el acceso. La guía se entrega de forma gratuita.",
    demuestra:
      "Una página que presenta una oferta de principio a fin y lleva al visitante a pedir el acceso.",
    url: "https://protocolo-osf.vercel.app/",
    imagen: "/portafolio/protocolo-osf.png",
    alt: "Pantalla de inicio de Protocolo O.S.F.",
  },
  {
    nombre: "Demo: cotizador de vidrios y aluminios",
    demo: true,
    descripcion:
      "Una demostración de lo que hacemos: eliges el producto y el tipo de vidrio, escribes las medidas y la cantidad, y ves el precio al instante, con descuento por cantidad e instalación opcional. Al final, la cotización se envía armada por WhatsApp. Los precios son de ejemplo.",
    demuestra:
      "Un cotizador completo, tal como lo recibiría un negocio de vidrios y aluminios.",
    url: "/portafolio/demo-cotizador",
  },
];

export default function PortafolioPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Trabajos que puedes abrir y probar</h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Estas son aplicaciones y páginas que hemos construido. No son
        cotizadores, pero usan la misma idea: la persona responde unos datos y la
        página le entrega un resultado al instante.
      </p>

      <ol className="mt-8 grid gap-6">
        {trabajos.map((t, i) => (
          <li
            key={t.url}
            className="overflow-hidden rounded border border-black/10"
          >
            {t.imagen && (
              // Las capturas traen una franja blanca abajo: se recorta con la proporción.
              <div className="relative aspect-[1200/745] w-full bg-black/5">
                <Image
                  src={t.imagen}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            )}
            <div className="p-6">
            <h2 className="text-xl font-semibold">
              {i + 1}. {t.nombre}
              {t.demo && (
                <span className="ml-2 rounded bg-amber-100 px-2 py-0.5 align-middle text-xs font-medium text-amber-900">
                  Demostración
                </span>
              )}
            </h2>
            <p className="mt-2 text-black/70">{t.descripcion}</p>
            <p className="mt-2 text-black/70">
              <span className="font-medium">Qué demuestra:</span> {t.demuestra}
            </p>
            {t.url.startsWith("/") ? (
              <Link
                href={t.url}
                className="mt-4 inline-block font-medium underline"
              >
                Probar la demo
              </Link>
            ) : (
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-medium underline"
              >
                Abrir el trabajo
              </a>
            )}
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 rounded bg-black/5 p-8">
        <p className="max-w-2xl text-lg">
          Tu negocio puede ser el siguiente trabajo de esta lista. Escríbenos por
          WhatsApp y te mostramos cómo se vería tu página con cotizador.
        </p>
        <div className="mt-6">
          <WhatsAppButton>Escríbenos por WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
