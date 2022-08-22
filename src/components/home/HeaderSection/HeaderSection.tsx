import Image from 'next/image';
import { css } from '@emotion/react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

import { ScrollBottomIcon } from '~/components/common/icons';
import { DepromeetIcon } from '~/components/common/icons/DepromeetIcon';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { RECRUIT_BANNER_HEIGHT } from '~/components/common/RecruitBanner/RecruitBanner';
import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { mediaQuery } from '~/styles/constants';

const HOME_HEADER_BASE = '/images/home';
const HEADER_IMAGE = `${HOME_HEADER_BASE}/home_header.png`;
const HEADER_IMAGE_MOBILE = `${HOME_HEADER_BASE}/home_header_mobile.png`;

export default function HeaderSection() {
  const { scrollY } = useScroll();
  const scrollBottomOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scrollBottomScale = useTransform(scrollY, [0, 800], [1, 0.6]);

  const isMobile = useMediaQuery('xs');

  return (
    <header css={headerCss}>
      <Image
        src={isMobile ? HEADER_IMAGE_MOBILE : HEADER_IMAGE}
        alt="depromeet 12"
        priority
        unoptimized
        placeholder="blur"
        blurDataURL={isMobile ? HEADER_IMAGE_MOBILE : HEADER_IMAGE}
        layout="fill"
        objectFit="cover"
      />

      <div css={headingWrapperCss}>
        <div css={logoWrapperCss}>
          <DepromeetIcon />
        </div>

        <h1 css={heading1Css}>디자이너와 {isMobile && <br />}프로그래머가 만났을 때</h1>
      </div>

      <motion.div
        css={scrollBottomIconWrapperCss}
        style={{ opacity: scrollBottomOpacity, scale: scrollBottomScale }}
        variants={scrollBottomVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollBottomIcon />
      </motion.div>
    </header>
  );
}

const headerCss = css`
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);

  height: calc(100vh - ${NAV_HEIGHT}px);
`;

const headingWrapperCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const logoWrapperCss = css`
  max-width: 490px;
  height: 90px;

  margin-bottom: 19px;

  ${mediaQuery('xs')} {
    max-width: 277px;
    height: 51px;

    margin-bottom: 15px;
  }
`;

const heading1Css = css`
  font-weight: 500;
  font-size: 3.125rem;
  line-height: 150%;
  white-space: pre;

  ${mediaQuery('xs')} {
    font-size: 24px;
  }
`;

const scrollBottomIconWrapperCss = css`
  position: absolute;
  /* TODO: 배너 내릴 때 변경 */
  bottom: calc(20px + ${RECRUIT_BANNER_HEIGHT}px);
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
`;

const scrollBottomVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: '-50%',
    y: -30,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 0,
    transition: { duration: 1.2, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
