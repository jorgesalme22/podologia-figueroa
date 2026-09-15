import {
  BabyFootIcon,
  BandageIcon,
  DropletIcon,
  GaitIcon,
  InsoleIcon,
  NeedleIcon,
  ScalpelIcon,
  ShieldCheckIcon,
} from "./icons";
import { business, telHref } from "@/lib/business";

// Tratamientos verificados cruzando la ficha de Doctoralia (clínica y perfil
// de Cristina Caballero Miñano) y el directorio infopodologos.es. No se
// incluye ningún servicio, precio ni promesa de resultado que no aparezca en
// esas fuentes públicas.
export const services = [
  {
    icon: ShieldCheckIcon,
    name: "Primera visita de podología",
    description:
      "Valoración inicial del estado de tus pies para identificar el problema y orientar el tratamiento más adecuado.",
  },
  {
    icon: ScalpelIcon,
    name: "Quiropodia",
    description:
      "Cuidado podológico general: durezas, callosidades y estado de las uñas, con instrumental clínico.",
  },
  {
    icon: GaitIcon,
    name: "Estudio biomecánico y de la marcha",
    description:
      "Análisis de la pisada y la marcha mediante baropodometría electrónica para detectar alteraciones biomecánicas.",
  },
  {
    icon: InsoleIcon,
    name: "Ortesis de silicona y plantillas",
    description:
      "Ortesis correctivas y de descarga a medida, elaboradas a partir del estudio de la pisada.",
  },
  {
    icon: DropletIcon,
    name: "Podología diabética",
    description:
      "Atención especializada al pie de riesgo en personas con diabetes, con revisión periódica del estado de la piel y la circulación.",
  },
  {
    icon: BabyFootIcon,
    name: "Podología pediátrica",
    description:
      "Revisión y seguimiento del desarrollo del pie en niños, una de las áreas de especialización de la clínica.",
  },
  {
    icon: BandageIcon,
    name: "Cirugía de uña encarnada",
    description:
      "Tratamiento quirúrgico ambulatorio de la onicocriptosis (uña encarnada) bajo anestesia local.",
  },
  {
    icon: NeedleIcon,
    name: "Punción seca y vendaje neuromuscular",
    description:
      "Técnicas complementarias para el tratamiento del dolor musculoesquelético relacionado con el pie y la marcha.",
  },
];

export default function Services() {
  return (
    <section id="tratamientos" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Tratamientos</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Podología especializada para cada etapa de la vida
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            Estos son los tratamientos que Podología Figueroa tiene publicados
            en sus fichas profesionales. Los precios no están publicados —
            consúltalos sin compromiso por teléfono.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="card group p-6 transition-shadow hover:shadow-lg">
              <span className="flex size-12 items-center justify-center rounded-xl bg-berry-tint text-berry-dark">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-soft">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-foreground-soft">
            ¿No sabes qué tratamiento necesitas? Cuéntanos qué te ocurre y te
            orientamos por teléfono.
          </p>
          <a href={telHref} className="btn btn-primary focus-ring shrink-0">
            Llamar: {business.phoneDisplay}
          </a>
        </div>

        <p className="mt-6 text-xs text-foreground-soft">
          Información con fines orientativos. No sustituye un diagnóstico
          profesional presencial; ante cualquier duda médica, consulta
          directamente con la clínica.
        </p>
      </div>
    </section>
  );
}
