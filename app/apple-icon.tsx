import { ImageResponse } from "next/og";

/**
 * Generates the iOS home-screen icon (180x180) auto-injected as
 * <link rel="apple-touch-icon"> in the <head>.
 *
 * Same brand palette as app/icon.tsx, scaled up.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#040E3F",
          color: "#E63946",
          fontSize: 110,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, sans-serif",
          borderRadius: 36,
        }}
      >
        A+
      </div>
    ),
    {
      ...size,
    },
  );
}
