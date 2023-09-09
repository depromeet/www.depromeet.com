const path = require('path');
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { nextConfigPath: path.resolve(__dirname, '../next.config.js') },
  },
  docs: {
    autodocs: 'tag',
  },
  babel: async options => {
    options.presets!.push('@emotion/babel-preset-css-prop');
    return options;
  },
};
export default config;
