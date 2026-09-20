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
 * 첫 번째 칩 묶음으로 좁혀서 본다.
 */
const firstChipGroup = () => screen.getAllByRole('group', { name: '세션 카테고리' })[0];
const chip = (name: RegExp) => within(firstChipGroup()).getByRole('button', { name });

/**
 * 운영진·디자이너 확정 사항 (docs/19th/migration-plan.md §15.2)
 *
 * Challenge / Fellowship / Focus 칩은 **클릭만 되고 목록을 거르지 않는다** —
 * 세션과 카테고리의 매핑이 아직 정해지지 않았기 때문이다.
 *
 * 그래서 탭이 아니라 **토글 버튼 묶음**이다. `role="tab"`은 "선택하면 연결된 패널이
 * 바뀐다"는 약속이라, 목록이 그대로인 채 탭이라고 알리면 스크린 리더 사용자가
 * 갱신을 기다리다 고장으로 판단한다(WCAG 4.1.2). 분류가 확정되면 그때 탭으로 올린다.
 */
describe('SessionPreviewSection — 칩은 목록을 거르지 않는다', () => {
  it('🟢 처음부터 설정의 세션이 모두 보인다.', () => {
    renderSection();

    RECRUIT.sessionPreview.forEach(session => {
      expect(screen.getAllByText(session.title).length).toBeGreaterThan(0);
    });
  });

  it('🔴 다른 칩을 눌러도 보이는 세션 수가 줄지 않는다.', async () => {
    const user = userEvent.setup();
    renderSection();

    const visibleCount = () =>
      RECRUIT.sessionPreview.filter(session => screen.queryAllByText(session.title).length > 0)
        .length;

    expect(visibleCount()).toBe(RECRUIT.sessionPreview.length);

    await user.click(chip(/Focus/));
    expect(visibleCount()).toBe(RECRUIT.sessionPreview.length);

    await user.click(chip(/Fellowship/));
    expect(visibleCount()).toBe(RECRUIT.sessionPreview.length);
  });

  it('🔴 목록을 거르지 않으므로 탭 의미론을 쓰지 않는다.', () => {
    renderSection();

    // role="tab"은 연결된 패널이 바뀐다는 약속이다. 여기엔 tabpanel이 없다.
    expect(screen.queryAllByRole('tab')).toHaveLength(0);
    expect(screen.queryAllByRole('tablist')).toHaveLength(0);
    expect(screen.queryAllByRole('tabpanel')).toHaveLength(0);
  });

  it('🟢 칩은 눌린 상태를 알리는 토글 버튼이고, 한 번에 하나만 눌려 있다.', async () => {
    const user = userEvent.setup();
    renderSection();

    const pressed = () =>
      within(firstChipGroup())
        .getAllByRole('button')
        .filter(button => button.getAttribute('aria-pressed') === 'true');

    expect(within(firstChipGroup()).getAllByRole('button')).toHaveLength(3);
    expect(pressed()).toHaveLength(1);

    await user.click(chip(/Focus/));

    expect(chip(/Focus/)).toHaveAttribute('aria-pressed', 'true');
    expect(pressed()).toHaveLength(1);
  });

  it('🟢 칩은 모두 탭 순서에 있다. (로빙 tabIndex는 탭 묶음 전용이다)', () => {
    renderSection();

    within(firstChipGroup())
      .getAllByRole('button')
      .forEach(button => expect(button).not.toHaveAttribute('tabindex', '-1'));
  });

  it('🟢 방향키는 포커스만 옮기고, 누르는 것은 Space/Enter다.', async () => {
    const user = userEvent.setup();
    renderSection();

    chip(/Challenge/).focus();
    await user.keyboard('{ArrowRight}');

    // 포커스는 옮겨가되
    expect(chip(/Fellowship/)).toHaveFocus();
    // 눌린 상태는 그대로다 — 토글 버튼은 탭처럼 자동 활성화하지 않는다.
    expect(chip(/Fellowship/)).toHaveAttribute('aria-pressed', 'false');
    expect(chip(/Challenge/)).toHaveAttribute('aria-pressed', 'true');

    await user.keyboard('{ }');

    expect(chip(/Fellowship/)).toHaveAttribute('aria-pressed', 'true');
    expect(chip(/Challenge/)).toHaveAttribute('aria-pressed', 'false');
  });
});
