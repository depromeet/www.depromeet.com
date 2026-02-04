import { useState } from 'react';
import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/useIsInProgress';
import { theme } from '~/styles/theme';

import { colors } from '../../styles/colors';

interface ImageConfig {
  src: string;
}

interface PositionCardProps {
  id: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  imageConfig?: ImageConfig;
  hoverDescription: string;
  applyUrl?: string;
}

export const PositionCard = ({
  title,
  subtitle,
  isActive,
  imageConfig,
  hoverDescription,
  applyUrl,
}: PositionCardProps) => {
  const { isInProgress } = useIsInProgress();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (isActive && applyUrl && isInProgress) {
      window.open(applyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      css={cardStyles(isActive, isHovered)}
      className="position-card"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div css={hoverContentWrapperStyles}>
          <h3 css={hoverTitleStyles}>{title}</h3>
          <p css={hoverDescriptionStyles}>{hoverDescription}</p>
        </div>
      ) : (
        <div css={defaultContentWrapperStyles}>
          <div css={textAreaStyles}>
            <h3 css={titleStyles}>{title}</h3>
            <p css={subtitleStyles}>{subtitle}</p>
          </div>
          <div css={imageAreaStyles}>
            {imageConfig && <img src={imageConfig.src} alt={title} css={imageStyles} />}
          </div>
        </div>
      )}
    </div>
  );
};

const cardStyles = (isActive: boolean, isHovered: boolean) => css`
  position: relative;
  background: ${isHovered ? '#2f3337' : colors.white};
  border-radius: 12px;
  width: 230px;
  height: 320px;
  display: flex;
  flex-direction: column;
  cursor: ${isActive ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.1);
  overflow: hidden;
  padding: 0;

  &:hover {
    transform: ${isActive ? 'translateY(-4px)' : 'none'};
    box-shadow: ${isActive
      ? '0 8px 20px rgba(0, 100, 255, 0.15)'
      : '0px 8px 32px 0px rgba(47, 51, 55, 0.1)'};
  }

  /* 카드 고정 사이즈: 하단 텍스트 영역 위에 이미지가 겹치는 구조 */
  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 285px;
    height: 320px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 338px;
    height: 320px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: 320px;
    height: 320px;
  }
`;

const hoverContentWrapperStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
  align-items: flex-start;
  padding: 24px;
`;

const defaultContentWrapperStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

/* 하단에 깔리는 텍스트 영역 (전체 카드) */
const textAreaStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  background: ${colors.white};
  border-radius: 12px;
`;

/* 그 위에 겹쳐지는 이미지 영역 (우상단) */
const imageAreaStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  overflow: visible;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  pointer-events: none;
`;

const imageStyles = css`
  width: 160px;
  height: 160px;
  object-fit: contain;
  object-position: center center;
  display: block;
  flex-shrink: 0;

  /* 100% = 160x160 기준. 각 브레이크포인트별 스케일 + 오른쪽 정렬 */
  @media (min-width: 360px) and (max-width: 767px) {
    width: 192px;
    height: 192px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 208px;
    height: 208px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 176px;
    height: 176px;
  }

  @media (min-width: 1920px) {
    width: 160px;
    height: 160px;
  }
`;

const titleStyles = css`
  font-family: 'Helvetica Neue', 'Helvetica', 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  color: ${theme.colors.primary.darknavy};
  white-space: pre-line;
  letter-spacing: 0;
`;

const subtitleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: ${theme.colors.primary.darknavy};
  letter-spacing: 0;

  /* 1920~ 이상: subtitle 2줄 높이 고정 → title이 모든 카드에서 같은 선상에 오도록 */
  @media (min-width: 1920px) {
    min-height: 2.8em;
  }
`;

const hoverTitleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  color: #f1f2f3;
  letter-spacing: 0;
  white-space: pre-line;
`;

const hoverDescriptionStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  color: #f1f2f3;
  letter-spacing: 0;
  white-space: pre-wrap;
`;
