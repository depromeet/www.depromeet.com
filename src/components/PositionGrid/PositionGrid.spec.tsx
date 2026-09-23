import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { PositionCard } from '~/components/PositionGrid/PositionCard';
import { PositionGrid } from '~/components/PositionGrid/PositionGrid';
import { RECRUIT } from '~/constant/recruit';
import { getPositionCta, getRecruitCta, RecruitPhase } from '~/utils/recruit';

/** `useRecruitPhase`는 실제 시각을 보므로, 단계별 렌더를 보려면 모킹해야 한다. */
const mocked = vi.hoisted(() => ({ phase: null as RecruitPhase | null }));

vi.mock('~/hooks/useRecruitPhase', () => ({
  useRecruitPhase: () => mocked.phase,
}));

const cardsInDom = () => Array.from(document.querySelectorAll('.position-card'));

afterEach(() => {
  mocked.phase = null;
});

/** T1-d (docs/19th/migration-plan.md §8.1) */
describe('PositionGrid — 모집 중', () => {
  beforeEach(() => {
    mocked.phase = 'OPEN';
    render(<PositionGrid />);
  });

  it('🟢 설정에 있는 직군 수만큼 카드를 그린다.', () => {
    expect(cardsInDom()).toHaveLength(RECRUIT.positions.length);
  });

  it('🟢 카드 순서가 시안 순서(Design·Android·iOS·Web·Server)와 같다.', () => {
    expect(cardsInDom().map(card => card.querySelector('h3')?.textContent)).toEqual(
      RECRUIT.positions.map(position => position.title)
    );
  });

  it('🟢 각 카드의 링크가 **그 카드 직군의** 공고로 간다. (인덱스가 아니라 id 매칭)', () => {
    cardsInDom().forEach(card => {
      const title = card.querySelector('h3')?.textContent;
      const position = RECRUIT.positions.find(item => item.title === title);

      expect(position, `카드 제목 "${title}"에 해당하는 직군이 설정에 없습니다`).toBeDefined();
      expect(card.querySelector('a')).toHaveAttribute('href', position?.applyUrl);
    });
  });

  it('🟢 Web과 Server 카드가 서로의 공고로 바뀌지 않는다. (18기 배열 순서와 다른 지점)', () => {
    const hrefOf = (id: string) => {
      const position = RECRUIT.positions.find(item => item.id === id);
      const card = cardsInDom().find(
        element => element.querySelector('h3')?.textContent === position?.title
      );
      return card?.querySelector('a')?.getAttribute('href');
    };

    expect(hrefOf('web')).toBe('https://01owexg4.ninehire.site/job_posting/8vupsulF');
    expect(hrefOf('server')).toBe('https://01owexg4.ninehire.site/job_posting/vmGg8dwE');
  });

  it('🟢 공고 링크는 새 탭에서 열리고 opener를 넘기지 않는다.', () => {
    screen.getAllByRole('link').forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  /**
   * GNB의 OPEN CTA(`/recruit#positions`)와 이 영역의 `id`는 서로 다른 파일에 있다.
   * 한쪽만 바뀌면 CTA가 죽은 앵커가 되어 사용자가 카드를 못 본다.
   */
  it('🟢 GNB가 가리키는 앵커가 실제로 이 영역에 있다.', () => {
    const cta = getRecruitCta('OPEN');
    const anchorId = cta.kind === 'link' ? cta.href.split('#')[1] : undefined;

    expect(anchorId, 'OPEN CTA는 #프래그먼트를 가져야 한다').toBeTruthy();
    expect(
      document.getElementById(anchorId as string),
      `CTA가 #${anchorId}를 가리키는데 그 id를 가진 요소가 없습니다`
    ).not.toBeNull();
  });
});

describe('PositionGrid — 모집 전/후에도 버튼이 사라지지 않는다', () => {
  it('🟢 모집 전에는 비활성 "모집예정" 버튼이 직군 수만큼 남는다.', () => {
    mocked.phase = 'BEFORE';
    render(<PositionGrid />);

    const buttons = screen.getAllByRole('button', { name: '모집예정' });

    expect(buttons).toHaveLength(RECRUIT.positions.length);
    buttons.forEach(button => expect(button).toBeDisabled());
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('🟢 마감 후에는 비활성 "모집마감" 버튼이 직군 수만큼 남는다.', () => {
    mocked.phase = 'CLOSED';
    render(<PositionGrid />);

    const buttons = screen.getAllByRole('button', { name: '모집마감' });

    expect(buttons).toHaveLength(RECRUIT.positions.length);
    buttons.forEach(button => expect(button).toBeDisabled());
  });

  it('🟢 마운트 전(상태 미확정)에도 버튼 자리는 유지된다.', () => {
    mocked.phase = null;
    render(<PositionGrid />);

    expect(document.querySelectorAll('.position-card button')).toHaveLength(
      RECRUIT.positions.length
    );
    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});

describe('PositionCard — 공고 URL이 비어 있을 때', () => {
  const position = { ...RECRUIT.positions[0], applyUrl: '' };

  it('🟢 폴백도 없으면 버튼이 사라지지 않고 비활성 "준비 중"으로 남는다.', () => {
    const cta = getPositionCta('OPEN', position, {
      ...RECRUIT,
      forms: { ...RECRUIT.forms, applyFallback: '' },
    });

    render(<PositionCard position={position} cta={cta} />);

    expect(screen.getByRole('button', { name: '준비 중' })).toBeDisabled();
  });

  it('🟢 폴백이 있으면 폴백 링크로 간다.', () => {
    const cta = getPositionCta('OPEN', position, {
      ...RECRUIT,
      forms: { ...RECRUIT.forms, applyFallback: 'https://fallback.test' },
    });

    render(<PositionCard position={position} cta={cta} />);

    expect(screen.getByRole('link', { name: '지원하기' })).toHaveAttribute(
      'href',
      'https://fallback.test'
    );
  });
});
