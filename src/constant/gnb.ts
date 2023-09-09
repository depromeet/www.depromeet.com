type GNB = {
  name: 'About' | '모집안내' | '프로젝트' | '지원하기';
  href: '/about' | '/recruit' | '/project' | '/';
  type: 'text' | 'button';
};
// TODO: 지원하기 url 넣기
export const GNB_MENU_NAME: GNB[] = [
  {
    name: 'About',
    href: '/about',
    type: 'text',
  },
  {
    name: '모집안내',
    href: '/recruit',
    type: 'text',
  },
  {
    name: '프로젝트',
    href: '/project',
    type: 'text',
  },
  {
    name: '지원하기',
    href: '/',
    type: 'button',
  },
];
