/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  basePath: "/meinruhepol",
  assetPrefix: '/meinruhepol',
}

export default nextConfig