import { Link } from '~/components/Thumbnail/Thumbnail';

export interface Blog {
  title: string;
  date: string;
  img: string;
  links: Link[];
}

export const BLOG_LIST: Blog[] = [
  {
    title: '디프만 14기 최종발표,<br/>성공적인 마무리',
    date: '24.03.03',
    img: '/images/blog/final.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/dc3aa57c01b7' }],
  },
  {
    title: '14주만에 런칭 성공률 100%를 <br/>달성한 비결, 런칭데이!',
    date: '24.02.17',
    img: '/images/blog/launching.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/3429d0be8762' }],
  },
  {
    title: 'UT 설계부터 개선 과정까지,<br/>디프만 14기의 중간 발표',
    date: '24.01.13',
    img: '/images/blog/midterm.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/3429d0be8762' }],
  },
  {
    title: '디프만 14기 팀원들과<br/>친해지는 게더링 & 네트워킹데이',
    date: '23.12.11',
    img: '/images/blog/networking.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/7de218bff76f' }],
  },
  {
    title: '디프만 14기 여정의 시작!',
    date: '23.11.10',
    img: '/images/blog/start.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/c126e860c2bb' }],
  },
  {
    title: '디프만 14기X인프런,<br/>인프런 스터디를 통한 레벨업!',
    date: '24.03.03',
    img: '/images/blog/inflearn.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/0e1614af8299' }],
  },
  {
    title: '사용자들은 어떤 생각일까?<br/>디프만 13기 사용성 테스트 (UT)',
    date: '23.06.02',
    img: '/images/blog/13th-usability.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/f7a23c7eaf00' }],
  },
  {
    title: '디프만 13기 브랜딩',
    date: '23.08.08',
    img: '/images/blog/13th-branding.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/1765cccc126c' }],
  },
  {
    title: '데이터 기반 성장을 위해',
    date: '22.05.09',
    img: '/images/blog/data-driven-growth.png',
    links: [{ type: 'MEDIUM', href: 'https://medium.com/p/24d75b33a1c4' }],
  },
];
