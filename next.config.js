/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api.fifa.com", "fwc22.s3.eu-west-3.amazonaws.com"],
  },
};

module.exports = nextConfig;
