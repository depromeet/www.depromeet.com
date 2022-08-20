import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

export default function HorizontalDivider() {
  return <hr css={horizontalDividerCss} />;
}

const horizontalDividerCss = css`
  border: thin solid ${colors.gray7};
`;
