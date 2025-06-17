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

  return (
    <section css={containerCss}>
      <div css={wrapperCss}>
        <div css={text.wrapperCss}>
          <h1 css={text.titleCss}>Why Depromeet</h1>
          <p css={text.subCss}>두려움을 용기로, 상상을 도전으로</p>
        </div>
        {REASONS.map((item, index) => (
          <ReasonCard
            {...item}
            index={index}
            isTabletSize={isTabletSize}
            isReverseDirection={index % 2 !== 0}
            key={item.title}
          />
        ))}

        <Image
          css={icon.iOSCss}
          src={'/images/17th/3d-icon/iOS-icon.png'}
          alt={'iOS-icon'}
          width={!isTabletSize ? 400 : 300}
          height={!isTabletSize ? 400 : 300}
        />
        <Image
          css={icon.androidCss}
          src={'/images/17th/3d-icon/Android-icon.png'}
          alt={'android-icon'}
          width={!isTabletSize ? 400 : 300}
          height={!isTabletSize ? 400 : 300}
        />
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
    padding: 80px 20px;
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
      font-size: ${pxToRem(28)};
    }
  `,
  subCss: css`
    ${theme.typosV3.pretendard.sub1Semibold};
    text-align: start;
    z-index: 100;

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub4Semibold};
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
  `,
  androidCss: css`
    position: absolute;
    bottom: -22%;
    right: -8%;
    transform: rotate(38deg);

    ${mediaQuery('tablet')} {
      bottom: -17%;
      right: -20%;
    }
  `,
};
