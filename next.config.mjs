/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './nextImageLoader.mjs',
    remotePatterns: []
  },
};

export default nextConfig;
