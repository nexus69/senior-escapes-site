/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/senior-escapes-site',
  assetPrefix: '/senior-escapes-site/',
};

module.exports = nextConfig;
