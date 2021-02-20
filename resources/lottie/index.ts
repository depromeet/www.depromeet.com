import dynamic from 'next/dynamic';

const StepAFallback = dynamic(() => import('../images/step-A-fallback.svg'));
const StepBFallback = dynamic(() => import('../images/step-B-fallback.svg'));
const StepCFallback = dynamic(() => import('../images/step-C-fallback.svg'));
const StepDFallback = dynamic(() => import('../images/step-D-fallback.svg'));
const stepALottie = import('./step-A.json');
const stepBLottie = import('./step-B.json');
const stepCLottie = import('./step-C.json');
const stepDLottie = import('./step-D.json');

export const stepA = {
  file: stepALottie,
  fallback: StepAFallback,
};
export const stepB = {
  file: stepBLottie,
  fallback: StepBFallback,
};
export const stepC = {
  file: stepCLottie,
  fallback: StepCFallback,
};
export const stepD = {
  file: stepDLottie,
  fallback: StepDFallback,
};
