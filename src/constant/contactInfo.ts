import {
  DEPROMEET_BEHANCE,
  DEPROMEET_EMAIL,
  DEPROMEET_GITHUB,
  DEPROMEET_INSTAGRAM,
  DEPROMEET_KAKAO_PLUS_FRIEND,
  DEPROMEET_LINKEDIN,
  DEPROMEET_MEDIUM,
} from '~/constant/depromeet';

export const FIRST_ROW_FOOTER_INFOS = [
  { name: 'INSTAGRAM', href: DEPROMEET_INSTAGRAM },
  { name: 'BEHANCE', href: DEPROMEET_BEHANCE },
  { name: 'GITHUB', href: DEPROMEET_GITHUB },
  { name: 'MEDIUM', href: DEPROMEET_MEDIUM },
  { name: 'LINKEDIN', href: DEPROMEET_LINKEDIN },
];

export const SECOND_ROW_FOOTER_INFOS = [
  { name: 'Kakao channel', detail: '@DEPROMEET', href: DEPROMEET_KAKAO_PLUS_FRIEND },
  { name: 'E-mail', detail: 'depromeet@gmail.com', href: DEPROMEET_EMAIL },
];

export const CONTACT_INFO = [
  { name: 'Kakao channel', detail: '@depromeet', href: DEPROMEET_KAKAO_PLUS_FRIEND },
  { name: 'E-mail', detail: 'depromeet@gmail.com', href: DEPROMEET_EMAIL },
];
