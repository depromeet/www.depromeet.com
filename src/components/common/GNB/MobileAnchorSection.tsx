import { useState } from 'react';
import { css } from '@emotion/react';
import { AnimatePresence, m } from 'framer-motion';

import { colors } from '~/styles/constants';
import { layoutCss } from '~/styles/css';

import { ANCHORS_HEIGHT } from './constants';
import HamburgerButton from './HamburgerButton';
import HamburgerContent from './HamburgerContent';

interface Route {
  name: string;
  path: string;
}

// eslint-disable-next-line unused-imports/no-unused-vars
const NAVIGATION_ROUTES: Route[] = [
  { name: 'DEPROMEET', path: '/' },
  { name: '디프만 A TO Z', path: '/about' },
  { name: '지난 프로젝트', path: '/project' },
  { name: '문의하기', path: '/contact' },
  { name: '13기 모집 안내', path: '/recruit' },
];

export default function MobileAnchorSection() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <m.section css={sectionCss} animate={isOpen ? 'open' : 'closed'}>
        <div css={wrapperCss}>
          <h1>디프만 로고</h1>
          <HamburgerButton toggleIsOpen={toggleIsOpen} />
        </div>
      </m.section>

      <AnimatePresence>{isOpen && <HamburgerContent />}</AnimatePresence>
    </>
  );
}

const sectionCss = css`
  height: ${ANCHORS_HEIGHT}px;
  background: rgba(240, 240, 241, 0.6);
  backdrop-filter: blur(25px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${colors.black};
`;

const wrapperCss = css`
  ${layoutCss};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-shrink: 0;
`;
