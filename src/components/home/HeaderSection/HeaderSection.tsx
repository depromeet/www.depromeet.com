import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

import { ScrollBottomIcon } from '~/components/common/icons';
// import { DepromeetIcon } from '~/components/common/icons/DepromeetIcon';
import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { EMAIL_13TH_GOOGLE_FORM } from '~/constants/common/depromeet';
import { defaultEasing } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { ctaCss } from '~/styles/css/cta';

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
          {/* <DepromeetIcon width={isMobile ? 277 : 490} height={isMobile ? 51 : 90} /> */}
          <h1 css={pendingHeadingCss}>13기 운영진은 겨울잠 중 🐻💤</h1>
        </div>

        {/* <h1 css={heading1Css}>디자이너와 {isMobile && <br />}프로그래머가 만났을 때</h1> */}
        <span css={notificationSpanCss}>아래 버튼 눌러 13기 모집 알람 받기</span>

        <Link href={EMAIL_13TH_GOOGLE_FORM} passHref>
          <a css={ctaCss}>알림 신청하기</a>
        </Link>
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
  left: calc(-50vw + 50%);
  width: 100vw;
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
  margin-bottom: 19px;

  ${mediaQuery('xs')} {
    margin-bottom: 15px;
  }
`;

// const heading1Css = css`
//   font-weight: 500;
//   font-size: 3.125rem;
//   line-height: 150%;
//   white-space: pre;

//   ${mediaQuery('xs')} {
//     font-size: 24px;
//   }
// `;

const pendingHeadingCss = css`
  font-weight: 600;
  font-size: 4.5rem;
  line-height: 120%;
  white-space: pre;

  ${mediaQuery('sm')} {
    font-size: 3.5rem;
  }

  ${mediaQuery('xs')} {
    font-size: 1.875rem;
    line-height: 150%;
  }
`;

const notificationSpanCss = css`
  font-weight: 400;
  font-size: 2rem;
  line-height: 140%;
  white-space: pre;
  color: ${colors.gray3};

  margin-bottom: 80px;

  ${mediaQuery('xs')} {
    font-size: 1.25rem;
  }
`;

const scrollBottomIconWrapperCss = css`
  position: absolute;
  bottom: 20px;
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
