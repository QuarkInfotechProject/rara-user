/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "flagcdn.com" },
      { hostname: "rara.api.quarkinfotech.com" },
    ],
  },
};

export default nextConfig;
