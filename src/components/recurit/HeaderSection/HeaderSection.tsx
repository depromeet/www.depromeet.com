import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

import { ScrollBottomIcon } from '~/components/common/icons';
import { defaultEasing, defaultFadeInScaleVariants } from '~/constants/motions';
import useEffectOnce from '~/hooks/useEffectOnce';

import Finish from './Finish';
import InProgress from './InProgress';
import Previous from './Previous';

const STATE = {
  PREVIOUS: 'PREVIOUS',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISH: 'FINSH',
};
const SECONDS_TO_MS = 1000;

const START_DATE = '2022-08-21T15:00:00.000Z';
const END_DATE = '2022-09-01T15:00:00.000Z';

// const START_DATE = '2022-08-18T22:21:59.000Z'; // test
// const END_DATE = '2022-08-19T20:00:00.000Z'; // test

export default function HeaderSection() {
  const [state, setState] = useState('');
  const [remainTime, setRemainTime] = useState(0);
  const timerId = useRef<number | null>(null);

  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  const { scrollY } = useScroll();
  const scrollBottomOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scrollBottomScale = useTransform(scrollY, [0, 800], [1, 0.6]);

  useEffectOnce(() => {
    const currentState = getCurrentState();

    if (STATE.FINISH !== currentState) {
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

    if (startDate > current) return STATE.PREVIOUS;
    if (endDate < current) return STATE.FINISH;

    return STATE.IN_PROGRESS;
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
    if (STATE.FINISH === currentState) {
      setState(currentState);
      return;
    }

    if (currentState !== state) setState(currentState);

    const _remainTime = getRemainTime();
    if (STATE.IN_PROGRESS === currentState && _remainTime !== remainTime) {
      setRemainTime(_remainTime);
    }

    playTimer();
  };

  return (
    <motion.header css={headerCss} initial="initial" animate="animate" exit="exit">
      <motion.section css={sectionCss} variants={defaultFadeInScaleVariants}>
        {STATE.PREVIOUS === state && <Previous />}
        {STATE.IN_PROGRESS === state && <InProgress remainTime={remainTime} />}
        {STATE.FINISH === state && <Finish />}
      </motion.section>

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
    </motion.header>
  );
}

const headerCss = css`
  width: 100%;
  height: 100vh;
`;

const sectionCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    y: -30,
    x: '-50%',
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
