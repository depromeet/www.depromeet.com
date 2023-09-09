const path = require('path');

import type { Preview } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../src/styles/globalStyle';

const preview: Preview = {
  decorators: [
    Story => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    webpackFinal: async config => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname, '../src/'),
      };
      return config;
    },
  },
};

export default preview;
