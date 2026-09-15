import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Podología Figueroa.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <main id="contenido" className="flex-1 pb-20 pt-8 md:pb-0">
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Política de cookies
          </h1>
          <div className="card mt-8 p-6">
            <p className="text-sm leading-relaxed text-foreground-soft">
              Este sitio, en su versión actual, no utiliza cookies propias de
              seguimiento ni de analítica. El único contenido de terceros
              incrustado es el mapa de Google Maps de la sección de
              ubicación/contacto, que puede establecer sus propias cookies
              conforme a la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-berry-dark hover:underline"
              >
                política de privacidad de Google
              </a>
              .
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-soft">
              Si en el futuro se añaden herramientas de analítica o marketing,
              esta página se actualizará con el detalle de cada cookie y un
              panel de gestión de consentimiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
