import { useEffect } from 'react';

const useScrollLock = ({ lock }: { lock: boolean }): void => {
  useEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.documentElement).overflow;
    if (lock) {
      document.documentElement.style.overflow = 'hidden';
    }

    return () => (document.documentElement.style.overflow = originalStyle);
  }, [lock]);
};

export default useScrollLock;
