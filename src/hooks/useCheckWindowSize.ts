import { useEffect, useState } from 'react';

import { SIZE, SizeKey } from '~/styles/media';

type UseCheckWindowSizeProps = SizeKey;

export const useCheckWindowSize = (size: UseCheckWindowSizeProps) => {
  const [isTargetSize, setIsTargetSize] = useState(false);

  const checkWindowSize = () => {
    setIsTargetSize(window.innerWidth <= SIZE[size]);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isTargetSize,
  };
};
