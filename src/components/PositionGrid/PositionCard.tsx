import { css } from '@emotion/react';

import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { colors } from '../../styles/colors';

// 한국시간 기준으로 2025년 6월 30일 00시 이후인지 확인하는 함수
const isAfterRecruitmentDate = (): boolean => {
  const now = new Date();
  const koreaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const recruitmentDate = new Date('2025-06-30T00:00:00');

  return koreaTime >= recruitmentDate;
};

interface PositionCardProps {
  id: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  backgroundImage: string;
  hoverDescription: string;
  applyUrl: string;
}

export const PositionCard = ({
  title,
  subtitle,
  isActive,
  backgroundImage,
  hoverDescription,
  applyUrl,
}: PositionCardProps) => {
  const canApply = isAfterRecruitmentDate();

  const handleCardClick = () => {
    if (isActive && applyUrl && canApply) {
      window.open(applyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      css={cardStyles(isActive, backgroundImage)}
      className="position-card"
      onClick={handleCardClick}
    >
      <div css={defaultContentStyles}>
        <div css={contentStyles}>
          <h3 css={titleStyles}>{title}</h3>
          <p css={subtitleStyles}>{subtitle}</p>
        </div>

        {canApply ? (
          <button css={applyButtonStyles}>
            지원하기
            <span css={arrowStyles}>→</span>
          </button>
        ) : (
          <div css={beforeApplyButtonStyles}>지원은 30일부터 가능해요</div>
        )}
      </div>

      <div css={hoverContentStyles}>
        <div css={hoverTextStyles}>{hoverDescription}</div>

        {canApply ? (
          <button css={hoverApplyButtonStyles}>
            지원하기
            <span css={hoverArrowStyles}>→</span>
          </button>
        ) : (
          <div css={beforeApplyButtonStyles}>지원은 30일부터 가능해요</div>
        )}
      </div>
    </div>
  );
};

const cardStyles = (isActive: boolean, backgroundImage: string) => css`
  position: relative;
  background: ${colors.primary.gray};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${isActive ? colors.blue500 : '#E0E0E0'};
  border-radius: 0;
  padding: 20px 22px;
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

  ${mediaQuery('mobile')} {
    width: 312px;
    height: 300px;
  }

  ${mediaQuery('tablet')} {
    width: 312px;
    height: 300px;
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
  letter-spacing: -5%;

  margin: 0 0 8px 0;
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('tablet')} {
    ${theme.typosV3.MartianMono.head3};
    font-size: 26px;
    line-height: 125%;
    letter-spacing: -1px;
    white-space: pre-wrap;
  }
`;

const subtitleStyles = css`
  ${theme.typosV3.pretendard.sub5Medium};
  color: ${colors.gray900};
`;

const applyButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  ${theme.typosV3.pretendard.sub1Medium};

  color: ${colors.gray900};
  cursor: pointer;
  z-index: 2;
  position: relative;

  &:hover {
    color: #000;
  }
`;

const beforeApplyButtonStyles = css`
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
  color: #9591a1;

  &:hover {
    color: #000;
  }
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

// 이후 지원 버튼 추가 시 사용
const hoverApplyButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  ${theme.typosV3.pretendard.sub1Medium};

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
  color: ${colors.gray900};
  border-radius: 50%;
  font-size: 16px;
`;

const arrowStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${colors.gray900};
  color: white;
  border-radius: 50%;
  font-size: 16px;
`;
