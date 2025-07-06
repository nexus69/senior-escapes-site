/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Suppression des configurations problématiques pour le développement
  // basePath et assetPrefix sont uniquement pour la production
};

module.exports = nextConfig;