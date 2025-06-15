export type StoryItemType = {
  name: string;
  /**
   * 연결 링크
   */
  url: string;
  /**
   * 썸네일 이미지
   */
  image: string;
};

export const STORIES: StoryItemType[] = [
  {
    name: '[Interview] 디프만은 어떻게 공부할까?(feat. 인프런)',
    url: 'https://dev-won0313.tistory.com/entry/%F0%9F%8E%89%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%ED%9B%84%EA%B8%B0feat%F0%9F%A5%87%EB%8C%80%EC%83%81-%F0%9F%8E%89',
    image: '/images/16th/main/reason/reason_1.png',
  },
  {
    name: '디프만 15기를 시작합니다!',
    url: 'https://www.behance.net/gallery/206508371/(moring)-',
    image: '/images/16th/main/reason/reason_2.png',
  },
  {
    name: "[Interview] 가족 일상 공유 서비스, 삐삐를 개발한 '오잉'팀",
    url: 'https://github.com/depromeet/WalWal-iOS',
    image: '/images/16th/main/reason/reason_3.png',
  },
  {
    name: "[Interview] 토스뱅크 디자이너가 말해주는 'UT'",
    url: 'https://github.com/depromeet/moring-server',
    image: '/images/16th/main/reason/reason_4.png',
  },
  {
    name: '디프만 15기 OT 후기',
    url: 'https://www.behance.net/gallery/207843619/BBOGAK-',
    image: '/images/16th/main/reason/reason_5.png',
  },
  {
    name: '디프만 15기 아이디어 공유 세션',
    url: 'https://github.com/depromeet/WalWal-iOS',
    image: '/images/16th/main/reason/reason_5.png',
  },
];
