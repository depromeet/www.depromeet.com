export const isBrowser = (): boolean => !isServerSide();
export const isServerSide = (): boolean => typeof window === 'undefined';
