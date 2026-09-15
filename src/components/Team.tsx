import { CheckIcon, FootprintIcon } from "./icons";
import { business } from "@/lib/business";

export default function Team() {
  return (
    <section id="equipo" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Equipo</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Un equipo cercano, con formación colegiada
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {business.team.map((member) => (
            <div key={member.name} className="card p-7 lg:col-span-1">
              <span className="flex size-14 items-center justify-center rounded-full bg-berry-tint text-berry-dark">
                <FootprintIcon className="size-7" />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-berry-dark">{member.title}</p>
              <p className="mt-1 text-xs text-foreground-soft">
                Nº de colegiada: {member.collegiateNumber}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground-soft">
                {member.specialties.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-sage" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="card flex flex-col justify-center gap-3 p-7 lg:col-span-2">
            <h3 className="text-lg font-semibold">Un equipo que sus pacientes valoran por su cercanía</h3>
            <p className="text-sm leading-relaxed text-foreground-soft">
              Además de Cristina, en las reseñas públicas de pacientes en
              Google aparecen mencionadas con cariño otras profesionales del
              centro por su nombre de pila —como María y María José—,
              destacando siempre la amabilidad en la atención y la limpieza de
              las instalaciones. No publicamos aquí más datos de las que no
              hemos podido verificar cargo ni titulación de forma pública,
              para no dar información inexacta: la propia clínica puede
              completar esta sección con la ficha completa de su equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
