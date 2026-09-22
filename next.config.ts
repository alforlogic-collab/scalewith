import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  allowedDevOrigins: ["*.monkeycode-ai.live"],
};

export default nextConfig;
