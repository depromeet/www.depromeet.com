import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { m } from 'framer-motion';

import { ArrowIcon } from '~/components/Icons';
import { defaultFadeInVariants } from '~/constant/motion';
import { Project } from '~/constant/project';
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
        {/* 상단 기수 정보 */}
        <div css={subTitleContainerCss}>
          <span css={subTitleCss}>{subTitle}</span>
        </div>

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
        {/* 상단 기수 정보 */}
        <div css={subTitleContainerCss}>
          <span css={[subTitleCss, { color: 'black' }]}>{subTitle}</span>
        </div>

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
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e3e5ea;
  border: 1px solid #478af4;
  transition: all 0.2s ease;
  overflow: hidden;
  perspective: 1000px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .front-face {
    transform: rotateY(-180deg);
  }

  &:hover .back-face {
    transform: rotateY(0deg);
  }

  ${mediaQuery('mobile')} {
    border-radius: 12px;
  }
`;

// 앞면 스타일
const frontFaceCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
`;

// 뒷면 스타일
const backFaceCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e3e5ea;
  backface-visibility: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// 뒷면 링크 영역 (이미지 영역과 같은 위치와 크기)
const backLinksAreaCss = css`
  position: relative;
  width: 100%;
  height: 240px;
  background: #040c23;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  ${mediaQuery('mobile')} {
    height: 200px;
    padding: 16px;
  }
`;

const linksContainerCss = css`
  display: flex;
  gap: 16px;
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
  font-family: MartianMono;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold14};
  }
`;

// 앞면 요소들 스타일
const subTitleContainerCss = css`
  padding: 16px 16px 0 16px;

  ${mediaQuery('mobile')} {
    padding: 12px 12px 0 12px;
  }
`;

const subTitleCss = css`
  ${theme.typosV2.pretendard.medium13};
  color: #040c23;
  line-height: 1.4;

  ${mediaQuery('mobile')} {
    font-size: 13px;
  }
`;

const titleContainerCss = css`
  padding: 8px 16px 16px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  ${mediaQuery('mobile')} {
    padding: 6px 12px 12px 12px;
  }
`;

const titleCss = css`
  ${theme.typosV2.pretendard.semibold20};
  color: #000000;
  line-height: 1.4;
  margin: 0;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.semibold16};
    line-height: 1.3;
  }
`;

const descriptionCss = css`
  ${theme.typosV2.pretendard.medium14};
  color: #666666;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  margin: 0;

  ${mediaQuery('mobile')} {
    ${theme.typosV2.pretendard.medium13};
    line-height: 1.3;
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  ${mediaQuery('mobile')} {
    height: 200px;
  }
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;
