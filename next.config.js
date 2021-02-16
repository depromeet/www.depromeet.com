/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  target: 'serverless',

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return conf;
  },
};
