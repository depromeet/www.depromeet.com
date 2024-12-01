import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import useIsInProgress from '~/hooks/useIsInProgress';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';
import { getPathToRecruit } from '~/utils/utils';

/**
 * * Main 페이지 Intro + 지원 버튼 section
 */
export const MainIntroSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const [isClientReady, setIsClientReady] = useState<boolean>(false);
  const router = useRouter();
  const { progressState } = useIsInProgress();
  const { label, action } = getPathToRecruit(router, progressState);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  return (
    <section css={containerCss}>
      {isClientReady && (
        <article css={articleCss}>
          <Image
            width={!isMobileSize ? 1920 : 438}
            height={!isMobileSize ? 1080 : 445}
            src={'/images/16th/intro/depromeet.gif'}
            id="depromeet"
            alt="디퍼 모집 이미지"
            priority
          />
          <Image
            src={!isMobileSize ? '/images/16th/intro/title.svg' : '/images/16th/intro/title_m.svg'}
            width={!isMobileSize ? 772 : 296}
            height={!isMobileSize ? 230 : 88}
            id={'title'}
            alt={'디프만 메인'}
          />
          <button css={buttonCss} onClick={action}>
            {label}
          </button>
        </article>
      )}
    </section>
  );
};

const containerCss = () => css`
  width: 100dvw;
  height: 100dvh;
  padding-top: 61px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

const articleCss = () => css`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  #depromeet,
  #title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #depromeet {
    width: 100dvw;
    height: 100dvh;
    object-fit: cover;
  }

  #title {
    top: 20%;
  }
`;

const buttonCss = () => css`
  ${theme.typosV2.pretendard.bold24}
  background: white;
  position: relative;
  margin: auto auto 80px;
  width: fit-content;
  height: auto;
  border-radius: 97px;

  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.bold18}
    padding: 16px 32px;
  }
`;
