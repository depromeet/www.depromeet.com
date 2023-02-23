import { useRef, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { NAV_HEIGHT } from '~/components/common/NavigationBar/NavigationBar';
import { END_DATE, START_DATE } from '~/constants/common';
import { defaultFadeInScaleVariants } from '~/constants/motions';
import useMediaQuery from '~/hooks/use-media-query';
import useEffectOnce from '~/hooks/useeffect-once';

import Finish from './Finish';
import InProgress from './InProgress';
import Previous from './Previous';

const MOBILE_BANNER = '/images/position/mobile-banner-recruit.png';
const BANNER = '/images/position/banner-recruit.png';

// export const START_DATE = '2022-08-18T22:21:59.000Z'; // test
// export const END_DATE = '2022-08-20T20:00:00.000Z'; // test

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');
  const { state, remainTime } = useRecruitState();

  // const { scrollY } = useScroll();
  // const scrollBottomOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  // const scrollBottomScale = useTransform(scrollY, [0, 800], [1, 0.6]);

  return (
    <motion.header css={headerCss} initial="initial" animate="animate" exit="exit">
      <div css={backgroundCss}>
        <Image
          src={!isMobile ? BANNER : MOBILE_BANNER}
          alt="banner-recruit"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={!isMobile ? BANNER : MOBILE_BANNER}
          priority
          unoptimized
        />
      </div>

      <motion.section css={sectionCss} variants={defaultFadeInScaleVariants}>
        {RECRUIT_STATE.PREVIOUS === state && <Previous />}
        {RECRUIT_STATE.IN_PROGRESS === state && <InProgress remainTime={remainTime} />}
        {RECRUIT_STATE.FINISH === state && <Finish />}
      </motion.section>

      {/* <motion.div
        css={scrollBottomIconWrapperCss}
        style={{ opacity: scrollBottomOpacity, scale: scrollBottomScale }}
        variants={scrollBottomVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollBottomIcon />
      </motion.div> */}
    </motion.header>
  );
}

const headerCss = css`
  width: 100%;
  height: calc(100vh - ${NAV_HEIGHT}px);
`;

const backgroundCss = css`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100%;
`;

const sectionCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;

// const scrollBottomIconWrapperCss = css`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   margin: 0 auto;

//   ${mediaQuery('xs')} {
//     bottom: 50px;
//   }
// `;

// const scrollBottomVariants: Variants = {
//   initial: {
//     opacity: 0,
//     scale: 0.5,
//     y: -30,
//     x: '-50%',
//     transition: { duration: 1.2, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 1.2, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.85,
//     y: 0,
//     transition: { duration: 1.2, ease: defaultEasing },
//     willChange: 'opacity, transform',
//   },
// };

export const RECRUIT_STATE = {
  PREVIOUS: 'PREVIOUS',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISH: 'FINISH',
};

const SECONDS_TO_MS = 1000;

function useRecruitState() {
  const [state, setState] = useState('');
  const [remainTime, setRemainTime] = useState(0);
  const timerId = useRef<number | null>(null);
  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  useEffectOnce(() => {
    const currentState = getCurrentState();

    if (RECRUIT_STATE.FINISH !== currentState) {
      setRemainTime(getRemainTime());
      playTimer();
    }

    setState(currentState);

    return () => {
      resetTimer();
    };
  });

  const getCurrentState = () => {
    const current = new Date();

    if (startDate > current) return RECRUIT_STATE.PREVIOUS;
    if (endDate < current) return RECRUIT_STATE.FINISH;

    return RECRUIT_STATE.IN_PROGRESS;
  };

  const getRemainTime = () => {
    const current = new Date();

    return Math.floor((endDate.getTime() - current.getTime()) / SECONDS_TO_MS);
  };

  const playTimer = () => {
    timerId.current = requestAnimationFrame(timer);
  };

  const resetTimer = () => {
    timerId.current = null;
  };

  const timer = () => {
    if (!timerId.current) return;

    const currentState = getCurrentState();
    if (RECRUIT_STATE.FINISH === currentState) {
      setState(currentState);
      return;
    }

    if (currentState !== state) setState(currentState);

    const _remainTime = getRemainTime();
    if (RECRUIT_STATE.IN_PROGRESS === currentState && _remainTime !== remainTime) {
      setRemainTime(_remainTime);
    }

    playTimer();
  };

  return { state, remainTime };
}
