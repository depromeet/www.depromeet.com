import { Link } from '~/components/OfflineSession/OfflineThumbnail';

export type Support = {
  title: string;
  subTitle: string;
  description: string;
  img: string;
  links?: Link[];
};

export const SUPPORTS: Support[] = [
  {
    title: '팀스파르타',
    subTitle: 'SpartaCodingClub',
    description: '세션 운영을 위한 지원금 100만원과 커뮤니티 참여 혜택을 제공합니다.',
    img: '/images/support/spartar.png',
  },
  {
    title: '네이버클라우드',
    subTitle: 'Navercloud',
    description: '‘Ncloud’ 최대 100만원 크레딧과 커뮤니티 참여 혜택을 제공합니다.',
    img: '/images/support/naver-cloud.png',
  },
  {
    title: '인프런',
    subTitle: 'Inflearn',
    description: '인프런 강의 30% 할인쿠폰과 강의 수강을 위해 총 48만 포인트를 제공합니다.',
    img: '/images/support/inflearn.png',
  },
];
