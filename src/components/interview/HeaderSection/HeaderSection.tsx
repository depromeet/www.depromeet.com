import Image from 'next/image';
import { css } from '@emotion/react';

import { INTERVIEW_BANNER_BASE } from '~/constants/images/images';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

const BANNER_IMAGE = `${INTERVIEW_BANNER_BASE}/interview_banner.png`;
const BANNER_IMAGE_MOBILE = `${INTERVIEW_BANNER_BASE}/interview_banner_mobile.png`;

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');

  return (
    <header css={headerCss}>
      <Image
        src={isMobile ? BANNER_IMAGE_MOBILE : BANNER_IMAGE}
        alt="interviewing depromeet 11th"
        layout="fill"
        objectFit="cover"
        unoptimized
        placeholder="blur"
        blurDataURL={isMobile ? BANNER_IMAGE_MOBILE : BANNER_IMAGE}
      />
      <h1 css={headingCss}>Member Interview</h1>
    </header>
  );
}

const headerCss = css`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);
  height: 400px;

  ${mediaQuery('xs')} {
    height: 200px;
  }
`;

const headingCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 3.75rem;
  font-weight: 500;
  text-align: center;
  white-space: pre;
  color: ${colors.primary};

  ${mediaQuery('xs')} {
    font-size: 30px;
  }
`;
