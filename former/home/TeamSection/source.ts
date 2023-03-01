import { POSITION_ICON_BASE } from '~/constants/images/images';

export const TEAMS = ['UIUX Design', 'Web', 'iOS', 'Android', 'Backend'] as const;

export type TeamType = (typeof TEAMS)[number];

type Contents = {
  [team in TeamType]: { heading: string; paragraph: string };
};

export const CONTENTS_PER_TEAM: Contents = {
  'UIUX Design': {
    heading: '서비스 디자인의 모든 것을 담당하는<br/>UIUX 디자이너',
    paragraph:
      '서비스 기획부터 UX/UI, 브랜딩, 마케팅까지 -<br/> 서비스 런칭에 필요한 메인 업무를 담당하게 되어요. ',
  },
  iOS: {
    heading: 'iOS 유저를 위한 앱 개발을 담당하는<br/>iOS Developer',
    paragraph: `앱 개발을 담당해요. 디자인 및 서버 개발 직군과의 협업을 경험할 수 있으며, 보다 나은 사용성을 위해<br/>
    Use Case 및 Wireframe을 구축하게 되어요.`,
  },
  Android: {
    heading:
      '모바일 환경에서 사용자 경험을 개선하는데 필요한 퍼포먼스를 담당하는 Android Developer',
    paragraph: `구글의 Material Design에 대한 이해를 바탕으로 최고의 모바일 서비스를 만들기 위한 아이디어를 실행해 볼 수 있는 Android Developer로 성장하게 되어요. `,
  },
  Web: {
    heading: '웹부터 앱까지 클라이언트 개발을 담당하는<br/>Web Developer',
    paragraph: `서비스의 Life Cycle에 전반적으로 참여하며 웹 혹은 웹뷰 형태의 앱 클라이언트 개발을 담당하게 되어요.`,
  },
  Backend: {
    heading: '시스템의 전반적인 흐름을 관리하는<br/>Backend Developer',
    paragraph: `서비스의 전반적인 흐름을 구축해요. 시스템 설계부터 배포까지, 서비스 및 데이터의 흐름을 관리하며 서비스의 전반적인 Life Cycle을 경험하게 되어요.`,
  },
};

type PositionIcon = {
  [team in TeamType]: string;
};

export const POSITION_ICON_IMAGES: PositionIcon = {
  Android: `${POSITION_ICON_BASE}/android.png`,
  'UIUX Design': `${POSITION_ICON_BASE}/design.png`,
  iOS: `${POSITION_ICON_BASE}/ios.png`,
  Backend: `${POSITION_ICON_BASE}/backend.png`,
  Web: `${POSITION_ICON_BASE}/web.png`,
};

export const POSITION_ICON_MOBILE: PositionIcon = {
  Android: `${POSITION_ICON_BASE}/android_mobile.png`,
  'UIUX Design': `${POSITION_ICON_BASE}/design_mobile.png`,
  iOS: `${POSITION_ICON_BASE}/ios_mobile.png`,
  Backend: `${POSITION_ICON_BASE}/backend_mobile.png`,
  Web: `${POSITION_ICON_BASE}/web_mobile.png`,
};
