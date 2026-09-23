import { describe, expect, it } from 'vitest';

import { RECRUIT } from '~/constant/recruit';

/**
 * 18기 공고 주소. `RECRUIT.positions[*].applyUrl`의 **초기값**이며, 19기 공고가 열리면
 * 반드시 교체해야 한다(계획 §5의 10/1 12:00 게이트).
 *
 * `https://`로 시작하는지만 보면 이 주소들이 그대로 통과해버린다. 그러면 모집이 열린
 * 10/02에 지원자가 **18기 공고로** 이동한다. 그래서 값 자체를 막아 둔다.
 */
const PREVIOUS_GENERATION_APPLY_URLS = [
  'https://01owexg4.ninehire.site/job_posting/TfqjWoxO',
  'https://01owexg4.ninehire.site/job_posting/gCbRwvgi',
  'https://01owexg4.ninehire.site/job_posting/TvN63rIi',
  'https://01owexg4.ninehire.site/job_posting/gmTwerXt',
  'https://01owexg4.ninehire.site/job_posting/f3zG7SvK',
];

/**
 * 릴리스 게이트 (docs/19th/migration-plan.md §8.2)
 *
 * 평소에는 건너뛰고 `pnpm check:19th --release`(RELEASE=1)에서만 돈다.
 * - 9/29 Track A 릴리스: **권고**(URL이 없어도 오픈 전 상태·리다이렉트는 배포 가능)
 * - 9/29 이후 `recruit.ts`를 바꾸는 모든 PR / 10-01 12:00 프리즈 직전 / 프리즈 예외 핫픽스: **필수**
 */
describe.skipIf(process.env.RELEASE !== '1')('릴리스 게이트 — 모집 링크', () => {
  it('🟢 모든 직군의 지원 URL이 https:// 로 시작한다.', () => {
    RECRUIT.positions.forEach(position => {
      expect(position.applyUrl, `${position.id} 직군의 applyUrl이 비어 있습니다`).toMatch(
        /^https:\/\//
      );
    });
  });

  it('🔴 지원 URL이 18기 공고 주소로 남아 있지 않다.', () => {
    RECRUIT.positions.forEach(position => {
      expect(
        PREVIOUS_GENERATION_APPLY_URLS,
        `${position.id} 직군이 아직 18기 공고를 가리킵니다. 19기 공고 주소로 교체하세요.`
      ).not.toContain(position.applyUrl);
    });
  });

  it('🟢 직군별 지원 URL이 서로 겹치지 않는다.', () => {
    const urls = RECRUIT.positions.map(position => position.applyUrl);
    expect(new Set(urls).size, '두 직군이 같은 공고를 가리킵니다').toBe(urls.length);
  });

  it('🟢 모집 알림 폼 URL이 비어 있지 않다.', () => {
    expect(RECRUIT.forms.notify).toMatch(/^https:\/\//);
  });
});
