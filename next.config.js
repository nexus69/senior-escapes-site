/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique autorisé (OK sur Vercel aussi)
  output: 'export',
  trailingSlash: true,

  // Évite l’optimisation des images côté Next (tu utilises des images statiques)
  images: { unoptimized: true },

  // Vercel : ne pas échouer le build pour des warnings ESLint
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;