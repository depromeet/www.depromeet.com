import { Link } from '~/components/Thumbnail/Thumbnail';

export type Project = {
  title: string;
  subTitle: string;
  description: string;
  links?: Link[];
};

export const TAB_LIST = ['전체', '13기', '12기', '11기', '-10기'];
export const PROJECT_LIST: Project[] = [
  {
    title: '자린고비',
    subTitle: '13기',
    description: '거지들의 이야기로 쌓이는<br/>소비습관 개선 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175690517/-Improve-your-spending-habit-with-people',
      },
      { type: 'Github', href: 'https://github.com/depromeet/jalingobi-client' },
      { type: 'Web', href: 'https://jalingobi.com' },
    ],
  },
  {
    title: '오버스윗',
    subTitle: '13기',
    description: '카페 음료의 당을<br/>기록하고 관리하는 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175685591/-(Over-Sweet)-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/oversweet-core' },
      { type: 'Web', href: 'https://oversweet.vercel.app' },
    ],
  },
  {
    title: 'Na Lab(나랩)',
    subTitle: '13기',
    description: '동료의 익명 피드백으로<br/>발견하는 나만의 커리어 DNA',
    links: [
      {
        type: 'Behance',
        href: ' https://www.behance.net/gallery/175696341/Na-Lab-',
      },
      { type: 'Github', href: ' https://github.com/depromeet/na-lab-client' },
      { type: 'Web', href: 'https://nalab.me' },
    ],
  },
  {
    title: '인사이트아웃',
    subTitle: '13기',
    description: 'AI 기반 직무역량 키워드 추천 및<br/>자기소개서 작성 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175702481/insight-out',
      },
      { type: 'Github', href: 'https://github.com/depromeet/InsightOut-client' },
      { type: 'Web', href: 'https://insightout.kr' },
    ],
  },
  {
    title: 'Street Drop',
    subTitle: '13기',
    description: '길을 걸으며 음악을 드랍하는<br/>음악 공유 소셜 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175696753/Street-Drop-Location-based-music-community-services',
      },
      { type: 'Github', href: 'https://github.com/depromeet/street-drop-iOS' },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EC%8A%A4%ED%8A%B8%EB%A6%BF%EB%93%9C%EB%9E%8D-street-drop/id6450315928',
      },
    ],
  },
  {
    title: 'Whatnow (왔나)',
    subTitle: '13기',
    description: '약속 가는 중 친구들과 즐기는<br/>Share-play 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175647815/WHATNOW-Share-Play',
      },
      { type: 'Github', href: 'https://github.com/depromeet/whatnow-android' },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.whatnow&hl=ko-KR',
      },
    ],
  },
  {
    title: 'Ding-Dong (딩동)',
    subTitle: '13기',
    description: '서로의 TMI를 공유하고<br/>친해지고 싶은 마음을 전하세요!',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175602565/DingDong-TMI-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/Ding-dong-fe' },
      { type: 'Web', href: 'https://www.ding-dong-planet.com' },
    ],
  },
  {
    title: 'Pumping (펌핑)',
    subTitle: '13기',
    description: '크루원과 함께<br/>운동 경쟁하는 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/175706595/Pumping',
      },
      { type: 'Github', href: 'https://github.com/depromeet/Pumping-iOS' },
      { type: 'IOS', href: 'https://apps.apple.com/app/id6451131066' },
    ],
  },
  {
    title: '짝심삼일',
    subTitle: '12기',
    description: '나를 바꾸는 작은 습관의 힘,<br/>습관 관리 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://url.kr/pyhgze',
      },
      { type: 'Github', href: 'https://github.com/depromeet12th/three-days-android' },
      { type: 'Android', href: 'https://c11.kr/19ln2' },
    ],
  },
  {
    title: 'KNOCKNOCK',
    subTitle: '12기',
    description: '내 친구가 보내는 생생한<br/>푸시알림 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161848521/KNOCKNOCK-PUSH-NOTIFICATION-CUSTOM-SERVICE',
      },
      { type: 'Github', href: 'https://github.com/depromeet/12th-KnockKnock-Android' },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.knockknock',
      },
    ],
  },
  {
    title: 'TICLEMOA',
    subTitle: '12기',
    description: '아티클을 모아 지식을 태산처럼,<br/>아티클 스크랩 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161983453/TICLEMOA-Article-clipping-service-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/ticlemoa-backend' },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/ticlemoa/id1659267166',
      },
    ],
  },
  {
    title: '똑스',
    subTitle: '12기',
    description: '내가 만든 퀴즈로<br/>스터디를 재미있게, 똑스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161231589/Toks-Quiz-Study-Service-',
      },
      { type: 'Github', href: 'https://github.com/depromeet/toks-web' },
      {
        type: 'Web',
        href: 'https://tokstudy.com/',
      },
    ],
  },
  {
    title: '코퀄리티',
    subTitle: '12기',
    description: '지식을 공유하고, 후원하며<br/>함께 성장하는 블로깅 플랫폼',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161841129/-Coquality-High-Quality-Blogging-',
      },
      {
        type: 'Web',
        href: 'https://coquality.vercel.app',
      },
    ],
  },
  {
    title: '아맞다',
    subTitle: '12기',
    description: '대신 외쳐주는 소지품 리스트',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161161601/-Ahmatda-Checklist-for-Your-Belongings',
      },
      {
        type: 'Web',
        href: 'https://ahmatda.notion.site/ahmatda/3202c2a4e2dd440eb95ae3345a130fc4',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EC%95%84%EB%A7%9E%EB%8B%A4/id1660192508',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.ahmatda&hl=ko',
      },
    ],
  },
  {
    title: 'PING-PONG!',
    subTitle: '12기',
    description: '재능을 교환하고 나누며<br/>성장하는 플랫폼, 핑퐁',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/161783411/Ping-Pong',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%ED%95%91%ED%90%81-pingpong/id1662351621',
      },
    ],
  },
  {
    title: '꼬깃',
    subTitle: '12기',
    description: '진심을 표현하고 싶을 때,<br/>꼬깃 접어 전해보세요',
    links: [
      {
        type: 'Behance',
        href: 'https://url.kr/qd3ijo',
      },
      {
        type: 'Web',
        href: 'https://www.ggo-geet.com',
      },
    ],
  },
  {
    title: '비어에어',
    subTitle: '11기',
    description: '편의점 세계 맥주로<br/>세계 여행도장깨기',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147281821/Beer-Air-UXUI-Design-Mobile-App-Service',
      },
      {
        type: 'Web',
        href: 'https://beerair.kr',
      },
    ],
  },
  {
    title: '영감탱',
    subTitle: '11기',
    description: '영감을 모아 통통튀는 아이디어로,<br/>영감탱',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147207859/TANG-Inspiration-Archiving-App',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EC%98%81%EA%B0%90%ED%83%B1/id1626598770',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=kr.ygtang',
      },
    ],
  },
  {
    title: '바통',
    subTitle: '11기',
    description: '운동 회원권 양도 거래 서비스,<br/>바통',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147261349/Baton',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.baton',
      },
    ],
  },
  {
    title: '무드픽',
    subTitle: '11기',
    description: '부정적 감정의 기록,<br/>퍼스널 아카이빙 서비스',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147271219/Archiving-My-Personal-Emotions-Moodpic',
      },
      {
        type: 'Web',
        href: 'https://www.moodpic.kr/',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EB%AC%B4%EB%93%9C%ED%94%BD/id1642343841',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet_5team.moodpicapp',
      },
    ],
  },
  {
    title: '티키타카',
    subTitle: '11기',
    description: '위치 기반 실시간 채팅 서비스,<br/>티키타카',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/145307681/Tikitaka-Location-based-real-time-chat-Q-A-ap',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%ED%8B%B0%ED%82%A4%ED%83%80%EC%B9%B4-tikitaka/id1617831823?l=en',
      },
    ],
  },
  {
    title: '몽실',
    subTitle: '11기',
    description: '흐릿했던 꿈을 선명하게',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147282295/%28Mongseal%29Archive-Your-Dream?tracking_source=search_projects%7Cdream',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EB%AA%BD%EC%8B%A4-mong-seal/id1622154270?l=kr',
      },
    ],
  },
  {
    title: '페어러',
    subTitle: '11기',
    description: '페어러와 함께 평화롭게<br/>집안일 하기',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147276499/fairerPeacemaker-for-Houseworker',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/search?q=fairer&c=apps',
      },
    ],
  },
  {
    title: '개미는 툰툰',
    subTitle: '11기',
    description: '주식 용어로 즐기는 웹툰의<br/>새로운 덕질 문화, 개미는 툰툰',
    links: [
      {
        type: 'Behance',
        href: 'https://www.behance.net/gallery/147262623/-ANTOON-l-Webtoon-Community-Service',
      },
      {
        type: 'Web',
        href: 'https://antoon.fun/',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.antoon_app',
      },
    ],
  },
  {
    title: 'noonbody',
    subTitle: '10기',
    description: '건강한 눈바디 다이어트',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.def.everybody_android',
      },
    ],
  },
  {
    title: 'IMGOING',
    subTitle: '10기',
    description: '나만의 준비 루틴',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.dpm.imgoing',
      },
    ],
  },
  {
    title: 'BBOXX',
    subTitle: '10기',
    description: '당신의 부정적인 감정을 대신<br/>먹어주는 친구',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.bboxx',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EB%B9%A1%EC%93%B0/id1597106306',
      },
    ],
  },
  {
    title: '나나공',
    subTitle: '10기',
    description: '나보다 나무늘보가 공부 열심히 한다',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.sloth',
      },
    ],
  },
  {
    title: 'Archive',
    subTitle: '10기',
    description: '나만의 전시보관소',
    links: [
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/archive/id1599941822',
      },
    ],
  },
  {
    title: '대동빵지도',
    subTitle: '10기',
    description: '빵순이들의 빵지도',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=app.daedongbread.twa',
      },
    ],
  },
  {
    title: '오맵땡',
    subTitle: '10기',
    description: '오늘 당신은 매운게 땡긴다!',
    links: [
      {
        type: 'Web',
        href: 'https://ohmebddeng.kr/',
      },
    ],
  },
  {
    title: 'Bodymood',
    subTitle: '10기',
    description: '운동 내용을 기록하고<br/>오늘의 감정을 담은 포스터',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.depromeet.bodymood',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/bodymood/id1588818384',
      },
    ],
  },
  {
    title: 'OMO',
    subTitle: '10기',
    description: '오마카세의 모든 것',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.wesellloveandhappiness.omo',
      },
      {
        type: 'Web',
        href: 'https://omo-deployment.vercel.app/',
      },
    ],
  },
  {
    title: '영차',
    subTitle: '10기',
    description:
      '영차는 투자 자산 모아보기 직접 입력한 정보를<br> 기반으로 현재 투자 상황을 모아볼 수 있습니다.',
    links: [
      {
        type: 'IOS',
        href: 'https://apps.apple.com/.../%EC%98%81%EC%B0%A8/id1571507288',
      },
    ],
  },
  {
    title: 'TOONI TOONI',
    subTitle: '9기',
    description: '세상의 모든 웹툰',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=kr.tooni.tooni',
      },
    ],
  },
  {
    title: '마이레시픽',
    subTitle: '9기',
    description: '취향대로 골라 만드는<br/>나만의 레시피',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.def.custom&fbclid=IwAR01nq8JiuvvGdpnxFZEOJXef5EiOVP929GCGtHvv3-uiXkLVhIv2R9YS_c',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A0%88%EC%8B%9C%ED%94%BD/id1569961091?fbclid=IwAR2Bu-JPXUcUiCY6dUPv6kq2KwoD97p8jl2Rf2lqY_o59pyKQbHVccPweOE',
      },
    ],
  },
  {
    title: '오늘의 테스트',
    subTitle: '9기',
    description: '쉽고 빠른 나만의 테스트 만들기',
    links: [
      {
        type: 'Web',
        href: 'https://todaytest.netlify.app/',
      },
    ],
  },
  {
    title: 'Hush',
    subTitle: '9기',
    description: '익명 소통 플랫폼',
    links: [
      {
        type: 'Web',
        href: 'https://www.hush-it.com',
      },
    ],
  },
  {
    title: '링크줍줍',
    subTitle: '9기',
    description: '아티클 스크랩 리마인드 서비스',
  },
  {
    title: '제로우쥬',
    subTitle: '9기',
    description: '친환경 용사가 되어 우쥬를 지키는<br/>제로웨이스트 서비스',
  },
  {
    title: '크래커북',
    subTitle: '9기',
    description: '내일을 바꾸는 오늘의 북스터디',
  },
  {
    title: '3대 얼마',
    subTitle: '9기',
    description: '헬린이 철 들기 프로젝트',
  },
  {
    title: '가슴속 3천원',
    subTitle: '7기',
    description: '길거리 음식 찾기',
    links: [
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.zion830.threedollars',
      },
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467',
      },
    ],
  },
  {
    title: '북쪽으로',
    subTitle: '8기',
    description: '독서 기록<br/>특별한 책을 남기는 순간',
  },
  {
    title: 'Avocado',
    subTitle: '8기',
    description: '열어봐야 진짜를 만날 수 있는,<br/>채소 가격들의 단면을 분석해서 제공',
  },
  {
    title: 'Therto',
    subTitle: '6기',
    description: '편지를 보낸곳에서 읽는 서비스',
  },
  {
    title: '쿨피스',
    subTitle: '6기',
    description: '에어컨 사용 요금 측정 서비스',
  },
  {
    title: '칼퇴요정',
    subTitle: '6기',
    description: '칼퇴를 하고싶게 도와주는 요정녀석',
    links: [
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EC%B9%BC%ED%87%B4%EC%9A%94%EC%A0%95/id1467381865',
      },
    ],
  },
  {
    title: '아무거나',
    subTitle: '8기',
    description: '오늘 뭐 먹지?',
    links: [
      {
        type: 'IOS',
        href: 'https://apps.apple.com/kr/app/%EC%95%84%EB%AC%B4%EA%B1%B0%EB%82%98-%EC%98%A4%EB%8A%98-%EB%AD%90-%EB%A8%B9%EC%A7%80/id1542442642',
      },
      {
        type: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.levin.depromeet3t_anything',
      },
      {
        type: 'Web',
        href: 'https://depromeet.github.io/8th-final-3team-front/',
      },
    ],
  },
  {
    title: '뜻밖의 퀴즈',
    subTitle: '5기',
    description: '인싸력을 키워주는 이모티콘 퀴즈',
  },
];
