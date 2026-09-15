import { CarIcon, PhoneIcon } from "./icons";
import { business, telHref } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary focus-ring flex-1 !bg-white"
        aria-label={`Cómo llegar a ${business.name}`}
      >
        <CarIcon className="size-4" />
        Cómo llegar
      </a>
      <a
        href={telHref}
        className="btn btn-primary focus-ring flex-1"
        aria-label={`Llamar a ${business.name} para pedir cita`}
      >
        <PhoneIcon className="size-4" />
        Llamar y pedir cita
      </a>
    </div>
  );
}
