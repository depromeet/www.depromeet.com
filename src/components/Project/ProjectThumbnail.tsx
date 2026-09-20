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
  /**
   * 그리드에 놓이는 카드. 텍스트 영역에 시안 여백(좌우 20 · 아래 10)을 주고, 같은 행에서
   * 가장 높은 카드에 높이를 맞춘다. 19기는 소개(`203:1413`)와 프로젝트(`203:1063`)가 같은
   * 카드를 쓰므로 두 곳 모두 켠다. /about(17기)은 예전 카드 그대로라 기본값은 끈 상태다.
   */
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

/*
 * hover시 썸네일 영역만 회색+링크 표시, 텍스트 영역 효과 없음 (블로그와 동일)
 *
 * 그림자는 19기에서 **두 페이지 모두** 생겼다 — 소개(`203:1413`)와 프로젝트(`203:1063`)의
 * 카드가 같은 컴포넌트다. 예전에는 메인 카드에만 붙어 있어 프로젝트 페이지 카드가 흰 배경
 * 위에 경계 없이 떠 있었다. 값은 두 시안에서 잰 것이 일치한다(아래 참고).
 */
const articleCss = css`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: none;
  overflow: hidden;
  /*
   * 시안 실측: 아래로 가장 짙은 지점이 배경 대비 약 5.9%, 좌우 3.9%, 위 2.0%,
   * 번지는 거리는 아래 ~32px / 위 ~16px. y오프셋 8 · blur 32 · 8% 와 일치한다.
   * #2F3337은 19기 팔레트에 없는 그림자 전용 값이라 토큰으로 올리지 않는다.
   */
  box-shadow: 0 8px 32px rgba(47, 51, 55, 0.08);

  &:hover .thumbnail-overlay {
    opacity: 1;
  }
`;

/*
 * 같은 행의 가장 높은 카드에 높이를 맞춘다. 시안에서는 설명이 한 줄인 카드(Senti)와 두 줄인
 * 카드(PiKi)의 아래 끝이 같은 y에 있다 — 줄 수만큼 카드가 짧아지지 않는다.
 */
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

/* 시안 실측: 좌우 20, 아래 10. 카드 총 높이 396(= 썸네일 283 + 20 + 제목 31 + 8 + 설명 2줄 44 + 10). */
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

/* 시안 실측: 글자 14px · 줄간 22px(1.6). 16px이면 글줄이 시안보다 16% 넓어져
   설명이 한 줄 더 접히고 카드 높이까지 달라진다. */
const descriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.v19.coolGray900};
  margin: 0;
  white-space: pre-wrap;
`;

/*
 * frontFace가 article 높이를 채운다.
 *
 * 이미지와 글자 사이는 시안이 어느 폭에서나 20이다 — 카드 안쪽 프레임이 네 폭 모두 (20, 20)에
 * 놓인다(1920 259:17427 · 768 259:17741). 공용 frontFace는 768 이하에서 12라 카드가 7px 낮아졌다.
 */
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

/*
 * 위 기준으로 자른다. 원본은 808x632(비율 1.278)인데 자리는 389x283(1.376)이라 cover가
 * 세로를 21px 잘라내는데, 시안은 그 21px를 전부 아래에서 가져간다 — 가운데 정렬로 두면
 * 그림이 10px 내려앉아 Hapalin·obrit 로고 윗부분이 잘리고 아래 여백이 더 보였다.
 * 여섯 장 모두 시안과 픽셀 대조해 확인했다(평균 오차 center 13~24 → top 3~6).
 */
const imageCss = css`
  object-fit: cover;
  object-position: center top;
`;
