/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{
                // Enable figma's wrong mask-type attribute work
                removeRasterImages: false,
                removeStyleElement: false,
                removeUnknownsAndDefaults: false,
                // Enable svgr's svg to fill the size
                removeViewBox: false,
              }],
            },
          },
        },
      ],
    });

    return conf;
  },
});
