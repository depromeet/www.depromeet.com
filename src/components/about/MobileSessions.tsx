import { css } from '@emotion/react';

import { colors } from '~/styles/constants';

import { weekCircleSpanCss, weekHeadingCss } from './sessionCss';

export default function MobileSessions() {
  return (
    <div css={wrapperCss}>
      <article css={articleCss}>
        <span css={timelineDotCss} />
        <h3 css={weekHeadingCss}>
          <span css={weekCircleSpanCss}>1</span> - <span css={weekCircleSpanCss}>3</span>
          <i>WEEK</i>
        </h3>
        <p css={paragraphCss}>
          OT 이후 서비스 기획을 위한
          <br />
          아이디에이션을 진행하고
          <br />
          이를 바탕으로 MVP를 설정해요
        </p>
      </article>

      <article css={articleCss}>
        <span css={timelineDotCss} />
        <h3 css={weekHeadingCss}>
          <span css={weekCircleSpanCss}>4</span> - <span css={weekCircleSpanCss}>8</span>
          <i>WEEK</i>
        </h3>
        <p css={paragraphCss}>
          네트워킹 데이를 통해 같은 직군의 멤버들과
          <br />
          친해지는 동시에 UT와 중간 발표로
          <br />
          팀간 유의미한 피드백을 주고받아요
        </p>
      </article>

      <article css={articleCss}>
        <span css={timelineDotCss} />
        <h3 css={weekHeadingCss}>
          <span css={weekCircleSpanCss}>9</span> - <span css={weekCircleSpanCss}>14</span>
          <i>WEEK</i>
        </h3>
        <p css={paragraphCss}>
          열심히 팀 활동을 수행하여
          <br />
          서비스를 론칭해요
        </p>
      </article>

      <article css={[articleCss, lastWeekCss]}>
        <span css={timelineDotCss} />
        <h3 css={weekHeadingCss}>
          <span css={weekCircleSpanCss}>9</span> - <span css={weekCircleSpanCss}>14</span>
          <i>WEEK</i>
        </h3>
        <p css={paragraphCss}>
          론칭된 서비스를 선보일 시간!
          <br />
          DEMO DAY 에서 우리만의 서비스를 공유해요
        </p>
      </article>
    </div>
  );
}

const wrapperCss = css`
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const articleCss = css`
  position: relative;
  padding-left: 16px;

  &::before {
    position: absolute;
    /* NOTE : heading height / 2 */
    top: 10px;
    left: 0;

    content: '';
    width: 1px;
    /* NOTE : + gap */
    height: calc(100% + 60px);
    background-color: ${colors.black};
  }
`;

const timelineDotCss = css`
  position: absolute;
  /* NOTE : heading height / 2 */
  top: 10px;
  /* NOTE : - width / 2 */
  left: -3px;

  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${colors.black};
  z-index: 10;
`;

const lastWeekCss = css`
  &::after {
    content: '';
    position: absolute;
    /* NOTE : heading height / 2 */
    top: 12px;
    left: 0;
    width: 4px;

    /* NOTE : + gap */
    height: calc(100% + 60px);
    background-color: ${colors.background};
    z-index: 9;
  }
`;

const paragraphCss = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
`;
