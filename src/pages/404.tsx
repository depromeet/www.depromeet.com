import Image from 'next/image';
import { css } from '@emotion/react';

import { ClickableLink } from '~/components/common/Clickable';
import { HOME_IMAGE_BASE } from '~/constants/images';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';

const HEADER_BACK_IMAGE = `${HOME_IMAGE_BASE}/header-back.webp`;
const MOBILE_HEADER_BACK_IMAGE = `${HOME_IMAGE_BASE}/mobile-header-back.webp`;
const HEADER_FRONT_IMAGE = `${HOME_IMAGE_BASE}/header-front.png`;
const MOBILE_HEADER_FRONT_IMAGE = `${HOME_IMAGE_BASE}/mobile-header-front.webp`;

export default function NotFound() {
  const isMobile = useMediaQuery('xs');

  return (
    <main css={mainCss}>
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
      <span css={designerTextCss}>404</span>
      <span css={programmerTextCss}>NOT FOUND</span>
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
      <ClickableLink href="/" css={linkCss}>
        홈으로 가기
      </ClickableLink>
    </main>
  );
}

const mainCss = css`
  position: relative;
  width: 100%;
  height: 780px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 14vh;
`;

const linkCss = css`
  border-radius: 2px;
  padding: 16px 98px;
  background-color: ${colors.black};

  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.gray100};

  ${mediaQuery('xs')} {
    padding: 18px 60px;
    font-size: 16px;
    line-height: 19px;
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

  ${mediaQuery('sm')} {
    font-size: 100px;
  }

  ${mediaQuery('xs')} {
    font-size: 50px;
  }
`;

const designerTextCss = css`
  ${graphicTextCss};
  top: 165px;
  left: 14vw;

  ${mediaQuery('sm')} {
    left: 7vw;
  }

  ${mediaQuery('xs')} {
    top: 113px;
  }
`;

const programmerTextCss = css`
  ${graphicTextCss};
  top: 327px;
  left: 24vw;

  ${mediaQuery('sm')} {
    left: 9vw;
  }

  ${mediaQuery('xs')} {
    top: 182px;
  }
`;
