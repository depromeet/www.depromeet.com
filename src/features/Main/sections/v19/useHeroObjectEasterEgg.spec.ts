import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  EASTER_EGG_TAP_COUNT,
  useHeroObjectEasterEgg,
} from '~/features/Main/sections/v19/useHeroObjectEasterEgg';

/** `handleTap` 은 `phase` 에 따라 다시 만들어지므로 매번 최신 것을 불러야 한다. */
const tap = (result: { current: ReturnType<typeof useHeroObjectEasterEgg> }, times: number) => {
  for (let i = 0; i < times; i += 1) {
    act(() => result.current.handleTap());
  }
};

const finishFlight = (result: { current: ReturnType<typeof useHeroObjectEasterEgg> }) => {
  act(() => result.current.handleFlightComplete('away'));
  act(() => result.current.handleFlightComplete('home'));
};

describe('useHeroObjectEasterEgg — 19번 눌러야 날아간다', () => {
  it('🔴 18번까지는 아무 일도 일어나지 않는다.', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg());

    tap(result, EASTER_EGG_TAP_COUNT - 1);

    expect(result.current.phase).toBe('idle');
  });

  it('🟢 19번째 클릭에 좌측 상단으로 날아간다.', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg());

    tap(result, EASTER_EGG_TAP_COUNT);

    expect(result.current.phase).toBe('away');
  });

  it('🟢 날아간 뒤에는 오른쪽에서 나타나 제자리로 돌아온다.', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg());

    tap(result, EASTER_EGG_TAP_COUNT);
    act(() => result.current.handleFlightComplete('away'));
    expect(result.current.phase).toBe('home');

    act(() => result.current.handleFlightComplete('home'));
    expect(result.current.phase).toBe('idle');
  });

  it('🔴 날아가는 중의 클릭은 세지 않는다. (연타로 비행이 겹치면 제자리를 잃는다)', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg());

    tap(result, EASTER_EGG_TAP_COUNT);
    tap(result, EASTER_EGG_TAP_COUNT);
    expect(result.current.phase).toBe('away');

    finishFlight(result);

    // 비행 중 누른 19번이 쌓였다면 착지하자마자 다시 날아갔을 것이다.
    expect(result.current.phase).toBe('idle');
  });

  it('🟢 한 번 발동하면 다시 19번을 눌러야 한다.', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg());

    tap(result, EASTER_EGG_TAP_COUNT);
    finishFlight(result);

    tap(result, EASTER_EGG_TAP_COUNT - 1);
    expect(result.current.phase).toBe('idle');

    tap(result, 1);
    expect(result.current.phase).toBe('away');
  });

  it('🔴 움직임을 원치 않는 사용자(prefers-reduced-motion)에게는 발동하지 않는다.', () => {
    const { result } = renderHook(() => useHeroObjectEasterEgg({ disabled: true }));

    tap(result, EASTER_EGG_TAP_COUNT * 2);

    expect(result.current.phase).toBe('idle');
  });
});
