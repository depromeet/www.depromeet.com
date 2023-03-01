import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';

import { NAV_HEIGHT } from './constants';
import DesktopAnchorSection from './DesktopAnchorSection';
import MobileAnchorSection from './MobileAnchorSection';
import RecrutingBanner from './RecrutingBanner';

export default function GNB() {
  const isMobile = useMediaQuery('xs');

  return (
    <>
      <nav css={navCss}>
        <RecrutingBanner />
        {isMobile ? <MobileAnchorSection /> : <DesktopAnchorSection />}
      </nav>

      <div css={scrollRemainerCss} />
    </>
  );
}

const navCss = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100vw;
`;

const scrollRemainerCss = css`
  height: ${NAV_HEIGHT}px;
`;
