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
  async rewrites() {
    return [
      {
        source: "/.well-known/llms.txt",
        destination: "/llms.txt",
      },
    ];
  },
  async redirects() {
    return [
      // URL antiga usada em anúncios EV — removida do site, mantém o tráfego vivo
      {
        source: "/ev",
        destination: "/services/ev-charger-installation",
        permanent: true,
      },
      // URL antiga indexada pelo Google (GSC 404)
      {
        source: "/month",
        destination: "/maintenance-plans",
        permanent: true,
      },
      // Login agora vive no app Aplus PRO
      {
        source: "/admin-login",
        destination: "https://app.aplusproperty.care/login",
        permanent: true,
      },
    ];
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
