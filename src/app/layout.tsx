import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { business } from "@/lib/business";
import StickyMobileBar from "@/components/StickyMobileBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const siteUrl = "https://podologia-figueroa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} – Podólogo en Alcalá de Henares`,
    template: `%s | ${business.name}`,
  },
  description:
    "Podología Figueroa: clínica de podología en Alcalá de Henares (Av. de Lope de Figueroa, 33). Estudios biomecánicos, podología diabética, pediátrica y cirugía de uña encarnada. 4,5/5 en Google con 95 reseñas.",
  keywords: [
    "podólogo Alcalá de Henares",
    "podología Alcalá de Henares",
    "clínica podológica Alcalá de Henares",
    "podólogo cerca de mí Alcalá de Henares",
    "tratamientos podológicos Alcalá de Henares",
    "Podología Figueroa",
    "podología diabética Alcalá de Henares",
    "podología infantil Alcalá de Henares",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} – Podólogo en Alcalá de Henares`,
    description:
      "Estudios biomecánicos, podología diabética, pediátrica y cirugía de uña encarnada en el centro de Alcalá de Henares. 4,5/5 en Google (95 reseñas).",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Podólogo en Alcalá de Henares`,
    description:
      "Clínica de podología en Alcalá de Henares. Estudios biomecánicos, podología diabética, pediátrica y más.",
  },
};

export const viewport = {
  themeColor: "#faf8f6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinica`,
  name: business.name,
  url: siteUrl,
  telephone: business.phoneIntl,
  email: business.email,
  priceRange: "€€",
  medicalSpecialty: "Podiatric",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.province,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: business.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
  },
  employee: business.team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    identifier: `Núm. colegiado ${member.collegiateNumber}`,
  })),
  sameAs: [business.instagramUrl, business.facebookUrl, business.doctoraliaUrl],
  areaServed: {
    "@type": "City",
    name: "Alcalá de Henares",
  },
  description:
    "Clínica de podología en Alcalá de Henares: estudios biomecánicos, podología diabética, podología pediátrica, ortesis de silicona y cirugía de uña encarnada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-berry focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <StickyMobileBar />
        <Script
          id="ld-json-medicalclinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
