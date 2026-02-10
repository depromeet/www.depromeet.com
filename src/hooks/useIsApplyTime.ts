import { useEffect, useState } from 'react';

import { APPLY_START_DATE } from '~/constant/common';

/**
 * 18기 지원 오픈 여부 (APPLY_START_DATE 이후일 때 true).
 * 헤더 버튼·모바일 메뉴·모집 카드 링크 등에서 공통 사용.
 */
export default function useIsApplyTime() {
  const [isApplyTime, setIsApplyTime] = useState(false);

  useEffect(() => {
    const update = () => setIsApplyTime(new Date() >= APPLY_START_DATE);
    update();
    const delay = APPLY_START_DATE.getTime() - Date.now();
    const timer = delay > 0 ? window.setTimeout(update, delay) : undefined;
    return () => (timer != null ? window.clearTimeout(timer) : undefined);
  }, []);

  return isApplyTime;
}
