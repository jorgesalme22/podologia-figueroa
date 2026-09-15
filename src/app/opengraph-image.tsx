import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(160deg, #e8c9d6 0%, #b8577f 45%, #6c1f42 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            🦶
          </div>
          <div style={{ fontSize: 30, color: "#fdf6f9", fontWeight: 700 }}>
            {business.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: "#fdf6f9",
              lineHeight: 1.1,
              maxWidth: 950,
            }}
          >
            Cuidado podológico cercano en Alcalá de Henares.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(253,246,249,0.9)",
            }}
          >
            {`Podología en ${business.address.city} · ${business.rating.value}/5 en Google (${business.rating.count} reseñas)`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
