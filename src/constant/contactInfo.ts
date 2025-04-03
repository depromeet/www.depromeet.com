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
  { name: 'Instagram', href: DEPROMEET_INSTAGRAM },
  { name: 'Behance', href: DEPROMEET_BEHANCE },
  { name: 'GitHub', href: DEPROMEET_GITHUB },
  { name: 'Medium', href: DEPROMEET_MEDIUM },
  { name: 'LinkedIn', href: DEPROMEET_LINKEDIN },
];

export const SECOND_ROW_FOOTER_INFOS = [
  { name: 'Kakao channel', detail: '@depromeet', href: DEPROMEET_KAKAO_PLUS_FRIEND },
  { name: 'E-mail', detail: 'depromeet@gmail.com', href: DEPROMEET_EMAIL },
];

export const CONTACT_INFO = [
  { name: '카카오톡 문의', detail: '@depromeet', href: DEPROMEET_KAKAO_PLUS_FRIEND },
  { name: '이메일 문의', detail: 'depromeet@gmail.com', href: DEPROMEET_EMAIL },
];
