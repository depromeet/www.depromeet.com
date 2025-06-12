import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

export const MainBrandingSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <section css={layoutCss}>
      <div css={headerWrapper}>
        <div css={titleWrapper}>
          <div css={titleCss}>
            {`Define\nyour direction`.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 2 + index * 0.1,
                  duration: 0,
                  // repeat: Infinity,
                  // repeatDelay: 3,
                  // repeatType: 'loop',
                }}
              >
                {char}
              </motion.span>
            ))}
            {[...Array(4)].map((_, i) => (
              <div id="circle" key={i}></div>
            ))}
          </div>
        </div>
        <p css={sentenceCss}>두려움을 용기로, 상상을 도전으로</p>
      </div>
      <div css={imagesWrapperCss}>
        <Image
          src={'/images/17th/3d-icon/web-icon.png'}
          alt={'web-icon'}
          width={!isMobileSize ? 300 : 200}
          height={!isMobileSize ? 300 : 200}
        />
        <Image
          src={'/images/17th/3d-icon/Android-icon.png'}
          alt={'android-icon'}
          width={!isMobileSize ? 300 : 200}
          height={!isMobileSize ? 300 : 200}
        />
        <Image
          src={'/images/17th/3d-icon/server-icon.png'}
          alt={'server-icon'}
          width={!isMobileSize ? 300 : 200}
          height={!isMobileSize ? 300 : 200}
        />
      </div>
    </section>
  );
};

const layoutCss = css`
  padding-top: 79px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  gap: 90px;
  ${sectionBg};
`;

const headerWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  text-align: center;
  justify-center: flex-start;
  align-items: flex-start;
`;

const titleWrapper = css`
  border: 1px solid rgba(71, 138, 244, 0.3);
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  padding-left: 33px;
`;

const titleCss = css`
  ${theme.typosV3.MartianMono.head3};
  font-size: ${pxToRem(78)};
  font-weight: semibold;
  letter-spacing: -5px;
  line-height: 109%;
  text-align: start;
  position: relative;

  white-space: pre;

  display: inline-block;
  width: auto;
  background: ${colors.primary.gray};
  border: 1% solid rgba(71, 138, 244, 0.3);
  z-index: 40;

  padding: 7px 54px 16px 7px;

  ${mediaQuery('mobile')} {
    font-size: ${pxToRem(36)};
    letter-spacing: -3px;
    padding: 7px 0px 12px 7px;
  }

  #circle {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1.09px solid rgba(71, 138, 244, 0.3);
    z-index: 100;
  }

  #circle:nth-of-type(1) {
    top: -0.5px;
    left: -1.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(2) {
    top: -0.5px;
    right: -48.5px;
    transform: translate(-50%, -50%);
    ${mediaQuery('mobile')} {
      right: -52.5px;
    }
  }
  #circle:nth-of-type(3) {
    bottom: -15.5px;
    left: -1.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(4) {
    bottom: -15.5px;
    right: -48.5px;
    transform: translate(-50%, -50%);

    ${mediaQuery('mobile')} {
      right: -52.5px;
    }
  }
`;

const sentenceCss = css`
  ${theme.typosV3.pretendard.head4};
  font-weight: 400;
  font-size: ${pxToRem(28)};
  letter-spacing: -1px;
  text-align: start;

  padding-left: 39px;

  ${mediaQuery('mobile')} {
    ${theme.typosV3.pretendard.body1Medium};
  }
`;

const imagesWrapperCss = css`
  position: relative;
  align-self: flex-end;

  width: 100%;
  height: 300px;

  z-index: 100;

  & > :first-child {
    position: absolute;
    right: 400px;
    top: -65%;

    ${mediaQuery('mobile')} {
      right: 150px;
      top: -35%;
    }
  }
  & > :nth-child(2) {
    position: absolute;
    right: 275px;
    top: 0;
    transform: rotate(-10.87deg);
    ${mediaQuery('mobile')} {
      right: 100px;
      top: 15%;
    }
  }
  & > :last-child {
    position: absolute;
    right: 100px;
    top: -40%;
    transform: translate(0%) rotate(34.39deg);
    ${mediaQuery('mobile')} {
      right: 0px;
      top: -15%;
    }
  }
`;
