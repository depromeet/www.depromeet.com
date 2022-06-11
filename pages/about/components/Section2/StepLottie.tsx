import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

export type Props = {
  lottie: () => Promise<unknown>;
  fallback: () => React.ReactElement;
};

export default function StepLottie({ lottie, fallback: Fallback }: Props) {
  const [animationData, setAnimationData] = useState<unknown>();

  useEffect(() => {
    (async function fetchLottie() {
      const data = await lottie();

      setAnimationData(data);
    })();
  }, [lottie, setAnimationData]);

  return animationData == null ? (
    <Fallback />
  ) : (
    <Lottie
      ariaRole="img"
      isClickToPauseDisabled
      options={{
        loop: true,
        autoplay: true,
        animationData,
      }}
    />
  );
}
