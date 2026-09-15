import Link from "next/link";
import {
  FacebookIcon,
  FootprintIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";
import { business, fullAddress, mailHref, telHref } from "@/lib/business";

const siteLinks = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/clinica", label: "La clínica" },
  { href: "/galeria", label: "Galería" },
  { href: "/opiniones", label: "Opiniones" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-berry text-white">
              <FootprintIcon className="size-4" />
            </span>
            <span className="font-serif text-lg font-semibold">
              {business.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-foreground-soft">
            Clínica de podología en el centro de {business.address.city}.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Podología Figueroa"
              className="focus-ring text-foreground-soft hover:text-berry-dark"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Podología Figueroa"
              className="focus-ring text-foreground-soft hover:text-berry-dark"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegación</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground-soft">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring hover:text-berry-dark">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-foreground-soft">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 size-4 shrink-0" />
              {fullAddress}
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 shrink-0" />
              <a href={telHref} className="focus-ring hover:text-berry-dark">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0" />
              <a href={mailHref} className="focus-ring break-all hover:text-berry-dark">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Horario</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground-soft">
            <li className="flex justify-between gap-6">
              <span>Lunes – Jueves</span>
              <span>10:00–13:00 y 16:00–20:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Viernes</span>
              <span>10:00–13:00 y 16:00–19:45</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Sáb. – Dom.</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container-x flex flex-col gap-3 text-xs text-foreground-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Enlaces legales">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="focus-ring hover:text-berry-dark">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container-x mt-3 text-xs text-foreground-soft">
          Datos verificados en Google Maps, Facebook, Instagram y Doctoralia ·
          Sitio en revisión, pendiente de validación por la clínica. Esta web
          tiene fines informativos y no sustituye una valoración profesional
          presencial.
        </div>
      </div>
    </footer>
  );
}
