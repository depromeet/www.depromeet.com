import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function HorizontalDivider() {
  return <div css={horizontalDividerCss} />;
}

const horizontalDividerCss = css`
  background-color: ${colors.gray7};
  width: 100%;
  height: 1px;
`;
