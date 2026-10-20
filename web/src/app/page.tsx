import Link from "next/link";

export default function Home() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Hacemos crecer tu negocio en el mundo digital
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-black/70">
        Estrategia, contenido y publicidad para que más clientes te encuentren.
        (Texto provisional: ver docs/negocio/servicios.md)
      </p>
      <Link
        href="/contacto"
        className="mt-8 inline-block rounded bg-black px-6 py-3 text-white"
      >
        Solicita una cotización
      </Link>
    </section>
  );
}
