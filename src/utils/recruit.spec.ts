import { describe, expect, it } from 'vitest';

import { RECRUIT, RecruitConfig } from '~/constant/recruit';
import { getPositionCta, getRecruitCta, getRecruitPhase } from '~/utils/recruit';

const withConfig = (overrides: Partial<RecruitConfig>): RecruitConfig => ({
  ...RECRUIT,
  ...overrides,
});

const designPosition = RECRUIT.positions[0];

/** T1-a (docs/19th/migration-plan.md §8.1) */
describe('getRecruitPhase — 모집 단계 경계', () => {
  it('🟢 모집 시작 1초 전은 BEFORE다.', () => {
    expect(getRecruitPhase(new Date('2026-10-01T23:59:59+09:00'))).toBe('BEFORE');
  });

  it('🟢 모집 시작 시각 정각은 OPEN이다.', () => {
    expect(getRecruitPhase(new Date('2026-10-02T00:00:00+09:00'))).toBe('OPEN');
  });

  it('🟢 마감일 23:59:59는 아직 OPEN이다.', () => {
    expect(getRecruitPhase(new Date('2026-10-08T23:59:59+09:00'))).toBe('OPEN');
  });

  it('🟢 마감 시각(exclusive end)부터 CLOSED다.', () => {
    expect(getRecruitPhase(new Date('2026-10-09T00:00:00+09:00'))).toBe('CLOSED');
  });
});

/** T1-b */
describe('getRecruitCta — 대표 CTA', () => {
  it('🟢 BEFORE: 알림 폼으로 가는 외부 링크다.', () => {
    expect(getRecruitCta('BEFORE')).toEqual({
      kind: 'link',
      label: '19기 모집알림받기',
      href: RECRUIT.forms.notify,
      external: true,
    });
  });

  it('🟢 OPEN: 포지션 카드 영역으로 가는 내부 링크다.', () => {
    expect(getRecruitCta('OPEN')).toEqual({
      kind: 'link',
      label: '19기 지원하기',
      href: '/recruit#positions',
      external: false,
    });
  });

  it('🟢 CLOSED: 다음 기수 알림 폼이 있으면 20기 링크다.', () => {
    expect(getRecruitCta('CLOSED')).toEqual({
      kind: 'link',
      label: '20기 모집알림받기',
      href: RECRUIT.forms.nextNotify,
      external: true,
    });
  });

  it('🟢 CLOSED: 다음 기수 폼이 없으면 비활성 "모집 마감"이다.', () => {
    const cfg = withConfig({ forms: { ...RECRUIT.forms, nextNotify: '' } });

    expect(getRecruitCta('CLOSED', cfg)).toEqual({ kind: 'disabled', label: '모집 마감' });
  });

  it('🟢 라벨의 기수는 설정에서 파생된다.', () => {
    const cfg = withConfig({ generation: 20 });

    expect(getRecruitCta('BEFORE', cfg).label).toBe('20기 모집알림받기');
    expect(getRecruitCta('CLOSED', cfg).label).toBe('21기 모집알림받기');
  });
});

/** T1-b — 포지션 카드 버튼 */
describe('getPositionCta — 포지션 카드 버튼', () => {
  it('🟢 BEFORE: 비활성 "모집예정"이다.', () => {
    expect(getPositionCta('BEFORE', designPosition)).toEqual({
      kind: 'disabled',
      label: '모집예정',
    });
  });

  it('🟢 OPEN: 해당 직군 공고로 가는 외부 링크다.', () => {
    expect(getPositionCta('OPEN', designPosition)).toEqual({
      kind: 'link',
      label: '지원하기',
      href: designPosition.applyUrl,
      external: true,
    });
  });

  it('🟢 CLOSED: 비활성 "모집마감"이다.', () => {
    expect(getPositionCta('CLOSED', designPosition)).toEqual({
      kind: 'disabled',
      label: '모집마감',
    });
  });

  it('🟢 OPEN + 공고 URL이 비면 폴백 링크를 쓴다.', () => {
    const cfg = withConfig({ forms: { ...RECRUIT.forms, applyFallback: 'https://fallback.test' } });

    expect(getPositionCta('OPEN', { ...designPosition, applyUrl: '' }, cfg)).toEqual({
      kind: 'link',
      label: '지원하기',
      href: 'https://fallback.test',
      external: true,
    });
  });

  it('🟢 OPEN + URL도 폴백도 없으면 버튼이 사라지지 않고 비활성 "준비 중"이 된다.', () => {
    const cfg = withConfig({ forms: { ...RECRUIT.forms, applyFallback: '' } });

    expect(getPositionCta('OPEN', { ...designPosition, applyUrl: '' }, cfg)).toEqual({
      kind: 'disabled',
      label: '준비 중',
    });
  });
});
