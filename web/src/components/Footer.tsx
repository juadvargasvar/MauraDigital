import { BUSINESS_HOURS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 py-6 text-center text-sm text-black/60">
      <p>Maura Digital, Pitalito, Huila</p>
      {BUSINESS_HOURS && <p>Horario de atención: {BUSINESS_HOURS}</p>}
      <p className="mt-1">© 2026 Maura Digital. Todos los derechos reservados.</p>
    </footer>
  );
}
