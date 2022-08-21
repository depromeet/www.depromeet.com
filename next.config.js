const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.plugins.push(new CompressionPlugin());
    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
};

/**
 *
 * @link https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1209152211
 */
module.exports = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
