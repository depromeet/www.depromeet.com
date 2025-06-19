import { css } from '@emotion/react';

import { theme } from '~/styles/theme';

import { colors } from '../../styles/colors';

interface PositionCardProps {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  isActive: boolean;
  backgroundImage: string;
  hoverDescription: string;
}

export const PositionCard = ({
  title,
  subtitle,
  color,
  isActive,
  backgroundImage,
  hoverDescription,
}: PositionCardProps) => {
  return (
    <div css={cardStyles(color, isActive, backgroundImage)} className="position-card">
      <div css={defaultContentStyles}>
        <div css={contentStyles}>
          <h3 css={titleStyles}>{title}</h3>
          <p css={subtitleStyles}>{subtitle}</p>
        </div>

        <button css={applyButtonStyles}>
          지원하기
          <span css={arrowStyles}>→</span>
        </button>
      </div>

      <div css={hoverContentStyles}>
        <div css={hoverTextStyles}>{hoverDescription}</div>

        <button css={hoverApplyButtonStyles}>
          지원하기
          <span css={hoverArrowStyles}>→</span>
        </button>
      </div>
    </div>
  );
};

const cardStyles = (color: string, isActive: boolean, backgroundImage: string) => css`
  position: relative;
  background: ${colors.primary.gray};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${isActive ? colors.blue500 : '#E0E0E0'};
  border-radius: 0;
  padding: 24px;
  width: 240px;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: ${isActive ? 'pointer' : 'default'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover {
    box-shadow: ${isActive ? '0 8px 25px rgba(0,0,0,0.15)' : 'none'};
    border-color: ${isActive ? '#1a1a1a' : isActive ? colors.blue500 : '#E0E0E0'};

    &::before {
      background: rgba(26, 26, 26, 1);
    }
  }
`;

const defaultContentStyles = css`
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
  transition: opacity 0.3s ease;

  .position-card:hover & {
    opacity: 0;
  }
`;

const contentStyles = css`
  z-index: 2;
  position: relative;
`;

const titleStyles = css`
  ${theme.typosV3.MartianMono.head3};

  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #333;
`;

const subtitleStyles = css`
  ${theme.typosV3.pretendard.sub1Medium};

  font-size: 14px;
  color: #666;
  margin: 0;
`;

const applyButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  z-index: 2;
  position: relative;

  &:hover {
    color: #000;
  }
`;

const arrowStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #333;
  color: white;
  border-radius: 50%;
  font-size: 12px;
`;

const hoverContentStyles = css`
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;

  .position-card:hover & {
    opacity: 1;
  }
`;

const hoverTextStyles = css`
  ${theme.typosV3.pretendard.sub5Medium};

  color: white;
  font-size: 14px;
  z-index: 2;
  position: relative;
`;

const hoverApplyButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  z-index: 2;
  position: relative;
  transition: opacity 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const hoverArrowStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: white;
  color: #333;
  border-radius: 50%;
  font-size: 12px;
`;
