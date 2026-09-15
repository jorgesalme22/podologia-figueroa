import { CalendarIcon, ChatIcon, FootprintIcon, HeartHandsIcon } from "./icons";

// Estructura orientativa de la experiencia de paciente, basada en la lógica
// habitual de una consulta de podología (primera visita → valoración →
// tratamiento → seguimiento). No se afirma que sea un protocolo oficial de
// Podología Figueroa: es un esquema editable, listo para que la clínica lo
// ajuste a su proceso real.
const steps = [
  {
    icon: ChatIcon,
    title: "Contacta con la clínica",
    description: "Llama o escribe por email contando brevemente qué te ocurre.",
  },
  {
    icon: CalendarIcon,
    title: "Primera visita",
    description:
      "Valoración inicial del estado de tus pies para identificar el problema.",
  },
  {
    icon: FootprintIcon,
    title: "Tratamiento recomendado",
    description:
      "Se plantea el tratamiento más adecuado para tu caso, con la técnica que corresponda.",
  },
  {
    icon: HeartHandsIcon,
    title: "Seguimiento",
    description:
      "Revisión de la evolución y recomendaciones para el cuidado diario de tus pies.",
  },
];

export default function Process() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo es tu visita</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Un proceso de atención sencillo y claro
          </h2>
          <p className="mt-4 text-sm text-foreground-soft">
            Esquema orientativo general de una consulta de podología. El
            proceso exacto puede variar según el tratamiento — coméntalo
            directamente con la clínica al pedir cita.
          </p>
        </div>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-berry text-white">
                  <s.icon className="size-5" />
                </span>
                <span className="font-serif text-2xl text-border" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
