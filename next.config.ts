import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Pin the workspace root so Turbopack stops complaining about stray
  // package-lock.json files in parent directories (e.g. ~/dev or ~).
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aplusproperty.care",
      },
    ],
  },
};

export default nextConfig;
