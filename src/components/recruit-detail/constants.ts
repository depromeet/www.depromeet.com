export const POSITION_TYPE = {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  WEB: 'WEB',
  BACKEND: 'BACKEND',
  DESIGN: 'DESIGN',
} as const;

export type PositionType = keyof typeof POSITION_TYPE;

export const POSITION_DISPLAY_NAME = {
  IOS: 'iOS',
  ANDROID: 'Android',
  WEB: 'Web',
  BACKEND: 'Backend',
  DESIGN: 'UIUX Design',
} as const;

export const POSITION_WITH_CATEGORY_NAME = {
  IOS: `${POSITION_DISPLAY_NAME.IOS} Developer`,
  ANDROID: `${POSITION_DISPLAY_NAME.ANDROID} Developer`,
  WEB: `${POSITION_DISPLAY_NAME.WEB} Developer`,
  BACKEND: `${POSITION_DISPLAY_NAME.BACKEND} Developer`,
  DESIGN: 'UIUX Designer',
} as const;

export const ICON_POSITION_PATH = {
  DESIGN: '/svg/icon-design.svg',
  IOS: '/svg/icon-ios.svg',
  ANDROID: '/svg/icon-android.svg',
  WEB: '/svg/icon-web.svg',
  BACKEND: '/svg/icon-backend.svg',
};

export const ICON_CATEGORY_PATH = {
  DESIGN: '/svg/icon-designer.svg',
  IOS: '/svg/icon-developer.svg',
  ANDROID: '/svg/icon-developer.svg',
  WEB: '/svg/icon-developer.svg',
  BACKEND: '/svg/icon-developer.svg',
};

export const BANNER_IMG_PATH = {
  DESIGN: '/images/position/banner-design.png',
  IOS: '/images/position/banner-ios.png',
  ANDROID: '/images/position/banner-android.png',
  WEB: '/images/position/banner-web.png',
  BACKEND: '/images/position/banner-backend.png',
};

export const MOBILE_BANNER_IMG_PATH = {
  DESIGN: '/images/position/mobile-banner-design.png',
  IOS: '/images/position/mobile-banner-ios.png',
  ANDROID: '/images/position/mobile-banner-android.png',
  WEB: '/images/position/mobile-banner-web.png',
  BACKEND: '/images/position/mobile-banner-backend.png',
};

export const POSITION_DESCRIPTION = {
  DESIGN: `서비스 기획부터 UXUI 전반을 맡게 돼요.\n디자이너들과 함께 의견을 나누며 하나의 멋진 서비스가 만들어지는 경험을 하고 싶다면?\n디자인 외에도 마케팅, 브랜딩, 기획 등에도 관심이 있는 디자이너라면?\n21세기 디자이너에게 가장 필요한 역량, 개발자와의 커뮤니케이션! 부족하다고 느낀다면?\n디프만 12기 디자이너로 바로 지원하세요 !`,
  IOS: `뛰어나고 열정이 많은 디자이너와 서버 개발자들과 함께 디프만 기간 동안\n치열하게 커뮤니케이션을 하며 iOS 앱 개발 역량은 물론이고 전체적인 시야를 넓힐 수 있어요.\n특히 iOS 포지션 상 디자인과 서버의 중간 다리 역할을 하게 됨으로 만들어가는 서비스에 대해\n모든 부분에 있어 주도적이고 핵심적인 참여를 할 수 있어요.\n또한 핫한 기술들에 대해 과감없이 도전하면서 쓸 수 있는 최적의 환경이 제공됩니다.`,
  ANDROID: `열정과 능력을 함께 갖춘 동료들과 긴밀하게 협업하며 안드로이드 네이티브 애플리케이션을 개발해요.\n개발뿐만 아니라 동료들과 자유롭게 커뮤니케이션 하며 기획부터 런칭 및 운영까지\n모바일 서비스에 대한 A to Z를 얻어갈 수 있어요!\n다양한 직군의 사람들과 지식과 경험을 공유하며 \n완성도 높은 모바일 서비스를 만들어 볼 수 있는 최고의 환경이에요.`,
  WEB: `성장을 목표로 하는 디자이너분들과 서버 엔지니어분들과 함께\n플랫폼에 국한되지 않고 웹 그리고 웹뷰 형태의 클라이언트 애플리케이션을 개발해요.\n개발 역량은 물론, 타 직군과의 의사소통과 같은 소프트 스킬을 키울 수 있어요.\n또한 의욕이 넘치시는 다른 Frontend 엔지니어분들과 함께\n평소에 사용하거나 배워보고 싶었던 스택들을 사용하거나 스터디하기 최적의 환경이에요.`,
  BACKEND: `실제 서비스를 운영하기 위해 설계부터 운영까지 전반적인 시스템 인프라를 구축 및 관리해요.\n다양한 클라이언트 개발자분들과 협업을 진행하면서, 의사소통 능력을 키울 수 있어요.\n다른 Backend 엔지니어분들과 기술적으로 건강한 토론을 진행하면서,\n우리 서비스에 대한 기술적 고도화를 진행할 수 있어요.`,
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
  WEB: [
    '유연한 사고방식과 소통 방식을 가진 분',
    '건강한 토론을 할 수 있는 분 (침묵은 노노)',
    '프로젝트에 있어 어떻게 하면 성공할지를 고민하시는 분',
    '주도적 참여에 대한 의욕/열정을 가진 분',
    '우리 모두가 선생이자 학생 서로에게 배우고 발전할수 있는 분',
  ],
  BACKEND: [
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
