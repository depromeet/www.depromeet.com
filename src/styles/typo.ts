import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
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
      ${mediaQuery('mobile')} {
        font-size: ${pxToRem(20)};
      }
    `,
    subTitle2: css`
      /* Pretendard/Subtitle 2 Bold */
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.2)};
      ${mediaQuery('mobile')} {
        font-size: ${pxToRem(14)};
      }
    `,
    body1: css`
      /* Pretendard/Body 1 Medium */
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.18)};
      ${mediaQuery('mobile')} {
        font-size: ${pxToRem(14)};
        letter-spacing: ${pxToRem(-0.14)};
      }
    `,
    body2: css`
      /* Pretendard/Body 2 Medium */
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.16)};
    `,
    body3: css`
      /* Pretendard/Body 3 Regular */
      font-family: Pretendard;
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
      letter-spacing: ${pxToRem(-0.14)};
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
      ${mediaQuery('mobile')} {
        font-size: ${pxToRem(16)};
        letter-spacing: ${pxToRem(-0.16)};
      }
    `,
    body1: css`
      /* Decimal/Body 1 */
      font-family: Decimal;
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: ${pxToRem(-0.18)};
    `,
  },
};

export const typosV2 = {
  bebas: {
    regular88: css`
      font-family: Bebas;
      font-size: ${pxToRem(88)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(104)};
    `,
    regular66: css`
      font-family: Bebas;
      font-size: ${pxToRem(66)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(76)};
    `,
    regular40: css`
      font-family: Bebas;
      font-size: ${pxToRem(40)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(48)};
    `,
    regular32: css`
      font-family: Bebas;
      font-size: ${pxToRem(30)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(36)};
    `,
    regular24: css`
      font-family: Bebas;
      font-size: ${pxToRem(24)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(28.8)};
      ${mediaQuery('mobile')} {
        font-size: ${pxToRem(20)};
      }
    `,
    regular14: css`
      font-family: Bebas;
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(16.8)};
    `,
  },
  pretendard: {
    bold62: css`
      font-size: ${pxToRem(62)};
      font-style: normal;
      font-weight: 700;
      line-height: ${pxToRem(74)};
      letter-spacing: -0.04em;
    `,
    bold32: css`
      font-size: ${pxToRem(32)};
      font-style: normal;
      font-weight: 700;
      line-height: ${pxToRem(38)};
      letter-spacing: -0.04em;
    `,
    bold28: css`
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 700;
      line-height: ${pxToRem(33)};
      letter-spacing: -0.04em;
    `,
    bold20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 700;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.04em;
    `,
    bold16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 700;
      line-height: ${pxToRem(19)};
      letter-spacing: -0.04em;
    `,
    semibold48: css`
      font-size: ${pxToRem(48)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(57)};
      letter-spacing: -0.04em;
    `,
    semibold32: css`
      font-size: ${pxToRem(32)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(48)};
      letter-spacing: -0.04em;
    `,
    semibold28: css`
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(40)};
      letter-spacing: -0.04em;
    `,
    semibold26: css`
      font-size: ${pxToRem(26)};
      font-style: normal;
      line-height: ${pxToRem(40)};
      font-weight: 600;
      letter-spacing: -0.04em;
    `,
    semibold24: css`
      font-size: ${pxToRem(24)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(36)};
      letter-spacing: -0.04em;
    `,
    semibold20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(30)};
      letter-spacing: -0.04em;
    `,
    semibold18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(32)};
      letter-spacing: -0.04em;
    `,
    semibold16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.04em;
    `,
    semibold15: css`
      font-size: ${pxToRem(15)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(18)};
      letter-spacing: -0.04em;
    `,
    semibold14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(21)};
      letter-spacing: -0.04em;
    `,
    medium18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(21)};
      letter-spacing: -0.05em;
    `,
    medium16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(19)};
      letter-spacing: -0.05em;
    `,
    medium15: css`
      font-size: ${pxToRem(15)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(18)};
      letter-spacing: -0.05em;
    `,
    medium14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(17)};
      letter-spacing: -0.05em;
    `,
    regular20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(30)};
      letter-spacing: -0.05em;
    `,
    regular18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(27)};
      letter-spacing: -0.05em;
    `,
    regular16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.05em;
    `,
    regular14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(21)};
      letter-spacing: -0.05em;
    `,
    regular9: css`
      font-size: ${pxToRem(9)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(15)};
      letter-spacing: -0.02em;
    `,
    regular8: css`
      font-size: ${pxToRem(8)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(12)};
      letter-spacing: -0.02em;
    `,
  },
};
