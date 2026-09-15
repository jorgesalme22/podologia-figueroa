import type { Metadata } from "next";
import { business, mailHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Podología Figueroa.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main id="contenido" className="flex-1 pb-20 pt-8 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Política de privacidad
          </h1>
          <div className="card mt-8 p-6">
            <p className="text-sm leading-relaxed text-foreground-soft">
              Esta web no incluye formularios que recojan datos personales ni
              información de salud: los canales de contacto (teléfono, email,
              redes sociales) llevan directamente a los servicios propios de
              cada plataforma, con sus propias políticas de privacidad.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-soft">
              El texto legal completo de la política de privacidad —
              responsable del tratamiento, base legal, plazos de conservación
              y derechos ARCO/RGPD— está pendiente de que {business.name}{" "}
              lo facilite, ya que debe ajustarse a su situación real como
              responsable del tratamiento de datos de pacientes. No se ha
              redactado ningún texto genérico para evitar publicar
              información legal incorrecta.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-soft">
              Para cualquier consulta sobre privacidad, puedes escribir a{" "}
              <a href={mailHref} className="focus-ring text-berry-dark hover:underline">
                {business.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
