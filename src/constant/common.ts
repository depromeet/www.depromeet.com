import { adjustToUTC } from '~/utils/utils';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

export const BASE_URL = 'https://www.depromeet.com';

export const NOTION_RECRUIT_PATH =
  'https://depromeet.notion.site/DEPROMEET-13th-f1e931cf073e43c4aeca44a4521b44be';

// NOTE: UTC 타임존에 맞추기 위해 9시간을 뺌
/**
 * @deprecated 19기부터는 `constant/recruit.ts`의 `RECRUIT.applyWindow`를 쓴다.
 * 리다이렉트로 도달할 수 없는 레거시 라우트(`/about`, `/apply`)와 Storybook에서만 남아 있다.
 */
export const START_DATE = adjustToUTC({ dateString: '2025-06-29T23:59:59.000Z' });
/** @deprecated {@link START_DATE} 참고. */
export const END_DATE = adjustToUTC({ dateString: '2025-07-06T23:59:59.000Z' });

// export const START_DATE = '2024-04-19T06:00:00.000Z'; // test
// export const END_DATE = '2025-03-04T20:00:00.000Z'; // test

export const DEADLINE_DATE = '2024-05-14T14:59:59.000Z'; // NOTE: 마감일(?) 05.15

/**
 * 18기 모집 마감 시각 2026-02-19 00:00 KST (자정 이후 모집 마감)
 *
 * @deprecated 19기부터는 `constant/recruit.ts`의 `RECRUIT.applyWindow.end`를 쓴다.
 * {@link START_DATE} 참고.
 */
export const RECRUIT_CLOSE_DATE = new Date('2026-02-19T00:00:00+09:00');
