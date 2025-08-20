/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique (Next 13/14)
  output: 'export',
  trailingSlash: true,

  // Vercel: pas de distDir "out", pas de tweaks Netlify
  images: { unoptimized: true },

  // Evite d'échouer le build sur des warnings ESLint en CI
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;