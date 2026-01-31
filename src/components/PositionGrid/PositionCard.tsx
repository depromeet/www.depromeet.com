import { useState } from 'react';
import { css } from '@emotion/react';

import useIsInProgress from '~/hooks/useIsInProgress';
import { theme } from '~/styles/theme';

import { colors } from '../../styles/colors';

interface PositionCardProps {
  id: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  backgroundImage?: string;
  hoverDescription: string;
  applyUrl?: string;
}

export const PositionCard = ({
  // id,
  title,
  subtitle,
  isActive,
  // backgroundImage,
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
      <div css={contentWrapperStyles}>
        {isHovered ? (
          <>
            <h3 css={hoverTitleStyles}>{title}</h3>
            <p css={hoverDescriptionStyles}>{hoverDescription}</p>
          </>
        ) : (
          <>
            <h3 css={titleStyles}>{title}</h3>
            <p css={subtitleStyles}>{subtitle}</p>
            <div css={iconPlaceholderStyles} />
          </>
        )}
      </div>
    </div>
  );
};

const cardStyles = (isActive: boolean, isHovered: boolean) => css`
  position: relative;
  background: ${isHovered ? '#2f3337' : colors.white};
  border-radius: 12px;
  padding: 24px;
  width: 230px;
  height: 320px;
  display: flex;
  flex-direction: column;
  cursor: ${isActive ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.1);
  overflow: visible;

  &:hover {
    transform: ${isActive ? 'translateY(-4px)' : 'none'};
    box-shadow: ${isActive
      ? '0 8px 20px rgba(0, 100, 255, 0.15)'
      : '0px 8px 32px 0px rgba(47, 51, 55, 0.1)'};
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    width: 285px;
    height: 320px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 340px;
    height: 320px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    width: 100%;
    max-width: 340px;
    height: 320px;
  }
`;

const contentWrapperStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 12px;
  align-items: flex-end;
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
  width: 100%;
  min-width: 100%;
  flex-shrink: 0;
`;

const subtitleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: ${theme.colors.primary.darknavy};
  letter-spacing: 0;
  width: 100%;
  height: 56px;
  flex-shrink: 0;
`;

// const imageContainerStyles = css`
//   position: absolute;
//   bottom: -10px;
//   right: 0;
//   left: 0;
//   height: 180px;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   padding-left: 20%;
//   pointer-events: none;
//   overflow: visible;
// `;

// const imageStyles = css`
//   width: 160px;
//   height: 160px;
//   object-fit: contain;
//   object-position: center;
// `;

const hoverTitleStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
  color: #f1f2f3;
  letter-spacing: 0;
  white-space: pre-line;
  width: 100%;
  min-width: 100%;
  flex-shrink: 0;
`;

const hoverDescriptionStyles = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  color: #f1f2f3;
  letter-spacing: 0;
  white-space: pre-wrap;
  width: 100%;
  flex-shrink: 0;
`;

const iconPlaceholderStyles = css`
  width: 116px;
  height: 116px;
  background: black;
  flex-shrink: 0;
`;
