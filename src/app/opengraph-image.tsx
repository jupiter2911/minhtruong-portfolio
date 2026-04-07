import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const runtime = "edge";
export const alt = portfolioData.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const { profile, seo } = portfolioData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 80,
            height: 6,
            background: "#2563eb",
            borderRadius: 3,
            marginBottom: 32,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#e6edf3",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {profile.title}
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#58a6ff",
            marginBottom: 24,
          }}
        >
          {profile.headline}
        </div>

        {/* Location */}
        <div style={{ fontSize: 20, color: "#8b949e" }}>{profile.location}</div>

        {/* Bottom: site URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 16,
            color: "#30363d",
          }}
        >
          {seo.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
