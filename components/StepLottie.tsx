import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'));

const StepLottie = ({ path }) => {
  const [lottieFile, setLottie] = useState(null);

  useEffect(() => {
    async function fetchLottie() {
      const fetchedLottie = await import(`../public${path}`);
      setLottie(fetchedLottie.default);
    }
    fetchLottie();
  }, [path, setLottie]);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
  };
  return (
    <>
      {
        lottieFile === null
          ? <div />
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
