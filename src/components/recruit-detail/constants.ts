export const POSITION_TYPE = {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  FRONTEND: 'FRONTEND',
  SERVER: 'SERVER',
  DESIGN: 'DESIGN',
} as const;

export type PositionType = keyof typeof POSITION_TYPE;

export const POSITION_DISPLAY_NAME = {
  IOS: 'iOS',
  ANDROID: 'ANDROID',
  FRONTEND: 'FRONTEND',
  SERVER: 'SERVER',
  DESIGN: 'UIUX',
} as const;

export const POSITION_WITH_CATEGORY_NAME = {
  IOS: `${POSITION_DISPLAY_NAME.IOS} DEVELOPER`,
  ANDROID: `${POSITION_DISPLAY_NAME.ANDROID} DEVELOPER`,
  FRONTEND: `${POSITION_DISPLAY_NAME.FRONTEND} DEVELOPER`,
  SERVER: `${POSITION_DISPLAY_NAME.SERVER} DEVELOPER`,
  DESIGN: `${POSITION_DISPLAY_NAME.DESIGN} DESIGNER`,
} as const;

export const ICON_POSITION_PATH = {
  DESIGN: '/svg/icon-design.svg',
  IOS: '/svg/icon-ios.svg',
  ANDROID: '/svg/icon-android.svg',
  FRONTEND: '/svg/icon-web.svg',
  SERVER: '/svg/icon-backend.svg',
};

export const ICON_CATEGORY_PATH = {
  DESIGN: '/svg/icon-designer.svg',
  IOS: '/svg/icon-developer.svg',
  ANDROID: '/svg/icon-developer.svg',
  FRONTEND: '/svg/icon-developer.svg',
  SERVER: '/svg/icon-developer.svg',
};

export const BANNER_IMG_PATH = {
  DESIGN: '/images/position/banner-design.png',
  IOS: '/images/position/banner-ios.png',
  ANDROID: '/images/position/banner-android.png',
  FRONTEND: '/images/position/banner-web.png',
  SERVER: '/images/position/banner-backend.png',
};

export const MOBILE_BANNER_IMG_PATH = {
  DESIGN: '/images/position/mobile-banner-design.png',
  IOS: '/images/position/mobile-banner-ios.png',
  ANDROID: '/images/position/mobile-banner-android.png',
  FRONTEND: '/images/position/mobile-banner-web.png',
  SERVER: '/images/position/mobile-banner-backend.png',
};

export const POSITION_DESCRIPTION = {
  DESIGN: `서비스 설계부터 UXUI 전반을 맡게 돼요.<br /> <br /> 디자이너들과 함께 의견을 나누며 하나의 멋진 서비스가 만들어지는 경험을 하고 싶다면?<br /> 디자인 외에도 마케팅, 브랜딩, 기획 등에도 관심이 있는 디자이너라면?<br /> 21세기 디자이너에게 가장 필요한 역량, 개발자와의 커뮤니케이션! 부족하다고 느낀다면?<br /><br /> 디프만 13기 디자이너로 바로 지원하세요 !`,
  IOS: `뛰어나고 열정이 많은 디자이너와 서버 개발자들과 함께 디프만 기간 동안 치열하게 커뮤니케이션을 하며 iOS 앱 개발 역량은 물론이고 전체적인 시야를 넓힐 수 있어요.<br /> 특히 iOS 포지션 상 디자인과 서버의 중간 다리 역할을 하게 됨으로 만들어가는 서비스에 대해 모든 부분에 있어 주도적이고 핵심적인 참여를 할 수 있어요.<br /><br /> 완성도 높은 앱스토어 런칭 앱을 개발 할 수 있는 최적의 환경이 제공됩니다.`,
  ANDROID: `열정과 능력을 함께 갖춘 동료들과 긴밀하게 협업하며 안드로이드 네이티브 애플리케이션을 개발해요. 개발뿐만 아니라 동료들과 자유롭게 커뮤니케이션 하며 기획부터 런칭 및 운영까지 모바일 서비스에 대한 A to Z를 얻어갈 수 있어요!<br /><br /> 다양한 직군의 사람들과 지식과 경험을 공유하며  완성도 높은 모바일 서비스를 만들어 볼 수 있는 최고의 환경이에요.`,
  FRONTEND: `성장을 목표로 하는 디자이너분들과 서버 엔지니어분들과 함께 플랫폼에 국한되지 않고 웹 그리고 웹뷰 형태의 클라이언트 애플리케이션을 개발해요. 개발 역량은 물론, 타 직군과의 의사소통과 같은 소프트 스킬을 키울 수 있어요.<br /> <br /> 또한 의욕이 넘치시는 다른 Frontend 엔지니어분들과 함께 평소에 사용하거나 배워보고 싶었던 스택들을 사용하거나 스터디하기 최적의 환경이에요.`,
  SERVER: `실제 서비스를 운영하기 위해 설계부터 운영까지 전반적인 시스템 인프라를 구축 및 관리해요. 다양한 클라이언트 개발자분들과 협업을 진행하면서, 의사소통 능력을 키울 수 있어요.<br /><br /> 다른 Backend 엔지니어분들과 기술적으로 건강한 토론을 진행하면서, 우리 서비스에 대한 기술적 고도화를 진행할 수 있어요.`,
};

