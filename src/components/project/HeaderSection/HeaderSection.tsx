import Image from 'next/image';
import { css } from '@emotion/react';

import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { body1Css } from '~/styles/css';

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');
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
        width={isMobile ? 188 : 700}
        height={isMobile ? 112 : 416}
        css={leftImageCss}
      />
      <Image
        src={'/project/growth_front.webp'}
        alt=""
        width={isMobile ? 156 : 583}
        height={isMobile ? 139 : 519}
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

  ${mediaQuery('xs')} {
    width: 375px;
    margin-top: 60px;
    padding-top: 24px;
    height: 514px;
    margin-bottom: 0;
    overflow-x: hidden;
  }
`;

const headingCss = css`
  font-weight: 600;
  font-size: 125.772px;
  line-height: 151px;
  letter-spacing: -3.14429px;
  color: ${colors.black};
  position: relative;
  left: -6px;
  ${mediaQuery('xs')} {
    font-size: 33.7526px;
    line-height: 41px;
    letter-spacing: -0.843816px;
    left: 30px;
  }
`;

const descriptionCss = css`
  ${body1Css}
  position: absolute;
  left: 876px;
  top: 346px;
  z-index: 1;
  ${mediaQuery('xs')} {
    left: 16px;
    top: 260px;
    bottom: auto;
  }
`;

const leftImageCss = css`
  position: absolute;
  left: -17px;
  top: 107.74px;
  ${mediaQuery('xs')} {
    top: 45.05px;
    left: 27.64px;
  }
`;

const rightImageCss = css`
  position: absolute;
  top: 19px;
  left: 653px;
  ${mediaQuery('xs')} {
    top: 21.2px;
    left: 207.47px;
  }
`;
