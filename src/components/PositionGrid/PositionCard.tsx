import { css } from '@emotion/react';

import { colors } from '../../styles/colors';

interface PositionCardProps {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  isActive: boolean;
  hoverDescription: string;
}

export const PositionCard = ({
  title,
  subtitle,
  color,
  isActive,
  hoverDescription,
}: PositionCardProps) => {
  return (
    <div css={cardStyles(color, isActive)} className="position-card">
      <div css={defaultContentStyles}>
        <div css={contentStyles}>
          <h3 css={titleStyles}>{title}</h3>
          <p css={subtitleStyles}>{subtitle}</p>
        </div>

        <div css={decorativeShapeStyles(color)} />

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

const cardStyles = (color: string, isActive: boolean) => css`
  position: relative;
  background: ${colors.primary.gray};
  border: 2px solid ${isActive ? colors.blue500 : '#E0E0E0'};
  border-radius: 0;
  padding: 24px;
  width: 240px;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: ${isActive ? 'pointer' : 'default'};
  opacity: ${isActive ? 1 : 0.6};
  transition: all 0.2s ease;

  &:hover {
    transform: ${isActive ? 'translateY(-4px)' : 'none'};
    box-shadow: ${isActive ? '0 8px 25px rgba(0,0,0,0.15)' : 'none'};
    background: ${isActive ? '#1a1a1a' : 'white'};
    border-color: ${isActive ? '#1a1a1a' : isActive ? colors.blue500 : '#E0E0E0'};
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
  transition: opacity 0.2s ease;

  .position-card:hover & {
    opacity: 0;
  }
`;

const contentStyles = css`
  z-index: 2;
  position: relative;
`;

const titleStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #333;
`;

const subtitleStyles = css`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const decorativeShapeStyles = (color: string) => css`
  position: absolute;
  top: 50%;
  right: -20px;
  width: 120px;
  height: 120px;
  background: ${color};
  opacity: 0.1;
  border-radius: 50%;
  transform: translateY(-50%);
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
  transition: opacity 0.2s ease;

  .position-card:hover & {
    opacity: 1;
  }
`;

const hoverTextStyles = css`
  color: white;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
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
