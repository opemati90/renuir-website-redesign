import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable Turbopack to avoid build errors on Vercel
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
