import { describe, expect, it } from 'vitest';

import { displayEnd, formatKoreanDate } from '~/utils/date';

/**
 * T2 (docs/19th/migration-plan.md §8.1)
 * CI에서 `TZ=America/Los_Angeles`로 돌려도 같은 결과가 나와야 한다.
 */
describe('utils/date — KST 날짜 포맷터', () => {
  const APPLY_START = '2026-10-02T00:00:00+09:00';
  const APPLY_END_EXCLUSIVE = '2026-10-09T00:00:00+09:00';

  describe('formatKoreanDate', () => {
    it('🟢 step 형식은 `10 . 02 (금)`이다.', () => {
      expect(formatKoreanDate(APPLY_START, 'step')).toBe('10 . 02 (금)');
    });

    it('🟢 period 형식은 `2026.10.02(금)`이다.', () => {
      expect(formatKoreanDate(APPLY_START, 'period')).toBe('2026.10.02(금)');
    });

    it('🟢 dot 형식은 `10.02`이다.', () => {
      expect(formatKoreanDate(APPLY_START, 'dot')).toBe('10.02');
    });

    it("🟢 'YYYY-MM-DD' 입력을 KST 자정으로 해석한다.", () => {
      expect(formatKoreanDate('2027-01-02', 'dot')).toBe('01.02');
      expect(formatKoreanDate('2026-10-31', 'step')).toBe('10 . 31 (토)');
    });

    it("🟢 0을 채우지 않은 'YYYY-M-D'도 KST 자정으로 해석한다.", () => {
      expect(formatKoreanDate('2026-10-2', 'step')).toBe(formatKoreanDate('2026-10-02', 'step'));
      expect(formatKoreanDate('2027-1-2', 'dot')).toBe('01.02');
    });

    it('🔴 유효하지 않은 입력은 에러를 던진다.', () => {
      expect(() => formatKoreanDate('내일', 'dot')).toThrow();
    });
  });

  describe('displayEnd — exclusive 종료 시각을 표시용으로 1ms 당긴다', () => {
    it('🟢 모집 마감(10/09 00:00 exclusive)은 10.08로 표시된다.', () => {
      expect(formatKoreanDate(displayEnd(APPLY_END_EXCLUSIVE), 'dot')).toBe('10.08');
    });

    it('🟢 모집 마감 요일은 목요일이다.', () => {
      expect(formatKoreanDate(displayEnd(APPLY_END_EXCLUSIVE), 'weekdayLong')).toBe('목요일');
    });

    it('🟢 인터뷰 종료(10/19 exclusive)는 `10 . 18 (일)`로 표시된다.', () => {
      expect(formatKoreanDate(displayEnd('2026-10-19'), 'step')).toBe('10 . 18 (일)');
    });

    it('🟢 반환값은 +09:00 ISO 문자열이다.', () => {
      expect(displayEnd(APPLY_END_EXCLUSIVE)).toBe('2026-10-08T23:59:59.999+09:00');
    });
  });
});
