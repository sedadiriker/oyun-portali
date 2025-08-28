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

export default nextConfig;