
import { ImageResponse } from "next/og";

export const alt = "ZSell — Sell Smart. Grow Fast.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px",
          background: "#0B1B33",
          color: "#FFFFFF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 800,
            color: "#FFD928",
          }}
        >
          ZSell
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          <span>SELL SMART.</span>
          <span style={{ color: "#FF5A1F" }}>GROW FAST.</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 25,
            color: "#E2E8F0",
          }}
        >
          E-commerce setup · Business growth · AI tools
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 42,
            fontSize: 22,
            fontWeight: 700,
            color: "#FFD928",
          }}
        >
          www.zsell.in
        </div>

        <div
          style={{
            position: "absolute",
            right: -80,
            top: -100,
            width: 330,
            height: 330,
            borderRadius: 200,
            background: "#FF5A1F",
            opacity: 0.12,
          }}
        />
      </div>
    ),
    size,
  );
}
