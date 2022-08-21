export interface RecruitScheduleInterface {
  date: string;
  title: string;
  isRecruit: boolean;
}

export const SCHEDULE_LIST: RecruitScheduleInterface[] = [
  {
    date: '8.22 - 9.2',
    title: '서류 접수',
    isRecruit: true,
  },
  {
    date: '9.12',
    title: '서류 결과 발표',
    isRecruit: true,
  },
  {
    date: '9.17 - 9.18',
    title: '온라인 면접',
    isRecruit: true,
  },
  {
    date: '9.21',
    title: '최종 합격 발표',
    isRecruit: true,
  },
  {
    date: '9.24',
    title: '12기 OT',
    isRecruit: false,
  },
  {
    date: '1.14',
    title: '활동 종료',
    isRecruit: false,
  },
];
