/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 13/14 : export statique
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // Désactive ESLint pendant le build Vercel
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;