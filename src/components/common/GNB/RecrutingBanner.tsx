import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

import { RECRUTING_BANNER_HEIGHT } from './constants';
import { ArrowIcon } from '../icons';

export default function RecrutingBanner() {
  return (
    <section css={wrapperCss}>
      디프만 13기 바로 지원하기 <ArrowIcon />
    </section>
  );
}

const wrapperCss = css`
  height: ${RECRUTING_BANNER_HEIGHT}px;
  background-color: ${colors.black};
  color: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
