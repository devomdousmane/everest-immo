import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Redirige tout le trafic de vytimo.com vers everest-immo.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "vytimo.com" }],
        destination: "https://everest-immo.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vytimo.com" }],
        destination: "https://everest-immo.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
