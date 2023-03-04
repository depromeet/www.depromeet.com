import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { layoutCss, section36HeadingCss, sectionSmallCss } from '~/styles/css';

export default function SessionSection() {
  return (
    <section css={sectionCss}>
      <article css={headingArticleCss}>
        <small css={smallCss}>SESSION</small>
        <h2 css={headingCss}>
          체계적이고 효율적으로 굴러가는
          <br />
          디프만 정규세션
        </h2>

        <span css={asteriskCss}>*</span>
        <p css={paragraphCss}>
          디프만 13기는 매주 토요일, 총 17주간 진행되며,
          <br />
          정규세션 이외에도 팀 활동은 자율적으로 진행합니다
        </p>
      </article>

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
            네트워킹 데이를 통해 같은 직군의 멤버들과
            <br />
            친해지는 동시에 UT와 중간 발표로
            <br />
            팀간 유의미한 피드백을 주고받아요
          </p>
        </article>

        <article css={[timelineArticleCss, downLastWeekCss]}>
          <span css={timelineDotCss} />
          <h3 css={weekHeadingCss}>
            <span css={weekCircleSpanCss}>15</span> - <span css={weekCircleSpanCss}>16</span>
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
    </section>
  );
}

const sectionCss = css`
  width: 100%;

  margin-bottom: 240px;
`;

const headingArticleCss = css`
  ${layoutCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  margin-bottom: 83px;
`;

const smallCss = css`
  ${sectionSmallCss};

  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};

  margin-bottom: 40px;
`;

const asteriskCss = css`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: ${colors.point};
`;

const paragraphCss = css`
  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
  color: ${colors.gray600};
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

const weekHeadingCss = css`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-bottom: 26px;

  & > i {
    font-family: 'Helvetica';
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-left: 2px;
  }
`;

const weekCircleSpanCss = css`
  min-width: 29px;
  padding: 0 7px;
  height: 29px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${colors.black};
  color: ${colors.gray100};

  font-family: 'Helvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 3px;
`;

const weekParagraphCss = css`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 140%;
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
