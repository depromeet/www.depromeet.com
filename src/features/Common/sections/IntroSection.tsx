import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { Intro } from '~/components/Intro';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';

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
  const [isClientReady, setIsClientReady] = useState<boolean>(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return (
    <div css={containerCss}>
      {isClientReady && (
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
      )}
    </div>
  );
};

const containerCss = css`
  width: 100%;
  min-height: 300px;
  height: auto;
  margin-top: 60px;

  ${mediaQuery('mobile')} {
    min-height: 0;
    aspect-ratio: 2/1;
    margin-top: 72px;
  }
`;
