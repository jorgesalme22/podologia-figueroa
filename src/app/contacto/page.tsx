import type { Metadata } from "next";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto y cita",
  description:
    "Pide cita en Podología Figueroa, Avenida de Lope de Figueroa 33, Alcalá de Henares. Teléfono, email, horario y ubicación.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Location />
      <Contact />
    </main>
  );
}
