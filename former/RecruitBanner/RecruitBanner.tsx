import Link from 'next/link';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import useIsInProgress from '~/hooks/use-is-in-progress';
import { colors } from '~/styles/constants';

import { NAV_HEIGHT } from '../NavigationBar/NavigationBar';

export default function RecruitBanner() {
  const router = useRouter();

  const isInProgress = useIsInProgress();

  if (!isInProgress) return <></>;

  return (
    <AnimatePresence mode="wait">
      {router.asPath !== '/recruit' && (
        <Link href="/recruit" passHref>
          <motion.a
            css={bannerCss}
            variants={bannerDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            👉🏻 디프만 12기 지원하러 가기
          </motion.a>
        </Link>
      )}
    </AnimatePresence>
  );
}

export const RECRUIT_BANNER_HEIGHT = 40;

const bannerCss = css`
  position: sticky;
  top: ${NAV_HEIGHT}px;
  width: 100vw;
  height: ${RECRUIT_BANNER_HEIGHT}px;
  background-color: ${colors.primary};
  z-index: 8000;
  font-size: 16px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const bannerDownVariants: Variants = {
  initial: {
    y: -50,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: 0,
    transition: { duration: 0.8, ease: defaultEasing, delay: 0.8 },
    willChange: 'transform',
  },
  exit: {
    y: -50,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'transform',
  },
};
