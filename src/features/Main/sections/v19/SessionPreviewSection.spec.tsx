import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { RECRUIT } from '~/constant/recruit';
import { SessionPreviewSection } from '~/features/Main/sections/v19/SessionPreviewSection';

import { Provider } from '../../../../../tests/setup';

const renderSection = () => render(<SessionPreviewSection />, { wrapper: Provider });

/**
 * 이 섹션은 데스크톱 레이아웃과 모바일 레이아웃을 **둘 다 DOM에 넣고 CSS로 감춘다**
 * (이 저장소의 기존 패턴). jsdom에는 레이아웃이 없어 양쪽이 모두 보이므로,
 * 첫 번째 탭 묶음으로 좁혀서 본다.
 */
const firstTablist = () => screen.getAllByRole('tablist', { name: '세션 카테고리' })[0];
const chip = (name: RegExp) => within(firstTablist()).getByRole('tab', { name });

/**
 * 보이는 세션 목록 = 데스크톱 레이아웃의 메뉴.
 *
 * 문서 전체에서 제목을 찾으면 안 된다 — 카드가 크로스페이드로 빠져나가는 0.3초 동안
 * 이전 세션의 제목이 아직 DOM에 남아 있어(framer-motion `mode="wait"`) 목록을 잘못 읽는다.
 */
const visibleTitles = () =>
  within(screen.getAllByRole('navigation')[0])
    .getAllByRole('button')
    .map(button => button.textContent?.trim() ?? '');

/**
 * 운영진·디자이너 확정 사항 — 09/22 디자인파트 회의 "가치 - 세션 매핑".
 *
 * 이 표가 이 섹션의 사양이다. 회의에서 표가 바뀌면 이 상수를 먼저 고치고,
 * 그다음 `RECRUIT.sessionPreview`의 `category`를 맞춘다.
 */
const MAPPING = {
  challenge: ['아이디어톤', 'UT', '프리 런칭 데이', '딮커톤', '런칭데이', '최종 발표'],
  fellowship: ['딮크샵', '딮케이션'],
  focus: ['현직자와의 만남', '딮크톡', '커리어 성장 세션'],
} as const;

