import {
  useState, useEffect,
} from 'react';
import { isBrowser } from './global_utils';

export const useHandleHeaderTransparencyOnScroll = (): boolean => {
  const [isTransparent, setTransparent] = useState(true);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset === 0) {
      setTransparent(true);
    } else if (isTransparent) {
      setTransparent(false);
    }
  };

  useHeaderScrollHandler(handleScroll);
  return isTransparent;
};

export const useHeaderScrollHandler = (handleScroll: () => void) => {
  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {};
  }, [handleScroll]);
};
