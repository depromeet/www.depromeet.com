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
    name: '김현우',
    group: '15기',
    part: 'WEB',
    summary:
      '프로덕트의 시작부터 런칭까지의 플로우를 경험하는 과정을 통해 평소 생각만하던 아이디어를 디프만에서 몰입하고 실현할 수 있었어요! 디프만을 경험하고 싶으신 분들이 있다면, 절대 후회하지 않을거라고 확신해요!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/layer',
      },
    ],
  },
  {
    name: '정준원',
    group: '15기',
    part: 'SERVER',
    summary:
      '성장의 정체기나 슬럼프를 겪고 있는 분이라면, 디프만은 좋은 해결책이 될 수 있다고 생각해요. 여러분이 하는 만큼 가져갈 수 있는 게 더 많아지니까 최대한 열심히 참여해서 만족스러운 만큼 성장할 수 있으면 좋겠어요.',
    links: [
      {
        type: 'blog',
        label: '블로그 후기',
        url: 'https://dev-won0313.tistory.com/entry/%F0%9F%8E%89%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%ED%9B%84%EA%B8%B0feat%F0%9F%A5%87%EB%8C%80%EC%83%81-%F0%9F%8E%89',
      },
    ],
  },
  {
    name: '이서영',
    group: '15기',
    part: 'DESIGN',
    summary:
      '실무에 미숙한 대학생 입장에선 팀원들이 너무 큰 도움과 힘이 되었어요. 현업자들과 함께 프로젝트를 하며 16주 동안 많이 배우고 든든한 동료도 얻을 수 있었어요. 디프만에 들어온 게 올해 가장 잘한 선택이라고 느껴져요!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://www.behance.net/gallery/206508371/(moring)-',
      },
    ],
  },
  {
    name: '조용인',
    group: '15기',
    part: 'iOS',
    summary:
      '혼자라면 시도하지 못했을 기술을 팀원들과 함께 고민하고 적용할 수 있어서 정말 즐거웠어요. 협업 속에서 성장하는 법을 배우고, 같은 목표를 향해 달려가는 든든한 동료도 얻었습니다. 디프만은 제게 최고의 경험이었어요!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/WalWal-iOS',
      },
    ],
  },
  {
    name: '박세준',
    group: '15기',
    part: 'SERVER',
    summary:
      '서버 개발자로서의 방향성을 혼자 고민하며 답을 찾지 못했을 때 디프만이 등대가 되어주었어요. 단기간 몰입하고 성장할 수 있는 최고의 동아리를 찾는다면 디프만으로.',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/bbo-gak-server',
      },
    ],
  },
  {
    name: '이한음',
    group: '15기',
    part: 'SERVER',
    summary:
      '현직자 분들과 16주간 함께 프로덕트를 개발하면서 요구 사항을 빠르게 반영하고 유연하고 탄탄한 설계를 가져가는 방법을 몸소 배울 수 있었어요. 디프만은 대학생 개발자로서 할 수 있는 최고의 경험이라고 생각합니다!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/moring-server',
      },
    ],
  },
  {
    name: '조혜원',
    group: '15기',
    part: 'DESIGN',
    summary:
      '16주간 팀원들과 하나의 목표를 향해 달려가며 정말 많은걸 배웠어요. 프로덕트를 0에서 1로 만들어가는 과정을 함께하면서 몰입의 중요성을 느꼈습니다. 능력 있고 든든한 동료까지 만날 수 있었던 소중한 시간이었어요!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://www.behance.net/gallery/207843619/BBOGAK-',
      },
    ],
  },
  {
    name: '이지희',
    group: '15기',
    part: 'iOS',
    summary:
      '16주간 하나의 문제를 해결하기 위해 팀원 모두가 열정을 쏟는 경험 자체가 빛난다고 생각해요. 이 과정에서 혼자라면 불가능했던 것들을 하나씩 해쳐나가면서 상호 성장의 기쁨을 느낄 수 있어요!',
    links: [
      {
        type: 'project',
        label: '프로젝트',
        url: 'https://github.com/depromeet/WalWal-iOS',
      },
    ],
  },
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
    name: '박정윤',
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
