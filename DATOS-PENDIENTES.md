# Datos pendientes de confirmar con la clínica

Este sitio se ha construido únicamente con información pública verificada
(Google Maps, Facebook, Instagram y Doctoralia) el **15/09/2026**. Antes de
presentarlo como la web oficial definitiva de Podología Figueroa, conviene
confirmar lo siguiente:

## 1. Discrepancia en el número de portal

Google Maps, Facebook e infopodologos.es indican **"Avenida de Lope de
Figueroa, 33, Local 5"**; Doctoralia y Páginas Amarillas indican **"35"**. Se
ha usado "33, Local 5" por ser el dato más consistente entre fuentes y por
proceder de la propia ficha de Facebook del negocio, pero conviene que la
clínica lo confirme por si Doctoralia tuviera un dato más reciente.

## 2. Fotografías reales

No se ha incrustado ninguna fotografía descargada de Google Maps, Instagram
o Facebook (esas plataformas no conceden licencia de reutilización libre en
sitios de terceros). Solo se ha podido confirmar la existencia de:

- Una foto de fachada real, subida por el propio negocio a Google Maps en
  febrero de 2022 (rótulo "PODOLOGÍA FIGUEROA" con toldo púrpura).
- Un logotipo (icono de huella) visible en el avatar de Instagram.

No se ha podido acceder al feed completo de Instagram ni a la galería de
Facebook porque ambas plataformas bloquean la navegación sin haber iniciado
sesión, así que no ha sido posible obtener un enlace permanente ("permalink")
de una publicación concreta para incrustarla oficialmente (como sí se hizo en
el proyecto hermano de Peluquería Canina Mimos). Si la clínica facilita fotos
en alta resolución, están listas para incorporarse en `src/components/Gallery.tsx`
y `Hero.tsx` (ver instrucciones en el README).

## 3. Precios de los tratamientos

No hay precios publicados en ninguna fuente pública consultada. La web actual
dice explícitamente "consúltalos sin compromiso por teléfono" en lugar de
mostrar cifras.

## 4. Horario del jueves

Una fuente secundaria (infopodologos.es) mostraba el jueves solo con horario
de tarde; la ficha de Google Maps (más reciente y con más detalle) muestra el
jueves con el mismo horario partido que el resto de días laborables
(10:00–13:00 y 16:00–20:00). Se ha priorizado Google Maps, pero conviene que
la clínica lo confirme.

## 5. Equipo completo

Solo se ha podido verificar con nombre completo, número de colegiada y
especialidades a **Cristina Caballero Miñano** (perfil individual en
Doctoralia). En las reseñas de Google aparecen mencionadas por su nombre de
pila otras profesionales (María, María José), pero no se ha podido confirmar
públicamente su cargo exacto ni titulación, así que no se han incluido como
fichas de equipo para no publicar información imprecisa. Si la clínica
facilita esos datos, pueden añadirse fácilmente en `src/lib/business.ts`
(array `team`) y se mostrarán automáticamente en `Team.tsx`.

## 6. Reserva de cita online / WhatsApp

Ninguna plataforma consultada (Doctoralia, Google, redes sociales) muestra un
sistema de reserva online activo, ni se ha encontrado un número de WhatsApp
oficial verificado. Por eso el CTA principal de la web es "llamar por
teléfono" en lugar de un botón de WhatsApp o reserva online. Si la clínica
dispone de alguno de estos canales, se puede añadir fácilmente.

## 7. Año de fundación e historia de la clínica

No se ha podido verificar públicamente el año exacto de apertura. Las
reseñas públicas más antiguas localizadas datan de 2016, lo que confirma
actividad desde al menos esa fecha, pero no se afirma ningún año de
fundación concreto en la web.

## 8. Aviso legal, política de privacidad y cookies

Estas tres páginas (`/aviso-legal`, `/privacidad`, `/cookies`) se han dejado
como placeholders explicativos, sin ningún texto legal inventado (CIF/NIF,
responsable del tratamiento, etc.), ya que deben ajustarse a la situación
fiscal y registral real de la clínica. Estas páginas se han marcado además
como `noindex` para que no se posicionen en buscadores hasta que tengan el
contenido legal definitivo.

## 9. Autorización para reutilizar contenido de Instagram/Facebook/Google

Si la clínica autoriza expresamente el uso de fotos ya publicadas en su
Instagram (@podologiafigueroa), Facebook o Google Maps, se pueden incorporar
directamente a la galería y al hero de la web.

---

Todo lo demás (nombre, dirección, teléfono, email, horario, valoración
4,5/5 con 95 reseñas en Google, servicios ofrecidos y las seis reseñas
citadas con su autor y fuente) está verificado con fuentes públicas a fecha
de creación de este sitio.
