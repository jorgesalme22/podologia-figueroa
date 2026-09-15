import { CarIcon, ClockIcon, PinIcon } from "./icons";
import { business, fullAddress } from "@/lib/business";

export default function Location() {
  return (
    <section id="ubicacion" className="section-pad bg-surface">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Ubicación</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Estamos en el centro de {business.address.city}
          </h2>
          <p className="mt-3 text-sm text-foreground-soft">
            {business.address.reference}, zona El Val / Juan de Austria.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="card overflow-hidden lg:col-span-3">
            <iframe
              title={`Mapa de ${business.name}`}
              src={business.googleMapsEmbedSrc}
              loading="lazy"
              className="h-80 w-full lg:h-full lg:min-h-[22rem]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="card flex items-start gap-3 p-5">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-berry-dark" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="mt-1 text-sm text-foreground-soft">{fullAddress}</p>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-dark hover:underline"
                >
                  <CarIcon className="size-4" />
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 size-5 shrink-0 text-berry-dark" />
                <h3 className="font-semibold">Horario</h3>
              </div>
              <dl className="mt-3 space-y-1.5 text-sm">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-foreground-soft">{h.day}</dt>
                    <dd
                      className={
                        h.hours === "Cerrado" ? "text-foreground-soft" : "font-medium"
                      }
                    >
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
