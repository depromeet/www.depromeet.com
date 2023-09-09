const path = require('path');

import type { Preview } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../src/styles/globalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
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
