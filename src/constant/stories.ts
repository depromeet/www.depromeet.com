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
    name: '[Interview] 사용자로부터 해답을 찾아나가는 수영 기록 서비스, Swimie',
    url: 'https://depromeet.medium.com/interview-사용자로부터-해답을-찾아나가는-수영-기록-서비스-swimie-82cdc6c66c23',
    image: '/images/17th/review/review_1.png',
  },
  {
    name: '[Interview] 아이디어 검증부터 마케팅 운영까지: 반려동물 커뮤니티 서비스, 왈왈',
    url: 'https://depromeet.medium.com/interview-반려동물-커뮤니티-서비스-왈왈-이야기-14cb964b48d5',
    image: '/images/17th/review/review_2.png',
  },
  {
    name: '[Interview] 문제의 본질을 찾아서: 야구장 시야 서비스, SPOT!',
    url: 'https://depromeet.medium.com/interview-문제의-본질을-찾아서-야구장-시야-서비스-spot-43a6acb18460',
    image: '/images/17th/review/review_3.png',
  },
  {
    name: '디프만 16기 브랜딩 이야기',
    url: 'https://depromeet.medium.com/디프만-16기-브랜딩-이야기-ce81add8856f',
    image: '/images/17th/review/review_4.png',
  },
  {
    name: '디프만 16기 디퍼 모집 이야기 (feat. 나인하이어)',
    url: 'https://depromeet.medium.com/디프만-16기-디퍼-모집-이야기-feat-나인하이어-66fcd5da1a45',
    image: '/images/17th/review/review_5.png',
  },
  {
    name: '딥다이브 여정의 시작, 디프만 16기 OT 후기',
    url: 'https://depromeet.medium.com/딥다이브-여정의-시작-디프만-16기-ot-후기-7bb96e7dd9f5',
    image: '/images/17th/review/review_6.png',
  },
  {
    name: '디프만의 첫 컨퍼런스, 디프콘',
    url: 'https://depromeet.medium.com/디프만의-첫-컨퍼런스-디프콘-b32bd468a890',
    image: '/images/17th/review/review_7.png',
  },
  {
    name: '디프만의 꽃, UT! 1차와 2차 UT 비교 분석',
    url: 'https://depromeet.medium.com/디프만의-꽃-ut-1차와-2차-ut-비교-분석-dd98354f6610',
    image: '/images/17th/review/review_8.png',
  },
  {
    name: '디프만 해커톤, 집중의 시간과 프로젝트 완성도 높이기',
    url: 'https://depromeet.medium.com/디프만-해커톤-집중의-시간과-프로젝트-완성도-높이기-2db25aaa8c06',
    image: '/images/17th/review/review_9.png',
  },
  {
    name: '따뜻한 연결, 디프만 커피챗 이야기',
    url: 'https://depromeet.medium.com/따뜻한-연결-디프만-커피챗-이야기-6b46c9007406',
    image: '/images/17th/review/review_10.png',
  },
  {
    name: '우리의 아이디어를 현실로, 디프만 런칭데이 현장 스케치',
    url: 'https://depromeet.medium.com/우리의-아이디어를-현실로-디프만-런칭데이-현장-스케치-b6ddc337e2a1',
    image: '/images/17th/review/review_11.png',
  },
  {
    name: '디프만 16기 16주의 활동 그 마지막, 최종 발표.',
    url: 'https://depromeet.medium.com/디프만-16기-16주의-활동-그-마지막-최종-발표-d3e8fd1b763d',
    image: '/images/17th/review/review_12.png',
  },
  {
    name: '[Interwiew] 모두에게 만족스러운 중간 지점을 찾아서 : 중간 지점 탐색 서비스, 콕(kok)',
    url: 'https://depromeet.medium.com/interwiew-%EB%AA%A8%EB%91%90%EC%97%90%EA%B2%8C-%EB%A7%8C%EC%A1%B1%EC%8A%A4%EB%9F%AC%EC%9A%B4-%EC%A4%91%EA%B0%84%EC%A7%80%EC%A0%90%EC%9D%84-%EC%B0%BE%EC%95%84%EC%84%9C-%EC%A4%91%EA%B0%84%EC%A7%80%EC%A0%90-%ED%83%90%EC%83%89-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%BD%95-kook-85decf976cff',
    image: '/images/17th/review/review_13.png',
  },
  {
    name: '[Interview]기록부터 성장까지 한눈에 : 클라이밍 영상 기록 서비스, Clog(클로그)',
    url: 'https://depromeet.medium.com/interview-%EA%B8%B0%EB%A1%9D%EB%B6%80%ED%84%B0-%EC%84%B1%EC%9E%A5%EA%B9%8C%EC%A7%80-%ED%95%9C%EB%88%88%EC%97%90-%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D-%EC%98%81%EC%83%81-%EA%B8%B0%EB%A1%9D-%EC%84%9C%EB%B9%84%EC%8A%A4-clog-%ED%81%B4%EB%A1%9C%EA%B7%B8-54c8e930a21b',
    image: '/images/17th/review/review_14.png',
  },
  {
    name: '[Interview] 택시비 아끼는 유일무이 막차 알림 서비스 : 앗차(ATCHA)',
    url: 'https://depromeet.medium.com/interview-%ED%83%9D%EC%8B%9C%EB%B9%84-%EC%95%84%EB%81%BC%EB%8A%94-%EC%9C%A0%EC%9D%BC%EB%AC%B4%EC%9D%B4-%EB%A7%89%EC%B0%A8-%EC%95%8C%EB%A6%BC-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%95%97%EC%B0%A8-atcha-e311292a47cb',
    image: '/images/17th/review/review_15.png',
  },
];
