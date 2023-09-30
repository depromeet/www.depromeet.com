export type ReadMoreLink = {
  type: 'blog' | 'project';
  url: string;
  label: string;
};
export type ReviewItemType = {
  name: string;
  /**
   * 기수
   * ex) 14기
   */
  group: string;
  /**
   * 파트
   * ex) WEB
   */
  part: string;
  summary: string;
  links: ReadMoreLink[];
};

export const REVIEWS: ReviewItemType[] = [
  {
    name: '이상조',
    group: '13기',
    part: 'WEB',
    summary:
      '프로덕트 개발의 AtoZ를 체험해볼 수 있는 좋은 기회였어요. 여러 기술적 도전과 네트워킹을 통해 한 단계 성장할 수 있었던 것 같습니다. 무엇보다 좋은 팀원들을 만날 수 있다는 것이 가장 큰 장점 아닐까요?',
    links: [
      {
        type: 'blog',
        label: '블로그 후기',
        url: 'https://velog.io/@sjoleee_/디프만-13기를-추억하며',
      },
    ],
  },
  {
    name: '이다래',
    group: '13기',
    part: 'WEB',
    summary:
      '기획부터 배포까지 경험해 볼 수 있는 동아리였습니다. 같은 직군, 타직군 분들과 협업하며 배울수 있는 점이 좋았습니다. 결과물을 남길수 있도록 체계적인 시스템으로 서포트 해줘서 잘 런칭할 수 있었습니다!',
    links: [
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/Ding-dong-fe' },
    ],
  },
  {
    name: '이혜린',
    group: '13기',
    part: 'DESIGN',
    summary:
      '디프만 프로젝트를 통해 서비스 기획부터 배포까지 전 과정에 참여하고, 다양한 네트워킹 활동으로 즐겁게 성장할 수 있었어요. 열정적인 분들과 빠른 호흡으로 진행했던 잊지 못할 경험이었습니다.',
    links: [
      { type: 'blog', label: '블로그 후기', url: 'https://blog.naver.com/hye_duck/223114158145' },
    ],
  },
  {
    name: '정영경',
    group: '13기',
    part: 'DESIGN',
    summary:
      '서비스 릴리즈, 개발자 협업 경험, 모든 팀원이 제몫을 할 수 있게 체계적인 시스템이 좋았어요. 노션, 슬랙, 피그마에 선배 기수가 쌓아둔 데이터로 운영되기에 나만 잘하면 성장하는 동아리구나! 싶을만큼 좋았습니다!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://www.behance.net/gallery/175690517/-Improve-your-spending-habit-with-people',
      },
    ],
  },
  {
    name: '김정윤',
    group: '13기',
    part: 'SERVER',
    summary:
      '항상 프로젝트를 진행할 때 기술적인 부분만 고려하면서 진행해 왔는데, 이번 프로젝트에서는 디자이너, 개발자가 함께 기획부터 개발까지 하는 것이기 때문에 정말 제대로 된 서비스를 만들고 싶은 욕심이 생겼어요.',
    links: [
      { type: 'blog', label: '블로그 후기', url: 'https://hello-judy-world.tistory.com/203' },
    ],
  },
  {
    name: '정성훈',
    group: '13기',
    part: 'SERVER',
    summary:
      '적절한 기간 내 프로젝트 기획부터 배포까지 경험해 볼 수 있는 동아리였습니다. 다양한 직군과 협업하며 배울수 있는 점이 좋았습니다. 체계적인 시스템으로 서포트 해줘서 잘 런칭할 수 있었습니다!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/street-drop-server',
      },
    ],
  },
  {
    name: '이준영',
    group: '13기',
    part: 'SERVER',
    summary:
      '동아리를 통해 슬럼프를 극복하려고 했던거 같아요. 특히, 디프만은 현업 개발자와 사이드 프로젝트를 함께 할 수 있다는 장점 외에도 만드는 프로덕트의 질이 높아서 가장 가고싶었던 동아리 였습니다.',
    links: [{ type: 'blog', label: '블로그 후기', url: 'https://dlwnsdud205.tistory.com/353' }],
  },
];
