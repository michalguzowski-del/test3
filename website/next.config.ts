import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test3',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
