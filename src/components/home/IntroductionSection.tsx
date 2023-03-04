import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { layoutCss, section40HeadingCss, sectionSmallCss } from '~/styles/css';

export default function IntroductionSection() {
  const isMobile = useMediaQuery('xs');

  return (
    <section css={sectionCss}>
      <article css={paragraphArticleCss}>
        <small css={marginSectionSmallCss}>INTRODUCTION</small>
        <h2 css={section40HeadingCss}>
          디프만은 디자이너와 개발자가
          <br />
          서비스 기획부터 론칭까지
          <br />
          함께 경험하는 성장추구형 커뮤니티입니다
        </h2>
      </article>

      <article css={infoArticleCss}>
        <div css={infoBoxCss}>
          <span css={countSpanCss}>1</span>

          <div css={[descriptionBoxCss, !isMobile && desktopFirstTopDividerCss]}>
            <h3 css={heading3Css}>800명+</h3>
            <h4 css={heading4Css}>누적 멤버 수</h4>
          </div>
        </div>
        <div css={infoBoxCss}>
          <span css={countSpanCss}>2</span>

          <div css={[descriptionBoxCss, isMobile && disableRightDividerCss]}>
            <h3 css={heading3Css}>6YEARS</h3>
            <h4 css={heading4Css}>탄생한지</h4>
          </div>
        </div>
        <div css={infoBoxCss}>
          <span css={countSpanCss}>3</span>

          <div css={descriptionBoxCss}>
            <h3 css={heading3Css}>100%</h3>
            <div css={heading4WrapperCss}>
              <h4 css={heading4Css}>론칭 성공률</h4>
              <small css={smallCss}>10기, 11기 기준</small>
            </div>
          </div>
        </div>
        <div css={infoBoxCss}>
          <span css={countSpanCss}>4</span>

          <div css={[descriptionBoxCss, disableRightDividerCss]}>
            <h3 css={heading3Css}>42개+</h3>
            <div css={heading4WrapperCss}>
              <h4 css={heading4Css}>론칭 서비스</h4>
              <small css={smallCss}>5~12기 기준</small>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};
  padding-top: 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    padding-top: 100px;

    margin-bottom: 100px;
  }
`;

const paragraphArticleCss = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 90px;

  ${mediaQuery('xs')} {
    margin-bottom: 60px;
  }
`;

const marginSectionSmallCss = css`
  ${sectionSmallCss};
  margin-bottom: 10px;
`;

const infoArticleCss = css`
  width: 100%;
  display: flex;

  ${mediaQuery('xs')} {
    flex-wrap: wrap;
  }
`;

const infoBoxCss = css`
  width: 25%;
  height: 265px;

  ${mediaQuery('xs')} {
    width: calc(50% - 3px);
    height: 150px;

    &:nth-child(even) {
      margin-left: 6px;
    }
  }
`;

const countSpanCss = css`
  width: 40px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${colors.gray700};

  font-family: 'Helvetica';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 3px;
  color: ${colors.gray700};

  margin-bottom: 18px;

  ${mediaQuery('xs')} {
    width: 24px;
    height: 17px;
    font-size: 14px;
    letter-spacing: 1.5px;

    margin-bottom: 8px;
  }
`;

const descriptionBoxCss = css`
  position: relative;
  width: 100%;
  height: calc(100% - 47px);
  padding-top: 30px;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;

    width: calc(100% - 40px);
    height: 1px;
    background-color: ${colors.black};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 1px;
    height: calc(100% - 20px);
    background-color: ${colors.black};
  }

  ${mediaQuery('xs')} {
    height: 100%;
    padding-top: 16px;
    padding-left: 16px;

    &::before {
      left: 0;
      width: calc(100% - 6px);
    }

    &::after {
      top: 6px;
      height: calc(100% - 12px);
    }
  }
`;

const desktopFirstTopDividerCss = css`
  &::before {
    top: 0;
    left: 0;

    width: calc(100% - 20px);
  }
`;

const disableRightDividerCss = css`
  &::after {
    all: unset;
  }
`;

const heading3Css = css`
  font-weight: 600;
  font-size: 3rem;
  line-height: 2.6875rem;

  margin-bottom: 10px;

  ${mediaQuery('xs')} {
    font-size: 24px;
    line-height: 25px;

    margin-bottom: 4px;
  }
`;

const heading4WrapperCss = css`
  display: flex;

  ${mediaQuery('xs')} {
    flex-direction: column;
  }
`;

const heading4Css = css`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;
  font-style: normal;

  color: ${colors.gray900};

  ${mediaQuery('xs')} {
    font-size: 14px;
  }
`;

const smallCss = css`
  margin-left: 10px;

  font-size: 1.125rem;
  line-height: 140%;
  font-weight: 500;

  color: ${colors.gray700};

  ${mediaQuery('xs')} {
    margin-left: 0;
    margin-top: 4px;
    font-size: 14px;
  }
`;
