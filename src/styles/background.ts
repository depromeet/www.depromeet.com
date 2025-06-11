import { css } from '@emotion/react';

import { colors } from '~/styles/colors';

export const sectionBg = css`
  background-image: linear-gradient(
    to right,
    ${colors.primary.blue}6A 1.09px,
    ${colors.primary.gray} 1.09px
  );
  background-size: 60.8px 100%;
  background-position: -12.5px 0;
`;
export const sectionGridBg = css`
  background-color: ${colors.primary.gray}; /* 배경 회색 먼저 깔기 */

  background-image: linear-gradient(to right, ${colors.primary.blue}4A 1.09px, transparent 1.09px),
    linear-gradient(to bottom, ${colors.primary.blue}4A 1.09px, transparent 1.09px);
  background-size: 60.8px 60.8px;
  background-position: -12.5px 0, 0 -12.5px;
`;
