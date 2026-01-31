import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { motion, useInView } from 'framer-motion';

import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

const enterTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
};

const exitTransition = {
  duration: 0,
};

export const BrandingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });
  const isOutOfView = useInView(sectionRef, { amount: 0 });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShouldAnimate(true);
      setHasAnimated(true);
    }
    if (!isOutOfView && hasAnimated) {
      setShouldAnimate(false);
      setHasAnimated(false);
    }
  }, [isInView, isOutOfView, hasAnimated]);

  return (
    <section css={sectionCss} ref={sectionRef}>
      <div css={innerCss}>
        <div css={contentCss}>
          <motion.div
            animate={shouldAnimate ? 'visible' : 'hidden'}
            variants={revealVariants}
            transition={shouldAnimate ? enterTransition : exitTransition}
          >
            <h2 css={headingCss}>Connect the ring</h2>
          </motion.div>
          <motion.div
            animate={shouldAnimate ? 'visible' : 'hidden'}
            variants={revealVariants}
            transition={shouldAnimate ? { ...enterTransition, delay: 0.15 } : exitTransition}
          >
            <h2 css={headingCss}>Find your key&nbsp;</h2>
          </motion.div>
          <motion.div
            animate={shouldAnimate ? 'visible' : 'hidden'}
            variants={revealVariants}
            transition={shouldAnimate ? { ...enterTransition, delay: 0.3 } : exitTransition}
          >
            <p css={subheadingCss}>연결의 가치를 성장의 열쇠로</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const sectionCss = css`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: ${colors.grey18['00']};
  overflow: visible;
`;

const innerCss = css`
  max-width: 1280px;
  min-height: 745px;
  margin: 0 auto;
  padding: 100px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 1279px) {
    max-width: 100%;
    min-height: auto;
    padding: 220px 40px;
  }

  ${mediaQuery('mobile')} {
    padding: 220px 20px;
  }
`;

const contentCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow: visible;

  @media (max-width: 1279px) {
    gap: 24px;
    align-self: stretch;
  }
`;

const headingCss = css`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 88px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  letter-spacing: -3.52px;
  background: linear-gradient(90deg, #0078e7 0%, #59aefe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 0.1em;

  ${mediaQuery('mobile')} {
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.4px;
  }
`;

const subheadingCss = css`
  margin-top: 28px;
  font-family: Pretendard, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.64px;
  text-align: center;
  background: linear-gradient(90deg, #0078e7 0%, #59aefe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1279px) {
    margin-top: 0;
  }

  ${mediaQuery('mobile')} {
    font-size: 22px;
    letter-spacing: 0.22px;
  }
`;
