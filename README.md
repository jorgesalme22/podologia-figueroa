# Podología Figueroa — sitio web

Sitio web oficial (propuesta) para **Podología Figueroa**, clínica de
podología en Alcalá de Henares (Madrid).

🔗 **Producción:** https://podologia-figueroa.vercel.app

## Sobre este proyecto

Todo el contenido (dirección, teléfono, email, horario, servicios,
valoración, reseñas y datos de la podóloga colegiada) está basado en
información pública verificada en Google Maps, Facebook, Instagram y
Doctoralia el **15/09/2026**. No se ha inventado ningún dato de precio,
antigüedad exacta, profesional ni testimonio. Los detalles que faltan por
confirmar con la clínica están listados en
[`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md).

**Nota sobre las fotografías:** no se ha incrustado ninguna fotografía real
descargada de Google Maps, Instagram o Facebook, porque esas plataformas no
conceden licencia de reutilización libre en sitios de terceros. La sección
de galería está diseñada con espacios ("placeholders") editoriales listos
para recibir las fotos reales que facilite la clínica — ver instrucciones
más abajo.

## Stack técnico

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Fuentes optimizadas con `next/font` (Fraunces + Inter, self-hosted)
- Imagen Open Graph y favicon generados dinámicamente con `next/og`
- `sitemap.xml`, `robots.txt` y JSON-LD (`MedicalClinic`, especialidad
  `Podiatric`) para SEO local
- Sin dependencias de terceros más allá de Next.js/React

Se eligió Next.js (en lugar de una SPA con Vite) porque el sitio necesita
metadatos y SEO por ruta (title, description, canonical, sitemap) sin montar
un backend: el App Router de Next.js resuelve esto de forma nativa y sigue
el mismo patrón que el resto de proyectos de este repositorio.

## Desarrollo local (Visual Studio Code)

1. Abre la carpeta `podologia-figueroa` en Visual Studio Code.
2. Abre una terminal integrada (``Ctrl+` ``) y ejecuta:

```bash
npm install
```

3. Arranca el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador. Los
   cambios en el código se recargan automáticamente.

### Generar la versión de producción

```bash
npm run build
npm run start
```

`npm run build` genera la build optimizada en `.next/`; `npm run start`
sirve esa build ya compilada (es la que se usaría en un despliegue real).

## Estructura del proyecto

```
podologia-figueroa/
├── public/               # Activos estáticos (vacío por ahora)
├── src/
│   ├── app/              # Rutas (App Router), layout, metadatos,
│   │                        sitemap/robots, imagen OG e icono
│   │   ├── tratamientos/
│   │   ├── clinica/
│   │   ├── galeria/
│   │   ├── opiniones/
│   │   ├── contacto/
│   │   ├── aviso-legal/
│   │   ├── privacidad/
│   │   └── cookies/
│   ├── components/       # Secciones y componentes de UI
│   └── lib/business.ts   # Única fuente de verdad de los datos del negocio
├── package.json
└── README.md
```

## Cómo actualizar los datos de contacto

Para actualizar teléfono, email, dirección, horario o el equipo, edita un
único archivo: [`src/lib/business.ts`](./src/lib/business.ts). El cambio se
propaga automáticamente a todos los textos de la web, al footer, a los
metadatos SEO y al JSON-LD de Schema.org.

## Cómo actualizar los textos de cada sección

Cada sección de la web es un componente independiente dentro de
`src/components/`:

| Sección | Archivo |
|---|---|
| Portada / hero | `Hero.tsx` |
| Tratamientos | `Services.tsx` |
| Diferenciadores | `WhyFigueroa.tsx` |
| Equipo | `Team.tsx` |
| Proceso de atención | `Process.tsx` |
| Galería | `Gallery.tsx` |
| Opiniones | `Reviews.tsx` |
| Ubicación / mapa | `Location.tsx` |
| Contacto | `Contact.tsx` |
| Cabecera / menú | `Header.tsx`, `StickyMobileBar.tsx` |
| Pie de página | `Footer.tsx` |

Basta con editar el texto directamente dentro de cada componente `.tsx`
(son textos en español, entre comillas o dentro de etiquetas JSX).

## Cómo sustituir las fotografías

1. Pide a la clínica las fotografías reales en alta resolución (fachada,
   recepción, consulta, equipamiento, equipo, detalles).
2. Colócalas en `public/images/` (crea la carpeta si no existe), por ejemplo
   `public/images/fachada.jpg`.
3. En `src/components/Gallery.tsx`, sustituye cada bloque de
   `<figure className="card relative aspect-[4/3] ...">` por una etiqueta
   `<Image src="/images/fachada.jpg" alt="Fachada de Podología Figueroa" fill className="object-cover" />`
   usando el componente `Image` de `next/image` (```import Image from "next/image"```
   al principio del archivo) para que Next.js optimice el peso y el
   `lazy loading` automáticamente.
4. Repite lo mismo en `Hero.tsx` si quieres sustituir la ilustración del
   hero por una fotografía real de la clínica.
5. El logotipo real (si la clínica lo facilita en SVG o PNG con fondo
   transparente) puede sustituir al icono de huella (`FootprintIcon`) en
   `Header.tsx` y `Footer.tsx`.

## Pendiente

Ver [`DATOS-PENDIENTES.md`](./DATOS-PENDIENTES.md) para la lista completa de
datos a confirmar con la clínica (precios, fotos reales, discrepancias de
dirección, etc.) antes de presentar este sitio como la web oficial
definitiva del negocio.
