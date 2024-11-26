import { css } from '@emotion/react';

import {
  LANDING_FIRST_SECTION_SCHEDULE,
  LANDING_SECOND_SECTION_SCHEDULE,
} from '~/constant/schedule';
import { useCheckWindowSize } from '~/hooks/useCheckWindowSize';
import { mediaQuery } from '~/styles/media';
import { theme } from '~/styles/theme';

import { ScheduleTable } from '../components/ScheduleTable';

/**
 * * Main 페이지 주차별 일정 section
 */
export const MainScheduleSection = () => {
  const { isTargetSize: isMobileSize } = useCheckWindowSize('mobile');
  return (
    <section css={containerCss}>
      <div css={text.wrapperCss}>
        <h1 css={text.titleCss}>16주, 성장과 성취의 여정</h1>
        <p css={text.subCss}>
          세션은 매주 토요일 진행되며, {isMobileSize && <br />}오프라인과 온라인이 번갈아 진행됩니다
        </p>
      </div>
      <div css={scheduleWrapperCss}>
        <ScheduleTable {...LANDING_FIRST_SECTION_SCHEDULE} title="1-8주차" />
        <ScheduleTable {...LANDING_SECOND_SECTION_SCHEDULE} title="9-16주차" />
      </div>
    </section>
  );
};

const containerCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 120px 62px 140px 62px;
  background: white;
  overflow: hidden;

  ${mediaQuery('mobile')} {
    padding: 80px 0 248px 0;
  }
`;

const scheduleWrapperCss = () => css`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-top: 55px;
  width: 100%;
  align-items: center;
`;

const text = {
  wrapperCss: css`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    text-align: center;
  `,
  subCss: css`
    ${theme.typosV2.pretendard.semibold20};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.semibold18};
      line-height: 150%;
    }
  `,

  titleCss: css`
    ${theme.typosV2.pretendard.bold44};

    ${mediaQuery('mobile')} {
      ${theme.typosV2.pretendard.bold28};
    }
  `,
};
