import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

const sectionCss = css`
  margin: 0 auto;
  max-width: 1200px;

  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    margin-bottom: 100px;
    padding: 0 16px;
  }
`;

const sectionHeadingCss = css`
  width: 100%;
  text-align: center;

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    margin-bottom: 40px;
  }
`;

export { sectionCss, sectionHeadingCss };
