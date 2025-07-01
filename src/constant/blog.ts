import { Link } from '~/components/Thumbnail/Thumbnail';

export interface BlogLink extends Omit<Link, 'type'> {
  type: 'Medium' | 'Velog' | 'Tistory' | 'Brunch' | 'Blog';
}
export interface Blog<T> {
  title: string;
  date: string;
  img: string;
  link: BlogLink;
  type: T;
}

type OfficialBlogType = 'session' | 'interview' | 'etc';
type DeeperBlogType = 'project' | 'review';
export type AllBlog = Blog<OfficialBlogType | DeeperBlogType>;

export const DEEPER_BLOG_LIST: Array<Blog<DeeperBlogType>> = [
  {
    title: 'FCM + 잠금화면 으로 제공하는 정확한 막차 알림!',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_13.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/7',
    },
    type: 'project',
  },
  {
    title: '[SPURT] SPURT를 개발하면서 최적화하려고 했던 부분들',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_4.png',
    link: {
      type: 'Tistory',
      href: 'https://andantej99.tistory.com/71',
    },
    type: 'project',
  },
  {
    title: '남들이 하니까가 아닌 Compose & MVI, 이유 있는 선택',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_12.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/6',
    },
    type: 'project',
  },
  {
    title: 'SparseArray를 활용하여 효율적인 디자인시스템을 구축해보자!',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_11.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/5',
    },
    type: 'project',
  },
  {
    title: '근처에 있는 사용자 조회 기능: Redis Geospatial가 적합한 선택일까?',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_1.webp',
    link: {
      type: 'Tistory',
      href: 'https://hoya324.tistory.com/entry/%EA%B7%BC%EC%B2%98%EC%97%90-%EC%9E%88%EB%8A%94-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A1%B0%ED%9A%8C-%EA%B8%B0%EB%8A%A5-Redis-Geospatial%EA%B0%80-%EC%A0%81%ED%95%A9%ED%95%9C-%EC%84%A0%ED%83%9D%EC%9D%BC%EA%B9%8C',
    },
    type: 'project',
  },
  {
    title: '[DPM] 디프만 16기 ‘CRITIX’ FE 팀이 겪은 문제들, 이렇게 개선했습니다.',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_14.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@dpm1piece/dpm-%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-critix-fe-%ED%8C%80%EC%9D%B4-%EA%B2%AA%EC%9D%80-%EB%AC%B8%EC%A0%9C%EB%93%A4-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EA%B0%9C%EC%84%A0%ED%96%88%EC%8A%B5%EB%8B%88%EB%8B%A4-59fdfd008ab2',
    },
    type: 'project',
  },
  {
    title: '[DPM] 디자이너 포트폴리오 서비스 Critix 서버는 포폴 피드백을 어떻게 구현했을까?!',
    date: '25.04.18',
    img: '/images/16th/blog/deeper/16th_project_14.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@dpm1piece/dpm-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%84%9C%EB%B9%84%EC%8A%A4-critix%EB%8A%94-%ED%8F%AC%ED%8F%B4-%ED%94%BC%EB%93%9C%EB%B0%B1%EC%9D%84-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%98%84%ED%96%88%EC%9D%84%EA%B9%8C-e0d981a7c96a',
    },
    type: 'project',
  },
  {
    title: '쌩CSS에서 framer-motion으로 갈아타기',
    date: '25.04.15',
    img: '/images/16th/blog/deeper/16th_project_1.webp',
    link: {
      type: 'Blog',
      href: 'https://0ju428-blog.vercel.app/depromeet-framer-motion',
    },
    type: 'project',
  },
  {
    title: '분산 서버에서 푸시 알림 중복 전송 문제 해결기 3편',
    date: '25.04.13',
    img: '/images/16th/blog/deeper/16th_project_10.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/4',
    },
    type: 'project',
  },
  {
    title:
      '[ React Native | Nextjs | WebView | IOS ] 웹 프로젝트를 앱처럼! RN으로 감싼 Next.js, 앱스토어 출시기',
    date: '25.04.13',
    img: '/images/16th/blog/deeper/16th_project_4.png',
    link: {
      type: 'Tistory',
      href: 'https://supersett-diary.tistory.com/304',
    },
    type: 'project',
  },
  {
    title: '분산 서버에서 푸시 알림 중복 전송 문제 해결기 2편',
    date: '25.04.12',
    img: '/images/16th/blog/deeper/16th_project_9.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/3',
    },
    type: 'project',
  },
  {
    title: '분산 서버에서 푸시 알림 중복 전송 문제 해결기 1편',
    date: '25.04.12',
    img: '/images/16th/blog/deeper/16th_project_8.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/2',
    },
    type: 'project',
  },
  {
    title: '지하철 막차 시간 가져오기(feat. 공공데이터)',
    date: '25.04.11',
    img: '/images/16th/blog/deeper/16th_project_7.png',
    link: {
      type: 'Tistory',
      href: 'https://depromeet-atcha.tistory.com/1',
    },
    type: 'project',
  },
  {
    title: '[4팀 Server] KOK 서비스의 만남장소 추천 알고리즘을 알아보자.',
    date: '25.04.10',
    img: '/images/16th/blog/deeper/16th_project_6.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@lms990427/%EC%84%9C%EB%B2%84-kok-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9D%98-%EB%A7%8C%EB%82%A8%EC%9E%A5%EC%86%8C-%EC%B6%94%EC%B2%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-7c2333c81938',
    },
    type: 'project',
  },
  {
    title: '[디프만 16기] 기술스택 선정 및 프로젝트 설계 과정',
    date: '25.04.06',
    img: '/images/16th/blog/deeper/16th_project_2.png',
    link: {
      type: 'Velog',
      href: 'https://velog.io/@junlight94/%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D-%EC%84%A0%EC%A0%95-%EB%B0%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%A4%EA%B3%84-%EA%B3%BC%EC%A0%95',
    },
    type: 'project',
  },
  {
    title: 'iOS 앱에서 Apple 로그인과 탈퇴(OIDC + PKCE 기반) 완전 정복',
    date: '25.04.04',
    img: '/images/16th/blog/deeper/16th_project_3.png',
    link: {
      type: 'Velog',
      href: 'https://velog.io/@ghrltjdtprbs/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%B1-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84-OIDC-PKCE',
    },
    type: 'project',
  },
  {
    title: 'Pn룰 도입기',
    date: '25.03.29',
    img: '/images/16th/blog/deeper/16th_project_5.png',
    link: {
      type: 'Blog',
      href: 'https://heojooon.dev/post/pn-rule',
    },
    type: 'project',
  },
  {
    title: '디프만(DEPROMEET) 16기 아이디어 정하기',
    date: '25.02.05',
    img: '/images/16th/blog/deeper/review_13.png',
    link: {
      type: 'Tistory',
      href: 'https://seo-jyun-0731.tistory.com/36',
    },
    type: 'review',
  },
  {
    title: '디프만(DEPROMEET) 16기 디자이너 최종 합격 후기',
    date: '25.01.31',
    img: '/images/16th/blog/deeper/review_12.png',
    link: {
      type: 'Tistory',
      href: 'https://seo-jyun-0731.tistory.com/35',
    },
    type: 'review',
  },
  {
    title: '🎉디프만 15기 후기!(feat.🥇대상 )🎉',
    date: '24.09.21',
    img: '/images/16th/blog/deeper/review_9.png',
    link: {
      type: 'Tistory',
      href: 'https://dev-won0313.tistory.com/entry/%F0%9F%8E%89%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%ED%9B%84%EA%B8%B0feat%F0%9F%A5%87%EB%8C%80%EC%83%81-%F0%9F%8E%89',
    },
    type: 'review',
  },
  {
    title: '야구장 좌석 시야 서비스 SPOT! 서버 파트의 여정',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_14.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@wjdwnsdnjs13/%EC%95%BC%EA%B5%AC%EC%9E%A5-%EC%A2%8C%EC%84%9D-%EC%8B%9C%EC%95%BC-%EC%84%9C%EB%B9%84%EC%8A%A4-spot-%EC%84%9C%EB%B2%84-%ED%8C%8C%ED%8A%B8%EC%9D%98-%EC%97%AC%EC%A0%95-682a2904d78d',
    },
    type: 'project',
  },
  {
    title: '[Server] 왈왈 배포는 어떻게 구성되어 있는가??',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_12.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@olderstonebed/server-%EC%99%88%EC%99%88-%EB%B0%B0%ED%8F%AC%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%EC%84%B1%EB%90%98%EC%96%B4-%EC%9E%88%EB%8A%94%EA%B0%80-3ce13fb65c67',
    },
    type: 'project',
  },
  {
    title: '[Server] 왈왈 피드 스크롤은 어떻게 구현했을까?',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_11.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@olderstonebed/server-%EC%99%88%EC%99%88-%ED%94%BC%EB%93%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%98%84%ED%96%88%EC%9D%84%EA%B9%8C-546bbb5f44c6',
    },
    type: 'project',
  },
  {
    title: '[뽀각] 취준 정보 관리를 쉽고 간편하게! 뽀각 개발팀의 트러블 슈팅',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_10.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@parksejoon313/%EB%BD%80%EA%B0%81-%EC%B7%A8%EC%A4%80-%EC%A0%95%EB%B3%B4-%EA%B4%80%EB%A6%AC%EB%A5%BC-%EC%89%BD%EA%B3%A0-%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C-%EB%BD%80%EA%B0%81-%EA%B0%9C%EB%B0%9C%ED%8C%80%EC%9D%98-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-d3953507acca',
    },
    type: 'project',
  },
  {
    title: 'SpringBoot3.2 이후 버전에서 @Valid가 동작하지 않을 때',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_8.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@ummdev03/springboot3-2-%EC%9D%B4%ED%9B%84-%EB%B2%84%EC%A0%84%EC%97%90%EC%84%9C-valid%EA%B0%80-%EB%8F%99%EC%9E%91%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%84-%EB%95%8C-86969320cc0f',
    },
    type: 'project',
  },
  {
    title: 'MySQL RDS Slow Query Slack으로 알람 보내기',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_7.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@king2dwellsang/mysql-rds-slow-query-slack%EC%9C%BC%EB%A1%9C-%EC%95%8C%EB%9E%8C-%EB%B3%B4%EB%82%B4%EA%B8%B0-e6384b0b3ccd',
    },
    type: 'project',
  },
  {
    title: 'Spring 카카오, 구글, 애플 소셜로그인 연결 끊기',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_6.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@king2dwellsang/%EC%84%9C%EB%B2%84-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EA%B5%AC%EA%B8%80-%EC%95%A0%ED%94%8C-%EC%86%8C%EC%85%9C%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%97%B0%EA%B2%B0-%EB%81%8A%EA%B8%B0-2dcbde56d83f',
    },
    type: 'project',
  },
  {
    title: '[웹] PandaCSS로 스타일링 하기',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_5.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@king2dwellsang/%EC%9B%B9-pandacss%EB%A1%9C-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%ED%95%98%EA%B8%B0-a68bea451cad',
    },
    type: 'project',
  },
  {
    title: '[웹] SVG를 활용한 물결 컴포넌트 구현',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_4.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@king2dwellsang/%EC%9B%B9-svg%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%AC%BC%EA%B2%B0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B5%AC%ED%98%84-897cc19c6e43',
    },
    type: 'project',
  },
  {
    title: '레이어 서비스의 SPA에서 동적 오픈그래프 대응해보기',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_2.png',
    link: {
      type: 'Tistory',
      href: 'https://klmhyeonwooo.tistory.com/139',
    },
    type: 'project',
  },
  {
    title: '서비스 layer 개발 이야기',
    date: '24.09.13',
    img: '/images/16th/blog/deeper/project_1.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@mhl98/%ED%9A%8C%EA%B3%A0-%EC%84%9C%EB%B9%84%EC%8A%A4-layer-%EA%B0%9C%EB%B0%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0-4fa3a725dc6d',
    },
    type: 'project',
  },
  {
    title: '⚾디프만 육지행팀의 SPOT! Android 회고⚾',
    date: '24.09.12',
    img: '/images/16th/blog/deeper/project_15.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@sgsk88/%EB%94%94%ED%94%84%EB%A7%8C-%EC%9C%A1%EC%A7%80%ED%96%89%ED%8C%80%EC%9D%98-spot-android-%ED%9A%8C%EA%B3%A0-15336d95df1f',
    },
    type: 'project',
  },
  {
    title: '[Server] FCM 푸시 알림 기능: SQS와 Lambda를 활용한 리팩토링',
    date: '24.09.09',
    img: '/images/16th/blog/deeper/project_13.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@olderstonebed/fcm-%ED%91%B8%EC%8B%9C-%EC%95%8C%EB%A6%BC-%EA%B8%B0%EB%8A%A5-sqs%EC%99%80-lambda%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-1de097bee0ae',
    },
    type: 'project',
  },
  {
    title:
      '[디프만 15기 X 인프런 스터디] Java/Spring 테스트를 추가하고 싶은 개발자들의 오답노트 스터디 후기',
    date: '24.09.06',
    img: '/images/16th/blog/deeper/review_10.png',
    link: {
      type: 'Velog',
      href: 'https://velog.io/@uiurihappy/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-X-%EC%9D%B8%ED%94%84%EB%9F%B0-%EC%8A%A4%ED%84%B0%EB%94%94-JavaSpring-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%93%A4%EC%9D%98-%EC%98%A4%EB%8B%B5%EB%85%B8%ED%8A%B8',
    },
    type: 'review',
  },
  {
    title: '[디프만 15기] 모링은 Ncloud(NCP)를 이렇게 활용했어요',
    date: '24.09.03',
    img: '/images/16th/blog/deeper/project_9.png',
    link: {
      type: 'Tistory',
      href: 'https://kkjsw17.tistory.com/15',
    },
    type: 'project',
  },
  {
    title: '레이어 서비스는 퍼널을 어떻게 관리했을까요?',
    date: '24.09.01',
    img: '/images/16th/blog/deeper/project_3.png',
    link: {
      type: 'Tistory',
      href: 'https://klmhyeonwooo.tistory.com/138',
    },
    type: 'project',
  },
  {
    title:
      '디프만 - 인프런 스터디 후기 (feat. Java/Spring 테스트를 추가하고 싶은 개발자들의 오답노트)',
    date: '24.08.30',
    img: '/images/16th/blog/deeper/review_6.png',
    link: {
      type: 'Tistory',
      href: 'https://dev-won0313.tistory.com/entry/%EB%94%94%ED%94%84%EB%A7%8C-%EC%9D%B8%ED%94%84%EB%9F%B0-%EC%8A%A4%ED%84%B0%EB%94%94-%ED%9B%84%EA%B8%B0-feat-JavaSpring-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%93%A4%EC%9D%98-%EC%98%A4%EB%8B%B5%EB%85%B8%ED%8A%B8',
    },
    type: 'review',
  },
  {
    title: '[디프만] 15기 Server 파트 최종 합격 후기',
    date: '24.06.11',
    img: '/images/16th/blog/deeper/review_7.png',
    link: {
      type: 'Tistory',
      href: 'https://hogwart-scholars.tistory.com/entry/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-Server-%ED%8C%8C%ED%8A%B8-%EC%B5%9C%EC%A2%85-%ED%95%A9%EA%B2%A9-%ED%9B%84%EA%B8%B0',
    },
    type: 'review',
  },
  {
    title: '🥳[디프만] 15기 서버 백엔드 최종 합격 후기 및 OT🥳',
    date: '24.06.08',
    img: '/images/16th/blog/deeper/review_8.png',
    link: {
      type: 'Tistory',
      href: 'https://dev-won0313.tistory.com/entry/%F0%9F%A5%B3%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%EC%84%9C%EB%B2%84-%EC%B5%9C%EC%A2%85-%ED%95%A9%EA%B2%A9-%EB%B0%8F-OT%F0%9F%A5%B3',
    },
    type: 'review',
  },
  {
    title: '[디프만 15기] 서류 지원 및 면접 후기 (+ 최종 합격)',
    date: '24.05.26',
    img: '/images/16th/blog/deeper/review_11.png',
    link: {
      type: 'Tistory',
      href: 'https://summermong.tistory.com/512',
    },
    type: 'review',
  },
  {
    title: '디프만 14기 회고',
    date: '24.02.27',
    img: '/images/16th/blog/deeper/review_1.png',
    link: {
      type: 'Tistory',
      href: 'https://dkrnfls.tistory.com/533',
    },
    type: 'review',
  },
  {
    title: '[디프만] 14기 서버 활동 회고',
    date: '24.02.24',
    img: '/images/16th/blog/deeper/review_2.png',
    link: {
      type: 'Velog',
      href: 'https://velog.io/@uiurihappy/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%EC%84%9C%EB%B2%84-%ED%9A%8C%EA%B3%A0',
    },
    type: 'review',
  },
  {
    title: '[디프만] 다 끝난 14기 서버 합격 후기',
    date: '24.02.20',
    img: '/images/16th/blog/deeper/review_5.png',
    link: {
      type: 'Velog',
      href: 'https://velog.io/@uiurihappy/%EB%94%94%ED%94%84%EB%A7%8C-%EB%8B%A4-%EB%81%9D%EB%82%9C-14%EA%B8%B0-%EC%84%9C%EB%B2%84-%ED%95%A9%EA%B2%A9-%ED%9B%84%EA%B8%B0',
    },
    type: 'review',
  },
  {
    title: '디프만 Ncloud 사용 후기',
    date: '24.01.27',
    img: '/images/16th/blog/deeper/review_3.png',
    link: {
      type: 'Tistory',
      href: 'https://mywnajsldkf.tistory.com/112',
    },
    type: 'review',
  },
  {
    title: '[디프만 14기 x 인프런 CS 스터디] CS 완전정복 스터디 수강일기',
    date: '24.01.07',
    img: '/images/16th/blog/deeper/16th_placeholder.svg',
    link: {
      type: 'Tistory',
      href: 'https://mywnajsldkf.tistory.com/111',
    },
    type: 'review',
  },
  {
    title: '[디프만] 새로운 도전 디프만 14기 서버 개발 합격',
    date: '23.12.31',
    img: '/images/16th/blog/deeper/review_4.png',
    link: {
      type: 'Tistory',
      href: 'https://hoonsb.tistory.com/93',
    },
    type: 'review',
  },
];

