import type { Metadata } from "next";
import { business, fullAddress, mailHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Podología Figueroa.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <main id="contenido" className="flex-1 pb-20 pt-8 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">Aviso legal</h1>
          <div className="card mt-8 p-6">
            <p className="text-sm leading-relaxed text-foreground-soft">
              Esta página está pendiente de completar con el texto legal
              oficial de {business.name}: identificación fiscal (CIF/NIF),
              datos registrales y condiciones de uso del sitio. No se ha
              redactado ningún texto legal genérico ni inventado, ya que
              podría no ajustarse a la situación fiscal y registral real de la
              clínica.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-soft">
              Mientras tanto, los datos de contacto verificados públicamente
              son:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-foreground-soft">
              <li>{business.name}</li>
              <li>{fullAddress}</li>
              <li>
                <a href={mailHref} className="focus-ring text-berry-dark hover:underline">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
