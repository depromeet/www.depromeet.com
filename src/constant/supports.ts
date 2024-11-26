export type Support = {
  title: string;
  subTitle: string;
  description?: string;
  img: string;
  link: string;
};

/**
 * * 16기 후원사 계속 추가 예정
 */
export const SUPPORTS: Support[] = [
  {
    title: '인프런',
    subTitle: 'Inflearn',
    img: '/images/16th/support/inflearn.png',
    link: 'https://www.inflearn.com/',
  },
  {
    title: '네이버클라우드',
    subTitle: 'Navercloud',
    img: '/images/16th/support/naver-cloud.png',
    link: 'https://www.ncloud.com/',
  },
  {
    title: '엘리스',
    subTitle: 'elice',
    img: '/images/16th/support/elice.png',
    link: 'https://elice.io/ko/',
  },
  {
    title: '서핏',
    subTitle: 'Surfit',
    img: '/images/16th/support/surfit.png',
    link: 'https://www.surfit.io/',
  },
  // {
  //   title: '팀스파르타',
  //   subTitle: 'TeamSparta',
  //   img: '/images/support/team-sparta.png',
  //   link: 'https://spartacodingclub.kr/',
  // },
  // {
  //   title: '디스콰이엇',
  //   subTitle: 'Disquiet',
  //   img: '/images/support/disquiet.png',
  //   link: 'https://disquiet.io/',
  // },
  // {
  //   title: '모두의연구소',
  //   subTitle: 'modulabs',
  //   img: '/images/support/모두의연구소.png',
  //   link: 'https://modulabs.co.kr/',
  // },
  // {
  //   title: '점핏',
  //   subTitle: 'Jumpit',
  //   img: '/images/support/jumpit.png',
  //   link: 'https://www.jumpit.co.kr/',
  // },
  // {
  //   title: '제이펍',
  //   subTitle: 'Jpub',
  //   img: '/images/support/jpub.png',
  //   link: 'https://jpub.tistory.com/',
  // },
  // {
  //   title: '이지스퍼블리싱',
  //   subTitle: 'EasysPublishing',
  //   img: '/images/support/easyspub.png',
  //   link: 'https://www.easyspub.co.kr/Main/pub',
  // },
];
