import { Variants } from 'framer-motion';

import { defaultEasing } from '~/constants/motions';

import { Route } from './type';

export const RECRUTING_BANNER_HEIGHT = 52;
export const ANCHORS_HEIGHT = 60;
export const NAV_HEIGHT = RECRUTING_BANNER_HEIGHT + ANCHORS_HEIGHT;

export const NAVIGATION_ROUTES: readonly Route[] = [
  { name: '디프만 A TO Z', path: '/about' },
  { name: '지난 프로젝트', path: '/project' },
  { name: '문의하기', path: '/contact' },
  { name: '13기 모집 안내', path: '/recruit' },
];

export const aseteriskVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      ease: defaultEasing,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: defaultEasing,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: defaultEasing,
    },
  },
};
