import type { Metadata } from "next";
import Link from "next/link";
import WhyFigueroa from "@/components/WhyFigueroa";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Conoce Podología Figueroa: clínica de podología en Alcalá de Henares con más de 90 reseñas y una podóloga colegiada especializada en biomecánica, ortopodología y podología pediátrica.",
  alternates: { canonical: "/clinica" },
};

export default function ClinicaPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <section className="section-pad pb-0 md:pb-0">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">La clínica</span>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Podología Figueroa
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground-soft">
            Podología Figueroa es una clínica de podología situada en el barrio
            de El Val / Juan de Austria, en el centro de Alcalá de Henares. Sus
            reseñas públicas más antiguas datan de 2016, lo que confirma una
            trayectoria de al menos varios años atendiendo a pacientes del
            barrio, desde niños hasta personas mayores con pie diabético.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground-soft">
            Google identifica el negocio como gestionado por una mujer
            empresaria y como un espacio inclusivo. No se ha podido verificar
            públicamente el año exacto de apertura ni una biografía detallada
            de la clínica: si eres la propietaria y quieres ampliar esta
            sección con vuestra propia historia, filosofía o forma de trabajar,
            este bloque está preparado para ese texto.
          </p>
        </div>
      </section>

      <WhyFigueroa />
      <Team />

      <section className="container-x pb-20 pt-4 text-center">
        <Link href="/opiniones" className="btn btn-secondary focus-ring">
          Leer todas las opiniones →
        </Link>
      </section>
    </main>
  );
}
