/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/senior-escapes-site/',
  basePath: '/senior-escapes-site',
};

module.exports = nextConfig;
