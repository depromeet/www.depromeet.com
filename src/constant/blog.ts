import { Link } from '~/components/Thumbnail/Thumbnail';

export interface Blog {
  title: string;
  date: string;
  img: string;
  link: BlogLink;
}

export interface BlogLink extends Omit<Link, 'type'> {
  type: 'MEDIUM';
}

export const BLOG_LIST: Blog[] = [
  {
    title: '디프만 15기를 시작합니다!',
    date: '24.06.03',
    img: '/images/blog/15th_start.png',
    link: {
      type: 'MEDIUM',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-5e2d53ddef96',
    },
  },
  {
    title: '디프만은 어떻게 공부할까?<br/>(feat. 인프런)',
    date: '24.05.31',
    img: '/images/blog/15th_inflearn.png',
    link: {
      type: 'MEDIUM',
      href: 'https://medium.com/depromeet/interview-%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B3%B5%EB%B6%80%ED%95%A0%EA%B9%8C-feat-%EC%9D%B8%ED%94%84%EB%9F%B0-9b1c235e9e7f',
    },
  },
  {
    title: '가족 일상 공유 서비스,<br/>삐삐를 개발한 "오잉"팀',
    date: '24.04.28',
    img: '/images/blog/bbibbi.png',
    link: {
      type: 'MEDIUM',
      href: 'https://medium.com/depromeet/interview-%EA%B0%80%EC%A1%B1-%EC%9D%BC%EC%83%81-%EA%B3%B5%EC%9C%A0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%82%90%EC%82%90%EB%A5%BC-%EA%B0%9C%EB%B0%9C%ED%95%9C-%EC%98%A4%EC%9E%89%ED%8C%80-694e875973c5',
    },
  },
  {
    title: '디프만 14기 최종발표,<br/>성공적인 마무리',
    date: '24.03.03',
    img: '/images/blog/final.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/dc3aa57c01b7' },
  },
  {
    title: '14주만에 런칭 성공률 100%를 <br/>달성한 비결, 런칭데이!',
    date: '24.02.17',
    img: '/images/blog/launching.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/d6fc5bf6f2d8' },
  },
  {
    title: 'UT 설계부터 개선 과정까지,<br/>디프만 14기의 중간 발표',
    date: '24.01.13',
    img: '/images/blog/midterm.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/3429d0be8762' },
  },
  {
    title: '디프만 14기 팀원들과<br/>친해지는 게더링 & 네트워킹데이',
    date: '23.12.11',
    img: '/images/blog/networking.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/7de218bff76f' },
  },
  {
    title: '디프만 14기 여정의 시작!',
    date: '23.11.10',
    img: '/images/blog/start.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/c126e860c2bb' },
  },
  {
    title: '디프만 14기X인프런,<br/>인프런 스터디를 통한 레벨업!',
    date: '24.03.03',
    img: '/images/blog/inflearn.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/0e1614af8299' },
  },
  {
    title: '사용자들은 어떤 생각일까?<br/>디프만 13기 사용성 테스트 (UT)',
    date: '23.06.02',
    img: '/images/blog/13th-usability.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/f7a23c7eaf00' },
  },
  {
    title: '디프만 13기 브랜딩',
    date: '23.08.08',
    img: '/images/blog/13th-branding.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/1765cccc126c' },
  },
  {
    title: '데이터 기반 성장을 위해',
    date: '22.05.09',
    img: '/images/blog/data-driven-growth.png',
    link: { type: 'MEDIUM', href: 'https://medium.com/p/24d75b33a1c4' },
  },
];
