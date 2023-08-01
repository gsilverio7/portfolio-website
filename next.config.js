/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'raw.githubusercontent.com'],
  },
  experimental: {
    appDir: false,
  },
};
