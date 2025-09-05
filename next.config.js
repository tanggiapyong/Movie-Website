/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Cloudflare Pages serverless deployment
  reactStrictMode: true,
  swcMinify: true,
  // Add custom configurations if needed (e.g., for Tailwind or ArtPlayer)
};

module.exports = nextConfig;
