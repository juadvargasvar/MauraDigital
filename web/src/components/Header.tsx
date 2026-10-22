import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-y-3 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold">
          <Image
            src="/logo-maura-digital.jpg"
            alt=""
            width={40}
            height={40}
            priority
            className="rounded-lg ring-1 ring-cyan-400/40"
          />
          Maura Digital
        </Link>
        <ul className="flex gap-4 text-sm sm:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white/80 transition-colors hover:text-cyan-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
