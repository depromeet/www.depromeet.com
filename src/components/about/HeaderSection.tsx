import Image from 'next/image';
import { css } from '@emotion/react';
import { m, useScroll, useSpring, useTransform } from 'framer-motion';

import { ABOUT_IMAGE_BASE } from '~/constants/images';
import useMediaQuery from '~/hooks/use-media-query';
import { mediaQuery } from '~/styles/constants';

const MOBILE_HEADER = `${ABOUT_IMAGE_BASE}/mobile-header.webp`;
const HEADER_FRONT = `${ABOUT_IMAGE_BASE}/header-front.webp`;
const HEADER_BACK = `${ABOUT_IMAGE_BASE}/header-back.webp`;

export default function HeaderSection() {
  const isMobile = useMediaQuery('xs');

  const { scrollY } = useScroll();
  const allAboutX = useTransform(scrollY, [0, isMobile ? 200 : 320], [0, isMobile ? 350 : 560]);
  const depromeetX = useTransform(scrollY, [0, isMobile ? 200 : 320], [0, isMobile ? 380 : 400]);
  const springAllAboutX = useSpring(allAboutX, { stiffness: 200, damping: 40 });
  const springDepromeetX = useSpring(depromeetX, { stiffness: 200, damping: 40 });

  return (
    <section css={sectionCss}>
      {!isMobile && (
        <Image
          css={[
            imageCss,
            css`
              z-index: -3;
            `,
          ]}
          src={HEADER_BACK}
          alt="디프만"
          fill
          priority
          quality={100}
          placeholder="blur"
          blurDataURL={HEADER_BACK}
        />
      )}

      <m.span css={allAboutSpanCss} style={{ x: springAllAboutX }}>
        ALL ABOUT
      </m.span>
      <m.span css={depromeetSpanCss} style={{ x: springDepromeetX }}>
        DEPROMEET
      </m.span>

      <Image
        css={imageCss}
        src={isMobile ? MOBILE_HEADER : HEADER_FRONT}
        alt="디프만"
        fill
        priority
        quality={100}
        placeholder="blur"
        blurDataURL={isMobile ? MOBILE_HEADER : HEADER_FRONT}
      />

      <h1 css={headingCss}>디프만의 모든것</h1>
    </section>
  );
}

const sectionCss = css`
  position: relative;
  width: 100%;
  height: 538px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 130px;

  ${mediaQuery('xs')} {
    height: 430px;

    margin-bottom: 80px;
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
  z-index: -2;
  font-size: 145px;

  ${mediaQuery('sm')} {
    font-size: 100px;
  }

  ${mediaQuery('xs')} {
    font-size: 45px;
  }
`;

const allAboutSpanCss = css`
  ${graphicTextCss};
  top: 50px;
  left: 55px;

  ${mediaQuery('sm')} {
    left: 20px;
  }

  ${mediaQuery('xs')} {
    top: 24px;
    left: 20px;
  }
`;

const depromeetSpanCss = css`
  ${graphicTextCss};
  top: 200px;
  left: 300px;

  ${mediaQuery('md')} {
    left: 120px;
  }

  ${mediaQuery('sm')} {
    top: 150px;
    left: 80px;
  }

  ${mediaQuery('xs')} {
    top: 72px;
    left: 20px;
  }
`;

const headingCss = css`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8125rem;

  ${mediaQuery('xs')} {
    font-size: 16px;
    line-height: 140%;
  }
`;
