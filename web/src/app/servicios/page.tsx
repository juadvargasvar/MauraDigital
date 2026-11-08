import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Página con cotizador o tienda con cotización, y anuncios en Meta que llevan clientes nuevos a tu página y a tu WhatsApp.",
};

const recomendado = {
  numero: 3,
  nombre: "Cotizador + Anuncios en Meta",
  para: "Para negocios que quieren clientes nuevos, no solo cotizar a los que ya tienen. Los anuncios llevan a la gente a tu página, ve el precio al instante y el pedido te llega armado a WhatsApp.",
  incluye: [
    "Tu página con cotizador o tienda con cotización (paquete 1 o 2, según tu negocio).",
    "Configuración de tu página de Facebook, tu Instagram y tu cuenta de anuncios de Meta, con el seguimiento de visitas instalado.",
    "Campañas en Facebook e Instagram que llevan clientes de tu ciudad o región a tu cotizador o directo a tu WhatsApp.",
    "Revisión constante de los anuncios: potenciamos los que traen clientes y apagamos los que no.",
    "Informe mensual sencillo: cuánto se invirtió, cuántos clientes te escribieron y cuánto costó cada uno.",
    "Mantenimiento de tu página incluido.",
    "Videos para tus anuncios, con valor por video.",
  ],
  notas: [
    "La inversión en anuncios la pagas tú directo a Meta, con tu tarjeta: ves cada peso en tu propia cuenta.",
    "La gestión es una mensualidad fija según tu inversión en anuncios. Plan mínimo de 3 meses.",
  ],
};

const paquetes = [
  {
    numero: 1,
    nombre: "Página con cotizador interactivo",
    para: "Para negocios que cobran según medidas, tipo de producto o servicio, como vidrios y aluminios, carpintería, impresión o tapicería.",
    incluye: [
      "Página con la información de tu negocio.",
      "Cotizador a tu medida: el cliente elige el tipo, escribe las medidas y ve el precio al instante.",
      "La cotización te llega armada a tu WhatsApp con un clic.",
      "Entrega en 2 a 3 días desde que recibimos tu información.",
    ],
  },
  {
    numero: 2,
    nombre: "Tienda con cotización de productos",
    para: "Para negocios con catálogo, como dulcerías, ferreterías o distribuidores.",
    incluye: [
      "Catálogo con fotos, tamaños y precios.",
      "Tu cliente elige productos y cantidades, y ve el total de su pedido al instante.",
      "El pedido te llega armado a tu WhatsApp.",
      "Entrega en 5 a 7 días, según la cantidad de productos.",
      "Es cotización: el pago se acuerda directamente contigo, no en la página.",
    ],
  },
];

const necesitamos = [
  "Lista de productos o servicios con sus precios.",
  "Reglas de cálculo, por ejemplo precio por metro cuadrado, recargos o descuentos por cantidad.",
  "Logo, fotos y datos de contacto.",
];

export default function ServiciosPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Tres paquetes para que tus clientes coticen solos
      </h1>
      <p className="mt-4 max-w-2xl text-white/75">
        Elige el que se parezca más a tu negocio. Todos incluyen el diseño para
        celular, tu logo y tus colores, y el envío de cada cotización a tu
        WhatsApp. Si además quieres que lleguen clientes nuevos, el paquete 3
        suma los anuncios en Meta.
      </p>

      <section className="mt-8 rounded-xl border border-cyan-400/40 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm text-white/60">Paquete {recomendado.numero}</p>
          <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
            Recomendado
          </span>
        </div>
        <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{recomendado.nombre}</h2>
        <p className="mt-2 max-w-3xl text-white/75">{recomendado.para}</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-white/75">
          {recomendado.incluye.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 text-sm text-white/60">
          {recomendado.notas.map((x) => (
            <p key={x}>{x}</p>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {paquetes.map((p) => (
          <section key={p.nombre} className="rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm text-white/60">Paquete {p.numero}</p>
            <h2 className="text-xl font-semibold">{p.nombre}</h2>
            <p className="mt-2 text-white/75">{p.para}</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-white/75">
              {p.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Mantenimiento mensual</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Cuando cambien tus precios o tus productos, nosotros actualizamos tu
          página. También incluye soporte y que tu sitio siga funcionando.
          Pregúntanos por el plan mensual.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Qué necesitamos de ti</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-white/75">
          {necesitamos.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-white/60">
          Entre más pronto nos entregues todo, más pronto estará lista tu página.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">También te ayudamos con</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Manejo de redes sociales, publicidad en Google y diseño de marca. Los
          vemos contigo después de tener tu cotizador funcionando.
        </p>
      </section>

      <section className="mt-20 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-8 sm:p-12">
        <p className="max-w-2xl text-lg">
          ¿No sabes cuál te conviene? Escríbenos por WhatsApp, cuéntanos qué
          vendes y te decimos cuál paquete encaja.
        </p>
        <div className="mt-6">
          <WhatsAppButton>Escríbenos por WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
