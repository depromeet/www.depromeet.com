import { css } from '@emotion/react';

import { colors, mediaQuery } from '../constants';

export const sectionSmallCss = css`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 140%;
  color: ${colors.gray500};

  ${mediaQuery('xs')} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const section36HeadingCss = css`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 43px;
  color: ${colors.black};

  ${mediaQuery('xs')} {
    font-size: 22px;
    line-height: 140%;
  }
`;

export const section40HeadingCss = css`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 48px;
  color: ${colors.black};

  ${mediaQuery('xs')} {
    font-size: 22px;
    line-height: 140%;
  }
`;
