/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "dist",
  basePath: "/website",
  assetPrefix: "/website",
}

export default nextConfig
