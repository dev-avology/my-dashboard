/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol:'https',
        hostname:'cswdbwl4o835z6bx.public.blob.vercel-storage.com'
      }
    ]
    }
  }
   
  module.exports = nextConfig