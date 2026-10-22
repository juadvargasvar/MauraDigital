"use client";

import { useState } from "react";
import { hasWhatsapp, whatsappHref } from "@/lib/site";

// Precios y reglas de EJEMPLO para la demostración. No son tarifas reales.
const PRODUCTOS = [
  { id: "ventana", nombre: "Ventana corrediza en aluminio", precioM2: 280000 },
  { id: "puerta", nombre: "Puerta de aluminio y vidrio", precioM2: 320000 },
  { id: "fija", nombre: "Vitrina o ventana fija", precioM2: 230000 },
  { id: "bano", nombre: "División de baño", precioM2: 350000 },
];

const VIDRIOS = [
  { id: "claro", nombre: "Claro 4 mm", extraM2: 0 },
  { id: "bronce", nombre: "Bronce 4 mm", extraM2: 30000 },
  { id: "templado", nombre: "Templado 6 mm", extraM2: 90000 },
];

const AREA_MINIMA_M2 = 0.5; // se cobra como mínimo por unidad
const INSTALACION = 0.12; // 12 % sobre el subtotal
const MIN_CM = 30;
const MAX_CM = 400;

function descuento(cantidad: number): number {
  if (cantidad >= 10) return 0.1;
  if (cantidad >= 5) return 0.05;
  return 0;
}

const cop = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);

const fieldClass = "mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40";

export default function Quoter() {
  const [producto, setProducto] = useState(PRODUCTOS[0].id);
  const [vidrio, setVidrio] = useState(VIDRIOS[0].id);
  const [ancho, setAncho] = useState("150");
  const [alto, setAlto] = useState("120");
  const [cantidad, setCantidad] = useState("1");
  const [instalacion, setInstalacion] = useState(false);

  const p = PRODUCTOS.find((x) => x.id === producto)!;
  const v = VIDRIOS.find((x) => x.id === vidrio)!;
  const anchoN = Number(ancho);
  const altoN = Number(alto);
  const cantN = Number(cantidad);

  const medidasOk =
    anchoN >= MIN_CM && anchoN <= MAX_CM && altoN >= MIN_CM && altoN <= MAX_CM;
  const cantOk = Number.isInteger(cantN) && cantN >= 1 && cantN <= 100;

  let resultado: {
    area: number;
    porUnidad: number;
    subtotal: number;
    desc: number;
    descValor: number;
    inst: number;
    total: number;
  } | null = null;

  if (medidasOk && cantOk) {
    const area = Math.max((anchoN / 100) * (altoN / 100), AREA_MINIMA_M2);
    const porUnidad = area * (p.precioM2 + v.extraM2);
    const subtotal = porUnidad * cantN;
    const desc = descuento(cantN);
    const descValor = subtotal * desc;
    const base = subtotal - descValor;
    const inst = instalacion ? base * INSTALACION : 0;
    const total = Math.round((base + inst) / 100) * 100;
    resultado = { area, porUnidad, subtotal, desc, descValor, inst, total };
  }

  const mensaje = resultado
    ? `Hola, Maura Digital. Probé la demo del cotizador de vidrios y aluminios: ${cantN} × ${p.nombre}, ${anchoN} × ${altoN} cm, vidrio ${v.nombre}${instalacion ? ", con instalación" : ""}. Total de la demo: ${cop(resultado.total)}. Quiero ver cómo se vería con mis productos.`
    : undefined;

  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label>
          Producto
          <select
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            className={fieldClass}
          >
            {PRODUCTOS.map((x) => (
              <option key={x.id} value={x.id}>
                {x.nombre}
              </option>
            ))}
          </select>
        </label>
        <label>
          Tipo de vidrio
          <select
            value={vidrio}
            onChange={(e) => setVidrio(e.target.value)}
            className={fieldClass}
          >
            {VIDRIOS.map((x) => (
              <option key={x.id} value={x.id}>
                {x.nombre}
              </option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label>
            Ancho (cm)
            <input
              type="number"
              inputMode="numeric"
              min={MIN_CM}
              max={MAX_CM}
              value={ancho}
              onChange={(e) => setAncho(e.target.value)}
              className={fieldClass}
            />
          </label>
          <label>
            Alto (cm)
            <input
              type="number"
              inputMode="numeric"
              min={MIN_CM}
              max={MAX_CM}
              value={alto}
              onChange={(e) => setAlto(e.target.value)}
              className={fieldClass}
            />
          </label>
        </div>
        <label>
          Cantidad
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={100}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-cyan-400"
            checked={instalacion}
            onChange={(e) => setInstalacion(e.target.checked)}
          />
          Incluir instalación
        </label>
      </form>

      <section
        aria-live="polite"
        className="rounded-xl border border-white/10 bg-white/5 p-8"
      >
        <h2 className="text-xl font-semibold">Tu cotización</h2>
        {resultado ? (
          <>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt>Área por unidad</dt>
                <dd>{resultado.area.toFixed(2)} m²</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Precio por unidad</dt>
                <dd>{cop(resultado.porUnidad)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Subtotal ({cantN})</dt>
                <dd>{cop(resultado.subtotal)}</dd>
              </div>
              {resultado.desc > 0 && (
                <div className="flex justify-between gap-4">
                  <dt>Descuento por cantidad ({resultado.desc * 100} %)</dt>
                  <dd>-{cop(resultado.descValor)}</dd>
                </div>
              )}
              {instalacion && (
                <div className="flex justify-between gap-4">
                  <dt>Instalación</dt>
                  <dd>{cop(resultado.inst)}</dd>
                </div>
              )}
            </dl>
            <p className="mt-4 flex justify-between gap-4 border-t border-white/20 pt-4 text-lg font-bold">
              <span>Total</span>
              <span>{cop(resultado.total)}</span>
            </p>
            <a
              href={whatsappHref(mensaje)}
              {...(hasWhatsapp
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
            >
              Enviar esta cotización por WhatsApp
            </a>
          </>
        ) : (
          <p className="mt-4 text-sm text-white/75">
            Escribe medidas entre {MIN_CM} y {MAX_CM} cm y una cantidad entre 1 y
            100 para ver el precio.
          </p>
        )}
      </section>
    </div>
  );
}
