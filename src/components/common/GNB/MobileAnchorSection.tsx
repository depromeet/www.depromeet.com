import Link from 'next/link';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import useToggle from '~/hooks/use-toggle';
import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ANCHORS_HEIGHT } from './constants';
import HamburgerButton from './HamburgerButton';
import HamburgerContent from './HamburgerContent';
import Overlay from './Overlay';
import { DepromeetIcon } from '../icons/DepromeetIcon';

export default function MobileAnchorSection() {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <>
      <m.section css={[sectionCss, isOpen && sectionOpenCss]} animate={isOpen ? 'open' : 'closed'}>
        <div css={wrapperCss}>
          <Link href="/" css={titleCss}>
            <DepromeetIcon width={119} height={21} />
          </Link>

          <HamburgerButton toggleIsOpen={toggleIsOpen} />
        </div>
      </m.section>

      <AnimatePresence>{isOpen && <HamburgerContent />}</AnimatePresence>

      {isOpen && <Overlay close={toggleIsOpen} />}
    </>
  );
}

const sectionCss = css`
  position: relative;
  height: ${ANCHORS_HEIGHT}px;
  background-color: rgba(240, 240, 241, 0.6);
  backdrop-filter: blur(25px);
  transition: background-color 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${colors.black};
  z-index: 9998;
`;

const sectionOpenCss = css`
  background-color: ${colors.gray100};
`;

const wrapperCss = css`
  ${layoutCss};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;
`;

const titleCss = css`
  font-weight: 700;
  font-size: 1.125rem;
`;
