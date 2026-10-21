import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const pasos = [
  "Nos cuentas de tu negocio y nos pasas tus productos, precios y reglas de cálculo.",
  "Armamos tu página con el cotizador, con tu logo y tus colores.",
  "Te la entregamos lista, y cada cotización te llega a tu WhatsApp.",
];

export default function Home() {
  return (
    <>
      <section className="py-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Páginas web que cotizan solas
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-black/70">
          Tu cliente elige, pone las medidas o las cantidades y ve el precio al
          instante. Tú recibes el pedido armado por WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton>Escríbenos por WhatsApp</WhatsAppButton>
          <Link
            href="/portafolio"
            className="inline-block rounded border border-black/30 px-6 py-3 font-medium hover:bg-black/5"
          >
            Ver trabajos
          </Link>
        </div>
        <p className="mt-6 text-sm text-black/60">
          Hecho en Pitalito, Huila · Tu página lista en 2 a 3 días · Sin que
          tengas que aprender nada técnico
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">¿Te suena familiar?</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Te escriben a toda hora para preguntar cuánto vale. Tú calculas,
          respondes y, a veces, el cliente ni contesta. Mientras tanto, tu
          negocio vive en una cuenta de Instagram que no es tuya y que Google no
          muestra.
        </p>
        <p className="mt-3 font-semibold">
          Una página con cotizador responde por ti, a cualquier hora.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Dos formas de tener tu cotizador</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="rounded border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Página con cotizador</h3>
            <p className="mt-2 text-black/70">
              Para negocios que cobran según medidas, tipo o servicio, como
              vidrios y aluminios. Tu cliente elige y ve el precio al instante.
            </p>
          </div>
          <div className="rounded border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Tienda con cotización</h3>
            <p className="mt-2 text-black/70">
              Para negocios con catálogo, como una dulcería. Tu cliente arma su
              pedido, ve el total y te lo envía por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Así de simple</h2>
        <ol className="mt-4 flex flex-col gap-3">
          {pasos.map((p, i) => (
            <li key={p} className="flex gap-3">
              <span className="font-bold">{i + 1}.</span>
              <span className="text-black/70">{p}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-black/60">
          Los tiempos empiezan a contar cuando recibimos tu información completa.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Quiénes somos</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Somos Maura Digital, un equipo de Pitalito que crea páginas web que
          trabajan por tu negocio. Soy Juan David, y junto a mi equipo me encargo
          de que tu página quede lista y funcionando.
        </p>
      </section>

      <section className="mt-12 rounded bg-black/5 p-8">
        <h2 className="text-2xl font-bold">Mira cómo se vería tu página</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Escríbenos por WhatsApp y te mostramos una demo con tus productos. Sin
          compromiso.
        </p>
        <div className="mt-6">
          <WhatsAppButton>Escríbenos por WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
