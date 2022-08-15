import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { ScrollBottomIcon } from '~/components/common/icons';
import { defaultEasing } from '~/constants/motions';

export default function HeaderSection() {
  return (
    <header css={headerCss}>
      <p>some text or image</p>

      <motion.div
        css={scrollBottomIconWrapperCss}
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
  width: 100%;
  height: 100vh;
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
