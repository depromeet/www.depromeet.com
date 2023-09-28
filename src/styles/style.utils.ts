import { css } from '@emotion/react';

export const pxToRem = (px: number, base = 16) => `${px / base}rem`;

export const autoImageRatio = (width: number, height: number) => css`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(${height} / ${width} * 100%);
`;
