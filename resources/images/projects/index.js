import dynamic from 'next/dynamic';

export const threeDollarsImage = () => dynamic(() => import('./images/img-3dollars.svg'));
export const threeDollarsIcon = () => dynamic(() => import('./icons/icon-3dollars.svg'));
export const healthNewbieIcon = () => dynamic(() => import('./icons/icon-health-newbie.svg'));
export const healthNewbieImage = () => dynamic(() => import('./images/img-health-newbie.svg'));
