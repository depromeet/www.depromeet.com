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
    title: '네이버클라우드',
    subTitle: 'Navercloud',
    description: '‘Ncloud’ 최대 100만원 크레딧과<br/>커뮤니티 참여 혜택을 제공합니다.',
    img: '/images/support/naver-cloud.png',
  },
  {
    title: '인프런',
    subTitle: 'Inflearn',
    description: '인프런 강의 30% 할인쿠폰과 강의 수강을<br/> 위해 총 48만 포인트를 제공합니다.',
    img: '/images/support/inflearn.png',
  },
  {
    title: '모두의연구소',
    subTitle: 'Modulabs',
    description: '오프라인 세션 운영을 위한<br/>공간을 지원합니다.',
    img: '/images/support/모두의연구소.png',
  },
];
