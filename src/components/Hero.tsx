import Link from "next/link";
import { CarIcon, FootprintIcon, PhoneIcon, StarIcon } from "./icons";
import { business, telHref } from "@/lib/business";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 85% 10%, rgba(138,42,85,0.10), transparent), radial-gradient(50% 45% at 5% 95%, rgba(79,109,95,0.14), transparent)",
        }}
      />
      <div className="container-x grid gap-12 pt-10 pb-16 md:grid-cols-2 md:items-center md:pt-16 md:pb-24">
        <div>
          <div className="eyebrow">
            <StarIcon className="size-3.5 text-gold" />
            {business.rating.value}/5 en Google · {business.rating.count} opiniones
          </div>

          <h1 className="mt-4 text-4xl leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-[3.4rem]">
            Cuidado podológico cercano en{" "}
            <span className="text-berry-dark">Alcalá de Henares.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg text-foreground-soft">
            En Podología Figueroa cuidamos la salud de tus pies con trato
            cercano y atención personalizada: desde la primera visita hasta el
            tratamiento de biomecánica, pie diabético o podología infantil.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telHref} className="btn btn-primary focus-ring">
              <PhoneIcon className="size-4.5" />
              Pedir cita: {business.phoneDisplay}
            </a>
            <Link href="/tratamientos" className="btn btn-secondary focus-ring">
              Ver tratamientos
            </Link>
          </div>

          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm text-foreground-soft hover:text-berry-dark"
          >
            <CarIcon className="size-4" />
            {business.address.street}, {business.address.city} · Cómo llegar
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="card relative aspect-[4/5] overflow-hidden !rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(37,31,34,0.35)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #e8c9d6 0%, #b8577f 45%, #6c1f42 100%)",
              }}
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full opacity-90"
              aria-hidden="true"
            >
              <circle cx="330" cy="60" r="90" fill="#f2dfe8" opacity="0.25" />
              <circle cx="40" cy="460" r="120" fill="#4f6d5f" opacity="0.2" />
              <g fill="#fdf6f9" opacity="0.95">
                <path d="M195 300c-25 0-40-20-37-48 4-32-6-44-11-63-4-16-6-31-6-44 0-40 22-70 47-70s47 32 47 76c0 21-4 32-9 45-6 16-11 30-8 51 2 15-9 21-23 21Z" />
                <circle cx="255" cy="150" r="14" />
                <circle cx="273" cy="176" r="12" />
                <circle cx="278" cy="205" r="10" />
                <circle cx="274" cy="232" r="9" />
              </g>
            </svg>
            <Link
              href="/clinica"
              className="focus-ring absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 pt-16"
            >
              <p className="text-sm font-medium text-white/90 underline-offset-2 hover:underline">
                Conoce a la clínica →
              </p>
            </Link>
          </div>

          <div className="card absolute -left-4 top-6 flex items-center gap-2 !rounded-2xl px-4 py-3 shadow-lg sm:-left-8">
            <span className="flex size-9 items-center justify-center rounded-full bg-sage-tint text-sage">
              <FootprintIcon className="size-4.5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Podóloga colegiada</p>
              <p className="text-xs text-foreground-soft">Nº col. 838282547</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
