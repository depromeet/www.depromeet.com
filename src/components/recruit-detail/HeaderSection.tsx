import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

import { POSITION_DISPLAY_NAME, PositionType } from './constants';

const RECRUIT_DETAIL_IMAGE_BASE = '/images/recruit-detail';

export default function HeaderSection({ positionType }: { positionType: PositionType }) {
  return (
    <section css={sectionCss}>
      <Image
        src={`${RECRUIT_DETAIL_IMAGE_BASE}/header-${positionType.toLowerCase()}.webp`}
        alt={POSITION_DISPLAY_NAME[positionType]}
        priority
        quality={100}
        fill
      />
    </section>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 598px;

  ${mediaQuery('xs')} {
    height: 200px;
  }
`;
