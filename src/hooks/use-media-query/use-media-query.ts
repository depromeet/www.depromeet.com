import { useCallback, useEffect, useState } from 'react';

import { size, SizeKey } from '~/styles/constants';

export function useMediaQuery(width: number): boolean;

export function useMediaQuery(sizeKey: SizeKey): boolean;

export default function useMediaQuery(width: number | SizeKey) {
  const [targetReached, setTargetReached] = useState<boolean>(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const targetWidth = typeof width === 'number' ? `${width}px` : size[width];

    const media = window.matchMedia(`(max-width: ${targetWidth})`);
    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, width]);

  return targetReached;
}
