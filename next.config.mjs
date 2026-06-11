/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    localPatterns: [
      {
        pathname: "/meinruhepol/images/**",
        search: "",
      },
    ],
  },
  distDir: "dist",
  basePath: "/meinruhepol",
  assetPrefix: "/meinruhepol",
}

export default nextConfig
