/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return conf;
  },
};
