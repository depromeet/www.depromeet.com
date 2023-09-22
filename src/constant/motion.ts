import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.05 } },
};
