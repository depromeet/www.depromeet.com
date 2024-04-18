export interface Schedule {
  title: string;
  description?: string;
  schedule: Array<{
    content: string;
    date: string;
  }>;
}

export const MEMBER_SCHEDULE: Schedule = {
  title: '멤버 모집',
  schedule: [
    {
      content: '서류 접수 시작',
      date: '04.27',
    },
    {
      content: '서류 마감',
      date: '05.04',
    },
    {
      content: '서류 발표',
      date: '05.15(PM 6)',
    },
    {
      content: '온라인 면접',
      date: '05.18-19',
    },
    {
      content: '최종 합격',
      date: '05.28(PM 6)',
    },
  ],
};

export const SESSION_SCHEDULES: Schedule = {
  title: '오프라인 세션',
  description: '세션은 매주 토요일 진행되며, 오프라인 세션은 오프라인에서 이뤄집니다.',
  schedule: [
    {
      content: 'OT',
      date: '06.01',
    },
    {
      content: '네트워킹',
      date: '06.15',
    },
    {
      content: 'UT 세션',
      date: '07.06',
    },
    {
      content: '중간 발표',
      date: '07.20',
    },
    {
      content: '해커톤',
      date: '08.03',
    },
    {
      content: '런칭데이',
      date: '08.31',
    },
    {
      content: '최종 발표',
      date: '09.14',
    },
  ],
};
