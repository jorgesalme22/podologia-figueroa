import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";
import { business, fullAddress, mailHref, telHref } from "@/lib/business";

const channels = [
  {
    icon: PhoneIcon,
    label: "Teléfono",
    value: business.phoneDisplay,
    href: telHref,
    primary: true,
    cta: "Llamar ahora",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: business.email,
    href: mailHref,
    cta: "Escribir",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: business.instagramHandle,
    href: business.instagramUrl,
    external: true,
    cta: "Ver perfil",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Podología Figueroa",
    href: business.facebookUrl,
    external: true,
    cta: "Ver página",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section-pad">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-[#251f22] text-[#f5edf0]">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
            <div className="min-w-0">
              <span className="eyebrow !text-[#e0a8c1]">Contacto y cita</span>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Pide tu cita en Podología Figueroa
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                No hay reserva online disponible actualmente: la forma más
                rápida de pedir cita es llamando por teléfono. También puedes
                escribir por email.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex min-w-0 items-start gap-3">
                  <PinIcon className="mt-0.5 size-5 shrink-0 text-[#e0a8c1]" />
                  <span className="min-w-0 text-white/80">{fullAddress}</span>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <ClockIcon className="mt-0.5 size-5 shrink-0 text-[#e0a8c1]" />
                  <span className="min-w-0 text-white/80">
                    Lun–Jue 10:00–13:00 y 16:00–20:00 · Vie 10:00–13:00 y
                    16:00–19:45 · Sáb–Dom cerrado
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={`focus-ring flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border px-5 py-4 transition-colors ${
                    c.primary
                      ? "border-berry bg-berry hover:bg-berry-dark"
                      : "border-white/15 hover:bg-white/5"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                        c.primary ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/60">{c.label}</span>
                      <span className="block truncate font-medium">{c.value}</span>
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold">{c.cta} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-foreground-soft">
          No recopilamos datos médicos a través de esta web: para cualquier
          consulta sobre tu salud, contacta directamente por teléfono o email.
        </p>
      </div>
    </section>
  );
}
