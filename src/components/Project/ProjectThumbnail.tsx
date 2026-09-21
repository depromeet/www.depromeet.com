import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { Project } from '~/constant/project';
import { colors } from '~/styles/colors';

type ProjectThumbnailProps = Project & {
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
  gridCard?: boolean;
};

export function ProjectThumbnail({
  title,
  subTitle,
  description,
  links,
  gridCard,
  ...props
}: ProjectThumbnailProps) {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <m.article
      css={[articleCss, gridCard && gridCardCss]}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={defaultFadeInVariants}
      {...props}
    >
      <div css={[frontFaceCss, gridCard && gridFrontFaceCss]} className="front-face">
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
              <div css={overlayInnerCss}>
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
              </div>
            )}
          </div>
        </div>

        {/* 텍스트 영역 - 호버 시 변경 없음 */}
        <div
          css={[
            textContainerCss,
            gridCard && textContainerPaddingCss,
            gridCard && gridTextContainerCss,
          ]}
        >
          <h3 css={titleCss}>{title}</h3>
          <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </m.article>
  );
}

const articleCss = css`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: none;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(47, 51, 55, 0.08);

  &:hover .thumbnail-overlay {
    opacity: 1;
  }
`;

const gridCardCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// 앞면 스타일
const frontFaceCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1280px) {
    gap: 20px;
  }
`;

/* hover시 썸네일 영역만 회색 오버레이 + 링크 (블로그와 동일) */
const thumbnailOverlayCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.v19.coolGray900};
  display: flex;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const overlayInnerCss = css`
  width: 100%;
  height: 100%;
  padding: 28px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const linksContainerCss = (linkCount: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${linkCount > 3 ? '4px' : '8px'};
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
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
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
  padding: 0 20px 10px 20px;
`;

const titleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};
  margin: 0;
  white-space: pre-wrap;
`;

const descriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.v19.coolGray900};
  margin: 0;
  white-space: pre-wrap;
`;

const gridFrontFaceCss = css`
  flex: 1;
  min-height: 0;
  gap: 20px;

  /* 공용 frontFace가 1279 이하에서 12를 주고, 미디어 쿼리가 나중에 놓여 이긴다. 같은 구간을 다시 잡는다. */
  @media (max-width: 1279px) {
    gap: 20px;
  }
`;

/* 텍스트 영역이 남은 공간을 채워 같은 행의 카드 높이를 맞춘다. */
const gridTextContainerCss = css`
  flex: 1;
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  height: 283px;
  overflow: hidden;
`;

const imageCss = css`
  object-fit: cover;
  object-position: center top;
`;
