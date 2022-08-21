import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';
import { colors } from '~/styles/constants';

interface Props {
  close: VoidFunction;
}

export default function DimOverlay({ close }: Props) {
  return (
    <motion.div
      onClick={close}
      css={dimBackgroundCss}
      variants={fadeInVariants}
      initial="closed"
      animate="open"
      exit="closed"
    />
  );
}

const dimBackgroundCss = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  opacity: 0.4;
  z-index: 9000;
`;

export const fadeInVariants: Variants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  open: {
    opacity: 0.4,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
};
