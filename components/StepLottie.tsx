import {
  useEffect, useState, FC, ComponentType,
} from 'react';
import dynamic from 'next/dynamic';

export type LottieProps = {
  lottie: () => Promise<unknown>,
  fallback: () => ComponentType,
};

const StepLottie: FC<{lottie: LottieProps}> = ({ lottie }) => {
  const [lottieFile, setLottie] = useState(null);
  const FallbackImage = lottie.fallback();
  const Lottie = dynamic(() => import('react-lottie'),
    {
      loading: () => <FallbackImage />,
    });

  useEffect(() => {
    async function fetchLottie() {
      const fetchedLottie = await lottie.lottie();
      setLottie(fetchedLottie);
    }
    fetchLottie();
  }, [lottie, setLottie]);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
  };
  return (
    <>
      {
        lottieFile === null ? <FallbackImage />
          : (
            <Lottie
              ariaRole="img"
              isClickToPauseDisabled
              options={lottieOptions}
            />
          )
      }
    </>
  );
};
export default StepLottie;
