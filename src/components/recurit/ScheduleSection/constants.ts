export interface RecuirtScheduleInterface {
  month: number;
  date: number;
  title: string;
  isRecurit: boolean;
}

export const SCHEDULE_LIST: RecuirtScheduleInterface[] = [
  {
    month: 8,
    date: 22,
    title: '서류 접수',
    isRecurit: true,
  },
  {
    month: 9,
    date: 2,
    title: '서류 결과 발표',
    isRecurit: true,
  },
  {
    month: 9,
    date: 17,
    title: '온라인 면접',
    isRecurit: true,
  },
  {
    month: 9,
    date: 21,
    title: '최종 합격 발표',
    isRecurit: true,
  },
  {
    month: 9,
    date: 24,
    title: '12기 OT',
    isRecurit: false,
  },
  {
    month: 1,
    date: 14,
    title: '활동 종료',
    isRecurit: false,
  },
];
