const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  target: 'serverless',
  reactStrictMode: true,
  future: {
    strictPostcssConfiguration: true,
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['assets.coingecko.com'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = withBundleAnalyzer(config);
