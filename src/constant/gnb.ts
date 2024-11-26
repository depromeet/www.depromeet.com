export type GNBMenu = {
  name: '소개' | '모집 안내' | '프로젝트' | '블로그' | '지원하기' | '16기 모집 알림 신청';
  href: '/about' | '/recruit' | '/project' | '/blog' | '/apply' | 'https://bit.ly/3YJgDmR';
  type: 'text' | 'button';
  isNewTab?: boolean;
};

// TODO: 지원하기 url 넣기
export const GNB_MENU_NAME: GNBMenu[] = [
  {
    name: '소개',
    href: '/about',
    type: 'text',
  },
  {
    name: '모집 안내',
    href: '/recruit',
    type: 'text',
  },
  {
    name: '프로젝트',
    href: '/project',
    type: 'text',
  },
  {
    name: '블로그',
    href: '/blog',
    type: 'text',
  },
];

export const GNB_MOBILE_MENU_NAME: GNBMenu[] = [
  {
    name: '소개',
    href: '/about',
    type: 'text',
  },
  {
    name: '모집 안내',
    href: '/recruit',
    type: 'text',
  },
  {
    name: '프로젝트',
    href: '/project',
    type: 'text',
  },
  {
    name: '블로그',
    href: '/blog',
    type: 'text',
  },
  {
    name: '16기 모집 알림 신청',
    href: 'https://bit.ly/3YJgDmR',
    type: 'text',
    isNewTab: true,
  },
];
