import { ImageResponse } from "next/og";

export const alt = "Lucas Demarré — AI & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#121212",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 540,
            height: 540,
            background:
              "radial-gradient(circle, rgba(210,166,51,0.28), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 42 }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              background: "#d2a633",
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "#d2a633",
              fontFamily: "monospace",
              letterSpacing: 4,
            }}
          >
            lucasdemarre.dev
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "#f4f0e8",
            lineHeight: 1.04,
            display: "flex",
          }}
        >
          Lucas Demarré
        </div>
        <div style={{ fontSize: 50, color: "#d2a633", marginTop: 18, display: "flex" }}>
          AI &amp; Software Developer
        </div>
        <div style={{ fontSize: 30, color: "#c4bdab", marginTop: 32, display: "flex" }}>
          Voice agents · Chatbots · Automation · Full-stack
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 12,
            background: "linear-gradient(90deg, #d2a633, #e8c45f)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
