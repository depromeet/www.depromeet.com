import { css } from '@emotion/react';

import { pxToRem } from '~/styles/style.utils';

export const typos = {
  pretendard: {
    subTitle1: css`
      /* Pretendard/Subtitle Bold */
      font-size: ${pxToRem(36)};
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.32)};
    `,
    subTitle2: css`
      /* Pretendard/Subtitle 2 Bold */
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.2)};
    `,
    body1: css`
      /* Pretendard/Body 1 Medium */
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.18)};
    `,
    body2: css`
      /* Pretendard/Body 2 Medium */
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.16)};
    `,
  },
  decimal: {
    title1: css`
      /* Decimal/Title 1 */
      font-family: Decimal;
      font-size: ${pxToRem(60)};
      font-style: normal;
      font-weight: 600;
      line-height: 135%;
    `,
    title2: css`
      /* Decimal/Title 2 */
      font-family: Decimal;
      font-size: ${pxToRem(36)};
      font-style: normal;
      font-weight: 600;
      line-height: 135%;
    `,
    subTitle1: css`
      /* Decimal/Subtitle 1 */
      font-family: Decimal;
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 600;
      line-height: 107.143%;
      letter-spacing: ${pxToRem(-0.28)};
    `,
    body1: css`
      /* Decimal/Body 1 */
      font-family: Decimal;
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.18)};
    `,
  },
};
