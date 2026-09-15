import { FacebookIcon, FootprintIcon, ImagePlaceholderIcon, InstagramIcon } from "./icons";
import { business } from "@/lib/business";

// No se ha incrustado ninguna fotografía real de terceros (Google Maps,
// Instagram, Facebook) en este componente: esas plataformas no conceden
// licencia de reutilización libre de sus fotos en sitios de terceros, y
// descargarlas habría sido una infracción de derechos de autor. En su lugar,
// cada "hueco" está preparado para que la clínica suba su fotografía real
// (ver instrucciones en README.md y DATOS-PENDIENTES.md).
const slots = [
  { label: "Fachada", hint: "Rótulo y entrada de la clínica" },
  { label: "Recepción", hint: "Zona de espera y atención" },
  { label: "Consulta", hint: "Gabinete de tratamiento" },
  { label: "Equipamiento", hint: "Baropodómetro y material clínico" },
  { label: "Equipo", hint: "Profesionales de la clínica" },
  { label: "Detalles", hint: "Instalaciones y cuidado del espacio" },
];

const gradients = [
  "linear-gradient(150deg, #f2dfe8 0%, #d79fb7 100%)",
  "linear-gradient(150deg, #e2ece5 0%, #9db8a9 100%)",
  "linear-gradient(150deg, #ece3e6 0%, #c9b3bd 100%)",
  "linear-gradient(150deg, #f3eef0 0%, #b8577f 100%)",
  "linear-gradient(150deg, #e2ece5 0%, #4f6d5f 100%)",
  "linear-gradient(150deg, #f2dfe8 0%, #6c1f42 100%)",
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Galería</span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Las instalaciones, en cuanto la clínica nos las facilite
          </h2>
          <p className="mt-4 text-lg text-foreground-soft">
            Preferimos no mostrar fotos de archivo genéricas como si fueran de
            la clínica. Estos espacios están preparados y listos para recibir
            las fotografías reales de Podología Figueroa; mientras tanto,
            puedes ver su contenido real y verificado en sus redes sociales.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, i) => (
            <figure
              key={slot.label}
              className="card relative aspect-[4/3] overflow-hidden !rounded-2xl"
            >
              <div className="absolute inset-0" style={{ background: gradients[i] }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/90">
                <ImagePlaceholderIcon className="size-8" />
                <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  Foto pendiente de la clínica
                </span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <p className="text-sm font-semibold text-white">{slot.label}</p>
                <p className="text-xs text-white/75">{slot.hint}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 card flex flex-col items-center gap-5 p-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-berry-tint text-berry-dark">
            <FootprintIcon className="size-7" />
          </span>
          <div>
            <h3 className="text-xl font-semibold">
              Mientras tanto, mira su día a día real
            </h3>
            <p className="mx-auto mt-2 max-w-md text-foreground-soft">
              Podología Figueroa publica fotos y vídeos verificados en sus
              redes sociales oficiales.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary focus-ring"
            >
              <InstagramIcon className="size-4.5" />
              {business.instagramHandle}
            </a>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring"
            >
              <FacebookIcon className="size-4.5" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
