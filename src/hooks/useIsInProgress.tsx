import { END_DATE, RECRUIT_CLOSE_DATE, START_DATE } from '~/constant/common';

export type RecruitState = 'PREVIOUS' | 'IN_PROGRESS' | 'FINISH';

const 하루 = 1000 * 60 * 60 * 24;

/**
 * @deprecated 19기부터는 `hooks/useRecruitPhase.ts`의 `useRecruitPhase()`를 쓴다.
 * 이 훅은 2025년 날짜를 보고 있어 항상 `FINISH`를 반환하며, 서버·클라이언트 시각이 달라
 * hydration 불일치가 날 수 있다. 리다이렉트로 도달할 수 없는 레거시 라우트(`/about`,
 * `/apply`)와 Storybook에서만 남아 있다.
 */
export default function useIsInProgress() {
  const startDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);

  const getCurrentState = (): RecruitState => {
    const currentDate = new Date();

    if (startDate > currentDate) return 'PREVIOUS';
    if (endDate < currentDate) return 'FINISH';

    return 'IN_PROGRESS';
  };

  const getRemainDay = (): number => {
    const currentDate = new Date();
    const diffMs = Math.abs(endDate.getTime() - currentDate.getTime());
    const remainDay = Math.round(diffMs / 하루);
    return remainDay;
  };

  const getDDay = (): number => {
    const currentDate = new Date();
    const timeGap = currentDate.getTime() - startDate.getTime();
    const dDay = Math.round(timeGap / 하루);
    return dDay;
  };

  /** 18기 모집 마감 여부 (RECRUIT_CLOSE_DATE 이후면 true) */
  const isRecruitClosed = new Date() >= RECRUIT_CLOSE_DATE;

  const isInProgress = getCurrentState() === 'IN_PROGRESS';
  const progressState = getCurrentState();
  const remainDay = getRemainDay();
  const dDay = getDDay();

  return { isInProgress, progressState, remainDay, dDay, isRecruitClosed };
}
