import { useEffect, useState } from 'react';
import ReactLottie from 'react-lottie';

export type Props = {
  lottie: () => Promise<unknown>;
  fallback: React.ComponentType;
};

export default function Lottie({ lottie, fallback: Fallback }: Props) {
  const [animationData, setAnimationData] = useState<unknown>();

  useEffect(() => {
    (async function () {
      setAnimationData(await lottie());
    })();
  }, [lottie, setAnimationData]);

  return animationData == null ? (
    <Fallback />
  ) : (
    <ReactLottie
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
