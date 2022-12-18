/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/blog",
  //       destination: "/tags/블로그%20포트폴리오",
  //       permanent: false,
  //     },
  //     {
  //       source: "/me",
  //       destination: "/tags/일기",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig
