/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/senior-escapes-site/' : '',
  basePath: isProd ? '/senior-escapes-site' : '',
};

module.exports = nextConfig;
