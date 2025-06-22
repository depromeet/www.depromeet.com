import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { ARROW_URLS, LANDING_PART_POSITIONS } from '~/constant/landing';
import { BlogRulerDecoration } from '~/features/Blog/sections/BlogRulerDecoration';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
// TODO: 반응형 대응 시 사용 필요
// import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import useIsInProgress from '~/hooks/useIsInProgress';
import { sectionGridBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';
import { getNextArrowPosition, getPathToRecruit, getPositionStyleByAngle } from '~/utils/utils';

/**
 * * Main 페이지 Intro + 지원 버튼 section
 */
export const MainIntroSection = () => {
  const randomArrowIndex = Math.floor(Math.random() * ARROW_URLS.length);
  const arrowUrl = useRef(ARROW_URLS[randomArrowIndex]);
  const [isClientReady, setIsClientReady] = useState<boolean>(false);
  const [currentPosition, setCurrentPosition] = useState('ios');
  const router = useRouter();
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { progressState } = useIsInProgress();
  const { label, action, isDisabled } = getPathToRecruit(router, progressState);

  const getLogoSize = () => {
    if (isMobileSize) return { width: 267.41, height: 40.74 };
    if (isTabletSize) return { width: 425.29, height: 64.8 };
    return { width: 525.042, height: 80 };
  };

  const getVersionSize = () => {
    if (isMobileSize) return { width: 115.58, height: 41.41 };
    if (isTabletSize) return { width: 183.01, height: 65.05 };
    return { width: 226.939, height: 81.314 };
  };

  useEffect(() => {
    setIsClientReady(true);

    let id: ReturnType<typeof setTimeout>;
    id = setTimeout(function tick() {
      setCurrentPosition(prev => getNextArrowPosition(prev));
      id = setTimeout(tick, 3000);
    }, 3000);

    return () => clearTimeout(id);
  }, [currentPosition]);

  return (
    <section css={containerCss}>
      {isClientReady && (
        <article css={articleCss}>
          <div css={titleContainerCss}>
            <Image
              width={getLogoSize().width}
              height={getLogoSize().height}
              src="/images/17th/dpm-logo.svg"
              alt="디프만 로고"
            />
            <Image
              width={getVersionSize().width}
              height={getVersionSize().height}
              src="/images/17th/dpm-version.svg"
              alt="디프만 기수"
            />
          </div>
          <p css={descriptionCss}>Define your direction</p>
          <div css={floatingContainerCss}>
            <div id="floating-depromeet">depromeet 17.0</div>
            <div id="floating-adventure">adventure</div>
          </div>
          <div css={mainImageWrapperCss}>
            <motion.img
              animate={{
                rotate:
                  (LANDING_PART_POSITIONS.find(position => position.name === currentPosition)
                    ?.angle || 0) * -1,
              }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 80,
                delay: 0.2,
              }}
              src="/images/17th/circle.png"
              alt="나침반 테두리"
              css={compassCss}
            />
            <Image
              width={361}
              height={297}
              src="/images/17th/compass-item.png"
              alt="나침반 요소"
              quality={70}
              css={compassItemCss}
            />
            <motion.img
              css={arrowCss}
              initial={{
                zIndex: 10,
              }}
              animate={{
                rotate:
                  (LANDING_PART_POSITIONS.find(position => position.name === currentPosition)
                    ?.angle || 0) * -1,
              }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 1,
                stiffness: 80,
              }}
              src={arrowUrl.current}
              alt="화살표"
              style={{
                position: 'absolute',
                scaleX: -1,
                scaleY: -1,
                willChange: 'transform',
              }}
            />
            {!isTabletSize &&
              LANDING_PART_POSITIONS.map(position => (
                <span
                  css={partCss(position, position.name === currentPosition)}
                  key={position.name}
                >
                  {position.name}
                </span>
              ))}
          </div>
          <div id="sphere">
            <Image fill src="/images/17th/sphere.png" alt="구체" />
          </div>
          <div id="ruler">
            <Image fill src="/images/17th/ruler.svg" alt="눈금" />
          </div>
          <div css={emptySpaceCss} />
          <button css={buttonCss} onClick={action} disabled={isDisabled}>
            {label}
          </button>
        </article>
      )}
      <BlogRulerDecoration />
    </section>
  );
};

