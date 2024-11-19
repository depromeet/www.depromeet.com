import { css } from '@emotion/react';

import { ACTIVITIES, REGULARS_SESSIONS } from '~/constant/offline';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { ActivitiesSwiper } from '../components/ActivitiesSwiper';

export const AboutActivitiesSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <div css={containerCss}>
      <div css={wrapperCss}>
        <h1 css={introCss.headline}>정규 세션</h1>
        <p css={introCss.description}>
          정규 오프라인 세션을 통해
          {isMobileSize && <br />}
          성공적인 프로젝트 런칭에 더 가까워 집니다
        </p>
        <div css={activitiesCss}>
          <ActivitiesSwiper
            activities={REGULARS_SESSIONS}
            backgroundImageUrl="/images/16th/about/activities_1.png"
            subject="regular_session"
          />
        </div>
      </div>

      <div css={wrapperCss}>
        <h1 css={introCss.headline}>다양한 활동</h1>
        <p css={introCss.description}>
          디프만에는 정기 세션 외에도
          {isMobileSize && <br />}
          친목 및 성장할 수 있는 다양한 활동들이 있습니다
        </p>
        <div css={activitiesCss}>
          <ActivitiesSwiper
            activities={ACTIVITIES}
            backgroundImageUrl="/images/16th/about/activities_2.png"
            subject="activities"
          />
        </div>
      </div>
    </div>
  );
};

const containerCss = css`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  padding-bottom: 40px;
`;

const wrapperCss = css`
  padding: 80px 0 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const introCss = {
  headline: css`
    ${theme.typosV2.pretendard.bold32}
    line-height: 150%;
  `,
  description: css`
    ${theme.typosV2.pretendard.medium18}
    line-height: 150%;
    margin-top: 18px;
    text-align: center;

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18}
    }
  `,
};

const activitiesCss = css`
  max-width: 100%;
  margin-top: 72px;

  ${mediaQuery('mobile')} {
    margin-top: 62px;
  }
`;
