const withTM = require('next-transpile-modules')(['crypto-random-string']);
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
  webpack(webpackConfig) {
    webpackConfig.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    webpackConfig.experiments = { asyncWebAssembly: true };

    return webpackConfig;
  },
  images: {
    domains: ['cdn.discordapp.com'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

module.exports = withBundleAnalyzer(withTM(config));
