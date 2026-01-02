import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure webpack is used instead of Turbopack to avoid build errors
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
