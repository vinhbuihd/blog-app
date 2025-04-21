import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "**/.next/**",
        "C:/Users/Admin/Application Data/**",
        "C:/Users/Admin/Cookies/**",
      ],
    };
    return config;
  },
};

export default nextConfig;
