import type { Metadata } from "next";
import Services from "@/components/Services";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Tratamientos podológicos",
  description:
    "Tratamientos podológicos en Alcalá de Henares: estudio biomecánico, podología diabética, podología pediátrica, ortesis de silicona y cirugía de uña encarnada.",
  alternates: { canonical: "/tratamientos" },
};

export default function TratamientosPage() {
  return (
    <main id="contenido" className="flex-1 pb-16 pt-8 md:pb-0">
      <Services />
      <Process />
    </main>
  );
}
