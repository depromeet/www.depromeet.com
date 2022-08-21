import { POSITION_ICON_BASE } from '~/constants/images/images';

export const TEAMS = ['UIUX Design', 'Web', 'iOS', 'Android', 'Backend'] as const;

export type TeamType = typeof TEAMS[number];

type Contents = {
  [team in TeamType]: { heading: string; paragraph: string };
};

export const CONTENTS_PER_TEAM: Contents = {
  'UIUX Design': {
    heading: '서비스의 디자인의 모든것을 담당하는 UIUX 디자이너',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  iOS: {
    heading: 'iOS는 어쩌구 저쩌구...',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  Android: {
    heading: 'AOS는 어쩌구 저쩌구 ...',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  Web: {
    heading: '프론트엔드는 어쩌구 저쩌구',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
  },
  Backend: {
    heading: '서버는 어쩌구 저쩌구',
    paragraph:
      '개발자와의 협업을 통해 서비스를 만드는 경험을 할 수 있어요. 디자인을 디자인디자인 할 수 있고 디자인을 디자인디자인 할 수 있고 설명 설명 설명',
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