export const POSITION_PREFER_LIST = {
  IOS: [
    '불확실성에 도전할 수 있는 용기를 가진 분',
    '간단한 개발을 할 수 있는 기본적인 역량 가진 분',
    '서비스에 대해 애정을 갖고 주도적으로 진행할 수 있는 분',
    '모두의 의견에 대해 존중하고 서로 발전 할 수 있는 열린 마인드를 가지신 분',
  ],
  ANDROID: [
    'Android 개발 환경에 관심을 갖고 다양한 직군의 사람들과 소통할 수 있는 분',
    '좋은 서비스를 위해 고민하고, 주도적으로 의견을 펼칠 수 있는 분',
    '디자이너와 소통하며 좋은 UI/UX 개발에 관심이 많으신 분',
    '성장에 목마른 다른 Android 엔지니어 분들과 함께 새로운 기술을 공유하고 Android 최신 트렌드를 습득하는데 즐거움을 느끼시는 분',
  ],
  FRONTEND: [
    '유연한 사고방식과 소통 방식을 가진 분',
    '건강한 토론을 할 수 있는 분 (침묵은 노노)',
    '프로젝트에 있어 어떻게 하면 성공할지를 고민하시는 분',
    '주도적 참여에 대한 의욕/열정을 가진 분',
    '우리 모두가 선생이자 학생 서로에게 배우고 발전할수 있는 분',
  ],
  SERVER: [
    '서버 배포에 대한 경험을 가진 분',
    '주도적으로 서비스 개발이 가능한 분',
    '책임감을 가지고 팀 프로젝트를 진행할 수 있는 분',
  ],
  DESIGN: [
    '본인의 디자인을 논리적으로 표현하고 설득할 수 있는 분',
    '긍정적인 마인드를 가지고 새로운 일에 도전하기 좋아하는 분',
    '아이디어를 구체화/시각화하는 것에 재미를 느끼는 분',
    '서비스 런칭을 위한 유저 니즈 이해 및 문제 정의가 가능하신 분',
    '팀 내 디자이너, 개발자와의 원활한 커뮤니케이션이 가능하신 분',
  ],
} as const;

export const TIP_BASE_IMAGE_URL = '/images/recruit-detail';

