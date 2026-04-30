import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/constants";

/**
 * Dynamic Open Graph image — Next.js convention.
 * Renders at /opengraph-image as a 1200×630 PNG, automatically referenced as
 * <meta property="og:image"> across the site.
 *
 * Edge runtime + JSX → PNG, no asset to maintain manually.
 */
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BRAND.name} — Home maintenance and EV charger installation in Miami`;

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #040e3f 0%, #082259 60%, #163a6e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top-left red accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#c81423",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 600,
            }}
          >
            Miami · Property Care
          </div>
        </div>

        {/* Center — main message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Your Home Cared,
          </div>
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ef3b54",
              fontStyle: "italic",
            }}
          >
            Your Life Free.
          </div>
        </div>

        {/* Bottom — brand + tags */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: "44px",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              {BRAND.name}
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              aplusproperty.care
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["Maintenance Plans", "EV Chargers", "Hospitality-Grade"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(200, 20, 35, 0.18)",
                  border: "1px solid rgba(200, 20, 35, 0.5)",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
