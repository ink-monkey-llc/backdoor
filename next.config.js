/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w.bookcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
