import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 90],
  },
  allowedDevOrigins: ["127.0.0.1", "*.127.0.0.1"],
};

export default nextConfig;
