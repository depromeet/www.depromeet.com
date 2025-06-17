import Image from 'next/image';
import { css } from '@emotion/react';

import { REASONS } from '~/constant/reason';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

import { ReasonCard } from '../components/ReasonCard';

/**
 * * Main 페이지 합류해야 하는 이유 section
 */
export const MainReasonSection = () => {
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <section css={containerCss}>
      <div css={wrapperCss}>
        <div css={text.wrapperCss}>
          <h1 css={text.titleCss}>Why Depromeet</h1>
          <p css={text.subCss}>두려움을 용기로, 상상을 도전으로</p>
        </div>
        {REASONS.map((item, index) => (
          <div key={item.image}>
            <ReasonCard
              {...item}
              index={index}
              isMobileSize={isMobileSize}
              isReverseDirection={index % 2 !== 0}
            />
          </div>
        ))}

        <Image
          css={icon.iOSCss}
          src={'/images/17th/3d-icon/iOS-icon.png'}
          alt={'iOS-icon'}
          width={isMobileSize ? 180 : isTabletSize ? 300 : 400}
          height={isMobileSize ? 180 : isTabletSize ? 300 : 400}
        />
        {!isMobileSize && (
          <Image
            css={icon.androidCss}
            src={'/images/17th/3d-icon/Android-icon.png'}
            alt={'android-icon'}
            width={isTabletSize ? 300 : 400}
            height={isTabletSize ? 300 : 400}
          />
        )}
      </div>
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 220px 0;
  width: 100%;

  overflow: hidden;

  ${sectionBg};

  ${mediaQuery('tablet')} {
    padding: 140px 40px;
    gap: 60px;
  }

  ${mediaQuery('mobile')} {
    padding: 100px 20px 70px 20px;
    gap: 32px;
  }
`;

const wrapperCss = css`
  position: relative;
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;

  ${mediaQuery('tablet')} {
    max-width: 768px;
    gap: 80px;
  }
  ${mediaQuery('mobile')} {
    max-width: 475px;
    gap: 80px;
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    width: 100%;
    margin-left: 58px;
    margin-bottom: -31px;

    color: ${colors.primary.darknavy};

    ${mediaQuery('tablet')} {
      margin-left: 0;
      max-width: 768px;
    }
  `,

  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
    font-size: ${pxToRem(42)};
    font-weight: 500;
    letter-spacing: -3px;
    line-height: 109%;
    text-align: start;

    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.MartianMono.head3};
      font-size: ${pxToRem(26)};
      letter-spacing: -1px;
    }
  `,
  subCss: css`
    ${theme.typosV3.pretendard.sub1Semibold};
    text-align: start;
    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body3Medium};
    }
  `,
};

const icon = {
  iOSCss: css`
    position: absolute;
    top: -23%;
    left: -13%;
    opacity: 60%;
    transform: rotate(-25deg);

    ${mediaQuery('tablet')} {
      top: -18%;
      left: -25%;
      opacity: 100%;
      transform: rotate(-20deg);
    }

    ${mediaQuery('mobile')} {
      top: -6.3%;
      left: -30%;
      opacity: 100%;
      transform: rotate(-20deg);
    }
  `,
  androidCss: css`
    position: absolute;
    bottom: -22%;
    right: -8%;
    transform: rotate(38deg);

    z-index: 10;
    ${mediaQuery('tablet')} {
      bottom: -17%;
      right: -20%;
    }
  `,
};
