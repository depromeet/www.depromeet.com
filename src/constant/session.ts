type Session = {
  image: string;
  title: string;
  description: string;
  ps?: string;
};

export const SESSIONS: Session[] = [
  {
    image: '/images/17th/main/session/pre-launching.png',
    title: 'Pre-Launching Day \n& Feedback',
    description:
      '빠르게 MVP를 출시하고 디퍼에게 소개하여 \n다양한 피드백을 받아볼 수 있어요 \n피드백을 바탕으로 프로덕트를 개선해나가요',
  },
  {
    image: '/images/17th/main/session/launching-day.png',
    title: 'Launching Day',
    description: '16주간 열심히 만들어낸 프로덕트를 \n100명 규모의 외부인에게 공개해요',
    ps: '*외부인 인원 수는 상황에 따라 달라질 수 있어요',
  },
  {
    image: '/images/17th/main/session/user-test.png',
    title: 'Usability Test',
    description: '각 팀이 선정한 페르소나를 바탕으로 \n제품의 실제 유저군 대상으로 UT를 진행해요',
  },
  {
    image: '/images/17th/main/session/mentoring-day.png',
    title: 'Mentoring Day',
    description:
      '각자의 자리에서 빛을 뿜어내고 있는 \n현직자 분들을 모셨어요 \n다양한 주제를 두고 대화하는 시간을 가져요',
  },
  {
    image: '/images/17th/main/session/DPM-workshop.png',
    title: 'DPM Workshop',
    description:
      '1박 2일 워크샵을 떠나요 \n최고의 프로덕트를 만들어 내기 위해 \n팀워크를 다지는 시간이에요',
  },
  {
    image: '/images/17th/main/session/role-based.png',
    title: 'Role-based Networking',
    description:
      '같은 파트 디퍼들과 모여 네트워킹을 진행해요 \n파트별로 할 수 있는 이야기를 나누는 시간을 가져요',
  },
  {
    image: '/images/17th/main/session/deep-work.png',
    title: 'Deep-cation',
    description:
      '팀원들과 함께 멀리 워케이션을 떠나요! \n출시를 위해 집중해서 작업도 하고, \n친목도 다져요',
  },
];
