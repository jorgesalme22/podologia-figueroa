import type { Metadata } from "next";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Opiniones",
  description:
    "4,5/5 en Google con 95 reseñas. Lee las opiniones reales de pacientes de Podología Figueroa en Alcalá de Henares.",
  alternates: { canonical: "/opiniones" },
};

export default function OpinionesPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Reviews />
    </main>
  );
}
