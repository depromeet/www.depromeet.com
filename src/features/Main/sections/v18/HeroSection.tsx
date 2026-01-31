import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/useIsInProgress';
import { colors } from '~/styles/colors';
import { getPathToRecruit } from '~/utils/utils';

export const HeroSection = () => {
  const [isClientReady, setIsClientReady] = useState(false);
  const router = useRouter();
  const { progressState } = useIsInProgress();
  const { label, action } = getPathToRecruit(router, progressState);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  if (!isClientReady) return null;

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

        <div css={keyringContainerCss}>
          <Image
            src="/images/18th/home/keyring.png"
            alt="키링"
            width={1042}
            height={1215}
            priority
            css={keyringImageCss}
          />
        </div>

        <div css={logoContainerCss}>
          <h1 css={logoCss}>
            <span css={logoTextCss}>DEPRO</span>
            <span css={logoTextCss}>MEET<span css={logoNumberCss}>18</span></span>
          </h1>
        </div>

        <button css={ctaButtonCss} onClick={action}>
          {label}
        </button>
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
  background: linear-gradient(141deg, #5AAFFF 22.58%, #DFEEFF 86.28%);

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

  @media (min-width: 1280px) {
    top: -221px;
  }

  @media (min-width: 1920px) {
    top: -310px;
  }
`;

const keyringImageCss = css`
  object-fit: contain;
  width: 458px;
  height: 534px;

  @media (min-width: 768px) {
    width: 645px;
    height: 752px;
  }

  @media (min-width: 1280px) {
    width: 814px;
    height: 949px;
  }

  @media (min-width: 1920px) {
    width: 1042px;
    height: 1215px;
  }
`;

const logoContainerCss = css`
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 141px;

  @media (min-width: 768px) {
    bottom: 92px;
  }

  @media (min-width: 1280px) {
    bottom: auto;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const logoCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 1;
  color: ${colors.grey18['00']};
  text-align: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const logoTextCss = css`
  font-size: 72px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 120px;
  }

  @media (min-width: 1280px) {
    font-size: 160px;
  }
`;

const logoNumberCss = css`
  letter-spacing: -0.02em;
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
