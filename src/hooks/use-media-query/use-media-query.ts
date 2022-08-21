import { useEffect, useState } from 'react';

import { size, SizeKey } from '~/styles/constants';

export function useMediaQuery(width: number): boolean;

export function useMediaQuery(sizeKey: SizeKey): boolean;

export default function useMediaQuery(width: number | SizeKey) {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    function updateTarget(e: MediaQueryListEvent) {
      setTargetReached(e.matches);
    }

    const targetWidth = typeof width === 'number' ? `${width}px` : size[width];

    const media = window.matchMedia(`(max-width: ${targetWidth})`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width]);

  return targetReached;
}
