import dynamic from 'next/dynamic';

export const iconAppleStore = () => dynamic(() => import('./icon-apple-store.svg'));
export const iconGoogleStore = () => dynamic(() => import('./icon-google-store.svg'));
export const iconConstruction = () => dynamic(() => import('./icon-construction.svg'));
export const iconWebLink = () => dynamic(() => import('./icon-web-link.svg'));

export const rightBorderImg = () => dynamic(() => import('./right-border.svg'));
