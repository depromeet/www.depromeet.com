import { css } from '@emotion/react';

// FIXME: 다른 곳에서 사용하게 되면 유틸로 분리할게요~ @kimyouknow
const pxToRem = (px: number, base = 16) => `${px / base}rem`;

export const typos = {
  pretendard: {
    subTitle1: css`
      /* Pretendard/Subtitle Bold */
      font-size: ${pxToRem(32)};
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 48px */
      letter-spacing: ${pxToRem(-0.32)};
    `,
    subTitle2: css`
      /* Pretendard/Subtitle 2 Bold */
      font-size: ${pxToRem(20)};
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 30px */
      letter-spacing: ${pxToRem(-0.2)};
    `,
    body1: css`
      /* Pretendard/Body 1 Medium */
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /*  25.2px */
      letter-spacing: ${pxToRem(-0.18)};
    `,
  },
  decimal: {
    title1: css`
      /* Decimal/Title 1 */
      font-family: Decimal;
      font-size: ${pxToRem(60)};
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 81px */
    `,
    title2: css`
      /* Decimal/Title 2 */
      font-family: Decimal;
      font-size: ${pxToRem(40)};
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 54px */
    `,
    subTitle1: css`
      /* Decimal/Subtitle 1 */
      font-family: Decimal;
      font-size: ${pxToRem(28)};
      font-style: normal;
      font-weight: 600;
      line-height: 107.143%; /* 30px */
      letter-spacing: ${pxToRem(-0.28)};
    `,
    body1: css`
      /* Decimal/Body 1 */
      font-family: Decimal;
      font-size: ${pxToRem(18)};
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 25.2px */
      letter-spacing: ${pxToRem(-0.18)};
    `,
  },
};