describe('SessionPreviewSection — 칩이 가치별로 세션을 거른다', () => {
  it('🟢 설정의 가치-세션 매핑이 회의 확정안과 같다.', () => {
    const grouped: Record<string, string[]> = {};
    RECRUIT.sessionPreview.forEach(session => {
      // 분류 없는 세션은 어느 칩에서도 안 보이므로 사실상 사라진다 — 아래에서 잡는다.
      const key = session.category ?? '(없음)';
      (grouped[key] ??= []).push(session.title);
    });

    expect(grouped).toEqual({
      challenge: [...MAPPING.challenge],
      fellowship: [...MAPPING.fellowship],
      focus: [...MAPPING.focus],
    });
  });

  it('🔴 분류가 빠진 세션은 없다. (있으면 사이트에서 통째로 사라진다)', () => {
    const orphans = RECRUIT.sessionPreview.filter(session => !session.category);

    expect(orphans.map(session => session.title)).toEqual([]);
  });

  it('🟢 처음에는 Challenge 세션만 보인다.', () => {
    renderSection();

    expect(chip(/Challenge/)).toHaveAttribute('aria-selected', 'true');
    expect(visibleTitles()).toEqual([...MAPPING.challenge]);
  });

  it('🟢 Fellowship을 고르면 딮크샵·딮케이션 둘만 보인다.', async () => {
    const user = userEvent.setup();
    renderSection();

    await user.click(chip(/Fellowship/));

    expect(visibleTitles()).toEqual([...MAPPING.fellowship]);
  });

  it('🟢 Focus를 고르면 Focus 세션만 보인다.', async () => {
    const user = userEvent.setup();
    renderSection();

    await user.click(chip(/Focus/));

    expect(visibleTitles()).toEqual([...MAPPING.focus]);
  });

  it('🔴 칩을 바꾸면 스테퍼의 총 개수도 그 가치의 세션 수로 바뀐다.', async () => {
    const user = userEvent.setup();
    renderSection();

    await user.click(chip(/Fellowship/));
    expect(screen.getByText('02')).toBeInTheDocument();

    await user.click(chip(/Focus/));
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('🟢 칩을 바꾸면 카드가 새 목록의 첫 세션으로 돌아간다.', async () => {
    const user = userEvent.setup();
    renderSection();

    // Challenge 목록의 5번째(런칭데이)를 고르면 스테퍼는 05/06이다.
    await user.click(screen.getAllByText('런칭데이')[0]);
    expect(screen.getByText('05')).toBeInTheDocument();
    expect(screen.getByText('06')).toBeInTheDocument();

    await user.click(chip(/Fellowship/));

    // 2개짜리 목록의 첫 장으로 되돌아간다 — 05가 남아 있으면 빈 카드가 된다.
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.queryByText('05')).not.toBeInTheDocument();
  });
});

describe('SessionPreviewSection — 칩의 탭 의미론', () => {
  it('🟢 목록을 실제로 거르므로 탭 의미론을 쓴다.', () => {
    renderSection();

    // 고르면 연결된 패널의 내용이 바뀐다 = 탭의 약속(WCAG 4.1.2).
    expect(within(firstTablist()).getAllByRole('tab')).toHaveLength(3);
    expect(screen.getAllByRole('tabpanel').length).toBeGreaterThan(0);
  });

  it('🟢 각 탭의 aria-controls는 실제 패널을 가리킨다.', () => {
    renderSection();

    within(firstTablist())
      .getAllByRole('tab')
      .forEach(tab => {
        const panelId = tab.getAttribute('aria-controls');
        expect(panelId).toBeTruthy();
        expect(document.getElementById(panelId as string)).toHaveAttribute('role', 'tabpanel');
      });
  });

  it('🟢 한 번에 하나만 선택돼 있다.', async () => {
    const user = userEvent.setup();
    renderSection();

    const selected = () =>
      within(firstTablist())
        .getAllByRole('tab')
        .filter(tab => tab.getAttribute('aria-selected') === 'true');

    expect(selected()).toHaveLength(1);

    await user.click(chip(/Focus/));

    expect(chip(/Focus/)).toHaveAttribute('aria-selected', 'true');
    expect(selected()).toHaveLength(1);
  });

  it('🟢 로빙 tabIndex — Tab 키로는 선택된 탭 하나만 잡힌다.', () => {
    renderSection();

    expect(chip(/Challenge/)).toHaveAttribute('tabindex', '0');
    expect(chip(/Fellowship/)).toHaveAttribute('tabindex', '-1');
    expect(chip(/Focus/)).toHaveAttribute('tabindex', '-1');
  });

  it('🟢 방향키는 포커스와 선택을 함께 옮긴다. (탭의 자동 활성화)', async () => {
    const user = userEvent.setup();
    renderSection();

    chip(/Challenge/).focus();
    await user.keyboard('{ArrowRight}');

    expect(chip(/Fellowship/)).toHaveFocus();
    expect(chip(/Fellowship/)).toHaveAttribute('aria-selected', 'true');
    expect(chip(/Challenge/)).toHaveAttribute('aria-selected', 'false');
    expect(visibleTitles()).toEqual([...MAPPING.fellowship]);
  });

  it('🟢 방향키는 양끝에서 감긴다.', async () => {
    const user = userEvent.setup();
    renderSection();

    chip(/Challenge/).focus();
    await user.keyboard('{ArrowLeft}');

    expect(chip(/Focus/)).toHaveAttribute('aria-selected', 'true');

    await user.keyboard('{ArrowRight}');

    expect(chip(/Challenge/)).toHaveAttribute('aria-selected', 'true');
  });
});
