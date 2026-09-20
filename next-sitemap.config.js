/** @type {import('next-sitemap').IConfig} */ // Default code you can customize according to your requirements.

module.exports = {
  siteUrl: 'https://www.depromeet.com',
  generateRobotsTxt: true,
  // L1: 리다이렉트되는 레거시 라우트는 색인에서 뺀다.
  exclude: ['/about', '/apply'],
};
