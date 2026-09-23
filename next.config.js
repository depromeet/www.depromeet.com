const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    emotion: true,
  },
  webpack: config => {
    config.plugins.push(new CompressionPlugin());
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
  /**
   * 레거시 라우트 차단 (docs/19th/migration-plan.md L1)
   *
   * `/about`(17기)과 `/apply`(env 기반 지원 폼)는 2025년 날짜를 보는 낡은 모집 로직을 그대로
   * 들고 있다. 19기 모집 중에 색인이나 북마크로 들어오면 틀린 상태("모집 마감" 등)를 보게 된다.
   * 레거시 코드를 지울지(Q-T1)는 아직 정해지지 않아, 우선 307로 돌려보낸다.
   */
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: false },
      { source: '/apply', destination: '/recruit', permanent: false },
    ];
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
