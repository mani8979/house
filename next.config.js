/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/studio',
        destination: 'https://house-studio-interiors.sanity.studio',
        permanent: false,
      },
      {
        source: '/studio/:path*',
        destination: 'https://house-studio-interiors.sanity.studio/:path*',
        permanent: false,
      },
      {
        source: '/admin',
        destination: 'https://house-studio-interiors.sanity.studio',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
