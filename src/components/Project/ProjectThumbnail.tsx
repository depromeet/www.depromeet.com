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
        {/* 상단 썸네일 이미지 */}
        <div css={imageContainerCss}>
          <Image
            css={imageCss}
            src={`/images/project/${subTitle}/${title}.png`}
            alt={title}
            fill
            quality={100}
          />
        </div>

        {/* 텍스트 영역 */}
        <div css={textContainerCss}>
          <h3 css={titleCss}>{title}</h3>
          <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      {/* 뒷면 - 호버 시 나타나는 링크들 */}
      <div css={backFaceCss} className="back-face">
        {/* 상단 링크들 (이미지 영역 대신) */}
        <div css={backLinksAreaCss}>
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

        {/* 텍스트 영역 */}
        <div css={textContainerCss}>
          <h3 css={titleCss}>{title}</h3>
          <p css={descriptionCss} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </m.article>
  );
}

// 메인 카드 스타일
const articleCss = css`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:hover .back-face {
    opacity: 1;
  }

  @media (min-width: 1920px) {
    width: 413px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 430px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 334px;
  }

  ${mediaQuery('mobile')} {
    max-width: 320px;
    width: 100%;
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

// 뒷면 스타일
const backFaceCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

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

// 뒷면 링크 영역 (이미지 영역과 같은 위치와 크기)
const backLinksAreaCss = css`
  position: relative;
  width: 100%;
  background: ${colors.grey18['900']};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21px;
  box-sizing: border-box;

  @media (min-width: 1920px) {
    height: 323px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 336px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 261px;
  }

  ${mediaQuery('mobile')} {
    height: 250px;
  }
`;

const linksContainerCss = (linkCount: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${linkCount > 3 ? '8px' : '12px'};
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

  @media (min-width: 1280px) {
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 12px;
  }

  ${mediaQuery('mobile')} {
    gap: 4px;
  }
`;

const titleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.4;
  letter-spacing: 0.36px;
  color: ${colors.grey18['900']};
  margin: 0;
  white-space: pre-wrap;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  ${mediaQuery('mobile')} {
    font-size: 26px;
    line-height: 1.25;
    letter-spacing: -1.3px;
  }
`;

const descriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
  color: ${colors.grey18['900']};
  margin: 0;
  white-space: pre-wrap;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
  }

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const imageContainerCss = css`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1920px) {
    height: 323px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 336px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 261px;
  }

  ${mediaQuery('mobile')} {
    height: 250px;
  }
`;

const imageCss = css`
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;
