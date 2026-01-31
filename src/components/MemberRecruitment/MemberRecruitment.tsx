import { css, Theme } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';

interface RecruitmentStep {
  title: string;
  date: string;
  subtext?: string;
  showArrow?: boolean;
}

const recruitmentSteps: RecruitmentStep[] = [
  {
    title: '서류 접수',
    date: '02.12 (목) -\n02.18 (수)',
    subtext: '02.18 수요일\n23:59:59까지 제출',
    showArrow: true,
  },
  {
    title: '서류 발표',
    date: '02.23 (월)',
    showArrow: true,
  },
  {
    title: '온라인 인터뷰',
    date: '02.28 (토) -\n03.02 (월)',
    showArrow: true,
  },
  {
    title: '최종 발표',
    date: '03.05 (목)',
  },
];

export const MemberRecruitment = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { isTargetSize: _isTabletSize } = useCheckWindowSize('tablet');

  return (
    <div css={containerCss}>
      <div css={contentStyles}>
        <div css={headerCss}>
          <h2 css={titleCss}>
            <span className="desktop-text">18기 모집 일정</span>
            <span className="mobile-text">모집 일정</span>
          </h2>
        </div>

        <div css={infoContainerCss}>
          {/* 모집 타임라인 */}
          <div css={timelineContainerCss}>
            {recruitmentSteps.map((step, index) => (
              <div key={index} css={timelineItemCss}>
                <h3 css={stepTitleCss}>{step.title}</h3>
                <p css={stepDateCss}>{step.date}</p>
                {step.subtext && <p css={stepSubtextCss}>{step.subtext}</p>}
              </div>
            ))}

            {/* 화살표들 - absolute positioning */}
            {!isMobileSize && (
              <>
                {recruitmentSteps.slice(0, -1).map((step, index) =>
                  step.showArrow ? (
                    <div key={`arrow-${index}`} css={arrowContainerCss(index)}>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : null
                )}
              </>
            )}
          </div>

          {/* 모바일 화살표 */}
          {isMobileSize && (
            <>
              <div css={mobileArrowContainerCss}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9l-6 6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          )}

          {/* 전형 절차 */}
          <div css={applicationSectionCss}>
            <h3 css={applicationTitleCss}>전형 절차</h3>

            <div css={applicationContainer}>
              <div css={applicationStepCss}>
                <h4 css={stepNumberCss}>1차. 서류</h4>
                <p css={stepDescriptionCss}>자기소개서 작성 및 이력서/포트폴리오 제출</p>
              </div>

              <div css={applicationStepCss}>
                <h4 css={stepNumberCss}>2차. 인터뷰</h4>
                <p css={stepDescriptionCss}>직무 역량 및 컬처핏 인터뷰</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const containerCss = (_theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 160px 0;
  background-color: #f9fbff;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 80px 0;
  }

  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 80px;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

const titleCss = (theme: Theme) => css`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: ${theme.colors.grey18[900]};
  margin: 0;

  .mobile-text {
    display: none;
  }
  .desktop-text {
    display: inline;
  }

  @media (max-width: 767px) {
    font-size: 26px;
    line-height: 1.25;
    letter-spacing: -0.05em;

    .desktop-text {
      display: none;
    }
    .mobile-text {
      display: inline;
    }
  }
`;

const infoContainerCss = css`
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 0 40px;
    gap: 8px;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
    gap: 8px;
  }
`;

const timelineContainerCss = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1279px) {
    gap: 8px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

const timelineItemCss = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey18[200]};
  border-radius: 12px;
  padding: 32px;
  text-align: left;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.06);
  flex: 1;

  @media (min-width: 1280px) {
    &:first-of-type {
      flex: 0 0 290px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 240px;
    padding: 20px 16px;
    gap: 8px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    height: 200px;
    padding: 20px 16px;
    gap: 8px;
    width: 100%;
    flex: none;
  }
`;

const stepTitleCss = (theme: Theme) => css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.64px;
  color: ${theme.colors.grey18[900]};
  margin: 0;

  /* 768px ~ 1279px */
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 22px;
    letter-spacing: -0.22px;
  }

  /* 360px ~ 767px */
  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`;

const stepDateCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1.3px;
  color: ${colors.primary.blue};
  margin: 0;
  white-space: pre-line;

  /* 768px ~ 1279px */
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
    letter-spacing: -0.2px;
    line-height: 1.4;
  }

  /* 360px ~ 767px */
  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0;
  }
`;

const stepSubtextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${theme.colors.grey18[900]};
  margin: 0;
  white-space: pre-line;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

const arrowContainerCss = (index: number) => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey18[200]};
  border-radius: 50%;
  color: ${colors.primary.blue};
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.06);
  width: 56px;
  height: 56px;
  z-index: 10;

  @media (min-width: 1280px) {
    ${index === 0 && `left: calc(290px + 12px / 2 - 56px / 2);`}
    ${index === 1 && `left: calc(290px + 12px + 33.33% + 12px / 2 - 56px / 2);`}
    ${index === 2 && `left: calc(290px + 12px + 66.66% + 12px / 2 - 56px / 2);`}
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 48px;
    height: 48px;
    ${index === 0 && `left: calc(25% - 48px / 2 - 8px / 2);`}
    ${index === 1 && `left: calc(50% - 48px / 2);`}
    ${index === 2 && `left: calc(75% + 48px / 2 + 8px / 2);`}
  }
`;

const mobileArrowContainerCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 14px 14px 16px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey18[200]};
  border-radius: 34px;
  color: ${colors.primary.blue};
  margin: 0 auto;
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.06);
`;

const applicationSectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey18[200]};
  border-radius: 12px;
  padding: 32px;
  text-align: left;
  gap: 48px;
  width: 100%;
  height: 340px;
  box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.06);

  @media (min-width: 768px) and (max-width: 1279px) {
    height: 340px;
    padding: 28px;
    gap: 48px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    height: 240px;
    padding: 24px;
    gap: 0;
    justify-content: space-between;
  }
`;

const applicationTitleCss = (theme: Theme) => css`
  font-family: 'Pretendard', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.grey18[900]};
  line-height: 1.4;
  letter-spacing: -0.64px;
  margin: 0;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`;

const applicationContainer = css`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

const applicationStepCss = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 360px) and (max-width: 767px) {
    gap: 4px;
  }
`;

const stepNumberCss = (theme: Theme) => css`
  font-family: 'Pretendard', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1.3px;
  color: ${theme.colors.grey18[900]};
  margin: 0;

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0;
  }
`;

const stepDescriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.primary.blue};
  margin: 0;

  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 20px;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
