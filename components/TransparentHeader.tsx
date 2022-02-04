import { useCallback, useEffect, useState } from 'react';

import { Header } from '../components';

export default function TransparentHeader() {
  const [isTransparent, setTransparent] = useState(true);

  const handleScroll = useCallback(() => {
    const yOffset = window?.pageYOffset;

    if (yOffset === 0) {
      setTransparent(true);
    } else if (isTransparent) {
      setTransparent(false);
    }
  }, [isTransparent, setTransparent]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <Header isTransparent={isTransparent} />;
}
