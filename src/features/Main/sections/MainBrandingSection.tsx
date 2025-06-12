import React from 'react';
import { css } from '@emotion/react';

import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

export const MainBrandingSection = () => {
  return (
    <section css={layoutCss}>
      <div css={headerWrapper}>
        <div css={titleWrapper}>
          <div css={titleCss}>
            <h1>{`Define\nyour direction`}</h1>
            {[...Array(4)].map((_, i) => (
              <div id="circle" key={i}></div>
            ))}
          </div>
        </div>
        <p css={sentenceCss}>두려움을 용기로, 상상을 도전으로</p>
      </div>
      <div css={imagesWrapperCss}>
        {/* <Image
            src={'/images/17th/3d-icon/web-icon.png'}
            alt={'web-icon'}
            width={300}
            height={300}
          />
          <Image
            src={'/images/17th/3d-icon/Android-icon.png'}
            alt={'android-icon'}
            width={300}
            height={300}
          />
          <Image
            src={'/images/17th/3d-icon/server-icon.png'}
            alt={'server-icon'}
            width={300}
            height={300}
          /> */}
      </div>
    </section>
  );
};

const layoutCss = css`
  padding-top: 79px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 90px;

  border: black 1px solid;

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
    ${theme.typosV2.pretendard.bold28};
    line-height: 109%;
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
    left: -2.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(2) {
    top: -0.5px;
    right: -47.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(3) {
    bottom: -15.5px;
    left: -2.5px;
    transform: translate(-50%, -50%);
  }
  #circle:nth-of-type(4) {
    bottom: -15.5px;
    right: -47.5px;
    transform: translate(-50%, -50%);
  }
`;

const sentenceCss = css`
  ${theme.typosV3.pretendard.head4};
  font-weight: 400;
  font-size: ${pxToRem(28)};
  letter-spacing: -1px;
  text-align: start;

  padding-left: 39px;
`;

const imagesWrapperCss = css`
  position: relative;
  width: 100%;
  height: 350px;
  z-index: 100;

  & > :first-child {
    position: absolute;
    left: 35%;
    top: -30%;
  }
  & > :nth-child(2) {
    position: absolute;
    left: 60%;
    top: 10%;
    transform: translateX(-50%);
  }
  & > :last-child {
    position: absolute;
    left: 65%;
    top: -15%;
  }
`;
