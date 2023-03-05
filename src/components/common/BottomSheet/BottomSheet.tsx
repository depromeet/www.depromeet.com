import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { defaultEasing, defaultFadeInVariants, staggerOne } from '~/constants/motions';

import PortalWrapper from '../PortalWrapper';

export interface BottomSheetModalProps {
  isShowing: boolean;
  children: ReactNode;
  onClose: VoidFunction;
}

export default function BottomSheet({ isShowing, children, onClose }: BottomSheetModalProps) {
  const onDeleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return (
    <PortalWrapper isShowing={isShowing}>
      <motion.div initial="initial" animate="animate" exit="exit" variants={staggerOne}>
        <motion.div css={dimBackdropCss} onClick={onDeleteHandler} variants={defaultFadeInVariants}>
          <motion.div variants={bottomSheetVariants} css={contentWrapperCss}>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </PortalWrapper>
  );
}

const dimBackdropCss = () => css`
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  overflow: hidden;
`;

const HIGHT = 190;
const contentWrapperCss = () => css`
  position: absolute;
  top: 100%;
  transform: translateY(-100%);
  z-index: 1000;

  width: 100%;
  height: ${HIGHT}px;

  overflow-y: scroll;
  border-radius: 20px 20px 0 0;
`;

export const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.4, ease: defaultEasing },
    willChange: 'transform',
  },
};
