/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  basePath: "/meinruhepol",
}

export default nextConfig