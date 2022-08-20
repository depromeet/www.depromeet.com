import Image from 'next/image';
import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/constants';

import { BANNER_IMG_PATH, PositionType, POSTION_DISPLAY_NAME } from '../constants';

export default function HeaderSection({ positionType }: { positionType: PositionType }) {
  const positionName = POSTION_DISPLAY_NAME[positionType];

  return (
    <header css={headerCss}>
      <div css={backgroundCss}>
        <Image
          layout="fill"
          src={BANNER_IMG_PATH[positionType]}
          alt={`banner-image-${positionName}`}
        />
      </div>
      <h1 css={headingCss}>{positionName}</h1>
    </header>
  );
}

const headerCss = css`
  height: calc(100vw * (400 / 1440));
  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    height: calc(100vw * (200 / 375));

    margin-bottom: 50px;
  }
`;

const backgroundCss = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 100vw;
  height: calc(100vw * (400 / 1440));

  ${mediaQuery('xs')} {
    height: calc(100vw * (200 / 375));
  }
`;

const headingCss = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
