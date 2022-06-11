import { useCallback, useEffect, useState } from 'react';

type Props = {
  y: number;
};

export default function usePassed({ y }: Props) {
  const [passed, setPassed] = useState(false);

  const monitYOffset = useCallback(() => {
    const scrollY = window.scrollY ?? window.pageYOffset;

    setPassed(scrollY > y);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', monitYOffset);

    return () => {
      window.removeEventListener('scroll', monitYOffset);
    };
  }, []);

  return passed;
}
