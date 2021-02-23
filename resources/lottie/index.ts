import dynamic from 'next/dynamic';

const stepALottie = () => import('./step-A.json');
const stepBLottie = () => import('./step-B.json');
const stepCLottie = () => import('./step-C.json');
const stepDLottie = () => import('./step-D.json');
const StepAFallback = () => dynamic(() => import('../images/step-A-fallback.svg'));
const StepBFallback = () => dynamic(() => import('../images/step-B-fallback.svg'));
const StepCFallback = () => dynamic(() => import('../images/step-C-fallback.svg'));
const StepDFallback = () => dynamic(() => import('../images/step-D-fallback.svg'));

export const stepA = {
  lottie: stepALottie,
  fallback: StepAFallback,
};
export const stepB = {
  lottie: stepBLottie,
  fallback: StepBFallback,
};
export const stepC = {
  lottie: stepCLottie,
  fallback: StepCFallback,
};
export const stepD = {
  lottie: stepDLottie,
  fallback: StepDFallback,
};
