import { ImageResponse } from "next/og";

export const alt = "NytKode — Systems that generate more revenue in less time";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            N/K
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            NytKode
          </span>
        </div>

        {/* Center Poster Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1000px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#ffffff",
            }}
          >
            Systems that generate more revenue in less time.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a3a3a3",
              lineHeight: 1.4,
            }}
          >
            Custom operational software, WhatsApp automation, and high-reliability business systems.
          </div>
        </div>

        {/* Footer Meta Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #262626",
            paddingTop: "32px",
            color: "#737373",
            fontSize: "20px",
            fontFamily: "monospace",
          }}
        >
          <div>nytkode.com</div>
          <div>India • Global Operations</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
