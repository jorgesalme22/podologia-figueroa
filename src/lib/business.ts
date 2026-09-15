// Datos de Podología Figueroa — todos verificados públicamente en Google Maps,
// Facebook, Instagram y Doctoralia el 15/09/2026. Si algún dato cambia
// (horario, teléfono, servicios), actualízalo aquí: se propaga automáticamente
// a toda la web (textos, metadatos y JSON-LD de Schema.org).
//
// Fuentes cruzadas para la dirección: Google Maps, Facebook e infopodologos.es
// coinciden en "33, Local 5"; Doctoralia y Páginas Amarillas muestran "35"
// (posible dato desactualizado en Doctoralia). Se ha priorizado la ficha de
// Google Maps y la propia página de Facebook del negocio.

export const business = {
  name: "Podología Figueroa",
  shortName: "Figueroa",
  tagline: "Clínica de podología en Alcalá de Henares",
  phoneDisplay: "910 34 81 32",
  phoneIntl: "+34910348132",
  email: "podologiafigueroa@gmail.com",
  address: {
    street: "Avenida de Lope de Figueroa, 33, Local 5",
    reference: "Junto a frutería y compro oro",
    postalCode: "28804",
    city: "Alcalá de Henares",
    province: "Madrid",
    country: "ES",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Podolog%C3%ADa+Figueroa+Avenida+de+Lope+de+Figueroa+33+Alcal%C3%A1+de+Henares",
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=Podolog%C3%ADa+Figueroa,+Avenida+de+Lope+de+Figueroa+33,+28804+Alcal%C3%A1+de+Henares&output=embed",
  instagramUrl: "https://www.instagram.com/podologiafigueroa/",
  instagramHandle: "@podologiafigueroa",
  facebookUrl: "https://www.facebook.com/PodologiaFigueroa/",
  doctoraliaUrl: "https://www.doctoralia.es/clinicas/podologia-figueroa",
  rating: {
    value: 4.5,
    count: 95,
    source: "Google",
  },
  hours: [
    { day: "Lunes", hours: "10:00–13:00 y 16:00–20:00" },
    { day: "Martes", hours: "10:00–13:00 y 16:00–20:00" },
    { day: "Miércoles", hours: "10:00–13:00 y 16:00–20:00" },
    { day: "Jueves", hours: "10:00–13:00 y 16:00–20:00" },
    { day: "Viernes", hours: "10:00–13:00 y 16:00–19:45" },
    { day: "Sábado", hours: "Cerrado" },
    { day: "Domingo", hours: "Cerrado" },
  ] as const,
  // Formato ISO 8601 para Schema.org — mañana y tarde por separado (horario partido real)
  openingHoursSpecification: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "13:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "16:00", closes: "20:00" },
    { days: ["Friday"], opens: "10:00", closes: "13:00" },
    { days: ["Friday"], opens: "16:00", closes: "19:45" },
  ],
  team: [
    {
      name: "Cristina Caballero Miñano",
      title: "Podóloga",
      collegiateNumber: "838282547",
      specialties: [
        "Patomecánica del pie",
        "Podología pediátrica",
        "Ortopodología",
        "Quiropodología",
      ],
    },
  ],
} as const;

export const telHref = `tel:${business.phoneIntl}`;
export const mailHref = `mailto:${business.email}`;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}, ${business.address.province}`;
