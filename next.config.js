/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/senior-escapes-site', // correspond exactement au nom de ton dépôt GitHub
};

module.exports = nextConfig;
