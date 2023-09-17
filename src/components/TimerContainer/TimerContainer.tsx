import { css, Theme } from '@emotion/react';

import { DEADLINE_DATE } from '~/constant/common';

import { Timer } from './Timer';

export function TimerContainer() {
  return (
    <div css={containerCss}>
      <div css={gradientCss} />
      <div css={layoutCss}>
        <div>
          <div css={headingCss}>
            <h1>DEPROMEET</h1>
            <p>디프만은 디자이너와 개발자가 만나 서비스 기획부터 론칭까지</p>
            <p>하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다</p>
          </div>
          <Timer deadlineDay={DEADLINE_DATE} />
          <button css={buttonCss}>14기 지원하기</button>
        </div>
      </div>
    </div>
  );
}

const containerCss = css`
  position: relative;
  padding: 30px 0;
  background: linear-gradient(180deg, #0973ee 0%, rgba(9, 115, 238, 0) 100%);
`;

const layoutCss = css`
  background: url('/images/main/main-bg.png');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;

  width: 1300px;
  height: 768.857px;
  position: relative;
  z-index: 1; // NOTE : gradient 뒤로 가려지지 않게

  & > div {
    max-width: 726px;
    margin: 0 auto;

    & > * {
      margin-bottom: 20px;
    }
  }
`;

const gradientCss = css`
  background: linear-gradient(0deg, #070814 0%, rgba(7, 8, 20, 0) 100%);
  width: 100vw;
  height: 445px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const headingCss = (theme: Theme) => css`
  text-align: center;
  padding-top: 147px;
  padding-bottom: 20px;

  & > h1 {
    ${theme.typos.decimal.title1}
    color: ${theme.colors.white};
    margin-bottom: 20px;
  }

  & > p {
    ${theme.typos.pretendard.subTitle2};
    color: ${theme.colors.gray20};
  }
`;

const buttonCss = (theme: Theme) => css`
  ${theme.typos.pretendard.body1};
  color: ${theme.colors.black800};
  background-color: ${theme.colors.yellow500};
  width: 100%;

  padding: 16px 24px;
  height: 58px;
`;
