import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, m, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import { colors } from '~/styles/constants';

import { ANCHORS_HEIGHT } from './constants';
import { Route } from './type';
import { AsteriskIcon } from '../icons/AsteriskIcon';

const NAVIGATION_ROUTES: readonly Route[] = [
  { name: '디프만 A TO Z', path: '/about' },
  { name: '지난 프로젝트', path: '/project' },
  { name: '문의하기', path: '/contact' },
  { name: '13기 모집 안내', path: '/recruit' },
];

export default function HamburgerContent() {
  const { pathname } = useRouter();

  return (
    <m.div
      css={wrapperCss}
      variants={contentVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {NAVIGATION_ROUTES.map(eachRoute => (
        <Link key={eachRoute.path} href={eachRoute.path} css={anchorCss}>
          <AnimatePresence mode="wait">
            {pathname.startsWith(eachRoute.path) && (
              <m.span
                key="asterisk"
                variants={aseteriskVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AsteriskIcon />
              </m.span>
            )}
          </AnimatePresence>
          <m.span
            css={textCss}
            variants={textVariants}
            animate={pathname.startsWith(eachRoute.path) ? 'selected' : 'default'}
          >
            {eachRoute.name}
          </m.span>
        </Link>
      ))}
    </m.div>
  );
}

const wrapperCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  z-index: 9998;
`;

const contentVariants: Variants = {
  closed: {
    height: 0,
    transition: { duration: 0.3, ease: defaultEasing },
  },
  open: {
    height: 'auto',
    transition: { duration: 0.3, ease: defaultEasing },
  },
};

const anchorCss = css`
  flex-shrink: 0;
  font-weight: 600;
  font-size: 1.125rem;
  height: ${ANCHORS_HEIGHT}px;
  background-color: ${colors.gray100};
  padding-left: 20px;

  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.black};

  transition: background-color 0.3s;

  &:active {
    background-color: ${colors.gray200};
  }
`;

const textCss = css`
  position: absolute;
`;

const aseteriskVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: defaultEasing,
    },
  },
};

const textVariants: Variants = {
  default: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
      delay: 0.3,
    },
  },
  selected: {
    x: 18,
    transition: {
      duration: 0.25,
      ease: defaultEasing,
    },
  },
};
