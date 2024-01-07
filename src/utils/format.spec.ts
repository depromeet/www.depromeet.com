import { describe, expect, it } from 'vitest';

import { formatSingleDigit } from '~/utils/format';

describe('format 관련 유틸 함수', () => {
  describe('formatSingleDigit 함수 테스트', () => {
    it('🟢 한 자리 숫자에 대해 선행 0이 있는 문자열을 반환한다. ', () => {
      expect(formatSingleDigit(0)).toBe('00');
      expect(formatSingleDigit(5)).toBe('05');
      expect(formatSingleDigit(9)).toBe('09');
    });
    it('🟢 두 자리 숫자에 대해 숫자를 문자열로 반환한다.', () => {
      expect(formatSingleDigit(10)).toBe('10');
      expect(formatSingleDigit(25)).toBe('25');
      expect(formatSingleDigit(99)).toBe('99');
    });
    // TODO: @kimyouknow 아래 테스트 케이스에 맞게 formatSingleDigit 수정하기
    it.todo('🟢 음수는 그대로 반환한다.', () => {
      expect(formatSingleDigit(-5)).toBe('-5');
      expect(formatSingleDigit(-9)).toBe('-9');
    });
    // TODO: @kimyouknow 아래 테스트 케이스에 맞게 formatSingleDigit 수정하기
    it.todo('🟢 정수가 아닌 숫자는 그대로 반환한다.', () => {
      expect(formatSingleDigit(5.5)).toBe('5.5');
      expect(formatSingleDigit(9.9)).toBe('9.9');
    });
  });
});
