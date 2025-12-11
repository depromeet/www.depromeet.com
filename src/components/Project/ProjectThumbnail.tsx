import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { Project } from '~/constant/project';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

type ProjectThumbnailProps = Project & {
  showInfoDefault?: boolean;
  backgroundShow?: boolean;
};

export function ProjectThumbnail({
  title,
  subTitle,
  description,
  links,
  ...props
}: ProjectThumbnailProps) {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <m.article
      css={articleCss}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      variants={defaultFadeInVariants}
      {...props}
    >
      {/* 앞면 - 기본 상태 */}
      <div css={frontFaceCss} className="front-face">
        {/* 중간 제목과 설명 */}
        <div css={titleContainerCss}>
          <h3 css={titleCss}>{title}</h3>
          <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        {/* 하단 썸네일 이미지 */}
        <div css={imageContainerCss}>
          <Image
            css={imageCss}
            src={`/images/project/${subTitle}/${title}.png`}
            alt={title}
            fill
            quality={100}
          />
        </div>
      </div>

      {/* 뒷면 - 호버 시 나타나는 링크들 */}
      <div css={backFaceCss} className="back-face">
        {/* 중간 제목과 설명 */}
        <div css={titleContainerCss}>
          <h3 css={[titleCss, { color: 'black' }]}>{title}</h3>
          <p
            css={[descriptionCss, { color: 'black' }]}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* 하단 링크들 (이미지 영역 대신) */}
        <div css={backLinksAreaCss}>
          {links && links.length > 0 && (
            <div css={linksContainerCss}>
              {links.map((link, index) => (
                <button
                  key={index}
                  css={linkButtonCss}
                  onClick={e => handleLinkClick(link.href, e)}
                >
                  {link.type}
                  <ArrowIcon direction={'right'} color="white" width={16} height={16} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </m.article>
  );
}

// 메인 카드 스타일
const articleCss = css`
  position: relative;
  width: 100%;
  max-width: 312px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e3e5ea;
  border: 1px solid #478af4;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .back-face {
    opacity: 1;
  }
`;

// 앞면 스타일
const frontFaceCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

// 뒷면 스타일
const backFaceCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e3e5ea;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// 뒷면 링크 영역 (이미지 영역과 같은 위치와 크기)
const backLinksAreaCss = css`
  position: relative;
  width: 100%;
  height: 245px;
  background: ${colors.primary.darknavy};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px;
  box-sizing: border-box;
`;

const linksContainerCss = css`
  display: flex;
  gap: 16.5px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const linkButtonCss = css`
  display: flex;
  gap: 6px;
  align-items: center;
  color: white;
  background: transparent;
  border: none;
  padding: 0;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.2s ease;

  ${theme.typosV3.MartianMono.body1Regular};
  font-weight: 200;
  font-size: 13px;
  letter-spacing: -0.5px;

  &:hover {
    opacity: 0.8;
  }

  ${mediaQuery('tablet')} {
  }
`;

const titleContainerCss = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  height: 112px;
`;

const titleCss = css`
  ${theme.typosV3.pretendard.sub1Semibold};
  color: ${colors.black};
`;

const descriptionCss = css`
  ${theme.typosV3.pretendard.body5Medium};
  color: ${colors.primary.darknavy};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  height: 245px;
  overflow: hidden;
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;
