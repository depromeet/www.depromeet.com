export type GNBMenu = {
  name: 'About' | '모집 안내' | '프로젝트' | '블로그' | '지원하기' | '16기 모집 알림 신청';
  href: '/about' | '/recruit' | '/project' | '/blog' | '/apply' | 'https://bit.ly/3YJgDmR';
  type: 'text' | 'button';
  newTab: boolean;
};

// TODO: 지원하기 url 넣기
export const GNB_MENU_NAME: GNBMenu[] = [
  {
    name: 'About',
    href: '/about',
    type: 'text',
    newTab: false,
  },
  {
    name: '모집 안내',
    href: '/recruit',
    type: 'text',
    newTab: false,
  },
  {
    name: '프로젝트',
    href: '/project',
    type: 'text',
    newTab: false,
  },
  {
    name: '블로그',
    href: '/blog',
    type: 'text',
    newTab: false,
  },
];

export const GNB_MOBILE_MENU_NAME: GNBMenu[] = [
  {
    name: 'About',
    href: '/about',
    type: 'text',
    newTab: false,
  },
  {
    name: '모집 안내',
    href: '/recruit',
    type: 'text',
    newTab: false,
  },
  {
    name: '프로젝트',
    href: '/project',
    type: 'text',
    newTab: false,
  },
  {
    name: '블로그',
    href: '/blog',
    type: 'text',
    newTab: false,
  },
  {
    name: '16기 모집 알림 신청',
    href: 'https://bit.ly/3YJgDmR',
    type: 'text',
    newTab: true,
  },
];
