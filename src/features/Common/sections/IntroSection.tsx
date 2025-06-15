import { Intro } from '~/components/Intro';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';

type ImageSize = {
  width: number;
  height: number;
};

type IntroSectionProps = {
  defaultImgUrl: string;
  mobileImgUrl: string;
  pcSize?: ImageSize;
  mobileSize?: ImageSize;
};

export const IntroSection = ({
  defaultImgUrl,
  mobileImgUrl,
  pcSize,
  mobileSize,
}: IntroSectionProps) => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <>
      {isMobileSize ? (
        <Intro
          imageUrl={mobileImgUrl}
          title="16기 정보 인트로"
          width={mobileSize?.width ?? 720}
          height={mobileSize?.height ?? 360}
          color="black"
        />
      ) : (
        <Intro
          imageUrl={defaultImgUrl}
          title="16기 정보 인트로"
          width={pcSize?.width ?? 1920}
          height={pcSize?.height ?? 300}
          color="black"
        />
      )}
    </>
  );
};
