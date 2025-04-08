/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Enable styled-components compatibility
  },
  experimental: {
    // Updated Turbopack configuration for Next.js 15
    turbo: {}
  },
};

module.exports = nextConfig; 