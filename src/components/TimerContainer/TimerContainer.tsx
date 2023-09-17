import { css, Theme } from '@emotion/react';

import { DEADLINE_DATE } from '~/constant/common';

import { Timer } from './Timer';
import useDiffDay from './useDiffDay';

export function TimerContainer() {
  const time = useDiffDay(DEADLINE_DATE);

  return (
    <div css={containerCss}>
      <div css={bgImageCss}>
        <img src="/images/main/main-bg.png" alt="main-bg" />
      </div>
      <div css={gradientCss} />
      <div css={layoutCss}>
        <div>
          <div css={headingCss}>
            <h1>DEPROMEET</h1>
            <p>디프만은 디자이너와 개발자가 만나 서비스 기획부터 론칭까지</p>
            <p>하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다</p>
          </div>
          <Timer time={time} />
          {/* TODO : 14기 지원 링크 연결 */}
          <button css={buttonCss}>14기 지원하기</button>
        </div>
      </div>
    </div>
  );
}

const containerCss = (theme: Theme) => css`
  position: relative;
  padding: 30px 0;
  background: linear-gradient(180deg, #0973ee 0%, rgba(9, 115, 238, 0) 100%);
  overflow: hidden;

  height: 828px;

  @media screen and (max-width: ${theme.breakpoints.pc}) {
    padding: 0;
  }
`;

const bgImageCss = (theme: Theme) => css`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 0;
  text-align: center;

  img {
    width: 1300px;
    height: 768.857px;

    @media screen and (max-width: 1300px) {
      width: 100%;
      height: auto;
    }
  }
`;

const layoutCss = (theme: Theme) => css`
  margin: auto;

  max-width: 726px;

  & > div {
    position: relative;
    z-index: 2; // NOTE : gradient 뒤로 가려지지 않게
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
  z-index: 1;

  @media screen and (max-width: 1300px) {
  }
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
