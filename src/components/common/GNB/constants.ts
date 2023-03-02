import { Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';

export const RECRUTING_BANNER_HEIGHT = 52;
export const ANCHORS_HEIGHT = 60;
export const NAV_HEIGHT = RECRUTING_BANNER_HEIGHT + ANCHORS_HEIGHT;

export const mobileRouteVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
};
