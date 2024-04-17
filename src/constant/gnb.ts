export type GNBMenu = {
  name: 'About' | '모집 안내' | '프로젝트' | '블로그' | '지원하기';
  href: '/about' | '/recruit' | '/project' | '/blog' | '/apply';
  type: 'text' | 'button';
};

// TODO: 지원하기 url 넣기
export const GNB_MENU_NAME: GNBMenu[] = [
  {
    name: 'About',
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
    name: 'About',
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
    name: '지원하기',
    href: '/apply',
    type: 'button',
  },
];
