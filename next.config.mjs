/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX, // Set your CDN URL or prefix here
  images: {
    loader: 'custom',
    loaderFile: './nextImageLoader.mjs',
    remotePatterns: []
  },
};

export default nextConfig;
