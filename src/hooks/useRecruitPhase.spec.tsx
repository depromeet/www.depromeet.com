import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useRecruitPhase } from '~/hooks/useRecruitPhase';

/**
 * 설정을 갈아끼워 경계를 가깝게/멀게 만들 수 있어야 타이머를 검증할 수 있다.
 * 훅은 `RECRUIT`를 직접 import하므로 모듈을 모킹한다.
 */
const mocked = vi.hoisted(() => ({
  applyWindow: { start: '2026-10-02T00:00:00+09:00', end: '2026-10-09T00:00:00+09:00' },
}));

vi.mock('~/constant/recruit', async importOriginal => {
  const actual = await importOriginal<typeof import('~/constant/recruit')>();
  return {
    ...actual,
    get RECRUIT() {
      return { ...actual.RECRUIT, applyWindow: mocked.applyWindow };
    },
  };
});

const MAX_TIMEOUT_MS = 2 ** 31 - 1;

const setNow = (iso: string) => vi.setSystemTime(new Date(iso));

beforeEach(() => {
  vi.useFakeTimers();
  mocked.applyWindow = {
    start: '2026-10-02T00:00:00+09:00',
    end: '2026-10-09T00:00:00+09:00',
  };
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('useRecruitPhase', () => {
  it('🟢 마운트되면 현재 시각의 단계를 돌려준다.', () => {
    setNow('2026-10-01T23:59:59+09:00');

    expect(renderHook(() => useRecruitPhase()).result.current).toBe('BEFORE');
  });

  it('🟢 모집 시작 경계를 넘기면 타이머가 OPEN으로 바꾼다.', () => {
    setNow('2026-10-01T23:59:59+09:00');
    const { result } = renderHook(() => useRecruitPhase());

    expect(result.current).toBe('BEFORE');

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).toBe('OPEN');
  });

  it('🟢 마감 경계를 넘기면 CLOSED가 된다.', () => {
    setNow('2026-10-08T23:59:59+09:00');
    const { result } = renderHook(() => useRecruitPhase());

    expect(result.current).toBe('OPEN');

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(result.current).toBe('CLOSED');
  });

  it('🟢 절전 등으로 타이머가 밀려도 탭이 다시 보이면 재계산한다.', () => {
    setNow('2026-10-01T23:59:00+09:00');
    const { result } = renderHook(() => useRecruitPhase());

    expect(result.current).toBe('BEFORE');

    // 타이머를 진행시키지 않고 시계만 앞으로 돌린다 = 백그라운드에서 타이머가 지연된 상황
    setNow('2026-10-03T00:00:00+09:00');
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
    });

    expect(result.current).toBe('OPEN');
  });

  it('🔴 경계가 24.8일보다 멀면 setTimeout 지연을 2**31-1로 자른다.', () => {
    // 클램프가 없으면 setTimeout이 지연을 1ms로 취급해 즉시 발화 → 0ms 재귀 루프가 된다.
    mocked.applyWindow = {
      start: '2030-01-01T00:00:00+09:00',
      end: '2030-01-08T00:00:00+09:00',
    };
    setNow('2026-10-01T00:00:00+09:00');

    const setTimeoutSpy = vi.spyOn(window, 'setTimeout');
    renderHook(() => useRecruitPhase());

    const delays = setTimeoutSpy.mock.calls.map(call => call[1]);
    expect(delays).toContain(MAX_TIMEOUT_MS);
    expect(Math.max(...(delays as number[]))).toBeLessThanOrEqual(MAX_TIMEOUT_MS);
  });

  it('🟢 언마운트하면 타이머와 리스너를 정리한다.', () => {
    setNow('2026-10-01T23:59:59+09:00');
    const removeSpy = vi.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useRecruitPhase());
    expect(vi.getTimerCount()).toBeGreaterThan(0);

    unmount();

    expect(vi.getTimerCount()).toBe(0);
    expect(removeSpy).toHaveBeenCalledWith('visibilitychange', expect.any(Function));
  });

  it('🟢 경계가 모두 지났으면 타이머를 걸지 않는다.', () => {
    setNow('2027-01-01T00:00:00+09:00');

    const { result } = renderHook(() => useRecruitPhase());

    expect(result.current).toBe('CLOSED');
    expect(vi.getTimerCount()).toBe(0);
  });
});
