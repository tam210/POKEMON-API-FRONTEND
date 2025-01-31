/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,

  // Enable standalone output for Docker deployments (recommended)
  output: "standalone",

  // Configure images if you're using Next.js Image Optimization
  images: {
    domains: ["images.pokemontcg.io"], // Add domains for external images
  },

  // Enable ESLint and TypeScript during the build process
  eslint: {
    ignoreDuringBuilds: true, // Set to false if you want to enforce ESLint checks
  },
  typescript: {
    ignoreBuildErrors: true, // Set to false if you want to enforce TypeScript checks
  },

  // Optional: Configure webpack for custom behavior
  webpack: (config: any, { isServer }: any) => {
    // Add custom webpack configurations here if needed
    return config;
  },
};

export default nextConfig;