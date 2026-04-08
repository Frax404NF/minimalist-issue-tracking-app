import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },

  // ignore eslint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
