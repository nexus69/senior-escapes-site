/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuration optimisée pour Netlify
  distDir: 'out',
  // Désactiver les optimisations qui peuvent causer des problèmes sur Netlify
  swcMinify: true,
  experimental: {
    // Optimisations pour les sites statiques
    optimizeCss: true,
  }
};

module.exports = nextConfig;