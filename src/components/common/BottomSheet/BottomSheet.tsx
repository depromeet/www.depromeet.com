import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { motion, Variants } from 'framer-motion';

import { defaultEasing, defaultFadeInVariants, staggerOne } from '~/constants/motions';
import { colors, radius } from '~/styles/constants';

import PortalWrapper from '../PortalWrapper/PortalWrapper';

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
  z-index: 10000;
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

  background-color: ${colors.gray9};
  border-radius: ${radius.lg} ${radius.lg} 0 0;

  overflow-y: scroll;
`;

export const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'transform',
  },
};
