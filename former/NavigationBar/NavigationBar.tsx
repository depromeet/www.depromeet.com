import { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors } from '~/styles/constants';
import hideWhenMobile, { layoutCss } from '~/styles/css';

import Anchor from './Anchor';
import DimOverlay from './DimOverlay';
import HamburgerButton from './HamburgerButton';
import HamburgerContent from './HamburgerContent';
import { DepromeetIcon } from '../../src/components/common/icons/DepromeetIcon';

export default function NavigationBar() {
  const isMobile = useMediaQuery('xs');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleIsOpen() {
    setIsOpen(prev => !prev);
  }

  if (isMobile) {
    return (
      <>
        <motion.nav css={navCss} animate={isOpen ? 'open' : 'closed'} variants={mobileNavVariants}>
          <div css={wrapperCss}>
            <Link href="/" css={anchorCss}>
              <DepromeetIcon />
            </Link>

            <HamburgerButton toggleIsOpen={toggleIsOpen} />
          </div>

          <AnimatePresence mode="wait">{isOpen && <HamburgerContent />}</AnimatePresence>
        </motion.nav>

        <AnimatePresence mode="wait">
          {isOpen && <DimOverlay close={() => setIsOpen(false)} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav css={[navCss, hideWhenMobile]}>
      <div css={wrapperCss}>
        <Link href="/" css={anchorCss}>
          <DepromeetIcon />
        </Link>

        <div css={anchorWrapperCss}>
          <Anchor href="/project" name="프로젝트" />
          <Anchor href="/contact" name="문의하기" />
          <Anchor href="/recruit" name="리쿠르팅" />
        </div>
      </div>
    </nav>
  );
}

export const NAV_HEIGHT = 60;

const navCss = css`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${NAV_HEIGHT}px;
  background-color: ${colors.black};
  z-index: 9999;
`;

const wrapperCss = css`
  ${layoutCss()}
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const anchorCss = css`
  width: 125px;
`;

const anchorWrapperCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const mobileNavVariants: Variants = {
  closed: {
    backgroundColor: colors.black,
    transition: { duration: 0.2, easings: defaultEasing, delay: 0.26 },
  },
  open: {
    backgroundColor: colors.gray9,
    transition: { duration: 0.2, easings: defaultEasing },
  },
};
