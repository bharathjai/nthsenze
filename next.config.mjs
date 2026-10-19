/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber'],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
