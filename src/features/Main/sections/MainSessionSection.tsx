import React from 'react';
import { css } from '@emotion/react';

import { SESSIONS } from '~/constant/session';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { pxToRem } from '~/styles/style.utils';
import { theme } from '~/styles/theme';

import SessionCard from '../components/SessionCard';

export const MainSessionSection = () => {
  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <h1 css={text.titleCss}>17th Session</h1>
        <p css={text.subCss}>17주간의 성장과 도전의 모험 중 주요 세션입니다</p>
      </div>
      <div css={cardWrapperCss}>
        {SESSIONS.map(session => {
          return (
            <div key={session.title}>
              <SessionCard
                src={session.image}
                title={session.title}
                description={session.description}
              />
            </div>
          );
        })}
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

  ${mediaQuery('mobile')} {
    padding: 80px 0 78px 0;
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

    margin-bottom: 60px;
    margin-left: 58px;

    ${mediaQuery('tablet')} {
      margin-bottom: 98px;
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
    color: ${colors.grey[900]};

    ${mediaQuery('mobile')} {
      ${theme.typosV3.pretendard.sub4Semibold};
    }
  `,
};

const cardWrapperCss = css`
  display: flex;
  gap: 50px;
  overflow-x: auto;

  width: 100vw;
  /* max-width: 100vw; */
  padding: 0 50px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
