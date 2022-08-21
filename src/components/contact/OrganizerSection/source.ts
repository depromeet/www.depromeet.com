import { OrganizerImagesKeyType } from '~/constants/images/images';

export interface Organizer {
  imageKey: OrganizerImagesKeyType;
  name: string;
  position: string;

  behance?: string;
  linkedin?: string;
  github?: string;
  web?: string;
}

export const ORGANIZERS: Organizer[] = [
  {
    imageKey: '박소현',
    name: '박소현(회장)',
    position: 'UIUX Designer',
    behance: 'https://www.behance.net/sohyunpark576e',
    linkedin: 'https://www.linkedin.com/in/sohyunpark0319/',
    github: '',
    web: '',
  },
  {
    imageKey: '김동건',
    name: '김동건(부회장)',
    position: 'Backend',
    behance: '',
    linkedin: 'https://www.linkedin.com/in/코딩-극락-776222236/',
    github: 'https://github.com/DongGeon0908',
    web: '',
  },
  {
    imageKey: '김나영',
    name: '김나영',
    position: 'UIUX Designer',
    behance: 'https://www.behance.net/402zzang',
    linkedin: '',
    github: '',
    web: '',
  },
  {
    imageKey: '김민수',
    name: '김민수',
    position: 'Backend',
    behance: '',
    linkedin: 'https://www.linkedin.com/in/minsoozz',
    github: 'https://github.com/minsoozz',
    web: 'https://minsoolog.tistory.com/',
  },
  {
    imageKey: '오혜성',
    name: '오혜성',
    position: 'Web',
    behance: '',
    linkedin: 'https://www.linkedin.com/in/hyesungoh414/',
    github: 'https://github.com/hyesungoh',
    web: 'https://www.hyesungoh.xyz',
  },
  {
    imageKey: '윤영',
    name: '윤영',
    position: 'Backend',
    behance: '',
    linkedin: '',
    github: 'https://github.com/yunyoung1819',
    web: '',
  },
  {
    imageKey: '이성용',
    name: '이성용',
    position: 'Web',
    behance: '',
    linkedin: 'https://www.linkedin.com/in/seongyong-lee',
    github: 'https://github.com/seongyonglee',
    web: '',
  },
  {
    imageKey: '이승희',
    name: '이승희',
    position: 'UIUX Designer',
    behance: 'https://www.behance.net/seunghee555b99',
    linkedin: '',
    github: '',
    web: '',
  },
  {
    imageKey: '임효연',
    name: '임효연',
    position: 'UIUX Designer',
    behance: 'https://www.behance.net/gd054',
    linkedin: 'https://www.linkedin.com/in/효연-임-2a2046231/',
    github: '',
    web: 'https://linktr.ee/gd054',
  },
  {
    imageKey: '정대윤',
    name: '정대윤',
    position: 'Web',
    behance: '',
    linkedin: '',
    github: 'https://github.com/sensecodevalue',
    web: '',
  },
  {
    imageKey: '홍서희',
    name: '홍서희',
    position: 'UIUX Designer',
    behance: 'https://www.behance.net/carinhong',
    linkedin: 'https://www.linkedin.com/in/seohee-hong-ba331a1ab',
    github: '',
    web: '',
  },
];
