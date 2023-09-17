export type ReadMoreLink = {
  type: 'blog' | 'project';
  url: string;
  label: string;
};
export type ReviewItemType = {
  name: string;
  /**
   * 기수
   * ex) 14기
   */
  group: string;
  /**
   * 파트
   * ex) WEB
   */
  part: string;
  summary: string;
  links: ReadMoreLink[];
};

export const REVIEWS: ReviewItemType[] = [
  {
    name: '김윤호',
    group: '13기',
    part: 'WEB',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '강지영',
    group: '13기',
    part: 'WEB',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '변수미',
    group: '13기',
    part: 'WEB',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '박성경',
    group: '13기',
    part: 'DESIGN',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '김채린',
    group: '13기',
    part: 'DESIGN',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '김인해',
    group: '13기',
    part: 'DESIGN',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '진승희',
    group: '13기',
    part: 'DESIGN',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '이제준',
    group: '13기',
    part: 'SERVER',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
      { type: 'project', label: '프로젝트', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
  {
    name: '이서현',
    group: '13기',
    part: 'SERVER',
    summary:
      '디프만은 디자이너와 개발자가 만나 서비스기획부터 론칭까지, 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다. 하나의 프로덕트를 완성하며 성장하는 IT 커뮤니티입니다.',
    links: [
      { type: 'blog', label: '블로그', url: 'https://github.com/depromeet/www.depromeet.com' },
    ],
  },
];
