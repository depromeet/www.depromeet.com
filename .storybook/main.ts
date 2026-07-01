const path = require('path');
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    'storybook-addon-next',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { nextConfigPath: path.resolve(__dirname, '../next.config.js') },
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  babel: async options => {
    options.presets!.push('@emotion/babel-preset-css-prop');
    return options;
  },
  webpackFinal: async config => {
    // Remove existing SVG rules (Next.js treats SVGs as image assets)
    config.module!.rules = config.module!.rules!.map((rule: any) => {
      if (rule && rule.test instanceof RegExp && rule.test.test('.svg')) {
        return { ...rule, exclude: /\.svg$/ };
      }
      return rule;
    });
    // Add SVGR to handle SVG files as React components
    config.module!.rules!.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
export default config;
