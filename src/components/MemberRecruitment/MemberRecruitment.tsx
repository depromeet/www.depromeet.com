import { Fragment } from 'react';
import { css, Theme } from '@emotion/react';

import { RECRUIT } from '~/constant/recruit';
import { colors } from '~/styles/colors';
import { theme } from '~/styles/theme';
import { displayEnd, formatKoreanDate } from '~/utils/date';

interface RecruitmentStep {
  title: string;
  date: string;
  subtext?: string;
}

/** 하루면 `10 . 02 (금)`, 기간이면 `10 . 02 (금) -` 다음 줄에 `10 . 08 (목)`. */
const period = (start: string, exclusiveEnd?: string) =>
  exclusiveEnd
    ? `${formatKoreanDate(start, 'step')} -
${formatKoreanDate(displayEnd(exclusiveEnd), 'step')}`
    : formatKoreanDate(start, 'step');

/** 서류 접수는 `applyWindow`에서 파생한다(중복 저장 금지). 나머지는 `steps` 그대로. */
const recruitmentSteps: RecruitmentStep[] = [
  {
    title: '서류 접수',
    date: period(RECRUIT.applyWindow.start, RECRUIT.applyWindow.end),
    subtext: `${formatKoreanDate(displayEnd(RECRUIT.applyWindow.end), 'dot')} ${formatKoreanDate(
      displayEnd(RECRUIT.applyWindow.end),
      'weekdayLong'
    )}
23:59:59까지 제출`,
  },
  ...RECRUIT.steps.map(step => ({ title: step.title, date: period(step.start, step.end) })),
];

export const MemberRecruitment = () => {
  return (
    <div css={containerCss} data-gnb-theme="light">
      <div css={contentStyles}>
        <div css={headerCss}>
          <h2 css={titleCss}>{RECRUIT.generation}기 모집 일정</h2>
        </div>

        <div css={infoContainerCss}>
          {/* 모집 타임라인 */}
          <div css={timelineContainerCss}>
            {recruitmentSteps.map((step, index) => (
              <Fragment key={index}>
                <div css={timelineItemCss}>
                  <h3 css={stepTitleCss}>{step.title}</h3>
                  <p css={stepDateCss}>{step.date}</p>
                  {step.subtext && <p css={stepSubtextCss}>{step.subtext}</p>}
                </div>
                {index < recruitmentSteps.length - 1 && (
                  <div css={arrowCss}>
                    <svg
                      width="16"
                      height="28"
                      viewBox="0 0 16 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 26L14 14L2 2"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

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
  background-color: ${colors.v19.coolGray100};
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }

  @media (min-width: 1280px) {
    padding: 160px 40px;
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

const titleCss = css`
  ${theme.typosV4.pretendard.head6};
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    ${theme.typosV4.pretendard.head0};
  }
`;

const infoContainerCss = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const timelineContainerCss = css`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;
  row-gap: 8px;
  width: 100%;

  & > :nth-of-type(4) {
    display: none;
  }

  & > :nth-of-type(2),
  & > :nth-of-type(6) {
    position: absolute;
    left: calc(50% - 16px);
  }

  & > :nth-of-type(2) {
    top: 84px;
  }

  & > :nth-of-type(6) {
    top: 292px;
  }

  @media (min-width: 768px) {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0;

    & > :nth-of-type(4) {
      display: flex;
    }

    & > :nth-of-type(2),
    & > :nth-of-type(6) {
      position: static;
      left: auto;
    }
  }
`;

const timelineItemCss = css`
  background-color: ${colors.v19.white100};
  border: 1px solid ${colors.v19.coolGray200};
  border-radius: 12px;
  padding: 20px 16px;
  text-align: left;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  box-shadow: 0px 8px 16px 0px rgba(47, 51, 55, 0.1);
  flex: 1;

  @media (min-width: 768px) {
    height: 240px;
    padding: 24px 16px;
  }

  @media (min-width: 1280px) {
    height: 320px;
    padding: 32px;

    &:first-of-type {
      flex: 0 0 290px;
    }
  }

  @media (min-width: 1920px) {
    box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.1);
  }
`;

const stepTitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};
  margin: 0;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
    letter-spacing: 0.01em;
  }
`;

const stepDateCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.blue500};
  margin: 0;
  white-space: pre;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 26px;
    letter-spacing: -0.05em;
  }
`;

const stepSubtextCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};
  margin: 0;
  white-space: pre-line;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

const arrowCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.v19.white100};
  border: 1px solid ${colors.v19.coolGray200};
  border-radius: 50%;
  color: ${colors.v19.coolGray900};
  box-shadow: 0px 8px 16px 0px rgba(47, 51, 55, 0.1);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  z-index: 10;

  svg {
    width: 7px;
    height: 12px;
  }

  @media (min-width: 768px) {
    margin-inline: -10px;
  }

  @media (min-width: 1280px) {
    width: 52px;
    height: 52px;
    margin-inline: -20px;
  }

  @media (min-width: 1920px) {
    width: 56px;
    height: 56px;
    margin-inline: -22px;
    box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.1);

    svg {
      width: 14px;
      height: 24px;
    }
  }
`;

const applicationSectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.v19.white100};
  border: 1px solid ${colors.v19.coolGray200};
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  gap: 0;
  width: 100%;
  height: 240px;
  box-shadow: 0px 8px 16px 0px rgba(47, 51, 55, 0.1);

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 48px;
    height: 340px;
    padding: 32px;
  }

  @media (min-width: 1280px) {
    gap: 48px;
    height: 340px;
    padding: 32px;
  }

  @media (min-width: 1920px) {
    box-shadow: 0px 8px 32px 0px rgba(47, 51, 55, 0.1);
  }
`;

const applicationTitleCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.v19.coolGray900};
  line-height: 1.4;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
    letter-spacing: 0.01em;
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
  gap: 4px;

  @media (min-width: 768px) {
    gap: 8px;
  }

  @media (min-width: 1280px) {
    gap: 10px;
  }

  @media (min-width: 1920px) {
    gap: 12px;
  }
`;

const stepNumberCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: ${colors.v19.coolGray900};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
  }

  @media (min-width: 1920px) {
    font-size: 26px;
    letter-spacing: -0.05em;
  }
`;

const stepDescriptionCss = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.v19.blue500};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
  }
`;
