import { css } from '@emotion/react';

import { ArrowIcon } from '~/components/common/icons';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

export function HorizontalDivider() {
  const isMobile = useMediaQuery('xs');

  return (
    <div css={wrapperCss}>
      <ArrowIcon
        direction="down"
        width={isMobile ? 36 : 52}
        height={isMobile ? 36 : 52}
        color={colors.black}
      />
    </div>
  );
}

const wrapperCss = css`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  ${mediaQuery('xs')} {
    width: 375px;
  }
`;
