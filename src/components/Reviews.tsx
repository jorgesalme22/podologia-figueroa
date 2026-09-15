import { StarIcon } from "./icons";
import { business } from "@/lib/business";

// Reseñas reales y públicas, verificadas el 15/09/2026 en las fichas de
// Google Maps y Doctoralia de Podología Figueroa. Se muestran con el nombre
// tal como aparece publicado por cada plataforma (algunas ya abreviadas por
// el propio autor). No se ha redactado ni modificado ningún testimonio.
export const reviews = [
  {
    name: "Brenda R.",
    time: "Google · hace 3 meses · Local Guide",
    text: "Excelente. Cristina Caballero es un 10. Entré con un problema el cual otros 2 podólogos no me solucionaron y ella me explicó absolutamente todo, con detalle de lo que tenía y de cómo se podía solucionar. Salí muy satisfecha.",
  },
  {
    name: "Ma Jesús",
    time: "Google · hace 2 meses",
    text: "Cristina es muy buena profesional, además de muy agradable. María, persona que nos da las citas, es también muy buena profesional y muy agradable.",
  },
  {
    name: "Mercedes Blazquez",
    time: "Google · hace 2 meses",
    text: "Llevamos un tiempo yendo a la podóloga. Aparte de la profesionalidad de María José y la amabilidad de María, quiero destacar la limpieza y pulcritud de la clínica en general.",
  },
  {
    name: "Rosa Maria Escriba Huerta",
    time: "Doctoralia · sept. 2020",
    text: "Es una gran profesional, aparte de su agrado y atención en el trato con el paciente. Las instalaciones perfectas.",
  },
  {
    name: "Paciente",
    time: "Doctoralia · sept. 2018",
    text: "El trato inmejorable, como profesional la mejor. Mi hija se iba a estudiar fuera y le hizo hueco como pudo en su agenda para tratarle dos papilomas; en tres semanas estaba el pie perfecto.",
  },
  {
    name: "Paciente",
    time: "Doctoralia · feb. 2018",
    text: "Fue la primera vez que fui a un podólogo y la impresión fue muy buena. El sitio, luminoso y muy limpio, y las instalaciones muy modernas y buenas.",
  },
];

export function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="size-4" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="opiniones" className="section-pad bg-surface">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Opiniones</span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Lo que cuentan quienes ya han venido
            </h2>
          </div>
          <div className="card flex shrink-0 items-center gap-4 px-6 py-4">
            <div>
              <p className="font-serif text-3xl font-semibold leading-none">
                {business.rating.value}
              </p>
              <Stars />
            </div>
            <div className="h-10 w-px bg-border" />
            <p className="text-sm text-foreground-soft">
              {business.rating.count} reseñas
              <br />
              en Google
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={`${r.name}-${i}`} className="card flex flex-col p-6">
              <Stars />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="text-foreground-soft">{r.time}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-foreground-soft">
          Reseñas públicas y reales publicadas en las fichas de Google y
          Doctoralia de {business.name}, tal como las escribieron sus
          autores. Enlaces directos a las reseñas completas:{" "}
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-medium text-berry-dark hover:underline"
          >
            Google
          </a>{" "}
          ·{" "}
          <a
            href={business.doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-medium text-berry-dark hover:underline"
          >
            Doctoralia
          </a>
          .
        </p>
      </div>
    </section>
  );
}
