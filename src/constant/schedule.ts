export interface Schedule {
  title: string;
  description?: string;
  schedule: Array<{
    content: string;
    date: string;
  }>;
}

export interface LandingSchedule {
  schedule: Array<{
    content: string;
    highlighting?: boolean;
  }>;
}

export const MEMBER_SCHEDULE: Schedule = {
  title: '멤버 모집',
  schedule: [
    {
      content: '서류 접수 시작',
      date: '12.03',
    },
    {
      content: '서류 마감',
      date: '12.09',
    },
    {
      content: '서류 발표',
      date: '12.16',
    },
    {
      content: '온라인 면접',
      date: '12.21-22',
    },
    {
      content: '최종 합격',
      date: '12.30',
    },
  ],
};

export const SESSION_SCHEDULES: Schedule = {
  title: '오프라인 세션',
  description: '세션은 매주 토요일 진행되며, 오프라인 세션은 오프라인에서 이뤄집니다',
  schedule: [
    {
      content: 'OT',
      date: '01.04',
    },
    {
      content: '네트워킹',
      date: '01.18',
    },
    {
      content: 'UT 세션',
      date: '02.08',
    },
    {
      content: '중간 발표',
      date: '02.22',
    },
    {
      content: '해커톤',
      date: '03.08',
    },
    {
      content: '런칭데이',
      date: '04.05',
    },
    {
      content: '최종 발표',
      date: '04.19',
    },
  ],
};

export const LANDING_SECOND_SECTION_SCHEDULE: LandingSchedule = {
  schedule: [
    {
      content: '개선 검증',
      highlighting: true,
    },
    {
      content: '중간 발표',
    },
    {
      content: '해커톤',
    },
    {
      content: '개별 팀 활동',
    },
    {
      content: '런칭 데이',
    },
    {
      content: '최종 발표',
    },
  ],
} as const;

export const LANDING_FIRST_SECTION_SCHEDULE: LandingSchedule = {
  schedule: [
    {
      content: 'OT',
    },
    {
      content: '디프콘',
      highlighting: true,
    },
    {
      content: '아이디어 발표',
    },
    {
      content: '네트워킹',
    },
    {
      content: '개별 팀 활동',
    },
    {
      content: 'UT',
    },
  ],
} as const;
