interface Project {
  order: number;
  기수: number;
  서비스명: string;
  팀이름: string;
  한줄설명: string;
  소개글: string;
  link?: Partial<Record<'web' | 'android' | 'ios', string>>;
  imageFileName: string;
}

export const projects: readonly Project[] = [
  {
    order: 1,
    기수: 10,
    서비스명: 'noonbody',
    팀이름: '일조권 침해',
    한줄설명: '건강한 눈바디 다이어트',
    소개글: `눈바디를 통해 신체 변화를 보다 직관적으로 파악하고, 신체 변화를 확실하게 체감할 수 있을뿐더러 더 나아가 건강한 다이어트 습관까지 잡을 수 있습니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.def.everybody_android',
    },
    imageFileName: 'noonbody.svg',
  },
  {
    order: 2,
    기수: 10,
    서비스명: 'IMGOING',
    팀이름: '9조를 벌었조',
    한줄설명: '나만의 준비 루틴',
    소개글: `나만의 준비 루틴을 설정하고, 약속까지 늦지 않게 일정을 관리하세요!
      홈 화면에서 다가오는 일정을 간편하게 확인할 수 있습니다.
      간단한 프로세스로 다가오는 약속 일정을 등록하세요.`,
    link: {
      android: 'https://play.google.com/store/apps/details?id=com.dpm.imgoing',
    },
    imageFileName: 'imgoing.svg',
  },
  {
    order: 3,
    기수: 10,
    서비스명: 'BBOXX',
    팀이름: '돈벌어야조',
    한줄설명: '당신의 부정적인 감정을 대신 먹어주는 친구',
    소개글: `당신의 부정적인 감정들을 소리치기로 순간의 빡침을 풀어냅니다.
    감정일기로 현재 감정을 정리합니다.
    성장일기로 이전 감정을 회고합니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.depromeet.bboxx',
      ios: 'https://apps.apple.com/kr/app/%EB%B9%A1%EC%93%B0/id1597106306',
    },
    imageFileName: 'bboxx.svg',
  },
  {
    order: 4,
    기수: 10,
    서비스명: '나나공',
    팀이름: '신동빈센조',
    한줄설명: '나보다 나무늘보가 공부 열심히 한다',
    소개글: `나나공은 완강 데드라인에 맞춰 주차별로 자동으로 적정 진도를 계산해줍니다. 매주 들었던 강의 수를 입력하면, 나공이가 진도별로 새로운 메시지를 주곤 합니다. 강의 상세페이지에 들어가면 내가 적정 진도를 맞추지 못할 때마다 날아간 금액을 확인할 수 있습니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.depromeet.sloth',
    },
    imageFileName: '나나공.svg',
  },
  {
    order: 5,
    기수: 10,
    서비스명: 'Archive',
    팀이름: '머선 12조',
    한줄설명: '나만의 전시보관소',
    소개글: `나만의 전시 보관소, 아카이브
    차곡차곡 아카이빙되는 전시 기록, 서랍 어딘가에서 티켓과 함께 잊혀지는 감상 감정들을 이제는 아카이브에서 차곡차곡 보관해보세요.`,
    link: {
      ios: 'https://apps.apple.com/kr/app/archive/id1599941822',
    },
    imageFileName: 'archive.svg',
  },
  {
    order: 6,
    기수: 10,
    서비스명: '대동빵지도',
    팀이름: '칠색조',
    한줄설명: '빵순이들의 빵지도',
    소개글: `동네에서 도시. 더나아가 전국의 빵집까지 !
    여러분이 알고있는 빵집을 모두와 함께 공유하여 빵을 즐겨요!`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=app.daedongbread.twa',
    },
    imageFileName: '대동빵지도.svg',
  },
  {
    order: 7,
    기수: 10,
    서비스명: '오맵땡',
    팀이름: '물좀조',
    한줄설명: '오늘 당신은 매운게 땡긴다!',
    소개글: `오맵떙은 사용자의 매운 맛 레벨을 기반으로 매운 음식을 추천해줘요! 대표적인 매운 음식으로 나의 맵기 레벨을 테스트해봐요!`,
    link: {
      web: 'https://ohmebddeng.kr/',
    },
    imageFileName: '오맵땡.svg',
  },
  {
    order: 8,
    기수: 10,
    서비스명: 'Bodymood',
    팀이름: '잊지말아조',
    한줄설명: '운동 내용을 기록하고 오늘의 감정을 담은 포스터',
    소개글: `Bodymood는 오늘의 운동 루틴과 감정을 한 장의 포스터로 만들어 더욱 재밌고 지속적으로 기록할 수 있게 도와주는 아카이빙 서비스입니다. 운동 내용을 기록하고 오늘의 감정을 담아 포스터로 만들어주는 이미지 제작 툴입니다`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.depromeet.bodymood',
      ios: 'https://apps.apple.com/kr/app/bodymood/id1588818384',
    },
    imageFileName: 'bodymood.svg',
  },
  {
    order: 9,
    기수: 10,
    서비스명: 'OMO',
    팀이름: '우리는 사랑과 행복을 팔조',
    한줄설명: '오마카세의 모든 것',
    소개글: `내가 다녀간 오마카세 목록을 인증받고 자랑하자! 오모는 오마카세를 카테고리(클래식/미들/하이엔드)별로 확인하고 내가 다녀간 오마카세를 도장을 찍는 방법으로 남들에게 자랑할 수 있는 서비스입니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.wesellloveandhappiness.omo',
      web: 'https://omo-deployment.vercel.app/',
    },
    imageFileName: 'omo.svg',
  },
  {
    order: 10,
    기수: 10,
    서비스명: '영차',
    팀이름: '무야호',
    한줄설명:
      '영차는 투자 자산 모아보기 직접 입력한 정보를 기반으로 현재 투자 상황을 모아볼 수 있습니다.',
    소개글: `수익률 계산기로 수익률을 예상하고 물타기 계산기로 목표 평단까지 낮추려면 얼마나 물타야 할지 알아보세요!`,
    link: {
      ios: 'https://apps.apple.com/.../%EC%98%81%EC%B0%A8/id1571507288',
    },
    imageFileName: '영차.svg',
  },
  {
    order: 11,
    기수: 9,
    서비스명: 'TOONI TOONI',
    팀이름: '-',
    한줄설명: '세상의 모든 웹툰',
    소개글: `웹툰 정보를 확인하고 사용자들과 댓글로 소통해보세요.
        내가 보는 웹툰, 좋아하는 웹툰을 편리하게 관리하세요.
        보고 싶은 웹툰을 검색하고, 새로운 추천도 받아보세요.`,
    link: {
      android: 'https://play.google.com/store/apps/details?id=kr.tooni.tooni',
    },
    imageFileName: 'tooni.svg',
  },
  {
    order: 12,
    기수: 9,
    서비스명: '마이레시픽',
    팀이름: '철이없었조',
    한줄설명: '취향대로 골라 만드는 나만의 레시피',
    소개글: `마이레시픽은 원하는 재료를 직접 커스텀하여 나만의 레시피를 만들어 공유할 수 있는 앱입니다. 서브웨이, 스타벅스 등 프랜차이즈 브랜드에서 제공하는 메뉴를 선택하고 자신의 취향대로 다양한 재료를 조합할 수 있습니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.def.custom&fbclid=IwAR01nq8JiuvvGdpnxFZEOJXef5EiOVP929GCGtHvv3-uiXkLVhIv2R9YS_c',
      ios: 'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A0%88%EC%8B%9C%ED%94%BD/id1569961091?fbclid=IwAR2Bu-JPXUcUiCY6dUPv6kq2KwoD97p8jl2Rf2lqY_o59pyKQbHVccPweOE',
    },
    imageFileName: '마이레시픽.svg',
  },
  {
    order: 13,
    기수: 9,
    서비스명: '오늘의 테스트',
    팀이름: '이그조',
    한줄설명: '쉽고 빠른 나만의 테스트 만들기',
    소개글: `유행하는 심리테스트, 성격테스트 내가 직접 만들어볼 수 있다면 어떨까?
    오늘의테스트는 객관식 테스트, mbti 테스트 등 다양한 테스트를 직접
    만들 수 있게 도와드려요.`,
    link: {
      web: 'https://todaytest.netlify.app/',
    },
    imageFileName: '오늘의테스트.svg',
  },
  {
    order: 14,
    기수: 9,
    서비스명: 'Hush',
    팀이름: '삼시세끼',
    한줄설명: '익명 소통 플랫폼',
    소개글: `허쉬는 MZ세대의 익명 소통 플랫폼 입니다.
        상대방에게 부분익명과 완전익명을 선택해서 질문할 수 있어요.
        부분익명은 답변이 등록되고 24시간 후에 피드 주인에게만
        질문자의 이름이 공개됩니다!`,
    link: {
      web: 'www.hush-it.com',
    },
    imageFileName: 'hush.svg',
  },
  {
    order: 15,
    기수: 9,
    서비스명: '링크줍줍',
    팀이름: '칠성파',
    한줄설명: '아티클 스크랩 리마인드 서비스',
    소개글: `링크줍줍은 '아티클을 읽어야지'라고 생각만 하고 잊어버린 사람들을 위한 서비스입니다.
    링크를 스크랩하고 사용자가 설정한 시간에
    아티클을 읽을 수 있도록 알려주며,
    동기부여를 가질 수 있는 귀여운 문구들을 제공합니다.`,
    imageFileName: '링크줍줍.svg',
  },
  {
    order: 16,
    기수: 9,
    서비스명: '제로우쥬',
    팀이름: '지구를 지켜조',
    한줄설명: '친환경 용사가 되어 우쥬를 지키는 제로웨이스트 서비스',
    소개글: `친환경 용사가 되어 우쥬를 지키는 제로웨이스트 서비스
    제로우쥬모두가 할 수 있지만 누구나 하지 않는 제로웨이스트,단순히 환경 윤리적 책임으로 수행하는 것이 아닌친 환경 활동을 게임처럼 즐기고 인증 뱃지를 모으는 서비스에요.`,
    imageFileName: '제로우쥬.svg',
  },
  {
    order: 17,
    기수: 9,
    서비스명: '크래커북',
    팀이름: '빈센조',
    한줄설명: '내일을 바꾸는 오늘의 북스터디',
    소개글: `크래커북은 책을 중심으로 스터디를 주최하고 참여하는 모바일 웹 서비스입니다. 간편한 북스터디 주최,
    내가 원하는 책으로 스터디 참여, 재미있고 효율적인 스터디 관리를 통해 크래커를 먹듯이 쉽고 재밌게 북 스터디에 빠져들 수 있습니다.`,
    imageFileName: '크래커북.svg',
  },
  {
    order: 18,
    기수: 8,
    서비스명: '3대 얼마',
    팀이름: '-',
    한줄설명: '헬린이 철 들기 프로젝트',
    소개글: `'3대 얼마'는 보디빌딩 3대 종목인 벤치프레스, 데드리프트, 스쿼트의 총 합 무게를 증명하는 공간입니다. 점진적 과부화를 위해 꾸준한 3대 기록으로 근육을 성장시키고 서로 피드백을 받아 헬스 친구를 만들 수 있습니다.`,
    imageFileName: '3대얼마.svg',
  },
  {
    order: 19,
    기수: 7,
    서비스명: '가슴속 3천원',
    팀이름: '청일점',
    한줄설명: '길거리 음식 찾기',
    소개글: `가슴속 3천원"은 우리 가슴속에 지니고 다니는 3천원을 털어가는 붕어빵, 타꼬야끼, 계란빵, 호떡 등의 길거리 음식을 파는 곳을 알려드립니다. 가슴속 3천원은 사용자 참여형 서비스인 만큼 직접 가게를 제보하여 사용자들과 함께 가게 정보를 채워나갈 수 있습니다."`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.zion830.threedollars',
      ios: 'https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467',
    },
    imageFileName: '가슴속3천원.svg',
  },
  {
    order: 20,
    기수: 8,
    서비스명: '북쪽으로',
    팀이름: '다해조',
    한줄설명: '독서 기록. 특별한 책을 남기는 순간',
    소개글: `특별한 장소에 의미있는 책을 남기세요. 당신의 독서 발자취를 한 눈에 확인하세요. 이제, 마음을 움직이는 책을 따라가보세요.`,
    imageFileName: '북쪽으로.svg',
  },
  {
    order: 21,
    기수: 8,
    서비스명: 'Avocado',
    팀이름: '방탄채소단',
    한줄설명:
      '열어봐야 진짜를 만날 수 있는, 채소 가격들의 단면을 분석해서 제공',
    소개글: `대표커머스들의 채소가격, 마트별 배송료, 마트별 최저가 등을 제공해주어 사람들의 스마트한 베지라이프를 도와주는 서비스입니다. 구매하고자 하는 채소들의 이름을 장바구니에 담으면 각 커머스별로 최적의 조합을 찾아줍니다.`,
    imageFileName: 'avocado.svg',
  },
  {
    order: 22,
    기수: 6,
    서비스명: 'Therto',
    팀이름: '-',
    한줄설명: '편지를 보낸곳에서 읽는 서비스',
    소개글: `지금 여기, 이 공간에서 친구, 연인에게 편지를 써보세요. 친구는 내가 편지를 쓴 공간에 가야만 편지를 열어볼 수 있습니다. 편지를 작성할 때 작성자의 위치도 편지에 같이 담겨 전달됩니다. 수신자는 편지가 작성된 공간 300m 근처로 가야 편지를 열 수 있답니다.`,
    link: {
      ios: 'https://apps.apple.com/kr/app/thereto-%ED%8E%B8%EC%A7%80%EB%A5%BC-%EC%97%AC%EB%8A%94-%EA%B3%B5%EA%B0%84/id1500364832',
    },
    imageFileName: 'therto.svg',
  },
  {
    order: 23,
    기수: 6,
    서비스명: '쿨피스',
    팀이름: '-',
    한줄설명: '에어컨 사용 요금 측정 서비스',
    소개글: `원룸러분들 방에서 에어컨 킬 때 전기세가 많이 나올까 걱정되지 않나요? 에어컨 사용량에 따른 예상 전기 요금을 알려드립니다. 캘린더에 하루 사용시간을 입력하면 이번 달 전기 요금을 알 수 있습니다. 또한 지난 과거에 나온 전기 요금도 알 수 있습니다.`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.depromeet.tmj.cool_fees',
    },
    imageFileName: '쿨피스.svg',
  },
  {
    order: 24,
    기수: 6,
    서비스명: '칼퇴요정',
    팀이름: '-',
    한줄설명: '칼퇴를 하고싶게 도와주는 요정녀석',
    소개글: `아직도 회사에서 야근을 자주하십니까? 자신이 얼마나 야근을 하는지 알고 계십니까? 회사에서 내가 얼마나 야근을 했는지 알려드립니다! 올바른 정시퇴근 문화를 도와주기위한 칼퇴요정의 등장.`,
    link: {
      ios: 'https://apps.apple.com/kr/app/%EC%B9%BC%ED%87%B4%EC%9A%94%EC%A0%95/id1467381865',
    },
    imageFileName: '칼퇴요정.svg',
  },
  {
    order: 25,
    기수: 8,
    서비스명: '아무거나',
    팀이름: '불타오르네',
    한줄설명: '오늘 뭐 먹지?',
    소개글: `직장인의 점심식사, 오늘도 한끼를 때워야 하는데. 점심 뭐먹을래요? 돌아오는 대답은 아무거나요... 점심 메뉴 고르기 힘드시다구요? 이제 저희가 골라드릴게요!`,
    link: {
      android:
        'https://play.google.com/store/apps/details?id=com.levin.depromeet3t_anything',
      ios: 'https://apps.apple.com/kr/app/%EC%95%84%EB%AC%B4%EA%B1%B0%EB%82%98-%EC%98%A4%EB%8A%98-%EB%AD%90-%EB%A8%B9%EC%A7%80/id1542442642',
      web: 'https://depromeet.github.io/8th-final-3team-front/',
    },
    imageFileName: '아무거나.svg',
  },
  {
    order: 26,
    기수: 5,
    서비스명: '뜻밖의 퀴즈',
    팀이름: '-',
    한줄설명: '인싸력을 키워주는 이모티콘 퀴즈',
    소개글: `이모티콘 퀴즈를 통해 자신의 인싸력을 테스트해보세요. 다맞추면 진정한 인싸!`,
    imageFileName: '뜻밖의퀴즈.svg',
  },
];
