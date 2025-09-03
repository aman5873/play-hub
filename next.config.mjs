/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
    optimizeCss: false, // 👈 forces PostCSS instead of LightningCSS
  },
  images: {
    domains: ["images.unsplash.com"], // allow Unsplash images
  },
};

export default nextConfig;
