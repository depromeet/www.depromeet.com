import Image from 'next/image';
import { css } from '@emotion/react';
import { m, useScroll, useSpring, useTransform } from 'framer-motion';

import { HOME_IMAGE_BASE } from '~/constants/images';
import useMediaQuery from '~/hooks/use-media-query';
import { mediaQuery } from '~/styles/constants';

import { BigArrowIcon } from './BigArrowIcon';

const HEADER_BACK_IMAGE = `${HOME_IMAGE_BASE}/header-back.webp`;
const MOBILE_HEADER_BACK_IMAGE = `${HOME_IMAGE_BASE}/mobile-header-back.webp`;
const HEADER_FRONT_IMAGE = `${HOME_IMAGE_BASE}/header-front.png`;
const MOBILE_HEADER_FRONT_IMAGE = `${HOME_IMAGE_BASE}/mobile-header-front.webp`;

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');

  const { scrollY } = useScroll();
  const designerTextX = useTransform(
    scrollY,
    [0, 800],
    [isMobile ? 100 : 400, isMobile ? -400 : -1000]
  );
  const programmerTextX = useTransform(
    scrollY,
    [0, 800],
    [isMobile ? -50 : 0, isMobile ? 300 : -1000]
  );
  const springDesignerX = useSpring(designerTextX, { stiffness: 200, damping: 40 });
  const springProgrammerX = useSpring(programmerTextX, { stiffness: 200, damping: 40 });

  return (
    <section css={sectionCss}>
      <h1 css={headingCss}>디자이너와 프로그래머가 만났을 때</h1>
      <BigArrowIcon css={iconCss} width={36} height={36} />

      <Image
        css={imageCss}
        src={isMobile ? MOBILE_HEADER_BACK_IMAGE : HEADER_BACK_IMAGE}
        alt="디프만"
        placeholder="blur"
        blurDataURL={isMobile ? MOBILE_HEADER_BACK_IMAGE : HEADER_BACK_IMAGE}
        priority
        quality={100}
        fill
      />
      <m.span css={designerTextCss} style={{ x: springDesignerX }}>
        DESIGNER
      </m.span>
      <m.span css={programmerTextCss} style={{ x: springProgrammerX }}>
        &PROGRAMMER
      </m.span>
      <Image
        css={imageCss}
        src={isMobile ? MOBILE_HEADER_FRONT_IMAGE : HEADER_FRONT_IMAGE}
        alt="depromeet"
        placeholder="blur"
        blurDataURL={isMobile ? MOBILE_HEADER_FRONT_IMAGE : HEADER_FRONT_IMAGE}
        priority
        quality={100}
        fill
      />
    </section>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 780px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  ${mediaQuery('xs')} {
    height: 650px;
  }
`;

const headingCss = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  margin-bottom: 24px;

  ${mediaQuery('xs')} {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const iconCss = css`
  margin-bottom: 56px;

  ${mediaQuery('xs')} {
    margin-bottom: 107px;
  }
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const graphicTextCss = css`
  position: absolute;
  font-weight: 600;
  font-size: 150px;
  z-index: -1;

  ${mediaQuery('xs')} {
    font-size: 50px;
  }
`;

const designerTextCss = css`
  ${graphicTextCss};
  top: 165px;

  ${mediaQuery('xs')} {
    top: 113px;
  }
`;

const programmerTextCss = css`
  ${graphicTextCss};
  top: 327px;

  ${mediaQuery('xs')} {
    top: 182px;
  }
`;
