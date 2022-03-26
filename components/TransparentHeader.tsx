import { useCallback, useEffect, useState } from 'react';

import { Header } from '../components';

type Props = {
  changeHeaderBgHeight: number;
};

export default function TransparentHeader({ changeHeaderBgHeight }: Props) {
  const [showHeaderBg, setShowHeaderBg] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY ?? window.pageYOffset;
    setShowHeaderBg(scrollY > changeHeaderBgHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Header showHeaderBg={showHeaderBg} />;
}
