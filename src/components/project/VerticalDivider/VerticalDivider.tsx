import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function VerticalDivider() {
  return <div css={verticalDividerCss} />;
}

const verticalDividerCss = css`
  background-color: ${colors.gray7};
  width: 1px;
`;
