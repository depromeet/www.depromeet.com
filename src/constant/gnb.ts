/**
 * GNB 메뉴 목록.
 *
 * 모집 CTA(라벨·링크)는 여기 두지 않는다. 기수·모집 상태에 따라 달라지므로
 * `utils/recruit.ts#getRecruitCta`가 만들고, 값은 `constant/recruit.ts`에서 온다.
 */

export type GNBMenu = {
  name: '소개' | '모집 안내' | '프로젝트' | '블로그';
  href: '/' | '/recruit' | '/project' | '/blog';
  type: 'text';
};

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

/**
 * 모바일 메뉴도 같은 목록을 쓰고, CTA 버튼만 따로 렌더한다.
 * TODO(19th-design): Q-G2 — 모바일 메뉴 최종본이 확정되면 목록을 분리한다.
 */
export const GNB_MOBILE_MENU_NAME = GNB_MENU_NAME;
