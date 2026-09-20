import { RECRUIT, RecruitConfig } from '~/constant/recruit';

/**
 * 모집 상태 단일 소스. GNB·히어로·포지션 카드가 **모두 여기서** 라벨과 링크를 받는다.
 * (docs/19th/migration-plan.md §7.2)
 *
 * 이 모듈은 `utils/utils.ts`·`constant/common.ts`를 import하지 않는다.
 */

export type RecruitPhase =
  /** 모집 시작 전 */
  | 'BEFORE'
  /** 서류 접수 중 */
  | 'OPEN'
  /** 서류 접수 마감 */
  | 'CLOSED';

export type RecruitCta =
  | { kind: 'link'; label: string; href: string; external: boolean }
  | { kind: 'disabled'; label: string };

const at = (value: string) => new Date(value).getTime();

/**
 * `now < start` → BEFORE · `start <= now < end` → OPEN · `now >= end` → CLOSED.
 * `applyWindow.end`는 exclusive다.
 */
export function getRecruitPhase(now: Date, cfg: RecruitConfig = RECRUIT): RecruitPhase {
  const current = now.getTime();

  if (current < at(cfg.applyWindow.start)) return 'BEFORE';
  if (current < at(cfg.applyWindow.end)) return 'OPEN';

  return 'CLOSED';
}

/**
 * GNB·모바일 메뉴·히어로가 공유하는 대표 CTA.
 *
 * - BEFORE: `19기 모집알림받기` → 알림 폼(새 탭)
 * - OPEN: `19기 지원하기` → `/recruit#positions`(내부 이동)
 * - CLOSED: 다음 기수 알림 폼이 있으면 `20기 모집알림받기`, 없으면 비활성 `모집 마감`
 */
export function getRecruitCta(phase: RecruitPhase, cfg: RecruitConfig = RECRUIT): RecruitCta {
  switch (phase) {
    case 'BEFORE':
      return {
        kind: 'link',
        label: `${cfg.generation}기 모집알림받기`,
        href: cfg.forms.notify,
        external: true,
      };
    case 'OPEN':
      return {
        kind: 'link',
        label: `${cfg.generation}기 지원하기`,
        href: '/recruit#positions',
        external: false,
      };
    case 'CLOSED':
      return cfg.forms.nextNotify
        ? {
            kind: 'link',
            label: `${cfg.generation + 1}기 모집알림받기`,
            href: cfg.forms.nextNotify,
            external: true,
          }
        : { kind: 'disabled', label: '모집 마감' };
  }
}

/**
 * 포지션 카드 버튼. 운영진 확정: 오픈 전 `모집예정`, 마감 후 `모집마감` 모두 **비활성**.
 * 공고 URL이 비어 있어도 버튼이 사라지지 않게 폴백을 둔다.
 */
export function getPositionCta(
  phase: RecruitPhase,
  position: RecruitConfig['positions'][number],
  cfg: RecruitConfig = RECRUIT
): RecruitCta {
  if (phase === 'BEFORE') return { kind: 'disabled', label: '모집예정' };
  if (phase === 'CLOSED') return { kind: 'disabled', label: '모집마감' };

  const href = position.applyUrl || cfg.forms.applyFallback;

  return href
    ? { kind: 'link', label: '지원하기', href, external: true }
    : { kind: 'disabled', label: '준비 중' };
}
