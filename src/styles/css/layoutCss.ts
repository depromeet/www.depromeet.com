import { css } from '@emotion/react';

import { mediaQuery } from '../constants';

const layout = {
  maxWidth: '1080px',
} as const;

const notApplyPadding = ['/project/[order]'];

export const layoutCss = (routerRoute?: string) => css`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;

  ${mediaQuery('xs')} {
    padding: ${routerRoute && notApplyPadding.includes(routerRoute) ? '0' : '0 20px'};
  }
`;
