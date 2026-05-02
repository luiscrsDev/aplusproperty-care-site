import { ImageResponse } from "next/og";

/**
 * Generates the browser favicon (32x32) at /icon and is auto-injected by
 * Next as <link rel="icon"> in the <head> of every route.
 *
 * Design: navy circle background with red "A+" wordmark — matches the
 * brand palette (--brand-navy #040E3F, --brand-red #E63946).
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          fontFamily: "system-ui, sans-serif",
          borderRadius: 6,
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
