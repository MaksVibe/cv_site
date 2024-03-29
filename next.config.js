/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
};

module.exports = nextConfig;
