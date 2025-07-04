import { css, Theme } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { sectionBg } from '~/styles/background';
import { colors } from '~/styles/colors';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

interface RecruitmentStep {
  title: string;
  date: string;
}

const recruitmentSteps: RecruitmentStep[] = [
  { title: '서류 접수 시작', date: '06.30' },
  { title: '서류 마감', date: '07.06' },
  { title: '서류 발표', date: '07.13' },
  { title: '온라인 인터뷰', date: '07.19-20' },
  { title: '최종 합격', date: '07.26' },
];

export const MemberRecruitment = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  const { isTargetSize: isTabletSize } = useCheckWindowSize('tablet');

  return (
    <>
      {!isTabletSize && !isMobileSize && (
        <div css={containerCss}>
          <div css={contentStyles}>
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

              <div css={rulerCss} />
            </div>
          </div>
        </div>
      )}
      {(isTabletSize || isMobileSize) && (
        <div css={containerCss}>
          <div css={contentStyles}>
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

              <div css={rulerCss} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const containerCss = (_theme: Theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 120px 20px 80px 20px;
  background-color: ${colors.primary.gray};
  ${sectionBg};
  overflow: hidden;

  ${mediaQuery('tablet')} {
    padding: 30px 20px 140px 20px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -50px;
    width: 304.5px;
    height: 304.5px;
    background-image: url('/images/17th/shapes/blue_arrow.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;
    z-index: 2;
    opacity: 1;
    transform: rotate(350deg);

    ${mediaQuery('tablet')} {
      bottom: -40px;
      right: -40px;
      width: 260px;
      height: 260px;
      transform: rotate(0deg);
    }
  }

  ${mediaQuery('mobile')} {
    padding: 60px 16px;

    &::after {
      display: none;
    }
  }
`;

const contentStyles = css`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
`;

const headerCss = css`
  text-align: center;
  margin-bottom: 60px;

  ${mediaQuery('mobile')} {
    margin-bottom: 40px;
  }
`;

const titleCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.head1};
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    font-size: 28px;
  }
`;

const stepsContainerCss = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  ${mediaQuery('mobile')} {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;

    & > div:nth-of-type(1) {
      grid-column: 1 / 3;
    }

    & > div:nth-of-type(2) {
      grid-column: 3 / 5;
    }

    & > div:nth-of-type(3) {
      grid-column: 5 / 7;
    }

    & > div:nth-of-type(4) {
      grid-column: 1 / 4;
    }

    & > div:nth-of-type(5) {
      grid-column: 4 / 7;
    }
  }
`;

const stepBoxCss = css`
  background-color: ${colors.primary.gray};
  border: 1px solid ${colors.primary.blue};
  padding: 28px 26px;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  ${mediaQuery('tablet')} {
    padding: 28px 0;
    min-height: 100px;
  }
  ${mediaQuery('mobile')} {
    padding: 20px 12px;
    min-height: 100px;
  }
`;

const stepTitleCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub1Semibold};
  color: ${theme.colors.primary.darknavy};

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;

const stepDateCss = css`
  ${theme.typosV3.pretendard.sub2Semibold};
  color: ${colors.primary.blue};
  font-weight: 400;

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const applicationSectionCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.gray};
  border: 1px solid ${colors.primary.blue};
  padding: 40px;
  text-align: center;
  height: 265px;

  ${mediaQuery('mobile')} {
    padding: 30px 20px;
  }
`;

const applicationTitleCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.head6};
  color: ${theme.colors.primary.darknavy};
  margin: 0 0 20px 0;

  ${mediaQuery('mobile')} {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const applicationStepCss = css`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const rulerCss = css`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-image: url('/images/project/17기/footer-ruler.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: repeat-x;
`;

const stepNumberCss = (theme: Theme) => css`
  ${theme.typosV3.pretendard.sub2Semibold};
  color: ${theme.colors.primary.darknavy};
  font-weight: 400;
  margin: 0 0 8px 0;

  ${mediaQuery('mobile')} {
    font-size: 16px;
  }
`;

const stepDescriptionCss = css`
  ${theme.typosV3.pretendard.body1Medium};
  color: ${colors.primary.blue};
  font-weight: 400;
  margin: 0;

  ${mediaQuery('mobile')} {
    font-size: 14px;
  }
`;
