import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/use-is-in-progress';
import useMediaQuery from '~/hooks/use-media-query';

import { ANCHORS_HEIGHT, NAV_HEIGHT } from './constants';
import DesktopAnchorSection from './DesktopAnchorSection';
import MobileAnchorSection from './MobileAnchorSection';
import RecrutingBanner from './RecrutingBanner';

export default function GNB() {
  const isMobile = useMediaQuery('xs');
  const { isInProgress } = useIsInProgress();

  return (
    <>
      <nav css={navCss}>
        {isInProgress && <RecrutingBanner />}
        {isMobile ? <MobileAnchorSection /> : <DesktopAnchorSection />}
      </nav>

      <div css={scrollRemainerCss(isInProgress ? NAV_HEIGHT : ANCHORS_HEIGHT)} />
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

const scrollRemainerCss = (height: number) => css`
  height: ${height}px;
`;
