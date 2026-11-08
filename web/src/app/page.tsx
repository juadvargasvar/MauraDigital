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
        <h1 className="text-gradient text-4xl font-bold leading-tight sm:text-6xl">
          Páginas web que cotizan solas
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75">
          Tu cliente elige, pone las medidas o las cantidades y ve el precio al
          instante. Tú recibes el pedido armado por WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton>Escríbenos por WhatsApp</WhatsAppButton>
          <Link
            href="/portafolio"
            className="inline-block rounded-lg border border-cyan-400/60 text-cyan-300 px-6 py-3 font-medium hover:bg-cyan-400/10"
          >
            Ver trabajos
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Hecho en Pitalito, Huila · Tu página lista en 2 a 3 días · Sin que
          tengas que aprender nada técnico
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Te suena familiar?</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Te escriben a toda hora para preguntar cuánto vale. Tú calculas,
          respondes y, a veces, el cliente ni contesta. Mientras tanto, tu
          negocio vive en una cuenta de Instagram que no es tuya y que Google no
          muestra.
        </p>
        <p className="mt-4 font-semibold">
          Una página con cotizador responde por ti, a cualquier hora.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Tres formas de tener tu cotizador</h2>
        <div className="mt-4 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold">Página con cotizador</h3>
            <p className="mt-2 text-white/75">
              Para negocios que cobran según medidas, tipo o servicio, como
              vidrios y aluminios. Tu cliente elige y ve el precio al instante.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold">Tienda con cotización</h3>
            <p className="mt-2 text-white/75">
              Para negocios con catálogo, como una dulcería. Tu cliente arma su
              pedido, ve el total y te lo envía por WhatsApp.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-400/40 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-8">
            <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
              Recomendado
            </span>
            <h3 className="mt-3 text-lg font-semibold">Cotizador + Anuncios en Meta</h3>
            <p className="mt-2 text-white/75">
              Tu cotizador más anuncios en Facebook e Instagram que llevan
              clientes nuevos a tu página. Tú recibes los pedidos por WhatsApp.
            </p>
            <Link href="/servicios" className="mt-4 inline-block text-cyan-300 underline">
              Ver qué incluye
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Así de simple</h2>
        <ol className="mt-4 flex flex-col gap-3">
          {pasos.map((p, i) => (
            <li key={p} className="flex gap-3">
              <span className="font-bold">{i + 1}.</span>
              <span className="text-white/75">{p}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-white/60">
          Los tiempos empiezan a contar cuando recibimos tu información completa.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Quiénes somos</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Somos Maura Digital, un equipo de Pitalito que crea páginas web que
          trabajan por tu negocio. Soy Juan David, y junto a mi equipo me encargo
          de que tu página quede lista y funcionando.
        </p>
      </section>

      <section className="mt-20 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Mira cómo se vería tu página</h2>
        <p className="mt-4 max-w-2xl text-white/75">
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
