import { useEffect, useState } from 'react';

import { RECRUIT } from '~/constant/recruit';
import { getRecruitPhase, RecruitPhase } from '~/utils/recruit';

/** setTimeout 지연 상한(약 24.8일). 넘기면 즉시 실행돼 버린다. */
const MAX_TIMEOUT_MS = 2 ** 31 - 1;

/**
 * 현재 모집 단계. **마운트 전에는 `null`**을 돌려준다.
 *
 * `_app.tsx`에 `getInitialProps`가 있어 모든 페이지가 요청마다 SSR된다. 서버와 클라이언트의
 * 시각이 다르면 hydration 불일치가 나므로, 시간에 따라 바뀌는 UI는 마운트 후에만 계산한다.
 * (docs/19th/migration-plan.md §0.6)
 *
 * 경계(모집 시작·마감)에 자동으로 다시 계산하며, 절전 등으로 타이머가 밀리는 경우를 대비해
 * 탭이 다시 보일 때도(`visibilitychange`) 재계산한다.
 */
export function useRecruitPhase(): RecruitPhase | null {
  const [phase, setPhase] = useState<RecruitPhase | null>(null);

  useEffect(() => {
    let timer: number | undefined;

    const sync = () => {
      const now = new Date();
      setPhase(getRecruitPhase(now));

      const nextBoundary = [RECRUIT.applyWindow.start, RECRUIT.applyWindow.end]
        .map(boundary => new Date(boundary).getTime())
        .filter(time => time > now.getTime())
        .sort((a, b) => a - b)[0];

      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;

      if (nextBoundary === undefined) return;

      timer = window.setTimeout(sync, Math.min(nextBoundary - now.getTime(), MAX_TIMEOUT_MS));
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') sync();
    };

    sync();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return phase;
}
