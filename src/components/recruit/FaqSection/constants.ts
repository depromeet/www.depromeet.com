export const FAQ_TYPE = {
  REQUIREMENT: 'REQUIREMENT',
  INTERVIEW: 'INTERVIEW',
  ACTIVITY: 'ACTIVITY',
} as const;

interface FaqItem {
  title: string;
  description: string;
}

interface FaqMap {
  [key: string]: FaqItem[];
}

export const REQUIREMENT_LIST = [
  {
    title: '지원 가능한 나이가 어떻게 되나요? or 지원시 나이 제한이 있나요?',
    description: '20세 이상부터 가능해요!',
  },
  {
    title: '관련 경험이 없어도 지원 가능한가요?',
    description:
      '관련 직무 경험이 없어도 지원 가능해요. 다만 디자인 직군은 지원 시 포트폴리오를 필수로 제출하셔야 해요.',
  },
  {
    title: '실력이 뛰어나야만 참여할 수 있나요?',
    description:
      '디프만은 실력보다 개인의 성장 가능성, 열정, 책임감 등에 더 큰 비중을 두고 지원자 분들을 심사할 예정이에요.',
  },
  {
    title: '외국 또는 지방지역에서도 참여할 수 있나요?',
    description:
      '디프만 12기는 오프라인 모임도 진행될 예정이므로, 외국에 거주하실 경우 참여가 어려워요.\n(지방 거주자는 서울에서 진행되는 오프라인 모임에 참여 가능할 경우 지원 가능합니다.)',
  },
  {
    title: '직군간 중복지원이 가능한가요?',
    description: '직군간 중복지원은 불가능해요.',
  },
  {
    title: '지원 결과는 어디에서 확인할 수 있나요?',
    description: '서류 작성시 기입한 이메일로 결과를 안내드릴 예정이에요.',
  },
];

export const INTERVIEW_LIST = [
  {
    title: '면접은 언제 진행되나요?',
    description:
      '9월 17, 18 양일 간의 심사를 거쳐 12기 멤버를 선발할 예정이에요.\n서류 지원 시 가능한 시간대를 선택해주시면 됩니다! ',
  },
  {
    title: '면접 인원은 어떻게 되나요?',
    description: '면접관과 지원자 다대다 면접으로 진행될 예정이에요.',
  },
  {
    title: '면접 방식은 어떻게 되나요?',
    description: '면접은 메타버스 온라인 플랫폼인 게더타운에서 진행될 예정이에요.',
  },
  {
    title: '면접 시간은 얼마나 걸리나요?',
    description: '약 30~40분 정도 소요될 예정이에요.',
  },
];

export const ACTIVITY_LIST = [
  {
    title: '디프만 12기 정규 세션은 어떻게 진행되나요?',
    description:
      '디프만 12기는 온라인과 오프라인 모두 진행되어요. 온라인의 경우 메타버스 온라인 플랫폼인 게더타운에서, 오프라인의 경우 서울 지역에서 개최될 예정이에요.',
  },
  {
    title: '활동 기간은 어떻게 되나요? ',
    description:
      '우리는 공휴일을 소중히 여기는 디프만!\n9.24-1.14 3개월 간 진행되며, 크리스마스, 새해 주간에는 쉬어가요.',
  },
  {
    title: '디프만에서는 어떤 활동을 하나요?',
    description:
      '팀별로 서비스 아이디에이션부터 기획, 디자인, 개발, 런칭까지! 서비스 하나가 만들어지는 전 과정에 참여하게 돼요.',
  },
  {
    title: '활동비가 있나요?',
    description:
      '디프만은 12기 운영에 필요한 비용 및 적극적인 활동 참여 장려를 위해 활동비를 받고 있어요. 활동비는 회비와 보증금으로 이루어져 있으며, 아직 책정 중에 있어요. 알뜰살뜰하게 비용을 계산하여 부담가지 않는 금액으로 전달드릴게요!',
  },
];

export const FAQ: FaqMap = {
  [FAQ_TYPE.REQUIREMENT]: REQUIREMENT_LIST,
  [FAQ_TYPE.INTERVIEW]: INTERVIEW_LIST,
  [FAQ_TYPE.ACTIVITY]: ACTIVITY_LIST,
};
