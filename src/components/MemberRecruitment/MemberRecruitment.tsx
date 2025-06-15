import { css, Theme } from '@emotion/react';

import { sectionGridBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';

interface RecruitmentStep {
  title: string;
  date: string;
}

const recruitmentSteps: RecruitmentStep[] = [
  { title: '서류 접수 시작', date: '06.30' },
  { title: '서류 마감', date: '06.30' },
  { title: '서류 발표', date: '06.30' },
  { title: '온라인 인터뷰', date: '06.30' },
  { title: '최종 합격', date: '06.30' },
];

export const MemberRecruitment = () => {
  return (
    <div css={containerCss}>
      <div css={headerCss}>
        <h2 css={titleCss}>멤버 모집</h2>
      </div>

      {/* 모집 단계 */}
      <div css={stepsContainerCss}>
        {recruitmentSteps.map((step, index) => (
          <div key={index} css={stepBoxCss}>
            <h3 css={stepTitleCss}>{step.title}</h3>
            <p css={stepDateCss}>{step.date}</p>
          </div>
        ))}
      </div>

      {/* 지원 방법 */}
      <div css={applicationSectionCss}>
        <h3 css={applicationTitleCss}>지원 방법</h3>

        <div css={applicationStepCss}>
          <h4 css={stepNumberCss}>1차 서류</h4>
          <p css={stepDescriptionCss}>자기소개서 작성 및 이력서/포트폴리오 제출</p>
        </div>

        <div css={applicationStepCss}>
          <h4 css={stepNumberCss}>2차 인터뷰</h4>
          <p css={stepDescriptionCss}>직무 역량 및 컬처핏 인터뷰</p>
        </div>
      </div>
    </div>
  );
};

const containerCss = (_theme: Theme) => css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background-color: ${colors.primary.gray};
  ${sectionGridBg};

  ${mediaQuery('mobile')} {
    padding: 60px 16px;
  }
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 60px;

  ${mediaQuery('mobile')} {
    margin-bottom: 40px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV2.bebas.regular24};
  color: ${theme.colors.grey['900']};
  font-size: 36px;
  font-weight: 600;

  ${mediaQuery('mobile')} {
    font-size: 28px;
  }
`;

const stepsContainerCss = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 16px;
`;

const stepBoxCss = css`
  background-color: ${colors.primary.gray};
  border: 2px solid ${colors.primary.blue};
  padding: 24px 16px;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  ${mediaQuery('mobile')} {
    padding: 20px 12px;
    min-height: 100px;
  }
`;

const stepTitleCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['900']};
  font-size: 16px;
  font-weight: 600;
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;

const stepDateCss = css`
  color: ${colors.primary.blue};
  font-size: 18px;
  font-weight: 700;
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const applicationSectionCss = css`
  background-color: ${colors.primary.gray};
  border: 2px solid ${colors.primary.blue};
  padding: 40px;
  text-align: center;

  ${mediaQuery('mobile')} {
    padding: 30px 20px;
  }
`;

const applicationTitleCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['900']};
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 40px 0;

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const applicationStepCss = css`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQuery('mobile')} {
    margin-bottom: 24px;
  }
`;

const stepNumberCss = (theme: Theme) => css`
  ${theme.typosV2.pretendard.regular14};
  color: ${theme.colors.grey['900']};
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const stepDescriptionCss = css`
  color: ${colors.primary.blue};
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;
