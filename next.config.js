/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.cdn.famobi.com",
      },
    ],
  },
};

module.exports = nextConfig;

const { withSitemap } = require('next-sitemap');

module.exports = withSitemap(nextConfig);