const containerCss = () => css`
  width: 100dvw;
  padding-top: 61px;

  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

  ${sectionGridBg}
`;

const titleContainerCss = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 78.38px;
  padding: 44px 40px 33px;

  ${mediaQuery('mobile')} {
    flex-wrap: wrap;
    gap: 24.37px;
  }
`;

const descriptionCss = () => css`
  padding: 0 40px;
  color: #040c23;
  font-family: MartianMono;
  font-size: 28px;
  font-weight: 400;
  line-height: 142%;
  letter-spacing: -0.56px;

  ${mediaQuery('tablet')} {
    font-size: 24px;
    letter-spacing: -0.48px;
  }
  ${mediaQuery('mobile')} {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;

const floatingContainerCss = () => css`
  position: absolute;
  top: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;

  & > div {
    padding: 9px;
    color: ${colors.primary.blue};
    background-color: ${colors.primary.gray};
    font-family: MartianMono;
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: -0.56px;
  }

  ${mediaQuery('mobile')} {
    display: none;
  }
`;

const mainImageWrapperCss = () => css`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const compassCss = () => css`
  width: 560px;
  height: 560px;
  transform: scale(-1, -1);
  will-change: transform;

  ${mediaQuery('mobile')} {
    width: 360px;
    height: 360px;
  }
`;

const compassItemCss = () => css`
  position: absolute;

  ${mediaQuery('mobile')} {
    width: 204.716px;
    height: 168.028px;
  }
`;

const arrowCss = () => css`
  width: 414.65px;
  height: 414.65px;
  transform: scale(-1, -1);
  z-index: 10;

  ${mediaQuery('mobile')} {
    width: 200px;
    height: 200px;
  }
`;

const articleCss = () => css`
  position: relative;
  max-width: 1100px;
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

  #scale {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  #sphere {
    position: absolute;
    width: 194px;
    height: 132px;
    left: 40px;
    bottom: 109px;

    ${mediaQuery('mobile')} {
      display: none;
    }
  }

  #ruler {
    position: absolute;
    width: 174px;
    height: 50px;
    right: 42px;
    bottom: 109px;

    ${mediaQuery('mobile')} {
      display: none;
    }
  }

  #title {
    top: 20%;
  }
`;

const emptySpaceCss = () => css`
  height: 100px;

  ${mediaQuery('mobile')} {
    height: 80px;
  }
`;

const buttonCss = () => css`
  /* ${theme.typosV2.pretendard.bold24} */
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  width: fit-content;
  height: auto;

  display: flex;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  align-self: center;

  border-radius: 65px;
  border: 1px solid #9db0f7;
  background: #00071a;
  box-shadow: 0px 6px 29.2px 0px rgba(47, 53, 68, 0.2);

  color: #fff;

  text-align: center;
  /* head_8_20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: 0.2px;
  cursor: pointer;
  z-index: 1;
  white-space: nowrap;

  &:disabled {
    background: ${colors.grey[300]};
    color: ${colors.grey[500]};
  }

  ${mediaQuery('mobile')} {
    ${theme.typosV3.pretendard.sub3Semibold}
    padding: 14px 26px;
  }
`;

const partCss = (position: { distance: number; angle: number }, isSelected: boolean) => css`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 9px 19px;
  border: 1px solid ${colors.primary.blue};
  background: ${colors.primary.gray};
  box-shadow: 0px 0px 8px 0px rgba(24, 86, 255, 0.14);
  color: ${colors.primary.blue};
  font-family: MartianMono;
  font-size: 14px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.56px;
  transform: translate(
    ${getPositionStyleByAngle(position.angle, position.distance).left}px,
    ${getPositionStyleByAngle(position.angle, position.distance).top}px
  );
  transition: all 0.3s ease-in-out;
  z-index: 1;

  ${isSelected &&
  css`
    background-color: ${colors.primary.blue};
    color: ${colors.white};
  `}
`;
