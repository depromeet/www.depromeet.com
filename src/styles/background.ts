import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

export const sectionBg = css`
  background-image: linear-gradient(
    to right,
    ${colors.primary.blue}6A 1px,
    ${colors.primary.gray} 1px
  );
  background-position: calc(50% - 17.7px) 0;
  background-size: 47.93px 100%;
  /* background-position: 37.25px 0; */
  /* background-size: 60.8px 100%; */
`;
export const sectionGridBg = css`
  background-color: ${colors.primary.gray};

  background-image: linear-gradient(to right, ${colors.primary.blue}4A 1px, transparent 1px),
    linear-gradient(to bottom, ${colors.primary.blue}4A 1px, transparent 1px);
  background-position: calc(50% - 17.7px) 0;
  background-size: 47.93px 47.93px;
  /* background-position: 37.25px 0; */
  /* background-size: 60.8px 60.8px; */
`;
