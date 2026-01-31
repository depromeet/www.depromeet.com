import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { Project } from '~/constant/project';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

type ProjectThumbnailProps = Project & {
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
  /** 메인 페이지용: 텍스트 래퍼에 상단 제외 좌우하 20px 패딩 */
  textWrapperPadding?: boolean;
  /** 메인 페이지용: 카드에 #fff 배경 + box-shadow 적용 */
  mainPageCard?: boolean;
};

export function ProjectThumbnail({
  title,
  subTitle,
  description,
  links,
  textWrapperPadding,
  mainPageCard,
  ...props
}: ProjectThumbnailProps) {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <m.article
      css={[articleCss, mainPageCard && mainPageCardCss]}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={defaultFadeInVariants}
      {...props}
    >
      <div css={[frontFaceCss, mainPageCard && mainPageFrontFaceCss]} className="front-face">
        {/* 썸네일 이미지 + 호버 시 오버레이 (블로그와 동일) */}
        <div css={imageContainerCss}>
          <Image
            css={imageCss}
            src={`/images/project/${subTitle}/${title}.png`}
            alt={title}
            fill
            quality={100}
          />
          <div css={thumbnailOverlayCss} className="thumbnail-overlay">
            {links && links.length > 0 && (
              <div css={linksContainerCss(links.length)}>
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    <button css={linkButtonCss} onClick={e => handleLinkClick(link.href, e)}>
                      {link.type}
                      <ArrowIcon direction={'right'} color="white" width={20} height={20} />
                    </button>
                    {index < links.length - 1 && <div css={dividerCss}>∙</div>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 텍스트 영역 - 호버 시 변경 없음 */}
        <div
          css={[
            textContainerCss,
            textWrapperPadding && textContainerPaddingCss,
            mainPageCard && mainPageTextContainerCss,
          ]}
        >
          <h3 css={titleCss}>{title}</h3>
          <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </m.article>
  );
}

/* hover시 썸네일 영역만 회색+링크 표시, 텍스트 영역 효과 없음 (블로그와 동일) */
const articleCss = css`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  overflow: hidden;

  &:hover .thumbnail-overlay {
    opacity: 1;
  }
`;

/* Figma 82-4736: 메인 페이지 카드 - #fff 배경 + box-shadow, 같은 행의 가장 높은 카드에 맞춤 */
const mainPageCardCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 8px 32px rgba(47, 51, 55, 0.08);
`;

// 앞면 스타일
const frontFaceCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 12px;
  }

  ${mediaQuery('mobile')} {
    gap: 12px;
  }
`;

/* hover시 썸네일 영역만 회색 오버레이 + 링크 (블로그와 동일) */
const thumbnailOverlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.grey18['900']};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const linksContainerCss = (linkCount: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${linkCount > 3 ? '4px' : '12px'};
  align-items: center;
  justify-content: center;
`;

const linkButtonCss = css`
  display: flex;
  gap: 6px;
  align-items: center;
  color: white;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

const dividerCss = css`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: -0.16px;
  color: white;
`;

const textContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const textContainerPaddingCss = css`
  padding: 0 20px 20px 20px;
`;

const titleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  color: ${colors.grey18['900']};
  margin: 0;
  white-space: pre-wrap;
`;

const descriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${colors.grey18['900']};
  margin: 0;
  white-space: pre-wrap;
`;

/* 메인 페이지: frontFace가 article 높이 채움 */
const mainPageFrontFaceCss = css`
  flex: 1;
  min-height: 0;
`;

/* 메인 페이지: 텍스트 영역이 남은 공간 채워 같은 행 카드 높이 맞춤 */
const mainPageTextContainerCss = css`
  flex: 1;
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
`;
