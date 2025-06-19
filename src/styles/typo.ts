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
      font-weight: 600;
      line-height: ${pxToRem(74)};
      letter-spacing: -0.04em;
    `,
    bold44: css`
      font-size: ${pxToRem(44)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(53)};
      letter-spacing: -0.04em;
    `,
    bold32: css`
      font-size: ${pxToRem(32)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(38)};
      letter-spacing: -0.04em;
    `,
    bold28: css`
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(33)};
      letter-spacing: -0.04em;
    `,
    bold24: css`
      font-size: ${pxToRem(24)};
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: ${pxToRem(-0.48)};
    `,
    bold20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.04em;
    `,
    bold18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: ${pxToRem(-0.36)};
    `,
    bold16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(19)};
      letter-spacing: -0.04em;
    `,
    bold10: css`
      font-size: ${pxToRem(10)};
      font-style: normal;
      font-weight: 600;
      line-height: ${pxToRem(15)};
      letter-spacing: ${pxToRem(-0.4)};
    `,
    semibold48: css`
      font-size: ${pxToRem(48)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(57)};
      letter-spacing: -0.04em;
    `,
    semibold32: css`
      font-size: ${pxToRem(32)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(48)};
      letter-spacing: -0.04em;
    `,
    semibold28: css`
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(40)};
      letter-spacing: -0.04em;
    `,
    semibold26: css`
      font-size: ${pxToRem(26)};
      font-style: normal;
      line-height: ${pxToRem(40)};
      font-weight: 500;
      letter-spacing: -0.04em;
    `,
    semibold24: css`
      font-size: ${pxToRem(24)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(36)};
      letter-spacing: -0.04em;
    `,
    semibold20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(30)};
      letter-spacing: -0.04em;
    `,
    semibold18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(32)};
      letter-spacing: -0.04em;
    `,
    semibold16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.04em;
    `,
    semibold15: css`
      font-size: ${pxToRem(15)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(22.5)};
      letter-spacing: ${pxToRem(-0.75)};
    `,
    semibold14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 500;
      line-height: ${pxToRem(21)};
      letter-spacing: -0.04em;
    `,
    medium18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(27)};
      letter-spacing: ${pxToRem(-0.54)};
    `,
    medium16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(24)};
      letter-spacing: -0.05em;
    `,
    medium15: css`
      font-size: ${pxToRem(15)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(22.5)};
      letter-spacing: ${pxToRem(-0.6)};
    `,
    medium14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(17)};
      letter-spacing: -0.05em;
    `,
    medium13: css`
      font-size: ${pxToRem(13)};
      font-style: normal;
      font-weight: 400;
      line-height: ${pxToRem(15)};
      letter-spacing: -0.01em;
    `,
    regular20: css`
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(30)};
      letter-spacing: -0.05em;
    `,
    regular18: css`
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(27)};
      letter-spacing: -0.05em;
    `,
    regular16: css`
      font-size: ${pxToRem(16)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(24)};
      letter-spacing: ${pxToRem(-0.64)};
    `,
    regular14: css`
      font-size: ${pxToRem(14)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(21)};
      letter-spacing: -0.05em;
    `,
    regular9: css`
      font-size: ${pxToRem(9)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(15)};
      letter-spacing: -0.02em;
    `,
    regular8: css`
      font-size: ${pxToRem(8)};
      font-style: normal;
      font-weight: 300;
      line-height: ${pxToRem(12)};
      letter-spacing: -0.02em;
    `,
  },
};

// NOTE : 17th
export const typosV3 = {
  DMMono: {
    Number1: css`
      font-family: DMMono;
      font-size: ${pxToRem(54)};
      font-weight: 500;
    `,
    Number2: css`
      font-family: DMMono;
      font-size: ${pxToRem(12)};
      font-weight: 500;
    `,
  },
  MartianMono: {
    head3: css`
      font-family: MartianMono;
      font-size: ${pxToRem(26)};
      font-weight: 500;
      line-height: 125%;
      letter-spacing: -5%;
    `,
    body1Regular: css`
      font-family: MartianMono;
      font-size: ${pxToRem(14)};
      font-weight: 300;
      line-height: 150%;
      letter-spacing: -4%;
    `,
    body2: css`
      font-family: MartianMono;
      font-size: ${pxToRem(16)};
      font-weight: 300;
    `,
  },
  pretendard: {
    /* Headline */
    head1: css`
      font-size: ${pxToRem(36)};
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.5px;
    `,
    head2: css`
      font-size: ${pxToRem(32)};
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.5px;
    `,

    head4: css`
      font-size: ${pxToRem(26)};
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.5px;
    `,
    head5: css`
      font-size: ${pxToRem(24)};
      font-weight: 600;
      line-height: 150%;
      letter-spacing: 0.5px;
    `,
    head6: css`
      font-size: ${pxToRem(22)};
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.5px;
    `,
    head7: css`
      font-size: ${pxToRem(20)};
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.5px;
    `,
    /* Subtitle */
    sub1Semibold: css`
      font-size: ${pxToRem(20)};
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub1Medium: css`
      font-size: ${pxToRem(20)};
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub2Bold: css`
      font-size: ${pxToRem(18)};
      font-weight: bold;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub2Semibold: css`
      font-size: ${pxToRem(18)};
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub3Bold: css`
      font-size: ${pxToRem(16)};
      font-weight: bold;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub3Semibold: css`
      font-size: ${pxToRem(16)};
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub4Semibold: css`
      font-size: ${pxToRem(15)};
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub5Semibold: css`
      font-size: ${pxToRem(14)};
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0;
    `,
    sub5Medium: css`
      font-size: ${pxToRem(14)};
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0;
    `,
    /* Body */
    body1Medium: css`
      font-size: ${pxToRem(18)};
      font-weight: 400;
      line-height: 160%;
      letter-spacing: ${pxToRem(-0.18)};
    `,
    body3Medium: css`
      font-size: ${pxToRem(16)};
      font-weight: 400;
      line-height: 170%;
      letter-spacing: ${pxToRem(-0.16)};
    `,
    body3Regular: css`
      font-size: ${pxToRem(16)};
      font-weight: 300;
      line-height: 170%;
      letter-spacing: ${pxToRem(-0.16)};
    `,

    body4Regular: css`
      font-size: ${pxToRem(14)};
      font-weight: 300;
      line-height: 160%;
      letter-spacing: ${pxToRem(-0.14)};
    `,
    body5Medium: css`
      font-size: ${pxToRem(13)};
      font-weight: 400;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.13)};
    `,
    body6Medium: css`
      font-size: ${pxToRem(12)};
      font-weight: 400;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.12)};
    `,
    body7Medium: css`
      font-size: ${pxToRem(9)};
      font-weight: 400;
      line-height: 150%;
      letter-spacing: ${pxToRem(-0.18)};
    `,
    /* Caption */
    caption1Semibold: css`
      font-size: ${pxToRem(14)};
      font-weight: 500;
      line-height: 150%;
      letter-spacing: 0;
    `,
    caption1Medium: css`
      font-size: ${pxToRem(14)};
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0;
    `,
  },
};
