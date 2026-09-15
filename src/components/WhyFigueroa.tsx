import {
  CheckIcon,
  FootprintIcon,
  HeartHandsIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
} from "./icons";

export const reasons = [
  {
    icon: HeartHandsIcon,
    title: "Trato cercano y personalizado",
    description:
      'Es lo que más repiten las reseñas reales: "trato inmejorable", "amabilidad y tacto con el paciente" y disposición a hacer hueco en la agenda cuando hace falta.',
  },
  {
    icon: FootprintIcon,
    title: "Podóloga colegiada",
    description:
      "Cristina Caballero Miñano (nº de colegiada 838282547) está especializada en patomecánica del pie, ortopodología y podología pediátrica.",
  },
  {
    icon: StarIcon,
    title: "4,5/5 sostenido en el tiempo",
    description:
      "95 opiniones en Google y reseñas positivas desde al menos 2016, con menciones constantes a la profesionalidad del equipo.",
  },
  {
    icon: SparkleIcon,
    title: "Instalaciones modernas y muy limpias",
    description:
      'Varios pacientes destacan en sus reseñas un local "luminoso y muy limpio" con "instalaciones muy modernas y buenas".',
  },
  {
    icon: ShieldCheckIcon,
    title: "Atención a pacientes de riesgo",
    description:
      "Seguimiento especializado del pie diabético, mencionado explícitamente por pacientes que acuden con familiares con diabetes.",
  },
  {
    icon: CheckIcon,
    title: "Negocio local de Alcalá de Henares",
    description:
      "Clínica identificada por Google como gestionada por una mujer empresaria, en el barrio de El Val / Juan de Austria.",
  },
];

export default function WhyFigueroa() {
  return (
    <section id="diferenciadores" className="section-pad bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Por qué Podología Figueroa</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Cuidado podológico de confianza, cerca de casa
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            Esto es lo que más valoran los pacientes que ya confían en la
            clínica, según sus propias reseñas públicas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-berry-dark shadow-sm ring-1 ring-border">
                <r.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground-soft">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
