const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['echarts', 'zrender']);

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = withBundleAnalyzer(withTM(config));
