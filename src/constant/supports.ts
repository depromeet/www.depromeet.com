export type Support = {
  title: string;
  subTitle: string;
  description?: string;
  img: string;
  link: string;
};

export const SUPPORTS: Support[] = [
  {
    title: '팀스파르타',
    subTitle: 'TeamSparta',
    img: '/images/support/team-sparta.png',
    link: 'https://spartacodingclub.kr/',
  },
  {
    title: '네이버클라우드',
    subTitle: 'Navercloud',
    img: '/images/support/naver-cloud.png',
    link: 'https://www.ncloud.com/',
  },
  {
    title: '인프런',
    subTitle: 'Inflearn',
    img: '/images/support/inflearn.png',
    link: 'https://www.inflearn.com/',
  },
];
