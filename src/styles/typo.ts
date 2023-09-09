import { css } from '@emotion/react';

export const typos = {
  pretendard: {
    subTitle1: css`
      /* Pretendard/Subtitle Bold */
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 48px */
      letter-spacing: -0.32px;
    `,
    subTitle2: css`
      /* Pretendard/Subtitle 2 Bold */
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 30px */
      letter-spacing: -0.2px;
    `,
    body1: css`
      /* Pretendard/Body 1 Medium */
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25.2px; /* 140% */
      letter-spacing: -0.18px;
    `,
  },
  decimal: {
    title1: css`
      /* Decimal/Title 1 */
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 81px */
      text-transform: capitalize;
    `,
    title2: css`
      /* Decimal/Title 2 */
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 135%; /* 54px */
      text-transform: capitalize;
    `,
    subTitle1: css`
      /* Decimal/Subtitle 1 */
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 107.143% */
      letter-spacing: -0.28px;
    `,
    body1: css`
      /* Decimal/Body 1 */
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25.2px; /* 140% */
      letter-spacing: -0.18px;
    `,
  },
};