const TIPS: Array<{
  name: string;
  position: PositionType;
  classList: number[];
  tip: string;
}> = [
  {
    name: '임효연',
    position: POSITION_TYPE.DESIGN,
    classList: [9, 10, 11, 12],
    tip: '디프만에서 작성한 인재상을 꼼꼼히 보고 자기소개서를 그에맞춰서 어쩌구 잘 썼어 그게 면접때도 뭐 질문이나오고 그랬던듯',
  },
  {
    name: '박수연',
    position: POSITION_TYPE.DESIGN,
    classList: [11, 12],
    tip: '자신의 강점을 포트폴리오에 잘 녹여내서 면접에서 어필할 수 있어야해요 그리고 협업에 대해서도 생각해보시길 추천드립니다.',
  },
  {
    name: '이승희',
    position: POSITION_TYPE.DESIGN,
    classList: [11, 12],
    tip: '디프만에서 작성한 인재상을 꼼꼼히 보고 자기소개서를 그에맞춰서 어쩌구 잘 썼어 그게 면접때도 뭐 질문이나오고 그랬던듯',
  },
  {
    name: '이종원',
    position: POSITION_TYPE.DESIGN,
    classList: [11, 12],
    tip: '포트폴리오에서의 기획적인 의도나 이유들을 조리있게 설명할 수 있어야 해요 프로젝트 끝까지 참여할 수 있다는 본인의 열정을 어필해주시면 좋을 것 같아요',
  },
  {
    name: '차요셉',
    position: POSITION_TYPE.IOS,
    classList: [12],
    tip: '이전에 진행했던 개발 프로젝트를 통해 배웠던 점들을 자소서에 녹여내시길 추천합니다 디프만을 통해 경험하고 싶은 점들과 앞으로의 다짐을 보여주시면 좋을 것 같습니다 또한 iOS 개발에 대한 관심을 자소서 혹은 깃헙, 블로그를 통해 나타내시면 도움이 될 것 같습니다!',
  },
  {
    name: '김주환',
    position: POSITION_TYPE.ANDROID,
    classList: [12],
    tip: '동아리는 면접 시간이 시간이 짧으니 주어진 시간 안에 나의 장점을 보여줄 수 있도록 전략을 잘 짜셔야 해요 또, 동아리에는 어떤 사람이 필요할까 고민해 보시면 좋을 거예요!',
  },
  {
    name: '김해인',
    position: POSITION_TYPE.ANDROID,
    classList: [12],
    tip: '디프만에서 어떤 가치관과 협업 자세로 꼭 무언가를 해보고 싶다는 열정이 합격의 키포인트가 됐다고 생각합니다 그 열정을 서류와 면접에서 녹여낼 수 있다면 합격할 수 있을 겁니다.',
  },
  {
    name: '전해성',
    position: POSITION_TYPE.ANDROID,
    classList: [12],
    tip: '디프만 활동, 프로젝트 참여 및 팀원들과 협업한다면 내가 원하고 얻고싶은 것과 내가 기여할 수 있는 것을 구체적으로 적었던 것이 도움이 되었습니다.',
  },
  {
    name: '황규일',
    position: POSITION_TYPE.ANDROID,
    classList: [12],
    tip: '면접때 얼마나 참여를 하고 싶은지 협업 및 프로젝트에 대해서 얼마나 열정이 있는지에 대해서 말했던 것 같아요! 기술질문은 내가 맡은 파트에 대해서 얼마나 관심을 가지고 살펴 봤는지 간단하게 말했었어요.',
  },
  {
    name: '김민수',
    position: POSITION_TYPE.FRONTEND,
    classList: [12],
    tip: '꾸준히 성장하기 위한 발자취를 많이 보여주시면 좋을 것 같아요. 그리고 무엇보다도 중요한 건 책임감이라고 생각합니다. 지속적 성장을 위한 꾸준함과 책임감 꼭 기억해주세요!',
  },
  {
    name: '오혜성',
    position: POSITION_TYPE.FRONTEND,
    classList: [11, 12],
    tip: '꾸밈없이 고민했던 경험을 녹이고, 디프만 활동 참여에 열정을 보여주시길 추천해요. 기술적으로는 웹 플랫폼뿐이 아닌 다양한 플랫폼에 웹 기술을 이용한 경험을 어필하신다면 좋을 거 같아요.',
  },
  {
    name: '정대윤',
    position: POSITION_TYPE.FRONTEND,
    classList: [11],
    tip: '디프만은 동아리이다 보니 프로젝트와 활동에 참여할 시간, 육체, 정신적 여유가 되는 분을 선호해요! 동아리 활동과 프로젝트에 기여할 수 있는 것들을 어필하면 좋을 것 같아요! <br /> ex) 스터디 활동을 잘해요! 기술적 숙련도가 높아서 리딩할 수 있어요!',
  },
  {
    name: '이성태',
    position: POSITION_TYPE.SERVER,
    classList: [12],
    tip: '저는 디프만이 첫 개발 경험이었습니다. 그래서 경험이 부족하고 어필할 부분이 책임감과 열정뿐이었는데, 이런 부분이 오히려 확실한 메리트가 됐어요. 물론 개발 경험도 중요하지만, 내가 얼마나 개발을 좋아하고 우리 디프만에 얼마나 적극적으로 참여할 수 있는지 그런 ‘진심’이 있다면 바로 지원해보세요 :)',
  },
  {
    name: '이찬진',
    position: POSITION_TYPE.SERVER,
    classList: [11, 12],
    tip: '코딩에 대한 열정을 녹여낼려고 노력했어요. 디프만을 통해 얻어가고 싶은 점도 생각 했었고요. 그 외 자소서에 적기 힘든 부분들은 블로그, 깃허브 링크로 좀 더 보완을 했던것 같아요!',
  },
];

export const POSITION_TIPS = {
  IOS: TIPS.filter(({ position }) => position === POSITION_TYPE.IOS),
  ANDROID: TIPS.filter(({ position }) => position === POSITION_TYPE.ANDROID),
  FRONTEND: TIPS.filter(({ position }) => position === POSITION_TYPE.FRONTEND),
  SERVER: TIPS.filter(({ position }) => position === POSITION_TYPE.SERVER),
  DESIGN: TIPS.filter(({ position }) => position === POSITION_TYPE.DESIGN),
} as const;
