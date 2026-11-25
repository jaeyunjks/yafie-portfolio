import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

/**
 * Default social card (LinkedIn, Slack, iMessage previews) for every page.
 * Built from profile.ts, so it stays in step with the site.
 */
export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Full-stack", "Backend", "Applied AI", "Cloud", "1st · HackNow 2026"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 12% 18%, rgba(141,187,255,0.55), transparent 42%), radial-gradient(circle at 88% 22%, rgba(198,183,255,0.5), transparent 40%), linear-gradient(180deg, #eef4ff, #f8fbff)",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#2d5f9d", fontWeight: 700 }}>
          {"PORTFOLIO // " + profile.location.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 12, color: "#334155" }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            {chips.map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "2px solid #c9dcff",
                  background: "rgba(255,255,255,0.8)",
                  fontSize: 26,
                  color: "#2d5f9d",
                  fontWeight: 700,
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#475569" }}>
          <div style={{ display: "flex" }}>{profile.availability.long}</div>
          <div style={{ display: "flex" }}>{new URL(profile.links.portfolio).host}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
