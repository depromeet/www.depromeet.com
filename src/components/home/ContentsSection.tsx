import Image from 'next/image';
import { css } from '@emotion/react';

import { HOME_IMAGE_BASE } from '~/constants/images';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { layoutCss, section40HeadingCss, sectionSmallCss } from '~/styles/css';

import { ClickableLink } from '../common/Clickable';

const MEET_IMAGE = `${HOME_IMAGE_BASE}/meet.webp`;
const HEART_IMAGE = `${HOME_IMAGE_BASE}/heart.webp`;
const PROGRAMMER_IMAGE = `${HOME_IMAGE_BASE}/programmer.webp`;
const MOBILE_MEET_IMAGE = `${HOME_IMAGE_BASE}/mobile-meet.webp`;
const MOBILE_HEART_IMAGE = `${HOME_IMAGE_BASE}/mobile-heart.webp`;
const MOBILE_PROGRAMMER_IMAGE = `${HOME_IMAGE_BASE}/mobile-programmer.webp`;

export default function ContentsSection() {
  const isMobile = useMediaQuery('xs');

  return (
    <section css={sectionCss}>
      <article css={paragraphArticleCss}>
        <small css={smallCss}>CONTENTS</small>
        <h2 css={section40HeadingCss}>디프만에 한발짝 더{isMobile && <br />} 가까워질 수 있게</h2>
      </article>

      <article css={linkArticleCss}>
        <ClickableLink
          href="/about"
          css={[
            linkCss,
            css`
              background-color: #e4f1ff;
            `,
          ]}
        >
          <Image
            css={linkImageCss}
            src={isMobile ? MOBILE_MEET_IMAGE : MEET_IMAGE}
            alt="디프만 a to z"
            fill
            quality={100}
          />
          <div css={linkContentWrapperCss}>
            <p css={linkParagraphCss}>디프만에 대한 모든 정보는 여기 쏙!</p>
            <span css={linkSpanCss}>디프만 A to Z</span>
          </div>
        </ClickableLink>

        <ClickableLink
          href="/project"
          css={[
            linkCss,
            css`
              background-color: #f5eeff;
            `,
          ]}
        >
          <div css={heartImageWrapperCss}>
            <Image
              css={linkImageCss}
              src={isMobile ? MOBILE_HEART_IMAGE : HEART_IMAGE}
              alt="디프만 프로젝트"
              fill
              quality={100}
            />
          </div>
          <div css={linkContentWrapperCss}>
            <p css={linkParagraphCss}>디프만의 자랑거리인</p>
            <span css={linkSpanCss}>지난 프로젝트 보러가기</span>
          </div>
        </ClickableLink>

        <ClickableLink
          href="/recruit"
          css={[
            linkCss,
            css`
              background-color: #eaebff;
            `,
          ]}
        >
          <div css={programmerImageWrapperCss}>
            <Image
              css={linkImageCss}
              src={isMobile ? MOBILE_PROGRAMMER_IMAGE : PROGRAMMER_IMAGE}
              fill
              alt="디프만 모집 안내"
              quality={100}
            />
          </div>
          <div css={linkContentWrapperCss}>
            <p css={linkParagraphCss}>지원방법부터 모집일정까지</p>
            <span css={linkSpanCss}>13기 모집 안내</span>
          </div>
        </ClickableLink>
      </article>
    </section>
  );
}

const sectionCss = css`
  ${layoutCss};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    margin-bottom: 100px;
  }
`;

const paragraphArticleCss = css`
  text-align: center;

  margin-bottom: 90px;

  ${mediaQuery('xs')} {
    margin-bottom: 60px;
  }
`;

const smallCss = css`
  ${sectionSmallCss}
  display: block;
  margin-bottom: 10px;
`;

const linkArticleCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;

  ${mediaQuery('xs')} {
    flex-direction: column;
    gap: 30px;
  }
`;

const linkCss = css`
  position: relative;
  width: 384px;
  height: 366px;
  border-top: 1px solid ${colors.black};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 25%);

  ${mediaQuery('xs')} {
    width: 100%;
    height: 200px;
  }
`;

const linkContentWrapperCss = css`
  position: relative;
  padding-top: 30px;
  padding-left: 30px;
  z-index: 10;
`;

const linkParagraphCss = css`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;

  margin-bottom: 6px;

  ${mediaQuery('xs')} {
    font-size: 14px;
  }
`;

const linkSpanCss = css`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.0625rem;

  ${mediaQuery('xs')} {
    font-size: 20px;
  }
`;

const heartImageWrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 40px);

  ${mediaQuery('xs')} {
    height: 100%;
  }
`;

const programmerImageWrapperCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 34px);
  height: 100%;

  ${mediaQuery('xs')} {
    width: 100%;
  }
`;

const linkImageCss = css`
  object-fit: cover;
  z-index: 1;
`;
