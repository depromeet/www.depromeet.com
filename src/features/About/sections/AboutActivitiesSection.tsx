import { css } from '@emotion/react';

import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

export const AboutActivitiesSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');

  return (
    <div css={containerCss}>
      <div css={wrapperCss}>
        <h1 css={introCss.headline}>오프라인 세션</h1>
        <p css={introCss.description}>
          정규 오프라인 세션을 통해
          {isMobileSize && <br />}
          성공적인 프로젝트 런칭에 더 가까워 집니다
        </p>

        {/* NOTE: OfflineSwipeList 개발 예정 */}
        {/* <ul css={activitiesContainerCss}>
          {OFFLINE_SESSIONS.map(session => (
            <OfflineThumbnail key={session.title} {...session} />
          ))}
        </ul> */}
      </div>
      <div css={wrapperCss}>
        <h1 css={introCss.headline}>오프라인 세션</h1>
        <p css={introCss.description}>
          디프만에는 정기 세션 외에도
          {isMobileSize && <br />}
          친목 및 성장할 수 있는 다양한 활동들이 있습니다
        </p>

        {/* NOTE: OfflineSwipeList 개발 예정 */}
        {/* <ul css={activitiesContainerCss}>
          {OFFLINE_SESSIONS.map(session => (
            <OfflineThumbnail key={session.title} {...session} />
          ))}
        </ul> */}
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

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28}
      line-height: 150%;
    }
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

// const activitiesContainerCss = css`
//   display: grid;
//   width: 100%;
//   max-width: 960px;
//   grid-template-columns: repeat(3, 1fr);
//   row-gap: 20px;
//   column-gap: 12px;
//   margin-top: 72px;
// `;
