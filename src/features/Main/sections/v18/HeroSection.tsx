import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import useIsInProgress from '~/hooks/useIsInProgress';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { getPathToRecruit } from '~/utils/utils';

export const HeroSection = () => {
  const [isClientReady, setIsClientReady] = useState(false);
  const router = useRouter();
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
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
            width={isMobileSize ? 458 : 814}
            height={isMobileSize ? 534 : 949}
            priority
            css={keyringImageCss}
          />
        </div>

        <div css={logoContainerCss}>
          <h1 css={logoCss}>
            <span css={logoTextCss}>DEPRO</span>
            <span css={logoTextCss}>MEET</span>
            <span css={logoNumberCss}>18</span>
          </h1>
        </div>

        <button css={ctaButtonCss} onClick={action}>
          {label}
        </button>
      </div>
    </section>
  );
};

const sectionCss = css`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #a8d4ff 0%, #d4e9ff 50%, #e8f4ff 100%);
`;

const contentCss = css`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 40px;

  ${mediaQuery('mobile')} {
    padding-bottom: 32px;
  }
`;

const taglineCss = (position: 'left' | 'right') => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  color: ${colors.grey18['900']};
  letter-spacing: -0.02em;

  ${position === 'left' &&
  css`
    left: 40px;
    text-align: left;
  `}

  ${position === 'right' &&
  css`
    right: 40px;
    text-align: right;
  `}

  ${mediaQuery('tablet')} {
    font-size: 36px;
  }

  ${mediaQuery('mobile')} {
    font-size: 24px;
    top: 92px;
    transform: none;

    ${position === 'left' &&
    css`
      left: 20px;
    `}

    ${position === 'right' &&
    css`
      right: 20px;
    `}
  }
`;

const keyringContainerCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  z-index: 1;

  ${mediaQuery('mobile')} {
    transform: translate(-50%, -50%);
    top: 45%;
  }
`;

const keyringImageCss = css`
  object-fit: contain;
  max-width: 100%;
  height: auto;

  ${mediaQuery('mobile')} {
    width: 100%;
    max-width: 360px;
  }
`;

const logoContainerCss = css`
  position: relative;
  z-index: 2;
  margin-bottom: 40px;

  ${mediaQuery('mobile')} {
    margin-bottom: 24px;
  }
`;

const logoCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 0 24px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  line-height: 1;
  color: ${colors.grey18['900']};

  ${mediaQuery('mobile')} {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const logoTextCss = css`
  font-size: 160px;
  letter-spacing: -0.02em;

  ${mediaQuery('tablet')} {
    font-size: 120px;
  }

  ${mediaQuery('mobile')} {
    font-size: 72px;
  }
`;

const logoNumberCss = css`
  font-size: 160px;
  letter-spacing: -0.02em;

  ${mediaQuery('tablet')} {
    font-size: 120px;
  }

  ${mediaQuery('mobile')} {
    font-size: 72px;
  }
`;

const ctaButtonCss = css`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 48px;
  border-radius: 100px;
  border: none;
  background: ${colors.grey18['900']};
  color: ${colors.grey18['00']};
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey18['800']};
    transform: translateY(-2px);
  }

  ${mediaQuery('mobile')} {
    padding: 16px 40px;
    font-size: 16px;
  }
`;
