import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Instalaciones de Podología Figueroa en Alcalá de Henares. Galería preparada para fotografías reales, con enlaces a Instagram y Facebook mientras tanto.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Gallery />
    </main>
  );
}
