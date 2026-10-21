import type { Metadata } from "next";
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
  },
  {
    nombre: "IA Box Pack: generador de prompts",
    descripcion:
      "Una app que arma, en tres pasos, un prompt listo para copiar y crear logotipos con texto legible o avatares humanos realistas. La persona elige qué necesita, completa los datos de su marca y obtiene su resultado. Guarda el historial en su propio dispositivo.",
    demuestra:
      "Un formulario paso a paso que entrega un resultado personalizado al instante, la misma lógica de un cotizador.",
    url: "https://app-imagenes.vercel.app/",
  },
  {
    nombre: "Protocolo O.S.F.: página de ventas",
    descripcion:
      "Una página larga, pensada para verse bien en el celular, que presenta una guía digital de alimentación y ejercicio. Lleva a la persona paso a paso: el titular con la propuesta, el problema, el método en tres fases, lo que incluye el paquete con sus bonos, la garantía y el llamado final a pedir el acceso. La guía se entrega de forma gratuita.",
    demuestra:
      "Una página que presenta una oferta de principio a fin y lleva al visitante a pedir el acceso.",
    url: "https://protocolo-osf.vercel.app/",
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
          <li key={t.url} className="rounded border border-black/10 p-6">
            <h2 className="text-xl font-semibold">
              {i + 1}. {t.nombre}
            </h2>
            <p className="mt-2 text-black/70">{t.descripcion}</p>
            <p className="mt-2 text-black/70">
              <span className="font-medium">Qué demuestra:</span> {t.demuestra}
            </p>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-medium underline"
            >
              Abrir el trabajo
            </a>
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
