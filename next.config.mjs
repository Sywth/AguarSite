/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "**.nyt.com",
      },
    ],
  },
};

export default nextConfig;
