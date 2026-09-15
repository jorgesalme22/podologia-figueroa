"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, FootprintIcon } from "./icons";
import { business, telHref } from "@/lib/business";

const links = [
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/clinica", label: "La clínica" },
  { href: "/galeria", label: "Galería" },
  { href: "/opiniones", label: "Opiniones" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 rounded-full"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-berry text-white">
            <FootprintIcon className="size-5" />
          </span>
          <span className="font-serif text-lg font-semibold leading-none md:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring rounded text-sm font-medium transition-colors hover:text-berry-dark ${
                  active ? "text-berry-dark" : "text-foreground-soft"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref}
            className="focus-ring flex items-center gap-2 rounded-full text-sm font-semibold text-foreground-soft hover:text-berry-dark"
          >
            <PhoneIcon className="size-4" />
            {business.phoneDisplay}
          </a>
          <Link href="/contacto" className="btn btn-primary focus-ring">
            Pedir cita
          </Link>
        </div>

        <Link
          href="/contacto"
          className="btn btn-primary focus-ring md:hidden !px-4 !py-2 !text-sm"
        >
          Pedir cita
        </Link>
      </div>

      <nav
        className="container-x flex gap-5 overflow-x-auto pb-3 text-sm font-medium text-foreground-soft lg:hidden"
        aria-label="Navegación principal (móvil)"
      >
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`focus-ring shrink-0 rounded ${active ? "text-berry-dark" : ""}`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
