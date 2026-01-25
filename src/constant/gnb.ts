/** NOTE
 * 본래는 `href` 속셍어 /apply 속성도 있었지만, 16기에서는 불필요하여 삭제했어요.
 * 개발을 진행하시면서 참고를 해주세요
 */

export type GNBMenu = {
  name: '소개' | '모집 안내' | '프로젝트' | '블로그' | '지원하기' | '18기 모집 알림 받기';
  href:
    | '/'
    | '/recruit'
    | '/recruit#apply'
    | '/project'
    | '/blog'
    | 'https://docs.google.com/forms/d/1nU0znFiPjPGjp3_Wkif6dOGpgn8h2dYwh_5wByfBhlc/viewform';
  type: 'text' | 'button';
  isNewTab?: boolean;
};

// TODO: 지원하기 url 넣기
export const GNB_MENU_NAME: GNBMenu[] = [
  {
    name: '소개',
    href: '/',
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
    href: '/',
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
  // {
  //   name: '지원하기',
  //   href: '/recruit#apply',
  //   type: 'button',
  // },
  {
    name: '18기 모집 알림 받기',
    href: 'https://docs.google.com/forms/d/1nU0znFiPjPGjp3_Wkif6dOGpgn8h2dYwh_5wByfBhlc/viewform',
    type: 'button',
    isNewTab: true,
  },
];
