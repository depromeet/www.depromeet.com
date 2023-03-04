import { css } from '@emotion/react';

import { colors, mediaQuery } from '~/styles/constants';
import { section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { RECRUIT_QUALIFICATIONS } from './contstants';
import { sectionCss, sectionHeadingCss } from './Recurit.style';

export default function QualificationSection() {
  return (
    <section css={sectionCss}>
      <div css={sectionHeadingCss}>
        <p css={sectionSmallCss}>Qualifications</p>
        <h2 css={section40HeadingCss}>공통 자격 요건</h2>
      </div>
      <ul css={qualificationGridBox}>
        {RECRUIT_QUALIFICATIONS.map((item, index) => (
          <li
            key={`recruit-qualifications-item-${index}`}
            css={[qualificationGridItem, qualificationGridItemResponsiveLayoutCss]}
          >
            <em>{index + 1}</em>
            <strong>{item}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

const qualificationGridBox = css`
  display: grid;
  background: black;
  width: 100%;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(126px, max-content));
  ${mediaQuery('xs')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 140px);
  }
`;
const qualificationGridItem = css`
  background: ${colors.gray100};
  em {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.3px;
    color: ${colors.gray600};
  }

  strong {
    display: block;
    margin-top: 4px;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: -0.3px;
    color: ${colors.black};
  }

  ${mediaQuery('xs')} {
    strong {
      font-size: 14px;
    }
  }
`;

const qualificationGridItemResponsiveLayoutCss = css`
  padding-top: 34px;
  padding-left: 40px;
  padding-right: 40px;

  :nth-child(-n + 3) {
    padding-top: 9px;
  }
  :nth-child(3n + 1) {
    padding-left: 0;
  }

  :nth-child(2) {
    position: relative;
    &::before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-50%, 50%);
      width: 28px;
      height: 28px;
      background-color: ${colors.gray100};
    }
    &::after {
      display: block;
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(50%, 50%);
      width: 28px;
      height: 28px;
      background-color: ${colors.gray100};
    }
  }
  ${mediaQuery('xs')} {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 15px;

    :nth-child(-n + 3) {
      padding-top: 20px;
    }
    :nth-child(3n + 1) {
      padding-left: 20px;
    }
    :nth-child(-n + 2) {
      padding-top: 0;
    }
    &:nth-child(2) {
      &::before,
      &::after {
        display: none;
      }
    }

    :nth-child(4) {
      position: relative;
      &::before {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
        width: 23px;
        height: 40px;
        background-color: ${colors.gray100};
      }
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        transform: translate(-50%, 50%);
        width: 23px;
        height: 40px;
        background-color: ${colors.gray100};
      }
    }
  }
`;
