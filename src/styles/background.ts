import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

import { mediaQuery } from './media';

export const sectionBg = css`
  background-color: ${colors.primary.gray};
  background-image: linear-gradient(
    to right,
    ${colors.primary.blue}4A 1px,
    ${colors.primary.gray} 1px
  );
  /* background-position: calc(50% - 17.7px) 0;
  background-size: 47.93px 100%; */
  background-position: calc(50% - 32px) 0;
  background-size: 64px 100%;

  ${mediaQuery('mobile')} {
    background-position: 50% 0;
    background-size: 32px 100%;
  }
`;
export const sectionGridBg = css`
  background-color: ${colors.primary.gray};

  background-image: linear-gradient(to right, ${colors.primary.blue}4A 1px, transparent 1px),
    linear-gradient(to bottom, ${colors.primary.blue}4A 1px, transparent 1px);
  /* background-position: calc(50% - 17.7px) 0;
  background-size: 47.93px 47.93px; */
  background-position: calc(50% - 32px) 0;
  background-size: 64px 64px;

  ${mediaQuery('mobile')} {
    background-position: 50% 0;
    background-size: 32px 32px;
  }
`;
