/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.BASE_ASSETS_API,
        port: process.env.BASE_ASSETS_PORT,
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
