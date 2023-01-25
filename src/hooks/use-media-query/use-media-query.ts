import { useCallback, useEffect, useState } from 'react';

import { SIZE, size, SizeKey } from '~/styles/constants';

import { useUserAgent } from '../use-user-agent';

export function useMediaQuery(width: number): boolean;

export function useMediaQuery(sizeKey: SizeKey): boolean;

export default function useMediaQuery(width: number | SizeKey) {
  const { isMobileAgent } = useUserAgent();
  const targetWidth = typeof width === 'number' ? `${width}px` : size[width];
  const isMobileSize = (width <= SIZE.xs || targetWidth === size.xs) && isMobileAgent;

  const [targetReached, setTargetReached] = useState<boolean>(isMobileSize);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${targetWidth})`);
    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, targetWidth]);

  return targetReached;
}
