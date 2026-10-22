import { BUSINESS_HOURS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 pb-28 pt-10 text-center text-sm text-white/60">
      <p>Maura Digital, Pitalito, Huila</p>
      {BUSINESS_HOURS && <p>Horario de atención: {BUSINESS_HOURS}</p>}
      <p className="mt-1">© 2026 Maura Digital. Todos los derechos reservados.</p>
    </footer>
  );
}
