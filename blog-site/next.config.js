/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static export for Vercel
  trailingSlash: true,
  images: {
    unoptimized: true,       // Required for static export
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

export default nextConfig
