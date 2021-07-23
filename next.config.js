const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  target: 'serverless',
  poweredByHeader: false,
  reactStrictMode: true,
  future: {
    strictPostcssConfiguration: true,
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = withBundleAnalyzer(config);
