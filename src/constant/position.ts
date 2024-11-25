import { ComponentProps } from 'react';
import { Theme } from '@emotion/react';

import { PositionsItem } from '~/components/Positions/PositionsItem';

export type Position = 'aos' | 'design' | 'ios' | 'server' | 'web';

export const getColorByPosition = (theme: Theme, position: string) => {
  if (position === 'web') return theme.colors.yellow;
  else if (position === 'server') return theme.colors.purple;
  else if (position === 'ios') return theme.colors.lightPink;
  else if (position === 'aos') return theme.colors.darkMint;
  else if (position === 'design') return theme.colors.sky;
};

export const POSITIONS: Array<ComponentProps<typeof PositionsItem>> = [
  {
    type: 'design',
    title: 'UX/UI',
    keyword: ['리서치', 'UX', '디자인시스템'],
    link: process.env.NEXT_PUBLIC_NINEHIRE_DESIGN ?? '',
    description: [
      'Figma를 사용해 프로젝트를 해본 경험이 있으신 분',
      'UX 문제 해결 능력을 갖추신 분',
      '사용자 중심의 사고를 바탕으로 팀원들과 논리적인 커뮤니케이션을 할 수 있는 분',
    ],
  },
  {
    type: 'aos',
    title: 'ANDROID',
    keyword: ['Android', 'Kotlin', 'Git'],
    link: process.env.NEXT_PUBLIC_NINEHIRE_AOS ?? '',
    description: [
      'Retrofit을 이용한 서버 통신(API)을 해본 경험이 있으신 분',
      'Kotlin 개발 경험이 있으신 분',
      'Jetpack Library에 대한 이해도가 있으신 분',
    ],
  },
  {
    type: 'ios',
    title: 'iOS',
    keyword: ['iOS', 'Swift', 'Git'],
    link: process.env.NEXT_PUBLIC_NINEHIRE_IOS ?? '',
    description: [
      'UIKit 혹은 SwiftUI를 통하여 개발을 해본경험이 있으신 분',
      '디자인패턴 (MVC, MVVM)에 대한 기본적인 이해가 있으신 분',
      '서버 API 통신 및 JSON을 다뤄본 경험이 있으신 분',
    ],
  },
  {
    type: 'server',
    title: 'SERVER',
    keyword: ['Backend', 'Infra', 'Git'],
    link: process.env.NEXT_PUBLIC_NINEHIRE_SERVER ?? '',
    description: [
      '프로젝트 초기 설계 및 인프라 배포 경험이 있으신 분',
      '하나 이상의 서버 프레임워크를 사용해 주도적으로 참여한 프로젝트가 있으신 분',
      '프로젝트 협업에 있어 Git 사용 및 협업 툴 사용에 무리가 없는 분',
    ],
  },
  {
    type: 'web',
    title: 'WEB',
    keyword: ['Frontend', 'SPA', '프레임워크', 'Git'],
    link: process.env.NEXT_PUBLIC_NINEHIRE_WEB ?? '',
    description: [
      '프로젝트 협업에 있어 Git 사용 및 협업 툴 사용에 무리가 없는 분',
      'React, Vue, Angular와 같은 모던 자바스크립트 프레임워크를 사용한 경험이 있으신 분',
      'HTTP 통신에 대한 기본적인 이해, REST API 기반의 프론트엔드 개발 경험이 있으신 분',
    ],
  },
];
