import Image from 'next/image';
import { css } from '@emotion/react';
import { m, useScroll, useSpring, useTransform } from 'framer-motion';

import useMediaQuery from '~/hooks/use-media-query';
import { mediaQuery } from '~/styles/constants';
import { body1Css, layoutCss } from '~/styles/css';

const HEADER_BACK = '/project/header-back.webp';
const HEADER_FRONT = '/project/header-front.webp';
const MOBILE_HEADER_BACK = '/project/mobile-header-back.webp';
const MOBILE_HEADER_FRONT = '/project/mobile-header-front.webp';

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');

  const { scrollY } = useScroll();
  const designerX = useTransform(scrollY, [0, 250], [0, 200]);
  const programmerX = useTransform(scrollY, [0, 250], [0, 300]);
  const meetX = useTransform(scrollY, [0, 250], [0, 400]);

  const springDesignerX = useSpring(designerX, { stiffness: 200, damping: 40 });
  const springProgrammerX = useSpring(programmerX, { stiffness: 200, damping: 40 });
  const springMeetX = useSpring(meetX, { stiffness: 200, damping: 40 });

  return (
    <header css={sectionCss}>
      <div css={imageWrapperCss}>
        <Image
          src={isMobile ? MOBILE_HEADER_BACK : HEADER_BACK}
          alt="디프만 프로젝트"
          priority
          quality={100}
          fill
          placeholder="blur"
          blurDataURL={isMobile ? MOBILE_HEADER_BACK : HEADER_BACK}
          css={[imageCss, backImageCss]}
        />

        <m.h1 css={designerCss} style={{ x: springDesignerX }}>
          DESIGNERS
        </m.h1>
        <m.h2 css={programmerCss} style={{ x: springProgrammerX }}>
          &PROGRAMMER
        </m.h2>
        <m.h3 css={meetCss} style={{ x: springMeetX }}>
          MEET
        </m.h3>

        <Image
          src={isMobile ? MOBILE_HEADER_FRONT : HEADER_FRONT}
          alt="depromeet project"
          priority
          quality={100}
          fill
          placeholder="blur"
          blurDataURL={isMobile ? MOBILE_HEADER_FRONT : HEADER_FRONT}
          css={[imageCss, frontImageCss]}
        />
      </div>

      <p css={descriptionCss}>
        독창적이면서도 날카롭고
        <br />
        실패를 두려워하지 않는
        <br />
        오직 디프만에서만 가능한
        <br />
        프로젝트들을 소개합니다.
      </p>
    </header>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 598px;
  overflow: hidden;

  margin-bottom: 130px;

  ${mediaQuery('xs')} {
    margin-bottom: 70px;
    height: auto;
  }
`;

const imageWrapperCss = css`
  position: relative;
  width: 100%;
  height: 100%;

  ${mediaQuery('xs')} {
    margin-top: 60px;
    height: 180px;
    overflow-y: visible;
  }
`;

const headingCss = css`
  position: absolute;
  font-weight: 600;
  font-size: 7.8125rem;
  left: 110px;
  z-index: 1;

  ${mediaQuery('md')} {
    font-size: 90px;
    left: 70px;
  }

  ${mediaQuery('sm')} {
    left: 20px;
  }

  ${mediaQuery('xs')} {
    font-size: 34px;
  }
`;

const designerCss = css`
  ${headingCss};
  top: 30px;
`;

const programmerCss = css`
  ${headingCss};
  top: 155px;

  ${mediaQuery('md')} {
    top: 120px;
  }

  ${mediaQuery('xs')} {
    top: 70px;
  }
`;

const meetCss = css`
  ${headingCss};
  top: 280px;

  ${mediaQuery('md')} {
    top: 210px;
  }

  ${mediaQuery('xs')} {
    top: 110px;
  }
`;

const descriptionCss = css`
  ${body1Css}

  position: absolute;
  right: 200px;
  top: 346px;
  z-index: 1;

  ${mediaQuery('md')} {
    right: 100px;
  }

  ${mediaQuery('xs')} {
    ${layoutCss};
    position: static;
    margin-top: 100px;
  }
`;

const imageCss = css`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const backImageCss = css`
  z-index: -3;
`;

const frontImageCss = css`
  z-index: 2;
`;
