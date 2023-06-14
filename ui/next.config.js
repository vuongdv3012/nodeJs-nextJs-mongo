/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  localhostProxy: {
    source: 3000,
    target: 3001,
    hostname: 'localhost',
    key: 'localhost.key',
    cert: 'localhost.crt',
  },
}

module.exports = nextConfig
