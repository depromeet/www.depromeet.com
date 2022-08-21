import { POSITION_ICON_BASE } from '~/constants/images/images';

export const TEAMS = ['UIUX Design', 'Web', 'iOS', 'Android', 'Backend'] as const;

export type TeamType = typeof TEAMS[number];

type Contents = {
  [team in TeamType]: { heading: string; paragraph: string };
};

export const CONTENTS_PER_TEAM: Contents = {
  'UIUX Design': {
    heading: '서비스 디자인의 모든 것을 담당하는<br/>UIUX 디자이너',
    paragraph:
      '🐹 서비스 기획부터 UX/UI, 브랜딩, 마케팅까지 - 서비스 런칭에 필요한 메인 업무를 담당하게 되어요. ',
  },
  iOS: {
    heading: 'iOS 유저를 위한 앱 개발을 담당하는<br/>iOS Developer',
    paragraph: `디프만에서 iOS Developer는 앱 개발을 담당해요.
      프로젝트를 진행하면서 디자인 및 서버 개발 직군과의 협업을 경험할 수 있어요.
      단순한 개발이 아닌 프로젝트 기획 단계 부터 모든 직군과 같이 참여해 유스 케이스 및 와이어 프레임 구축 등을 같이 해나가며 보다 좋은 사용성을 위해 고민할 수 있어요.`,
  },
  Android: {
    heading:
      '모바일 환경에서 사용자 경험을 개선하는데 필요한 퍼포먼스를 담당하는 Android Developer',
    paragraph: `디프만에서 Android Developer는 구글의 Material Design에 대한 이해를 바탕으로 최고의 모바일 서비스를 만들기 위한 아이디어를 내고 실행 해볼 수 있어요. 무엇보다 동료들과의 커뮤니케이션을 통해 좋은 UI/UX를 개발하고 사용자 경험을 개선하는 Android Developer로 성장할 수 있어요!`,
  },
  Web: {
    heading: '웹부터 앱까지 클라이언트 개발을 담당하는<br/>Web Developer',
    paragraph: `디프만에서 Web Developer는 웹 혹은 웹뷰 형태의 앱 클라이언트 개발을 담당해요.
      프로젝트를 진행하면서 다른 직군과의 협업 경험을 경험할 수 있어요.
      개발만이 아니라 서비스의 아이디어 구상부터 배포와 운영까지 서비스 전반적인 Life Cycle에 참여할 수 있어요.`,
  },
  Backend: {
    heading: '시스템의 전반적인 흐름을 관리하는<br/>Backend Developer',
    paragraph: `디프만에서 Backend Developer는 서비스의 전반적인 흐름을 구축해요.
      시스템 설계부터 배포까지 모든 과정을 경험할 수 있어요.
      서비스 및 데이터의 흐름을 관리하며, 서비스의 전반적인 Life Cycle을 경험할 수 있어요.`,
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
