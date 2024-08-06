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
   {
    protocol: 'https',
    hostname: 'developer.accuweather.com',
    port: '',
    pathname: '/**',
   },
  ],
 },
}

module.exports = nextConfig
