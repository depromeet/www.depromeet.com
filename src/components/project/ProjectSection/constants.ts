export type Project = {
  order: number;
  generation: number;
  title: string;
  team: string;
  catchphrase: string;
  description: string;
  image: string;
  icon: string;
  thumbnail: string;
  ios?: string;
  android?: string;
  web?: string;
  frontends?: string[];
  backends?: string[];
  designers?: string[];
};

export const projects: Project[] = [
  {
    order: 1,
    generation: 10,
    title: 'noonbody',
    team: '일조권 침해',
    catchphrase: '건강한 눈바디 다이어트',
    description: `눈바디를 통해 신체 변화를 보다 직관적으로 파악하고, 신체 변화를 확실하게 체감할 수 있을뿐더러 더 나아가 건강한 다이어트 습관까지 잡을 수 있습니다.`,
    android: 'https://play.google.com/store/apps/details?id=com.def.everybody_android',
    image: 'details/noonbody.png',
    icon: 'icons/noonbody.png',
    thumbnail: 'thumbnails/noonbody.png',
    designers: ['심준연', '박정연', '조혜림'],
    frontends: ['윤예지', '안유경(iOS)'],
    backends: ['유기태', '박진수', '안태건'],
  },
  {
    order: 2,
    generation: 10,
    title: 'IMGOING',
    team: '9조를 벌었조',
    catchphrase: '나만의 준비 루틴',
    description: `나만의 준비 루틴을 설정하고, 약속까지 늦지 않게 일정을 관리하세요!
        홈 화면에서 다가오는 일정을 간편하게 확인할 수 있습니다.
        간단한 프로세스로 다가오는 약속 일정을 등록하세요.`,
    android: 'https://play.google.com/store/apps/details?id=com.dpm.imgoing',
    image: 'details/imgoing.png',
    icon: 'icons/imgoing.png',
    thumbnail: 'thumbnails/imgoing.png',
    backends: ['송정우', '이유진', '황종훈'],
    designers: ['김고은', '곽진', '이여빈'],
    frontends: ['이은성', '유경상', '안은결(iOS)'],
  },
  {
    order: 3,
    generation: 10,
    title: 'BBOXX',
    team: '돈벌어야조',
    catchphrase: '당신의 부정적인 감정을 대신 먹어주는 친구',
    description: `당신의 부정적인 감정들을 소리치기로 순간의 빡침을 풀어냅니다.
      감정일기로 현재 감정을 정리합니다.
      성장일기로 이전 감정을 회고합니다.`,
    android: 'https://play.google.com/store/apps/details?id=com.depromeet.bboxx',
    ios: 'https://apps.apple.com/kr/app/%EB%B9%A1%EC%93%B0/id1597106306',
    image: 'details/bboxx.png',
    icon: 'icons/bboxx.png',
    thumbnail: 'thumbnails/bboxx.png',
    backends: ['김수빈', '박중수', '이경석'],
    designers: ['이지은', '김소연'],
    frontends: ['김은우', '이근나(iOS)', '이중근', '구해린(Android)'],
  },
  {
    order: 4,
    generation: 10,
    title: '나나공',
    team: '신동빈센조',
    catchphrase: '나보다 나무늘보가 공부 열심히 한다',
    description: `나나공은 완강 데드라인에 맞춰 주차별로 자동으로 적정 진도를 계산해줍니다. 매주 들었던 강의 수를 입력하면, 나공이가 진도별로 새로운 메시지를 주곤 합니다. 강의 상세페이지에 들어가면 내가 적정 진도를 맞추지 못할 때마다 날아간 금액을 확인할 수 있습니다.`,
    android: 'https://play.google.com/store/apps/details?id=com.depromeet.sloth',

    image: 'details/나나공.png',
    icon: 'icons/나나공.png',
    thumbnail: 'thumbnails/나나공.png',
    backends: ['변구훈', '김율희', '신동빈'],
    designers: ['임효연', '이종찬', '박준영'],
    frontends: ['신한섭', '임승혁(iOS)', '최철훈', '이지훈(Android)'],
  },
  {
    order: 5,
    generation: 10,
    title: 'Archive',
    team: '머선 12조',
    catchphrase: '나만의 전시보관소',
    description: `나만의 전시 보관소, 아카이브
      차곡차곡 아카이빙되는 전시 기록, 서랍 어딘가에서 티켓과 함께 잊혀지는 감상 감정들을 이제는 아카이브에서 차곡차곡 보관해보세요.`,
    ios: 'https://apps.apple.com/kr/app/archive/id1599941822',
    image: 'details/archive.png',
    icon: 'icons/archive.png',
    thumbnail: 'thumbnails/archive.png',
    backends: ['김보배', '김준석', '배연주'],
    designers: ['이경주', '이송민', '정미숙'],
    frontends: ['이한위'],
  },
  {
    order: 6,
    generation: 10,
    title: '대동빵지도',
    team: '칠색조',
    catchphrase: '빵순이들의 빵지도',
    description: `동네에서 도시. 더나아가 전국의 빵집까지 !
      여러분이 알고있는 빵집을 모두와 함께 공유하여 빵을 즐겨요!`,
    android: 'https://play.google.com/store/apps/details?id=app.daedongbread.twa',
    image: 'details/대동빵지도.png',
    icon: 'icons/대동빵지도.png',
    thumbnail: 'thumbnails/대동빵지도.png',
    backends: ['이지은', '황지수', '이해인'],
    designers: ['민윤기', '지예나', '이정민'],
    frontends: ['김유진', '소석진', '김한철', '이재욱'],
  },
  {
    order: 7,
    generation: 10,
    title: '오맵땡',
    team: '물좀조',
    catchphrase: '오늘 당신은 매운게 땡긴다!',
    description: `오맵떙은 사용자의 매운 맛 레벨을 기반으로 매운 음식을 추천해줘요! 대표적인 매운 음식으로 나의 맵기 레벨을 테스트해봐요!`,
    web: 'https://ohmebddeng.kr/',
    image: 'details/오맵땡.png',
    icon: 'icons/오맵땡.png',
    thumbnail: 'thumbnails/오맵땡.png',
    backends: ['김성민', '공채원', '이혜연'],
    designers: ['이가인', '정은주', '김영환'],
    frontends: ['이성용', '홍영준', '김문희', '김은수(Web)'],
  },
  {
    order: 8,
    generation: 10,
    title: 'Bodymood',
    team: '잊지말아조',
    catchphrase: '운동 내용을 기록하고 오늘의 감정을 담은 포스터',
    description: `Bodymood는 오늘의 운동 루틴과 감정을 한 장의 포스터로 만들어 더욱 재밌고 지속적으로 기록할 수 있게 도와주는 아카이빙 서비스입니다. 운동 내용을 기록하고 오늘의 감정을 담아 포스터로 만들어주는 이미지 제작 툴입니다`,
    android: 'https://play.google.com/store/apps/details?id=com.depromeet.bodymood',
    ios: 'https://apps.apple.com/kr/app/bodymood/id1588818384',
    image: 'details/bodymood.png',
    icon: 'icons/bodymood.png',
    thumbnail: 'thumbnails/bodymood.png',
    backends: ['이유진', '강승호', '전혜수'],
    designers: ['권진혁', '남수진', '박서진'],
    frontends: ['허예은', '조기현(iOS)', '오기환', '이민현(Android)'],
  },
  {
    order: 9,
    generation: 10,
    title: 'OMO',
    team: '우리는 사랑과 행복을 팔조',
    catchphrase: '오마카세의 모든 것',
    description: `내가 다녀간 오마카세 목록을 인증받고 자랑하자! 오모는 오마카세를 카테고리(클래식/미들/하이엔드)별로 확인하고 내가 다녀간 오마카세를 도장을 찍는 방법으로 남들에게 자랑할 수 있는 서비스입니다.`,
    android: 'https://play.google.com/store/apps/details?id=com.wesellloveandhappiness.omo',
    web: 'https://omo-deployment.vercel.app/',
    image: 'details/omo.png',
    icon: 'icons/omo.png',
    thumbnail: 'thumbnails/omo.png',
    backends: ['윤영', '이승윤'],
    designers: ['이병호', '조어진', '구세빈'],
    frontends: ['박종호', '이강열', '김효진(Web)'],
  },
  {
    order: 10,
    generation: 10,
    title: '영차',
    team: '무야호',
    catchphrase:
      '영차는 투자 자산 모아보기 직접 입력한 정보를 기반으로 현재 투자 상황을 모아볼 수 있습니다.',
    description: `수익률 계산기로 수익률을 예상하고 물타기 계산기로 목표 평단까지 낮추려면 얼마나 물타야 할지 알아보세요!`,
    ios: 'https://apps.apple.com/.../%EC%98%81%EC%B0%A8/id1571507288',

    image: 'details/영차.png',
    icon: 'icons/영차.png',
    thumbnail: 'thumbnails/영차.png',
    backends: ['박영준', '강승호'],
    designers: ['이병호', '이윤이', '민윤기'],
    frontends: ['유현식', '이현호(iOS)', '장명준', '강승호(Android)'],
  },
  {
    order: 11,
    generation: 9,
    title: 'TOONI TOONI',
    team: '-',
    catchphrase: '세상의 모든 웹툰',
    description: `웹툰 정보를 확인하고 사용자들과 댓글로 소통해보세요.
          내가 보는 웹툰, 좋아하는 웹툰을 편리하게 관리하세요.
          보고 싶은 웹툰을 검색하고, 새로운 추천도 받아보세요.`,
    android: 'https://play.google.com/store/apps/details?id=kr.tooni.tooni',
    image: 'details/tooni.png',
    icon: 'icons/tooni.png',
    thumbnail: 'thumbnails/tooni.png',
    backends: ['박세종', '강승호'],
    designers: ['여해주', '김나영'],
    frontends: ['문지윤', '김승진(iOS)', '이오형', '이정민', '최현정(Android)'],
  },
  {
    order: 12,
    generation: 9,
    title: '마이레시픽',
    team: '철이없었조',
    catchphrase: '취향대로 골라 만드는 나만의 레시피',
    description: `마이레시픽은 원하는 재료를 직접 커스텀하여 나만의 레시피를 만들어 공유할 수 있는 앱입니다. 서브웨이, 스타벅스 등 프랜차이즈 브랜드에서 제공하는 메뉴를 선택하고 자신의 취향대로 다양한 재료를 조합할 수 있습니다.`,
    android:
      'https://play.google.com/store/apps/details?id=com.def.custom&fbclid=IwAR01nq8JiuvvGdpnxFZEOJXef5EiOVP929GCGtHvv3-uiXkLVhIv2R9YS_c',
    ios: 'https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4%EB%A0%88%EC%8B%9C%ED%94%BD/id1569961091?fbclid=IwAR2Bu-JPXUcUiCY6dUPv6kq2KwoD97p8jl2Rf2lqY_o59pyKQbHVccPweOE',
    image: 'details/마이레시픽.png',
    icon: 'icons/마이레시픽.png',
    thumbnail: 'thumbnails/마이레시픽.png',
    backends: ['이기승', '이예린'],
    designers: ['정진아', '부자영'],
    frontends: ['정진용', '김서진(iOS)', '이한위', '김성민(Android)'],
  },
  {
    order: 13,
    generation: 9,
    title: '오늘의 테스트',
    team: '이그조',
    catchphrase: '쉽고 빠른 나만의 테스트 만들기',
    description: `유행하는 심리테스트, 성격테스트 내가 직접 만들어볼 수 있다면 어떨까?
      오늘의테스트는 객관식 테스트, mbti 테스트 등 다양한 테스트를 직접
      만들 수 있게 도와드려요.`,
    web: 'https://todaytest.netlify.app/',
    image: 'details/오늘의테스트.png',
    icon: 'icons/오늘의테스트.png',
    thumbnail: 'thumbnails/오늘의테스트.png',
    backends: ['이규원', '백선혜', '장효택'],
    designers: ['노은종', '이슬이'],
    frontends: ['최재은', '천승아', '정현정(Web)'],
  },
  {
    order: 14,
    generation: 9,
    title: 'Hush',
    team: '삼시세끼',
    catchphrase: '익명 소통 플랫폼',
    description: `허쉬는 MZ세대의 익명 소통 플랫폼 입니다.
          상대방에게 부분익명과 완전익명을 선택해서 질문할 수 있어요.
          부분익명은 답변이 등록되고 24시간 후에 피드 주인에게만
          질문자의 이름이 공개됩니다!`,
    web: 'www.hush-it.com',
    image: 'details/hush.png',
    icon: 'icons/hush.png',
    thumbnail: 'thumbnails/hush.png',
    backends: ['이경석', '오민석', '최은석'],
    designers: ['심준연', '임효연', '박소진'],
    frontends: ['한영수', '정진리', '이윤현(Web)'],
  },
  {
    order: 15,
    generation: 9,
    title: '링크줍줍',
    team: '칠성파',
    catchphrase: '아티클 스크랩 리마인드 서비스',
    description: `링크줍줍은 '아티클을 읽어야지'라고 생각만 하고 잊어버린 사람들을 위한 서비스입니다.
      링크를 스크랩하고 사용자가 설정한 시간에
      아티클을 읽을 수 있도록 알려주며,
      동기부여를 가질 수 있는 귀여운 문구들을 제공합니다.`,
    image: 'details/링크줍줍.png',
    icon: 'icons/링크줍줍.png',
    thumbnail: 'thumbnails/링크줍줍.png',
    backends: ['최예진', '오준석'],
    designers: ['박은지', '김영환'],
    frontends: ['권지혜', '조수환(iOS)', '이민수', '김나경(Android)'],
  },
  {
    order: 16,
    generation: 9,
    title: '제로우쥬',
    team: '지구를 지켜조',
    catchphrase: '친환경 용사가 되어 우쥬를 지키는 제로웨이스트 서비스',
    description: `친환경 용사가 되어 우쥬를 지키는 제로웨이스트 서비스
      제로우쥬모두가 할 수 있지만 누구나 하지 않는 제로웨이스트,단순히 환경 윤리적 책임으로 수행하는 것이 아닌친 환경 활동을 게임처럼 즐기고 인증 뱃지를 모으는 서비스에요.`,
    image: 'details/제로우쥬.png',
    icon: 'icons/제로우쥬.png',
    thumbnail: 'thumbnails/제로우쥬.png',
    backends: ['권주희', '이경희'],
    designers: ['김민효', '방유진', '김종훈'],
    frontends: ['국윤수', '한상진(iOS)', '황견주', '진승언(Android)'],
  },
  {
    order: 17,
    generation: 9,
    title: '크래커북',
    team: '빈센조',
    catchphrase: '내일을 바꾸는 오늘의 북스터디',
    description: `크래커북은 책을 중심으로 스터디를 주최하고 참여하는 모바일 웹 서비스입니다. 간편한 북스터디 주최,
      내가 원하는 책으로 스터디 참여, 재미있고 효율적인 스터디 관리를 통해 크래커를 먹듯이 쉽고 재밌게 북 스터디에 빠져들 수 있습니다.`,
    image: 'details/크래커북.png',
    icon: 'icons/크래커북.png',
    thumbnail: 'thumbnails/크래커북.png',
    backends: ['김민태', '이유진', '김준홍'],
    designers: ['이경주', '손주리'],
    frontends: ['유상원', '이성용', '지주연(Web)'],
  },
  {
    order: 18,
    generation: 8,
    title: '3대 얼마',
    team: '-',
    catchphrase: '헬린이 철 들기 프로젝트',
    description: `'3대 얼마'는 보디빌딩 3대 종목인 벤치프레스, 데드리프트, 스쿼트의 총 합 무게를 증명하는 공간입니다. 점진적 과부화를 위해 꾸준한 3대 기록으로 근육을 성장시키고 서로 피드백을 받아 헬스 친구를 만들 수 있습니다.`,
    image: 'details/3대얼마.png',
    icon: 'icons/3대얼마.png',
    thumbnail: 'thumbnails/3대얼마.png',
    designers: ['김민효', '김종훈', '추지효'],
    backends: ['조민국', '최문경'],
    frontends: ['오기환 (iOS)', '유영평 (Android)', '황견주 (Android)'],
  },
  {
    order: 19,
    generation: 7,
    title: '가슴속 3천원',
    team: '청일점',
    catchphrase: '길거리 음식 찾기',
    description: `가슴속 3천원"은 우리 가슴속에 지니고 다니는 3천원을 털어가는 붕어빵, 타꼬야끼, 계란빵, 호떡 등의 길거리 음식을 파는 곳을 알려드립니다. 가슴속 3천원은 사용자 참여형 서비스인 만큼 직접 가게를 제보하여 사용자들과 함께 가게 정보를 채워나갈 수 있습니다."`,
    android: 'https://play.google.com/store/apps/details?id=com.zion830.threedollars',
    ios: 'https://apps.apple.com/kr/app/%EA%B0%80%EC%8A%B4%EC%86%8D3%EC%B2%9C%EC%9B%90-%EB%82%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EB%B6%95%EC%96%B4%EB%B9%B5/id1496099467',

    image: 'details/가슴속3천원.png',
    icon: 'icons/가슴속3천원.png',
    thumbnail: 'thumbnails/가슴속3천원.png',
    backends: ['전해성', '손지수', '이유리'],
    designers: ['이윤이', '양효정'],
    frontends: ['유현식 (iOS)', '이윤지 (Android)'],
  },
  {
    order: 20,
    generation: 8,
    title: '북쪽으로',
    team: '다해조',
    catchphrase: '독서 기록. 특별한 책을 남기는 순간',
    description: `특별한 장소에 의미있는 책을 남기세요. 당신의 독서 발자취를 한 눈에 확인하세요. 이제, 마음을 움직이는 책을 따라가보세요.`,

    image: 'details/북쪽으로.png',
    icon: 'icons/북쪽으로.png',
    thumbnail: 'thumbnails/북쪽으로.png',
    backends: ['김예슬', '손지수'],
    designers: ['황예리', '정보영', '양정안'],
    frontends: ['김지은 (iOS)', '이규현 (iOS)'],
  },
  {
    order: 21,
    generation: 8,
    title: 'Avocado',
    team: '방탄채소단',
    catchphrase: '열어봐야 진짜를 만날 수 있는, 채소 가격들의 단면을 분석해서 제공',
    description: `대표커머스들의 채소가격, 마트별 배송료, 마트별 최저가 등을 제공해주어 사람들의 스마트한 베지라이프를 도와주는 서비스입니다. 구매하고자 하는 채소들의 이름을 장바구니에 담으면 각 커머스별로 최적의 조합을 찾아줍니다.`,

    image: 'details/avocado.png',
    icon: 'icons/avocado.png',
    thumbnail: 'thumbnails/avocado.png',
    backends: ['하재권'],
    designers: ['윤정민', '황예리'],
    frontends: ['심재철', '심문성', '이정민 (Web)'],
  },
  {
    order: 22,
    generation: 6,
    title: 'Therto',
    team: '-',
    catchphrase: '편지를 보낸곳에서 읽는 서비스',
    description: `지금 여기, 이 공간에서 친구, 연인에게 편지를 써보세요. 친구는 내가 편지를 쓴 공간에 가야만 편지를 열어볼 수 있습니다. 편지를 작성할 때 작성자의 위치도 편지에 같이 담겨 전달됩니다. 수신자는 편지가 작성된 공간 300m 근처로 가야 편지를 열 수 있답니다.`,
    ios: 'https://apps.apple.com/kr/app/thereto-%ED%8E%B8%EC%A7%80%EB%A5%BC-%EC%97%AC%EB%8A%94-%EA%B3%B5%EA%B0%84/id1500364832',

    image: 'details/therto.png',
    icon: 'icons/therto.png',
    thumbnail: 'thumbnails/therto.png',
    backends: ['유현식'],
    designers: ['박은지', '김민경', '한지윤'],
    frontends: ['유현식 (iOS)'],
  },
  {
    order: 23,
    generation: 6,
    title: '쿨피스',
    team: '-',
    catchphrase: '에어컨 사용 요금 측정 서비스',
    description: `원룸러분들 방에서 에어컨 킬 때 전기세가 많이 나올까 걱정되지 않나요? 에어컨 사용량에 따른 예상 전기 요금을 알려드립니다. 캘린더에 하루 사용시간을 입력하면 이번 달 전기 요금을 알 수 있습니다. 또한 지난 과거에 나온 전기 요금도 알 수 있습니다.`,
    android: 'https://play.google.com/store/apps/details?id=com.depromeet.tmj.cool_fees',

    image: 'details/쿨피스.png',
    icon: 'icons/쿨피스.png',
    thumbnail: 'thumbnails/쿨피스.png',
    designers: ['노경래', '서수민'],
    frontends: ['유현식 (Android)'],
  },
  {
    order: 24,
    generation: 6,
    title: '칼퇴요정',
    team: '-',
    catchphrase: '칼퇴를 하고싶게 도와주는 요정녀석',
    description: `아직도 회사에서 야근을 자주하십니까? 자신이 얼마나 야근을 하는지 알고 계십니까? 회사에서 내가 얼마나 야근을 했는지 알려드립니다! 올바른 정시퇴근 문화를 도와주기위한 칼퇴요정의 등장.`,
    ios: 'https://apps.apple.com/kr/app/%EC%B9%BC%ED%87%B4%EC%9A%94%EC%A0%95/id1467381865',

    image: 'details/칼퇴요정.png',
    icon: 'icons/칼퇴요정.png',
    thumbnail: 'thumbnails/칼퇴요정.png',
    designers: ['박은지', '김혜리'],
    frontends: ['유현식 (Android)', '유은비 (Android)', '오기환 (iOS)'],
  },
  {
    order: 25,
    generation: 8,
    title: '아무거나',
    team: '불타오르네',
    catchphrase: '오늘 뭐 먹지?',
    description: `직장인의 점심식사, 오늘도 한끼를 때워야 하는데. 점심 뭐먹을래요? 돌아오는 대답은 아무거나요... 점심 메뉴 고르기 힘드시다구요? 이제 저희가 골라드릴게요!`,
    android: 'https://play.google.com/store/apps/details?id=com.levin.depromeet3t_anything',
    ios: 'https://apps.apple.com/kr/app/%EC%95%84%EB%AC%B4%EA%B1%B0%EB%82%98-%EC%98%A4%EB%8A%98-%EB%AD%90-%EB%A8%B9%EC%A7%80/id1542442642',
    web: 'https://depromeet.github.io/8th-final-3team-front/',
    image: 'details/아무거나.png',
    icon: 'icons/아무거나.png',
    thumbnail: 'thumbnails/아무거나.png',
    designers: ['노은종', '이윤이'],
    frontends: ['곽소영', '유영평 (Android)', '이규현 (iOS)'],
    backends: ['조민국'],
  },
  {
    order: 26,
    generation: 5,
    title: '뜻밖의 퀴즈',
    team: '-',
    catchphrase: '인싸력을 키워주는 이모티콘 퀴즈',
    description: `이모티콘 퀴즈를 통해 자신의 인싸력을 테스트해보세요. 다맞추면 진정한 인싸!`,
    image: 'details/뜻밖의퀴즈.png',
    icon: 'icons/뜻밖의퀴즈.png',
    thumbnail: 'thumbnails/뜻밖의퀴즈.png',
    designers: ['양지윤'],
    frontends: ['김민우', '김성진', '유현식 (Android)'],
  },
];