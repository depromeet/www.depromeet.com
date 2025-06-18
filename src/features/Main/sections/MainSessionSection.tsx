import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { SESSIONS } from '~/constant/session';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

import SessionCard from '../components/SessionCard';

export const MainSessionSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <section css={containerCss}>
      <div css={wrapperCss}>
        <div css={text.wrapperCss}>
          <h1 css={text.titleCss}>17th Session</h1>
          <p css={text.subCss}>{`17주간의 성장과 도전의 모험 중 \n주요 세션입니다`}</p>
        </div>
        <div css={cardWrapperCss}>
          {SESSIONS.map((session, index) => {
            return (
              <div key={session.title}>
                <SessionCard
                  src={session.image}
                  title={session.title}
                  description={session.description}
                  index={index}
                />
              </div>
            );
          })}
        </div>
        {isMobileSize && (
          <Image
            src={'/images/17th/3d-icon/Android-icon.png'}
            alt={'android-icon'}
            id={'android-icon'}
            width={200}
            height={200}
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
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  overflow: hidden;

  padding: 120px 0;

  ${sectionBg};

  ${mediaQuery('tablet')} {
    padding: 0 0 100px 0;
  }
  ${mediaQuery('mobile')} {
    padding: 0 0 100px 0;
  }
`;

const wrapperCss = css`
  position: relative;

  width: 100%;
  max-width: 1110px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 68px;

  ${mediaQuery('tablet')} {
    max-width: 960px;
  }

  ${mediaQuery('mobile')} {
    max-width: 650px;
  }

  #android-icon {
    position: absolute;
    bottom: -17%;
    right: -10%;
    transform: rotate(38deg);
  }
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    gap: 12px;

    margin-left: 58px;

    ${mediaQuery('tablet')} {
      margin: 0;
      padding-left: 40px;
    }
    ${mediaQuery('mobile')} {
      margin: 0 0 -24px 0;
      padding-left: 24px;
      gap: 8px;
    }
  `,

  titleCss: css`
    ${theme.typosV3.MartianMono.head3};
    font-size: ${pxToRem(42)};
    font-weight: 400;
    letter-spacing: -3px;
    line-height: 109%;
    text-align: start;
    color: ${colors.primary.darknavy};

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
    color: ${colors.grey[900]};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.body3Medium};
      white-space: pre-wrap;
    }
  `,
};

const cardWrapperCss = css`
  position: relative;

  display: flex;
  gap: 50px;
  overflow-x: auto;

  width: 100vw;
  max-width: 1110px;

  padding-left: calc(50% - 219px);
  padding-right: calc(50% - 219px);

  z-index: 50;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  ${mediaQuery('tablet')} {
    max-width: 960px;
    padding-left: calc(50% - 200px);
    padding-right: calc(50% - 200px);
    gap: 36px;
  }
  ${mediaQuery('mobile')} {
    padding: 10px calc(50% - 139px);
    gap: 12px;
  }
`;
