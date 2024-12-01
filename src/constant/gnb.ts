/** NOTE
 * 본래는 `href` 속셍어 /apply 속성도 있었지만, 16기에서는 불필요하여 삭제했어요.
 * 개발을 진행하시면서 참고를 해주세요
 */

export type GNBMenu = {
  name: '소개' | '모집 안내' | '프로젝트' | '블로그' | '지원하기' | '지원하기';
  href: '/about' | '/recruit' | '/project' | '/blog';
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
    name: '지원하기',
    href: '/recruit',
    type: 'button',
  },
];
