export const FAQ_TYPE = {
  REQUIREMENT: 'REQUIREMENT',
  INTERVIEW: 'INTERVIEW',
  ACTIVITY: 'ACTIVITY',
} as const;

export type FaqType = keyof typeof FAQ_TYPE;

interface FaqItem {
  title: string;
  description: string;
}

interface FaqMap {
  [key: string]: FaqItem[];
}

export const REQUIREMENT_LIST = [
  {
    title: '지원 가능한 나이가 어떻게 되나요?',
    description: '디프만은 20세 이상부터 지원 가능합니다.',
  },
  {
    title: '관련 경험이 없어도 지원 가능한가요?',
    description:
      '관련 직무 경험이 없어도 지원 가능하지만 UIUX DESIGNER 직군은 지원 시 포트폴리오를 필수로 제출해야 합니다.',
  },
  {
    title: '실력이 뛰어나야만 참여할 수 있나요?',
    description:
      '아뇨! 디프만은 실력보다 개인의 성장 가능성, 열정, 책임감 등에 더 큰 비중을 두고 지원자 분들을 심사할 예정입니다.\n멋진 서비스를 런칭하고 같은 팀 멤버들과 협업할 수 있을 정도의 실력이면 충분해요.',
  },
  {
    title: '외국 거주자도 지원할 수 있나요??',
    description: '디프만 13기는 온/오프라인으로 진행되므로 국내 거주자에 한해 지원 가능합니다.',
  },
  {
    title: '서울/경기/인천 외 비수도권 거주자(미취업 청년)인데, 지원할 수 있나요?',
    description:
      '금번 디프만 13기는 커리어 개발 플랫폼 임팩트캠퍼스의 지원을 받아 진행됩니다.\n비수도권 거주자에게 여러가지 지원이 가능하니 망설이지 말고 얼른 지원하세요!',
  },
  {
    title: '직군간 중복지원이 가능한가요?',
    description:
      '직군간 중복 지원은 불가능합니다. 중복 지원자의 경우 지원 내역 모두 무효 처리할 예정입니다.',
  },
  {
    title: '지원 결과는 언제 어디서 확인 가능한가요?',
    description: '3월 12일 서류 지원 기간 마감 후, 3월 22일 중으로 안내 메일 발송 예정입니다.',
  },
];

export const INTERVIEW_LIST = [
  {
    title: '인터뷰는 언제 진행되나요?',
    description:
      '3월 25일 (토) / 3월 26일 (일) 양일간 진행됩니다. 서류 지원 시 원하는 시간대를 설정해주세요.',
  },
  {
    title: '인터뷰는 어떻게 진행되나요? ',
    description: '디프만 13기 운영진과 지원자 다대다 온라인 인터뷰로 진행될 예정입니다.',
  },
  {
    title: '인터뷰는 어디서 진행되나요?',
    description: '디프만 13기 인터뷰는 온라인으로 진행될 예정입니다. ',
  },
  {
    title: '인터뷰는 얼마나 걸릴까요?',
    description: '한 타임당 약 30~40분 정도 소요될 예정입니다.',
  },
  {
    title: '인터뷰 일정을 조정하고 싶은데, 가능할까요?',
    description:
      '인터뷰 일정은 조정이 불가합니다.\n서류 확인 시 일정을 반드시 확인하신 뒤 1~3순위까지 가능한 시간대를 기입해주세요.',
  },
  {
    title: '인터뷰 관련한 세부 내용들은 어디서 볼 수 있나요?',
    description: '서류 합격자에 한해 지원서에 기재한 이메일로 자세한 내용들을 발송할 예정입니다.',
  },
  {
    title: '인터뷰 결과는 언제 받아볼 수 있나요?',
    description:
      '꼼꼼히 인터뷰 내용 확인 후. 4월 3일 중으로 최종 합격자들에게 안내 메일 발송 예정입니다.',
  },
];

export const ACTIVITY_LIST = [
  {
    title: '디프만 13기 정규 세션은 어떻게 진행되나요?',
    description:
      '디프만은 매주 토요일 오후 2시부터 5시까지 정규 세션을 가집니다.\n총 16주간 온라인과 오프라인으로 번갈아가며 만날 예정이에요.\n정규 세션외에도 팀원들과 함께 작업하는 시간이 요구됨을 반드시 염두에 두고 지원해주세요.',
  },
  {
    title: '활동 기간은 어떻게 되나요? ',
    description: '디프만 13기는 4월 8일 오리엔테이션을 기점으로 16주 진행될 예정입니다. (7월 22일)',
  },
  {
    title: '디프만 13기는 어떻게 진행되나요?',
    description:
      '디프만은 총 8개의 팀으로 나뉘어 디자이너, 개발자들이 함께 하나의 서비스를 위해 작업하게 됩니다.',
  },
  {
    title: '정규 세션에서는 어떤 활동을 하나요?',
    description:
      '팀별 작업 외에도 멤버들 간의 교류와 네트워킹을 위해 다양하고 재미있는 이벤트들이 가득!\n개미지옥 디프만으로 어서 들어오세요. ',
  },
  {
    title: '활동비가 있나요?',
    description:
      '디프만은 비영리 IT 커뮤니티로, 13기 운영에 필요한 비용 조달 및\n13기 멤버들의 보다 적극적인 활동 참여 장려를 위해 최종 합격 멤버에 한해 활동비를 걷습니다.',
  },
  {
    title: '활동비는 얼마인가요?',
    description:
      '활동비는 회비와 보증금으로 이루어져 있으며, 아직 책정 중에 있어요.\n알뜰살뜰하게 비용을 계산하여 부담가지 않는 금액으로 전달드릴게요.',
  },
];

export const FAQ: FaqMap = {
  [FAQ_TYPE.REQUIREMENT]: REQUIREMENT_LIST,
  [FAQ_TYPE.INTERVIEW]: INTERVIEW_LIST,
  [FAQ_TYPE.ACTIVITY]: ACTIVITY_LIST,
};

export const FAQ_TYPE_LABEL = {
  REQUIREMENT: '지원 자격',
  INTERVIEW: '면접 관련',
  ACTIVITY: '활동 관련',
};

export const RECRUIT_QUALIFICATIONS = [
  '매주 토요일, 오후 2-5시에 진행되는\n정규 세션에 참여할 수 있는 분',
  '디자이너와 개발자의 동반 성장에\n공감하며, 이를 실천하고자 하는 분',
  '디프만 기간 동안 맡은 역할을 충실히\n이행할 수 있는 책임감 있는 분',
  '매사에 주도적으로 참여하거나,\n문제를 능동적으로 해결한 경험이 있는 분',
  '무엇인가에 꾸준히 몰입해본\n열정이 있는 분',
  '좋은 결과만 추구하는 것이 아닌\n모든 과정을 즐기는 태도를 가지신 분',
];

export const POSITION_TYPE_LABEL = {
  DESIGN: 'UIUX DESIGN',
  IOS: 'iOS',
  ANDROID: 'ANDROID',
  FRONTEND: 'FRONTEND',
  SERVER: 'SERVER',
} as const;
export type PositionType = keyof typeof POSITION_TYPE_LABEL;
