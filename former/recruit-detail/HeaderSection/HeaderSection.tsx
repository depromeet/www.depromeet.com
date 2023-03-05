import Image from 'next/image';
import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';
import { mediaQuery } from '~/styles/constants';

import {
  BANNER_IMG_PATH,
  MOBILE_BANNER_IMG_PATH,
  POSITION_DISPLAY_NAME,
  PositionType,
} from '../constants';

export default function HeaderSection({ positionType }: { positionType: PositionType }) {
  const isMobile = useMediaQuery('xs');

  const positionName = POSITION_DISPLAY_NAME[positionType];

  return (
    <header css={headerCss}>
      <div css={backgroundCss}>
        <Image
          layout="fill"
          objectFit="cover"
          priority
          unoptimized
          src={isMobile ? MOBILE_BANNER_IMG_PATH[positionType] : BANNER_IMG_PATH[positionType]}
          placeholder="blur"
          blurDataURL={
            isMobile ? MOBILE_BANNER_IMG_PATH[positionType] : BANNER_IMG_PATH[positionType]
          }
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
