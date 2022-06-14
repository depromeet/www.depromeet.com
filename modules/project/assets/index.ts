import dynamic from 'next/dynamic';

export const stepA = {
  lottie: () => import('./lottie/step-A.json'),
  fallback: dynamic(() => import('./images/step-A-fallback.svg')),
};
export const stepB = {
  lottie: () => import('./lottie/step-B.json'),
  fallback: dynamic(() => import('./images/step-B-fallback.svg')),
};
export const stepC = {
  lottie: () => import('./lottie/step-C.json'),
  fallback: dynamic(() => import('./images/step-C-fallback.svg')),
};
export const stepD = {
  lottie: () => import('./lottie/step-D.json'),
  fallback: dynamic(() => import('./images/step-D-fallback.svg')),
};

export { default as Down } from './images/down.svg';
export { default as RightArrow } from './images/right-arrow.svg';
export { default as BelowArrow } from './images/below-arrow.svg';

export { default as AppleStore } from './images/apple.svg';
export { default as GooglePlay } from './images/google.svg';
export { default as WebLink } from './images/web.svg';
export { default as Construction } from './images/construction.svg';
