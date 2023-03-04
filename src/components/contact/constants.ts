import { ORGANIZER_IMAGE_BASE } from '~/constants/images';

export interface Organizer {
  name: string;
  position: string;
  src: string;
  behance?: string;
  linkedin?: string;
  github?: string;
  web?: string;
}

export const ORGANIZERS: readonly Organizer[] = [
  {
    name: '박소현 (회장)',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/박소현.webp`,
    web: 'https://brunch.co.kr/@tudandilion',
  },
  {
    name: '김동규 (부회장)',
    position: 'WEB DEVELOPER',
    src: `${ORGANIZER_IMAGE_BASE}/김동규.webp`,
    linkedin: 'https://www.linkedin.com/in/dongkyu-kim-575969211/',
    github: 'https://github.com/dongkyuuuu',
  },
  {
    name: '박수연',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/박소현.webp`,
    behance: 'https://www.behance.net/sypak120c57e',
    linkedin: 'https://www.linkedin.com/in/sooyeon-park-623857200/',
  },
  {
    name: '이승희',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/이승희.webp`,
    behance: 'https://www.behance.net/seunghee555b99',
  },
  {
    name: '이종원',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/이종원.webp`,
    behance: 'https://www.behance.net/093fec2d',
  },
  {
    name: '임효연',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/임효연.webp`,
    behance: 'https://www.behance.net/gd054',
    linkedin: 'https://www.linkedin.com/in/효연-임-2a2046231/',
  },
  {
    name: '차요셉',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/차요셉.webp`,
    linkedin: 'https://www.linkedin.com/in/요셉-차-18478a207/',
    github: 'https://github.com/joseph704',
    web: 'https://josephcha.tistory.com',
  },
  {
    name: '김민수',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/김민수.webp`,
    linkedin: 'https://www.linkedin.com/in/ding-co/',
    github: 'https://github.com/ding-co',
    web: 'https://ding-co.tistory.com/',
  },
  {
    name: '오혜성',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/오혜성.webp`,
    linkedin: 'https://www.linkedin.com/in/hyesungoh414/',
    github: 'https://github.com/hyesungoh',
    web: 'https://www.hyesungoh.xyz/',
  },
  {
    name: '이은지',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/이은지.webp`,
    github: 'https://github.com/eunddodi',
    web: 'https://velog.io/@eunddodi',
  },
  {
    name: '정대윤',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/정대윤.webp`,
    github: 'https://github.com/sensecodevalue',
  },
  {
    name: '김문규',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/김문규.webp`,
    github: 'https://github.com/kneeee188',
    web: 'https://medium.com/@make.abundant',
  },
  {
    name: '이성태',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/이성태.webp`,
    linkedin: 'https://www.linkedin.com/in/성태-이-3b2348211/',
    github: 'https://github.com/stae1102',
    web: 'https://dev-scratch.tistory.com/',
  },
  {
    name: '이찬진',
    position: 'UXUI DESIGNER',
    src: `${ORGANIZER_IMAGE_BASE}/이찬진.webp`,
    github: 'https://github.com/ImNM',
    web: 'https://devnm.tistory.com/',
  },
];
