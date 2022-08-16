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
};

/**
 *
 * @link https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1209152211
 * warnning 해결 입니다. "next-compose-plugins"의 이슈로 defaultConfig를 모두 정의해줘야되는 wanning이 떠서 시원하게 없앴습니다.
 */
module.exports = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
