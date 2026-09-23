import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { GNB } from '~/components/GNB/GNB';
import { RECRUIT } from '~/constant/recruit';
import { RecruitPhase } from '~/utils/recruit';

import { Provider } from '../../../tests/setup';

const mocked = vi.hoisted(() => ({ phase: null as RecruitPhase | null }));

vi.mock('~/hooks/useRecruitPhase', () => ({
  useRecruitPhase: () => mocked.phase,
}));

vi.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/', push: vi.fn(), prefetch: vi.fn() }),
}));

// next/link는 라우터 컨텍스트를 요구한다. href만 확인하면 되므로 <a>로 바꾼다.
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const renderGNB = (phase: RecruitPhase | null) => {
  mocked.phase = phase;
  return render(<GNB />, { wrapper: Provider });
};

/** 로고("DPM")와 메뉴 4개를 뺀 나머지 링크 = 모집 CTA */
const ctaLink = () =>
  screen.getAllByRole('link').find(link => /모집알림받기|지원하기/.test(link.textContent ?? ''));

afterEach(() => {
  mocked.phase = null;
});

describe('GNB 모집 CTA', () => {
  it('🟢 모집 전에는 알림 폼으로 가는 새 탭 링크다.', () => {
    renderGNB('BEFORE');

    const cta = ctaLink();

    expect(cta).toHaveTextContent('19기 모집알림받기');
    expect(cta).toHaveAttribute('href', RECRUIT.forms.notify);
    expect(cta).toHaveAttribute('target', '_blank');
    expect(cta).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('🟢 모집 중에는 포지션 카드 영역으로 가는 내부 링크다. (새 탭이 아니어야 한다)', () => {
    renderGNB('OPEN');

    const cta = ctaLink();

    expect(cta).toHaveTextContent('19기 지원하기');
    expect(cta).toHaveAttribute('href', '/recruit#positions');
    expect(cta).not.toHaveAttribute('target');
  });

  it('🟢 마감 후에는 다음 기수 알림 폼으로 간다.', () => {
    renderGNB('CLOSED');

    const cta = ctaLink();

    expect(cta).toHaveTextContent('20기 모집알림받기');
    expect(cta).toHaveAttribute('href', RECRUIT.forms.nextNotify);
    expect(cta).toHaveAttribute('target', '_blank');
  });

  it('🟢 마운트 전에는 링크를 내보내지 않고 자리만 잡는다. (hydration 불일치 방지)', () => {
    renderGNB(null);

    expect(ctaLink()).toBeUndefined();
    // 가장 긴 라벨을 숨겨 렌더해 폭을 예약한다
    expect(screen.getByText('19기 모집알림받기')).toHaveAttribute('aria-hidden', 'true');
  });

  it('🟢 외부 링크는 절대 URL이라 내부 경로로 잘못 붙지 않는다.', () => {
    renderGNB('BEFORE');

    expect(ctaLink()?.getAttribute('href')).toMatch(/^https:\/\//);
  });
});
