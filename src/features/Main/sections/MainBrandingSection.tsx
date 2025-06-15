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

/**
 * MainBrandingSection : section 02
 *
 */
export const MainBrandingSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <section css={layoutCss}>
      <div css={wrapper}>
        <div css={headerWrapper}>
          <div css={titleWrapper}>
            <div css={titleCss}>
              {`Define\nyour direction`.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0,
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
            id={'icon'}
          />
          <Image
            src={'/images/17th/3d-icon/Android-icon.png'}
            alt={'android-icon'}
            width={!isMobileSize ? 300 : 200}
            height={!isMobileSize ? 300 : 200}
            id={'icon'}
          />
          <Image
            src={'/images/17th/3d-icon/server-icon.png'}
            alt={'server-icon'}
            width={!isMobileSize ? 300 : 200}
            height={!isMobileSize ? 300 : 200}
            id={'icon'}
          />
        </div>
      </div>
    </section>
  );
};

const layoutCss = css`
  padding: 78px 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  gap: 90px;
  ${sectionBg};
`;

const wrapper = css`
  width: auto;
  height: auto;
  min-width: 1100px;
  ${mediaQuery('mobile')} {
    min-width: 100%;
  }
`;

const headerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
  text-align: center;
`;

const titleWrapper = css`
  border-style: solid;
  border-width: 1.09px 0;
  border-color: rgba(71, 138, 244, 0.3);
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  padding-left: 33.3px;
`;

const titleCss = css`
  ${theme.typosV3.MartianMono.head3};
  font-size: ${pxToRem(78)};
  font-weight: semibold;
  letter-spacing: -3px;
  line-height: 109%;
  text-align: start;
  position: relative;

  white-space: pre;

  display: inline-block;
  width: auto;
  background: ${colors.primary.gray};

  border-style: solid;
  border-width: 0 1.09px;
  border-color: rgba(71, 138, 244, 0.3);

  z-index: 40;

  padding: 7px 60px 16px 7px;

  ${mediaQuery('mobile')} {
    font-size: ${pxToRem(36)};
    letter-spacing: -3px;
    padding: 7px 45px 12px 7px;
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
    left: -0.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(2) {
    top: -0.5px;
    right: -15.5px;
    transform: translate(-50%, -50%);
    ${mediaQuery('mobile')} {
      right: -15.5px;
    }
  }
  #circle:nth-of-type(3) {
    bottom: -15.5px;
    left: -0.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(4) {
    bottom: -15.5px;
    right: -15.5px;
    transform: translate(-50%, -50%);

    ${mediaQuery('mobile')} {
      right: -15.5px;
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

  /* web icon */
  #icon:nth-of-type(1) {
    position: absolute;
    top: -35%;
    right: 400px;

    ${mediaQuery('mobile')} {
      top: -15%;
      right: 150px;
    }
  }
  /* android icon */
  #icon:nth-of-type(2) {
    position: absolute;
    top: 25%;
    right: 250px;
    transform: rotate(-10.87deg);

    ${mediaQuery('mobile')} {
      top: 30%;
      right: 100px;
    }
  }

  /* server icon */
  #icon:nth-of-type(3) {
    position: absolute;
    right: 75px;
    top: -20%;
    transform: translate(0%) rotate(44.39deg);
    ${mediaQuery('mobile')} {
      top: 0;
      right: -10px;
    }
  }
`;
