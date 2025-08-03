import { NextConfig } from 'next'
const nextConfig: NextConfig = {
  images: {
    domains: [
      'pbs.twimg.com',
      'firebasestorage.googleapis.com'
    ],
    formats: ['image/webp']
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // PWA setup
  // If using @vite-pwa/next or next-pwa
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },
}
export default nextConfig