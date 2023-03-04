import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { layoutCss, section36HeadingCss, sectionSmallCss } from '~/styles/css';

export default function OrganizerSection() {
  return (
    <section css={sectionCss}>
      <article css={headingArticleCss}>
        <small css={smallCss}>INTRODUCTION</small>
        <h2 css={headingCss}>디프만 13기 운영진을 소개합니다</h2>
        <span css={asteriskSpanCss}>*</span>
        <p css={paragraphCss}>
          괜찮겠어?
          <br />
          우리는 멈추는 법을 모르는 디프만 운영진인데
        </p>
      </article>

      <div css={organizerWrapperCss}>
        <div css={informBoxCss}>
          <span>13기 운영진</span>
          <span>2023. 02 ~</span>
        </div>

        <div css={organizerCardWrapperCss}>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </div>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};

  margin-bottom: 180px;
`;

const headingArticleCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 80px;
`;

const smallCss = css`
  ${sectionSmallCss};

  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss};

  margin-bottom: 40px;
`;

const asteriskSpanCss = css`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;
  color: ${colors.point};
`;

const paragraphCss = css`
  color: ${colors.black};
  opacity: 0.6;
  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
  text-align: center;
`;

const organizerWrapperCss = css`
  width: 100%;
  border-top: solid 1px ${colors.black};
`;

const informBoxCss = css`
  padding-top: 10px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
`;

const organizerCardWrapperCss = css`
  display: flex;
  flex-wrap: wrap;
`;
