import type { NextConfig } from 'next';

/* config options here */
const nextConfig: NextConfig = {
  // 讀取外部圖片
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
