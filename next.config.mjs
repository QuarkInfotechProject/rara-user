/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90],
    remotePatterns: [
      { hostname: "flagcdn.com" },
      { hostname: "rara.api.quarkinfotech.com" },
      { hostname: "api.raratreks.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
