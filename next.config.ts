import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionSourceMaps: false,
  reactStrictMode: false,
  swcMinify: true,
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