export const OFFICIAL_BLOG_LIST: Array<Blog<OfficialBlogType>> = [
  {
    title: '[Interview] 택시비 아끼는 유일무이 막차 알림 서비스 : 앗차(ATCHA)',
    date: '25.06.26',
    img: '/images/17th/blog/medium/16th_atcha.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%ED%83%9D%EC%8B%9C%EB%B9%84-%EC%95%84%EB%81%BC%EB%8A%94-%EC%9C%A0%EC%9D%BC%EB%AC%B4%EC%9D%B4-%EB%A7%89%EC%B0%A8-%EC%95%8C%EB%A6%BC-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%95%97%EC%B0%A8-atcha-e311292a47cb',
    },
    type: 'interview',
  },
  {
    title: '[Interview]기록부터 성장까지 한눈에 : 클라이밍 영상 기록 서비스, Clog(클로그)',
    date: '25.06.25',
    img: '/images/17th/blog/medium/16th_clog.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EA%B8%B0%EB%A1%9D%EB%B6%80%ED%84%B0-%EC%84%B1%EC%9E%A5%EA%B9%8C%EC%A7%80-%ED%95%9C%EB%88%88%EC%97%90-%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D-%EC%98%81%EC%83%81-%EA%B8%B0%EB%A1%9D-%EC%84%9C%EB%B9%84%EC%8A%A4-clog-%ED%81%B4%EB%A1%9C%EA%B7%B8-54c8e930a21b',
    },
    type: 'interview',
  },
  {
    title: '[Interwiew] 모두에게 만족스러운 중간 지점을 찾아서 : 중간 지점 탐색 서비스, 콕(kok)',
    date: '25.06.23',
    img: '/images/17th/blog/medium/16th_kok.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interwiew-%EB%AA%A8%EB%91%90%EC%97%90%EA%B2%8C-%EB%A7%8C%EC%A1%B1%EC%8A%A4%EB%9F%AC%EC%9A%B4-%EC%A4%91%EA%B0%84%EC%A7%80%EC%A0%90%EC%9D%84-%EC%B0%BE%EC%95%84%EC%84%9C-%EC%A4%91%EA%B0%84%EC%A7%80%EC%A0%90-%ED%83%90%EC%83%89-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%BD%95-kook-85decf976cff',
    },
    type: 'interview',
  },
  {
    title: '디프만 16기 16주의 활동 그 마지막, 최종 발표.',
    date: '25.05.10',
    img: '/images/16th/blog/medium/16th_final.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-16%EC%A3%BC%EC%9D%98-%ED%99%9C%EB%8F%99-%EA%B7%B8-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%B5%9C%EC%A2%85-%EB%B0%9C%ED%91%9C-d3e8fd1b763d',
    },
    type: 'session',
  },
  {
    title: '우리의 아이디어를 현실로, 디프만 런칭데이 현장 스케치',
    date: '25.05.03',
    img: '/images/16th/blog/medium/16th_launchingday.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EC%9A%B0%EB%A6%AC%EC%9D%98-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4%EB%A5%BC-%ED%98%84%EC%8B%A4%EB%A1%9C-%EB%94%94%ED%94%84%EB%A7%8C-%EB%9F%B0%EC%B9%AD%EB%8D%B0%EC%9D%B4-%ED%98%84%EC%9E%A5-%EC%8A%A4%EC%BC%80%EC%B9%98-b6ddc337e2a1',
    },
    type: 'session',
  },
  {
    title: '따뜻한 연결, 디프만 커피챗 이야기',
    date: '25.04.26',
    img: '/images/16th/blog/medium/16th_coffeechat.png',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%B0%EB%9C%BB%ED%95%9C-%EC%97%B0%EA%B2%B0-%EB%94%94%ED%94%84%EB%A7%8C-%EC%BB%A4%ED%94%BC%EC%B1%97-%EC%9D%B4%EC%95%BC%EA%B8%B0-6b46c9007406',
    },
    type: 'etc',
  },
  {
    title: '디프만 해커톤, 집중의 시간과 프로젝트 완성도 높이기',
    date: '25.04.02',
    img: '/images/16th/blog/medium/16th_hackathon.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%A7%91%EC%A4%91%EC%9D%98-%EC%8B%9C%EA%B0%84%EA%B3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%99%84%EC%84%B1%EB%8F%84-%EB%86%92%EC%9D%B4%EA%B8%B0-2db25aaa8c06',
    },
    type: 'session',
  },
  {
    title: '디프만의 꽃, UT! 1차와 2차 UT 비교 분석',
    date: '25.03.09',
    img: '/images/16th/blog/medium/16th_ut.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%98-%EA%BD%83-ut-1%EC%B0%A8%EC%99%80-2%EC%B0%A8-ut-%EB%B9%84%EA%B5%90-%EB%B6%84%EC%84%9D-dd98354f6610',
    },
    type: 'session',
  },
  {
    title: '디프만의 첫 컨퍼런스, 디프콘',
    date: '25.02.17',
    img: '/images/16th/blog/medium/16th_deepcon.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%98-%EC%B2%AB-%EC%BB%A8%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EB%94%94%ED%94%84%EC%BD%98-b32bd468a890',
    },
    type: 'session',
  },
  {
    title: '딥다이브 여정의 시작, 디프만 16기 OT 후기',
    date: '25.01.26',
    img: '/images/16th/blog/medium/16th_ot.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C-%EC%97%AC%EC%A0%95%EC%9D%98-%EC%8B%9C%EC%9E%91-%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-ot-%ED%9B%84%EA%B8%B0-7bb96e7dd9f5',
    },
    type: 'session',
  },
  {
    title: '디프만 16기 디퍼 모집 이야기 (feat. 나인하이어)',
    date: '25.01.23',
    img: '/images/16th/blog/medium/16th_ninehire.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-%EB%94%94%ED%8D%BC-%EB%AA%A8%EC%A7%91-%EC%9D%B4%EC%95%BC%EA%B8%B0-feat-%EB%82%98%EC%9D%B8%ED%95%98%EC%9D%B4%EC%96%B4-66fcd5da1a45',
    },
    type: 'etc',
  },
  {
    title: '디프만 16기 브랜딩 이야기',
    date: '25.01.15',
    img: '/images/16th/blog/medium/16th_branding.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-%EB%B8%8C%EB%9E%9C%EB%94%A9-%EC%9D%B4%EC%95%BC%EA%B8%B0-ce81add8856f',
    },
    type: 'etc',
  },
  {
    title: '[Interview] 문제의 본질을 찾아서: 야구장 시야 서비스, SPOT!',
    date: '24.12.20',
    img: '/images/16th/blog/medium/16th_spot.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EB%AC%B8%EC%A0%9C%EC%9D%98-%EB%B3%B8%EC%A7%88%EC%9D%84-%EC%B0%BE%EC%95%84%EC%84%9C-%EC%95%BC%EA%B5%AC%EC%9E%A5-%EC%8B%9C%EC%95%BC-%EC%84%9C%EB%B9%84%EC%8A%A4-spot-43a6acb18460',
    },
    type: 'interview',
  },
  {
    title: '[Interview] 아이디어 검증부터 마케팅 운영까지: 반려동물 커뮤니티 서비스, 왈왈',
    date: '24.12.13',
    img: '/images/16th/blog/medium/16th_walwal.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%99%88%EC%99%88-%EC%9D%B4%EC%95%BC%EA%B8%B0-14cb964b48d5',
    },
    type: 'interview',
  },
  {
    title: '[Interview] 사용자로부터 해답을 찾아나가는 수영 기록 서비스, Swimie',
    date: '24.12.07',
    img: '/images/16th/blog/medium/16th_swimie.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EC%82%AC%EC%9A%A9%EC%9E%90%EB%A1%9C%EB%B6%80%ED%84%B0-%ED%95%B4%EB%8B%B5%EC%9D%84-%EC%B0%BE%EC%95%84%EB%82%98%EA%B0%80%EB%8A%94-%EC%88%98%EC%98%81-%EA%B8%B0%EB%A1%9D-%EC%84%9C%EB%B9%84%EC%8A%A4-swimie-82cdc6c66c23',
    },
    type: 'interview',
  },
  {
    title: '디프만 16기 모집을 시작합니다!',
    date: '24.12.03',
    img: '/images/16th/blog/medium/16th_ recruitment.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@depromeet/%EB%94%94%ED%94%84%EB%A7%8C-16%EA%B8%B0-%EB%AA%A8%EC%A7%91%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-a7b7b0154905',
    },
    type: 'session',
  },
  {
    title: '[Interview] 디프만 15기: 성장과 협업, 그리고 열정의 이야기',
    date: '24.12.03',
    img: '/images/16th/blog/medium/16th_growth.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@depromeet/interview-%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%EC%84%B1%EC%9E%A5%EA%B3%BC-%ED%98%91%EC%97%85-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%97%B4%EC%A0%95%EC%9D%98-%EC%9D%B4%EC%95%BC%EA%B8%B0-29a3607b926e',
    },
    type: 'interview',
  },
  {
    title: '[Interview] 다음 기수를 기다리며, 운영진이 들려주는 디프만 이야기',
    date: '24.11.01',
    img: '/images/16th/blog/medium/16th_management.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/@depromeet/interview-%EB%8B%A4%EC%9D%8C-%EA%B8%B0%EC%88%98%EB%A5%BC-%EA%B8%B0%EB%8B%A4%EB%A6%AC%EB%A9%B0-%EC%9A%B4%EC%98%81%EC%A7%84%EC%9D%B4-%EB%93%A4%EB%A0%A4%EC%A3%BC%EB%8A%94-%EB%94%94%ED%94%84%EB%A7%8C-%EC%9D%B4%EC%95%BC%EA%B8%B0-97da9799446e',
    },
    type: 'interview',
  },
  {
    title: '‘몰입’을 그려낸 15기 디프만의 브랜딩 스토리',
    date: '24.09.22',
    img: '/images/16th/blog/medium/15th_branding.webp',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%AA%B0%EC%9E%85%EC%9D%84-%EA%B7%B8%EB%A0%A4%EB%82%B8-15%EA%B8%B0-%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%98-%EB%B8%8C%EB%9E%9C%EB%94%A9-%EC%8A%A4%ED%86%A0%EB%A6%AC-a6b58e5de058',
    },
    type: 'etc',
  },
  {
    title: '디프만 카페 지도를 소개합니다! (feat. 개발자, 디자이너를 위한 작업하기 좋은 카페 추천)',
    date: '24.09.01',
    img: '/images/16th/blog/medium/16th_cafe.svg',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-%EC%B9%B4%ED%8E%98-%EC%A7%80%EB%8F%84%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-feat-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%9E%91%EC%97%85%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-54ed224fc134',
    },
    type: 'etc',
  },
  {
    title: '인프콘 부스 준비에 진심인 동아리가 있다?',
    date: '24.08.01',
    img: '/images/16th/blog/medium/16th_infcon.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EC%9D%B8%ED%94%84%EC%BD%98-%EB%B6%80%EC%8A%A4-%EC%A4%80%EB%B9%84%EC%97%90-%EC%A7%84%EC%8B%AC%EC%9D%B8-%EB%8F%99%EC%95%84%EB%A6%AC%EA%B0%80-%EC%9E%88%EB%8B%A4-e4440097d9f9',
    },
    type: 'session',
  },
  {
    title: '2024 애플 디자인 세션 후기',
    date: '24.08.03',
    img: '/images/16th/blog/medium/16th_placeholder.svg',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/2024-%EC%95%A0%ED%94%8C-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%84%B8%EC%85%98-%ED%9B%84%EA%B8%B0-a8c7de8d7efe',
    },
    type: 'etc',
  },
  {
    title: '디프만 15기 모집 비하인드 (feat. 나인하이어)',
    date: '24.07.29',
    img: '/images/16th/blog/medium/15th_ninehire.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%EB%AA%A8%EC%A7%91-%EB%B9%84%ED%95%98%EC%9D%B8%EB%93%9C-feat-%EB%82%98%EC%9D%B8%ED%95%98%EC%9D%B4%EC%96%B4-5dec8d21ea6a',
    },
    type: 'etc',
  },
  {
    title: '디프만 15기 아이디어 공유 세션',
    date: '24.07.14',
    img: '/images/16th/blog/medium/16th_idea.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EA%B3%B5%EC%9C%A0-%EC%84%B8%EC%85%98-f6e8de17b93d',
    },
    type: 'session',
  },
  {
    title: '디프만 15기 OT 후기',
    date: '24.06.29',
    img: '/images/16th/blog/medium/16th_ot.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0-ot-%ED%9B%84%EA%B8%B0-01480c66a6b0',
    },
    type: 'session',
  },
  {
    title: '[Interview] 토스뱅크 디자이너가 말해주는 ‘UT',
    date: '24.06.26',
    img: '/images/16th/blog/medium/16th_toss_designer.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%ED%86%A0%EC%8A%A4%EB%B1%85%ED%81%AC-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EA%B0%80-%EB%A7%90%ED%95%B4%EC%A3%BC%EB%8A%94-ut-15c59d39335a',
    },
    type: 'interview',
  },
  {
    title: '디프만 15기를 시작합니다!',
    date: '24.06.03',
    img: '/images/16th/blog/medium/16th_start15th.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-15%EA%B8%B0%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4-5e2d53ddef96',
    },
    type: 'session',
  },
  {
    title: '[Interview] 디프만은 어떻게 공부할까?(feat. 인프런)',
    date: '24.05.31',
    img: '/images/16th/blog/medium/16th_inflearn_study.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EB%94%94%ED%94%84%EB%A7%8C%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B3%B5%EB%B6%80%ED%95%A0%EA%B9%8C-feat-%EC%9D%B8%ED%94%84%EB%9F%B0-9b1c235e9e7f',
    },
    type: 'interview',
  },
  {
    title: '[Interview] 가족 일상 공유 서비스, 삐삐를 개발한 ‘오잉’팀',
    date: '24.04.28',
    img: '/images/16th/blog/medium/16th_product.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/interview-%EA%B0%80%EC%A1%B1-%EC%9D%BC%EC%83%81-%EA%B3%B5%EC%9C%A0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%82%90%EC%82%90%EB%A5%BC-%EA%B0%9C%EB%B0%9C%ED%95%9C-%EC%98%A4%EC%9E%89%ED%8C%80-694e875973c5',
    },
    type: 'interview',
  },
  {
    title: '디프만 14기X인프런, 인프런 스터디를 통한 레벨업!',
    date: '24.03.03',
    img: '/images/16th/blog/medium/14th_inflearn.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0x%EC%9D%B8%ED%94%84%EB%9F%B0-%EC%9D%B8%ED%94%84%EB%9F%B0-%EC%8A%A4%ED%84%B0%EB%94%94%EB%A5%BC-%ED%86%B5%ED%95%9C-%EB%A0%88%EB%B2%A8%EC%97%85-0e1614af8299',
    },
    type: 'etc',
  },
  {
    title: '디프만 14기 최종발표, 성공적인 마무리',
    date: '24.03.03',
    img: '/images/16th/blog/medium/16th_last.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C-%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9D%B8-%EB%A7%88%EB%AC%B4%EB%A6%AC-dc3aa57c01b7',
    },
    type: 'session',
  },
  {
    title: '14주만에 런칭 성공률 100%를 달성한 비결, 런칭데이!',
    date: '24.02.17',
    img: '/images/16th/blog/medium/16th_lunching.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/14%EC%A3%BC%EB%A7%8C%EC%97%90-%EB%9F%B0%EC%B9%AD-%EC%84%B1%EA%B3%B5%EB%A5%A0-100-%EB%A5%BC-%EB%8B%AC%EC%84%B1%ED%95%9C-%EB%B9%84%EA%B2%B0-%EB%9F%B0%EC%B9%AD%EB%8D%B0%EC%9D%B4-d6fc5bf6f2d8',
    },
    type: 'session',
  },
  {
    title: 'UT 설계부터 개선 과정까지, 디프만 14기의 중간 발표',
    date: '24.01.13',
    img: '/images/16th/blog/medium/16th_ut.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/ut-%EC%84%A4%EA%B3%84%EB%B6%80%ED%84%B0-%EA%B0%9C%EC%84%A0-%EA%B3%BC%EC%A0%95%EA%B9%8C%EC%A7%80-%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0%EC%9D%98-%EC%A4%91%EA%B0%84-%EB%B0%9C%ED%91%9C-3429d0be8762',
    },
    type: 'session',
  },
  {
    title: '디프만 14기 팀원들과 친해지는 게더링 & 네트워킹데이',
    date: '23.12.11',
    img: '/images/16th/blog/medium/16th_networking.svg',
    link: {
      type: 'Medium',
      href: 'https://depromeet.medium.com/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%ED%8C%80%EC%9B%90%EB%93%A4%EA%B3%BC-%EC%B9%9C%ED%95%B4%EC%A7%80%EB%8A%94-%EA%B2%8C%EB%8D%94%EB%A7%81-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%EB%8D%B0%EC%9D%B4-7de218bff76f',
    },
    type: 'session',
  },
  {
    title: '디프만 14기 여정의 시작!',
    date: '23.11.10',
    img: '/images/16th/blog/medium/14th_ot.webp',
    link: {
      type: 'Medium',
      href: 'https://medium.com/depromeet/%EB%94%94%ED%94%84%EB%A7%8C-14%EA%B8%B0-%EC%97%AC%EC%A0%95%EC%9D%98-%EC%8B%9C%EC%9E%91-c126e860c2bb',
    },
    type: 'session',
  },
];
