import Image from 'next/image';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { body1Css } from '~/styles/css';

export default function HeaderSection() {
  return (
    <div css={sectionCss}>
      <h1 css={headingCss}>
        DESIGNERS
        <br />
        &PROGRAMMER
        <br />
        MEET
      </h1>
      <p css={descriptionCss}>
        독창적이면서도 날카롭고
        <br />
        실패를 두려워하지 않는
        <br />
        오직 디프만에서만 가능한
        <br />
        프로젝트들을 소개합니다.
      </p>
      <Image
        src={'/project/passion_front.webp'}
        alt=""
        width={700}
        height={416}
        css={leftImageCss}
      />
      <Image
        src={'/project/growth_front.webp'}
        alt=""
        width={583}
        height={519}
        css={rightImageCss}
      />
    </div>
  );
}

const sectionCss = css`
  box-sizing: border-box;
  width: 1200px;
  height: 538px;
  margin: auto;
  margin-bottom: 130px;
  padding-top: 30px;
  position: relative;
`;

const headingCss = css`
  font-weight: 600;
  font-size: 125.772px;
  line-height: 151px;
  letter-spacing: -3.14429px;
  color: ${colors.black};
  position: relative;
  left: -6px;
`;

const descriptionCss = css`
  ${body1Css}
  position: absolute;
  right: 120px;
  bottom: 80px;
  z-index: 1;
`;

const leftImageCss = css`
  position: absolute;
  left: -17px;
  bottom: 13.9px;
`;

const rightImageCss = css`
  position: absolute;
  bottom: 0;
  left: 653px;
`;
