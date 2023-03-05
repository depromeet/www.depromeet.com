import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { sectionCss, sectionHeadingCss } from './Recurit.style';

export default function ScheduleSection() {
  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <p css={sectionSmallCss}>RECRUITMENT SCHEDULE</p>
        <h2 css={section40HeadingCss}>모집 일정</h2>
      </div>
      <section css={periodFlexBoxCss}>
        <h4>맴버 모집 기간</h4>
        <div css={periodCss}>
          <em>3.6</em>
          <span>서류 접수 시작</span>
        </div>
        <div css={periodCss}>
          <em>3.12</em>
          <span>서류 접수 마감</span>
        </div>
        <div css={periodCss}>
          <em>3.25/26</em>
          <span>온라인 면접</span>
        </div>
        <div css={periodCss}>
          <em>4.3</em>
          <span>최종 합격 안내</span>
        </div>
      </section>
      <section css={periodFlexBoxCss}>
        <h4>정규 세션 기간</h4>
        <div css={periodCss}>
          <em>4.8</em>
          <span>13기 OT</span>
        </div>
        <div css={periodCss}>
          <em>5.27</em>
          <span>중간발표</span>
        </div>
        <div css={periodCss}>
          <em>7.22</em>
          <span>최종 - DEMO DAY</span>
        </div>
        <div css={periodCss}></div>
      </section>
    </section>
  );
}

const periodFlexBoxCss = css`
  display: flex;
  gap: 56px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  padding: 0 calc(100% / 10);

  height: 104px;
  width: 100%;

  border-top: solid 1px ${colors.black};

  &:last-of-type {
    border-bottom: solid 1px ${colors.black};
  }

  h4 {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    width: 160px;
    max-width: 160px;
    height: 43px;
    border-radius: 50%;

    color: ${colors.gray100};

    background: ${colors.black};
  }

  ${mediaQuery('xs')} {
    padding: 30px 40px;
    gap: 20px;
    flex-direction: column;
    height: fit-content;

    h4 {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const periodCss = css`
  display: flex;
  gap: 4px;
  flex-direction: column;

  width: calc((100% - 160px) / 4);

  em {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.3px;
    color: ${colors.black};
  }

  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${colors.black};
    white-space: nowrap;
  }

  ${mediaQuery('xs')} {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: auto;

    width: 100%;
  }
`;
