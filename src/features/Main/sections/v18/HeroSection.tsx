/**
 * TEMP: 디프만 코어 요청으로 인한 임시 Hero 영역 대체 코드입니다.
 * 최상단을 코어 3기 모집 배너 이미지 한 장으로 대체하고, 클릭 시 노션 모집 페이지로 이동시킵니다.
 * 원복 시 아래 하단에 주석으로 보존해둔 기존 18기 HeroSection 코드를 복원해주세요.
 */
import Image from 'next/image';
import { css } from '@emotion/react';

const CORE_RECRUIT_URL = 'https://depromeet.notion.site/recruit-3th-open';

export const HeroSection = () => {
  return (
    <section css={sectionCss}>
      <a
        href={CORE_RECRUIT_URL}
        target="_blank"
        rel="noopener noreferrer"
        css={linkCss}
        aria-label="디프만 코어 3기 모집 지원하러 가기"
      >
        <Image
          src="/images/core/recruit-3rd-hero.png"
          alt="디프만 코어 3기 모집 - 2026.07.16 ~ 2026.08.02, 프로덕트 디자이너 & 웹 프론트엔드 개발자 모집"
          width={2280}
          height={1282}
          css={imageCss}
          priority
        />
      </a>
    </section>
  );
};

const sectionCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background: #ffffff;
`;

const linkCss = css`
  display: block;
  width: 100%;
  max-width: 2280px;
`;

const imageCss = css`
  width: 100%;
  height: auto;
  display: block;
`;

/* NOTE: 기존 18기 HeroSection 코드 백업 - 디프만 코어 임시 배너 종료 후 아래 코드를 복원해주세요.
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/useIsInProgress';
import { colors } from '~/styles/colors';
import { getPathToRecruit } from '~/utils/utils';

const useBrowserType = () => {
  const [browserType, setBrowserType] = useState<'chrome' | 'safari' | 'other'>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    // Chrome이지만 Edge, Opera, Samsung Browser 등은 제외
    const isChromeBrowser =
      /Chrome/.test(userAgent) && !/Edge|Edg|OPR|Opera|SamsungBrowser/.test(userAgent);
    // Safari이지만 Chrome이 아닌 경우 (Chrome UA에도 Safari가 포함됨)
    const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);

    if (isChromeBrowser) {
      setBrowserType('chrome');
    } else if (isSafariBrowser) {
      setBrowserType('safari');
    } else {
      setBrowserType('other');
    }
  }, []);

  return browserType;
};

const CTAButton = () => {
  const [isClientReady, setIsClientReady] = useState(false);
  const router = useRouter();
  const { progressState } = useIsInProgress();
  const { label, action } = getPathToRecruit(router, progressState);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  if (!isClientReady) return null;

  return (
    <button css={ctaButtonCss} onClick={action}>
      {label}
    </button>
  );
};

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const browserType = useBrowserType();

  useEffect(() => {
    const video = videoRef.current;
    if (video && (browserType === 'chrome' || browserType === 'safari')) {
      video.play().catch(() => {
        // Autoplay blocked, will show poster
      });
    }
  }, [browserType]);

  const renderKeyring = () => {
    if (browserType === 'chrome') {
      return (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          css={keyringVideoCss}
          poster="/images/18th/home/keyring.png"
        >
          <source src="/images/18th/keyring/keyring.webm" type="video/webm" />
        </video>
      );
    }

    if (browserType === 'safari') {
      // Safari: animated WebP 사용 (투명 배경 지원)
      return <img src="/images/18th/keyring/keyring.webp" alt="Keyring" css={keyringVideoCss} />;
    }

    // 기타 브라우저: 정적 이미지
    return (
      <Image
        src="/images/18th/home/keyring.png"
        alt="Keyring"
        width={1215}
        height={1215}
        css={keyringVideoCss}
        priority
      />
    );
  };

  return (
    <section css={sectionCss}>
      <div css={contentCss}>
        <span css={taglineCss('left')}>
          CONNECT
          <br />
          THE RING
        </span>
        <span css={taglineCss('right')}>
          FIND YOUR
          <br />
          KEY
        </span>

        <div css={keyringContainerCss}>{renderKeyring()}</div>

        <div css={logoContainerCss}>
          <Image
            src="/images/18th/home/depromeet18.webp"
            alt="DEPROMEET 18"
            width={5519}
            height={517}
            css={heroTextCss}
          />
          <Image
            src="/images/18th/home/depromeet18_2.png"
            alt="DEPROMEET 18"
            width={877}
            height={396}
            css={heroText2Css}
          />
        </div>

        <CTAButton />
      </div>
    </section>
  );
};

const GNB_HEIGHT = 80;

// Breakpoints:
// Mobile: <= 767px
// Tablet: 768px - 1279px
// Desktop: 1280px - 1919px
// Large Desktop: >= 1920px

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 812px;
  overflow: hidden;
  background: linear-gradient(141deg, #5aafff 22.58%, #dfeeff 86.28%);

  @media (min-width: 768px) {
    height: 1024px;
  }

  @media (min-width: 1280px) {
    height: 800px;
  }

  @media (min-width: 1920px) {
    height: 937px;
  }
`;

const contentCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const taglineCss = (position: 'left' | 'right') => css`
  position: absolute;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: ${colors.grey18['00']};
  letter-spacing: -0.02em;
  top: ${GNB_HEIGHT + 20}px;

  ${position === 'left' &&
  css`
    left: 20px;
    text-align: left;
  `}

  ${position === 'right' &&
  css`
    right: 20px;
    text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 36px;
    top: ${GNB_HEIGHT + 53}px;
    left: ${position === 'left' ? '40px' : 'auto'};
    right: ${position === 'right' ? '40px' : 'auto'};
  }

  @media (min-width: 1280px) {
    font-size: 48px;
    top: auto;
    bottom: 166px;
  }

  @media (min-width: 1920px) {
    bottom: 152px;
  }
`;

const keyringContainerCss = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  // Safari HEVC alpha 영상 로드 시 컴포지팅 이슈 방지
  isolation: isolate;
  will-change: transform;

  @media (min-width: 1280px) {
    top: -221px;
  }

  @media (min-width: 1920px) {
    top: -370px;
  }
`;

const keyringVideoCss = css`
  object-fit: contain;
  width: 534px;
  height: 534px;
  // Safari alpha 영상 렌더링
  background: transparent;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (min-width: 768px) {
    width: 752px;
    height: 752px;
  }

  @media (min-width: 1280px) {
    width: 949px;
    height: 949px;
  }

  @media (min-width: 1920px) {
    width: 1215px;
    height: 1335px;
  }
`;

const logoContainerCss = css`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 54px);
  bottom: 141px;
  display: flex;
  justify-content: center;
  // Safari HEVC alpha 영상 컴포지팅 이슈 방지
  isolation: isolate;
  backface-visibility: hidden;

  @media (min-width: 768px) {
    width: calc(100% - 278px);
    bottom: 92px;
  }

  @media (min-width: 1280px) {
    width: calc(100% - 80px);
    bottom: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const heroTextCss = css`
  display: none;
  width: 100%;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;

  @media (min-width: 1280px) {
    display: block;
  }
`;

const heroText2Css = css`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const ctaButtonCss = css`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  bottom: 52px;
  display: inline-flex;
  height: 60px;
  padding: 12px 40px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  border: none;
  background: #050505;
  color: ${colors.grey18['00']};
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey18['800']};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
*/
