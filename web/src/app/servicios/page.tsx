import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Página con cotizador para vidrios, aluminios y servicios por medida, y tienda con cotización para negocios con catálogo.",
};

const paquetes = [
  {
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
      <h1 className="text-3xl font-bold">
        Dos paquetes para que tus clientes coticen solos
      </h1>
      <p className="mt-4 max-w-2xl text-black/70">
        Elige el que se parezca más a tu negocio. Los dos incluyen el diseño para
        celular, tu logo y tus colores, y el envío de cada cotización a tu
        WhatsApp.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {paquetes.map((p, i) => (
          <section key={p.nombre} className="rounded border border-black/10 p-6">
            <p className="text-sm text-black/60">Paquete {i + 1}</p>
            <h2 className="text-xl font-semibold">{p.nombre}</h2>
            <p className="mt-2 text-black/70">{p.para}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/70">
              {p.incluye.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Mantenimiento mensual</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Cuando cambien tus precios o tus productos, nosotros actualizamos tu
          página. También incluye soporte y que tu sitio siga funcionando.
          Pregúntanos por el plan mensual.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Qué necesitamos de ti</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-black/70">
          {necesitamos.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-black/60">
          Entre más pronto nos entregues todo, más pronto estará lista tu página.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">También te ayudamos con</h2>
        <p className="mt-3 max-w-2xl text-black/70">
          Redes sociales, publicidad en Meta y Google, y diseño de marca, para
          que lleguen más clientes a tu página. Los vemos contigo después de
          tener tu cotizador funcionando.
        </p>
      </section>

      <section className="mt-12 rounded bg-black/5 p-8">
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
