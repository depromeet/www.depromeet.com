import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

import { weekCircleSpanCss, weekHeadingCss } from './sessionCss';

export default function DesktopSessions() {
  return (
    <>
      <div css={upperLineBoxCss}>
        <article css={timelineArticleCss}>
          <span css={timelineDotCss} />
          <h3 css={weekHeadingCss}>
            <span css={weekCircleSpanCss}>1</span> - <span css={weekCircleSpanCss}>3</span>
            <i>WEEK</i>
          </h3>
          <p css={weekParagraphCss}>
            OT 이후 서비스 기획을 위한
            <br />
            아이디에이션을 진행하고
            <br />
            이를 바탕으로 MVP를 설정해요
          </p>
        </article>

        <article css={timelineArticleCss}>
          <span css={timelineDotCss} />
          <h3 css={weekHeadingCss}>
            <span css={weekCircleSpanCss}>4</span> - <span css={weekCircleSpanCss}>8</span>
            <i>WEEK</i>
          </h3>
          <p css={weekParagraphCss}>
            네트워킹 데이를 통해 같은 직군의 멤버들과
            <br />
            친해지는 동시에 UT와 중간 발표로
            <br />
            팀간 유의미한 피드백을 주고받아요
          </p>
        </article>
      </div>

      <div css={downlineBoxCss}>
        <article css={timelineArticleCss}>
          <span css={timelineDotCss} />
          <h3 css={weekHeadingCss}>
            <span css={weekCircleSpanCss}>9</span> - <span css={weekCircleSpanCss}>14</span>
            <i>WEEK</i>
          </h3>
          <p css={weekParagraphCss}>
            열심히 팀 활동을 수행하여
            <br />
            서비스를 론칭해요
          </p>
        </article>

        <article css={[timelineArticleCss, downLastWeekCss]}>
          <span css={timelineDotCss} />
          <h3 css={weekHeadingCss}>
            <span css={weekCircleSpanCss}>15</span> - <span css={weekCircleSpanCss}>16</span>
            <i>WEEK</i>
          </h3>
          <p css={weekParagraphCss}>
            론칭된 서비스를 선보일 시간!
            <br />
            DEMO DAY 에서 우리만의 서비스를 공유해요
          </p>
        </article>
      </div>
    </>
  );
}

const weekParagraphCss = css`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 140%;
`;

const upperLineBoxCss = css`
  margin-left: 10vw;
  width: calc(100% - 10vw);
  border-top: solid 1px ${colors.black};
  padding-top: 55px;
  padding-right: 20px;

  display: flex;
  gap: 15vw;

  margin-bottom: 50px;
`;

const downlineBoxCss = css`
  width: calc(100% - 10vw);
  border-top: solid 1px ${colors.black};
  padding-top: 55px;
  padding-left: 20px;

  display: flex;
  justify-content: flex-end;
  gap: 15vw;
`;

const timelineArticleCss = css`
  position: relative;
`;

const timelineDotCss = css`
  position: absolute;
  /* NOTE: -paddint-top - (size/2)*/
  top: calc(-55px - 4px);

  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${colors.black};
  z-index: 10;
`;

const downLastWeekCss = css`
  &::after {
    content: '';
    position: absolute;
    top: calc(-55px - 4px);
    left: 0;
    width: 100%;
    height: 20px;
    background-color: ${colors.background};
    z-index: 9;
  }
`;
