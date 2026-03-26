import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  rewrites: async () => [
    {
      source: "/backend/:path*",
      destination: `${process.env.BACKEND_URL ?? "http://localhost:6100"}/:path*`,
    },
  ],
};

export default nextConfig;
