import Image from 'next/image';
import { css } from '@emotion/react';
import { m, useScroll, useSpring, useTransform } from 'framer-motion';

import { HOME_IMAGE_BASE } from '~/constants/images';

import { BigArrowIcon } from './BigArrowIcon';

const HEADER_BACK_IMAGE = `${HOME_IMAGE_BASE}/header-back.webp`;
const HEADER_FRONT_IMAGE = `${HOME_IMAGE_BASE}/header-front.png`;

export default function HeaderSection() {
  const { scrollY } = useScroll();
  const designerTextX = useTransform(scrollY, [0, 800], [400, -1000]);
  const programmerTextX = useTransform(scrollY, [0, 800], [0, -1000]);
  const springDesignerX = useSpring(designerTextX, { stiffness: 200, damping: 40 });
  const springProgrammerX = useSpring(programmerTextX, { stiffness: 200, damping: 40 });

  return (
    <section css={sectionCss}>
      <h1 css={headingCss}>디자이너와 프로그래머가 만났을 때</h1>
      <BigArrowIcon css={iconCss} />

      <Image
        css={imageCss}
        src={HEADER_BACK_IMAGE}
        alt="디프만"
        placeholder="blur"
        blurDataURL={HEADER_BACK_IMAGE}
        priority
        unoptimized
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
        src={HEADER_FRONT_IMAGE}
        alt="depromeet"
        placeholder="blur"
        blurDataURL={HEADER_FRONT_IMAGE}
        priority
        unoptimized
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
`;

const headingCss = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  margin-bottom: 24px;
`;

const iconCss = css`
  margin-bottom: 56px;
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const graphicTextCss = css`
  position: absolute;
  font-weight: 600;
  font-size: 150px;
  z-index: -1;
`;

const designerTextCss = css`
  ${graphicTextCss};
  top: 165px;
`;

const programmerTextCss = css`
  ${graphicTextCss};
  top: 327px;
`;
