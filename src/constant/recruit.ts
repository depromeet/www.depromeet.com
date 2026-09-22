import { displayEnd, getKoreanDateParts } from '~/utils/date';

/**
 * 19기 모집 설정. **기수별 값(날짜·링크·문구·숫자)은 전부 이 파일에만** 둔다.
 * 20기로 넘어갈 때는 이 파일만 고치면 된다. (docs/19th/migration-plan.md §0.3, §7.1)
 *
 * 규칙
 * - `utils/utils.ts`·`constant/common.ts`를 import하지 않는다(둘은 서로 순환 import 중).
 * - 시각은 `'+09:00'` ISO, 달력 날짜는 `'YYYY-MM-DD'`(KST 자정). **모든 `end`는 exclusive**.
 * - 화면 표시는 `utils/date.ts`를 통해서만 한다.
 */

export type PositionId = 'design' | 'android' | 'ios' | 'web' | 'server';

export type FaqCategory = '지원자격' | '면접관련' | '활동관련';

export type RecruitConfig = {
  generation: number;
  applyWindow: { start: string; end: string };
  /** 서류 접수 이후 단계. 서류 접수는 `applyWindow`에서 파생한다(중복 저장 금지). */
  steps: Array<{ title: string; start: string; end?: string }>;
  process: Array<{ title: string; description: string }>;
  /** 표시 순서 = 배열 순서. 지원 URL은 **id로 매칭**한다(인덱스 매칭 금지). */
  positions: Array<{
    id: PositionId;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    applyUrl: string;
  }>;
  forms: { notify: string; nextNotify: string; applyFallback: string };
  /** 주차 = index + 1 */
  sessions: Array<{ date: string; title: string; online?: boolean }>;
  values: Array<{
    id: string;
    number: string;
    titleEn: string;
    titleKo: string;
    description: string;
  }>;
  stats: Array<{ label: string; value: number; suffix: string }>;
  sessionPreview: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    category?: 'challenge' | 'fellowship' | 'focus';
  }>;
  faq: Array<{ category: FaqCategory; question: string; answer: string }>;
  sponsors: Array<{ name: string; logo: string }>;
};

const GENERATION = 19;

/** 서류 접수: 2026.10.02(금) 00:00 ~ 10.08(목) 23:59:59 KST (end는 exclusive) */
const APPLY_WINDOW: RecruitConfig['applyWindow'] = {
  start: '2026-10-02T00:00:00+09:00',
  end: '2026-10-09T00:00:00+09:00',
};

const STEPS: RecruitConfig['steps'] = [
  { title: '서류 발표', start: '2026-10-12' },
  { title: '온라인 인터뷰', start: '2026-10-17', end: '2026-10-19' }, // 표시 10.17 - 10.18
  { title: '최종 발표', start: '2026-10-22' },
];

const SESSIONS: RecruitConfig['sessions'] = [
  { date: '2026-10-31', title: 'OT' },
  { date: '2026-11-07', title: '아이디어톤' },
  { date: '2026-11-14', title: '현직자와의 만남' },
  { date: '2026-11-21', title: '포커스 위크', online: true },
  { date: '2026-11-28', title: 'UT' },
  { date: '2026-12-05', title: '딮크샵' },
  { date: '2026-12-12', title: '프리 런칭 데이' },
  { date: '2026-12-19', title: '딮커톤' },
  { date: '2026-12-26', title: '방학 🏄' },
  { date: '2027-01-02', title: '포커스 위크', online: true },
  // TODO(19th-design): C-7 — 시안의 '딮크톡' 표기 확인
  { date: '2027-01-09', title: '딮크톡' },
  { date: '2027-01-16', title: '런칭데이' },
  { date: '2027-01-23', title: '포커스 위크', online: true },
  { date: '2027-01-30', title: '딮케이션' },
  { date: '2027-02-06', title: '포커스 위크', online: true },
  { date: '2027-02-13', title: '커리어 성장 세션' },
  { date: '2027-02-20', title: '최종 발표' },
];

/**
 * ⚠ 현재 URL은 **18기 공고 주소를 잠정 사용**한다(운영진 결정).
 * 19기 공고가 열리면 반드시 교체 — 계획 §5의 10/1 12:00 게이트.
 * 카드 순서는 시안 기준(Design·Android·iOS·Web·Server), URL은 **id로** 매칭되어 있다.
 */
const POSITIONS: RecruitConfig['positions'] = [
  {
    id: 'design',
    title: 'Product \nDesigner',
    subtitle: '리서치 · UX · UI · 디자인시스템',
    image: '/images/18th/recruit/img_design.png',
    description:
      '프로덕트 디자이너로서 Figma를 이용해 화면을 디자인하고 개발자와 소통하며 프로덕트를 만듭니다. UX 리서치부터 UI 설계까지 사용자 중심의 사고로 제품 전반의 디자인을 주도하며, 논리적인 사고를 바탕으로 팀과 원활하게 협업합니다.',
    applyUrl: 'https://01owexg4.ninehire.site/job_posting/TfqjWoxO',
  },
  {
    id: 'android',
    title: 'Android \nDeveloper',
    subtitle: 'Android · Kotlin · Git',
    image: '/images/18th/recruit/img_android.png',
    description:
      '안드로이드 개발자로서 Kotlin 언어에 대한 이해를 바탕으로, Jetpack Compose 또는 XML을 활용한 UI를 개발합니다. Retrofit 등의 서버 통신 경험과 안드로이드 생태계에 대한 이해를 바탕으로 서비스 흐름을 파악하고, 안정적인 앱 출시를 이끌어냅니다.',
    applyUrl: 'https://01owexg4.ninehire.site/job_posting/gCbRwvgi',
  },
  {
    id: 'ios',
    title: 'iOS \nDeveloper',
    subtitle: 'iOS · Swift · Git',
    image: '/images/18th/recruit/img_ios.png',
    description:
      'iOS 개발자로서 Swift에 대한 이해를 바탕으로, UIKit 또는 SwiftUI를 활용한 UI를 개발합니다. URLSession, Alamofire, Moya 등을 이용한 API 통신 경험을 갖추고 있으며, 팀과 협업하여 앱스토어에 서비스를 성공적으로 배포합니다.',
    applyUrl: 'https://01owexg4.ninehire.site/job_posting/TvN63rIi',
  },
  {
    id: 'web',
    title: 'Web \nDeveloper',
    subtitle: 'Frontend · React · Git',
    image: '/images/18th/recruit/img_web.png',
    description:
      '웹 개발자로서 Git과 협업 도구에 익숙하며, HTTP 통신에 대한 기본적인 이해를 갖추고 있습니다. REST API 기반의 프론트엔드 개발 경험을 바탕으로 React, Vue, Angular 등 모던 자바스크립트 프레임워크를 활용해 사용자와 맞닿는 서비스를 구현합니다.',
    applyUrl: 'https://01owexg4.ninehire.site/job_posting/gmTwerXt',
  },
  {
    id: 'server',
    title: 'Server \nDeveloper',
    subtitle: 'Backend · Infra · Git',
    image: '/images/18th/recruit/img_server.png',
    description:
      '서버 개발자로서 프로젝트 초기 설계부터 인프라 구축까지 주도적으로 참여하며, 웹 서버 프레임워크를 활용해 프로덕트를 만듭니다. 프로덕트의 문제를 정의하고, 팀과의 협업을 통해 요구사항을 정리한 뒤, 이를 바탕으로 데이터 구조를 설계하고 구현합니다.',
    applyUrl: 'https://01owexg4.ninehire.site/job_posting/f3zG7SvK',
  },
];

const FORMS: RecruitConfig['forms'] = {
  /** 모집 오픈 전 "19기 모집알림받기" */
  notify:
    'https://docs.google.com/forms/d/e/1FAIpQLSfOGnt3dakaC9mIcxUHkXGjaNhLZIDPjTewB0nqm-VvCtrIvw/viewform',
  /** 모집 마감 후 "20기 모집 사전 알림 신청"(운영진 확정) */
  nextNotify:
    'https://docs.google.com/forms/d/e/1FAIpQLSeTxrHHT17a-oAB3Rgoiehn8epZTZE40lYMOr7iT0Fy1O5iVw/viewform?usp=header',
  /** 직군별 공고 URL이 비었을 때 대체 링크 */
  applyFallback: '', // TODO(19th-design): Q-O9
};

// --- FAQ 문구 조립용 ---------------------------------------------------------
// 날짜는 위 설정에서 파생시킨다(§15.6). 하드코딩 금지.

/** `10월 8일` */
const md = (input: string) => {
  const { month, day } = getKoreanDateParts(input);
  return `${Number(month)}월 ${Number(day)}일`;
};
/** `10월 17일(토)` */
const mdw = (input: string) => `${md(input)}(${getKoreanDateParts(input).weekdayShort})`;
/** `2027년 2월 20일` */
const ymd = (input: string) => `${getKoreanDateParts(input).year}년 ${md(input)}`;

const applyEndDisplay = displayEnd(APPLY_WINDOW.end);
const [documentResult, interview, finalResult] = STEPS;
const firstSession = SESSIONS[0];
const lastSession = SESSIONS[SESSIONS.length - 1];

const FAQ: RecruitConfig['faq'] = [
  {
    category: '지원자격',
    question: '지원 가능한 나이가 어떻게 되나요?',
    answer: `성실히 오프라인 정기 모임 및 팀별 회의에 참여 가능한, 성인*이라면 지원가능합니다. (*${
      getKoreanDateParts(APPLY_WINDOW.start).year
    }년 기준)`,
  },
  {
    category: '지원자격',
    question: '관련 경험이 없어도 지원 가능한가요?',
    answer:
      '관련 직무 경험이 없어도 지원 가능하지만, Product Designer와 Server Developer 직군은 지원 시 포트폴리오 제출이 필수입니다.',
  },
  {
    category: '지원자격',
    question: '실력이 뛰어나야만 참여할 수 있나요?',
    answer:
      '디프만은 직무 경험과 실력보다 적극적인 태도, 책임감, 커뮤니케이션 능력 등에 더 큰 비중을 두고 지원자를 모집하고 있어요. 서비스를 런칭하고 팀과 협업할 수 있다면 충분해요.',
  },
  {
    category: '지원자격',
    question: '외국 거주자도 지원할 수 있나요?',
    answer: `디프만 ${GENERATION}기는 오프라인 활동 위주로 진행되므로 국내 거주자에 한해 지원 가능합니다.`,
  },
  {
    category: '지원자격',
    question: '직군간 중복지원이 가능한가요?',
    answer:
      '직군간 중복 지원은 불가능합니다. 중복 지원자의 경우 지원 내역 모두 무효처리되니 하나의 직군에 지원해주세요.',
  },
  {
    category: '지원자격',
    question: '지원 결과는 언제, 어디서 확인 가능한가요?',
    answer: `지원 결과는 ${md(applyEndDisplay)} 서류 지원 마감 후, ${md(
      documentResult.start
    )} 중으로 결과 메일이 발송될 예정입니다.`,
  },
  {
    category: '면접관련',
    question: '인터뷰는 언제 진행되나요?',
    answer: `인터뷰는 ${mdw(interview.start)} ~ ${mdw(
      displayEnd(interview.end ?? interview.start)
    )} 이틀간 10시 ~ 17시 중으로 진행될 예정입니다.`,
  },
  {
    category: '면접관련',
    question: '인터뷰는 어디서, 어떻게 진행되나요?',
    answer: `디프만 ${GENERATION}기 운영진과 지원자 다대다 온라인 인터뷰로 진행되며 자세한 사항은 서류 합격자에게 안내될 예정입니다.`,
  },
  {
    category: '면접관련',
    question: '인터뷰는 얼마나 걸릴까요?',
    answer: '한 타임당 약 30분 정도 진행될 예정입니다.',
  },
  {
    category: '면접관련',
    question: '인터뷰 일정을 조정하고 싶은데, 가능할까요?',
    answer:
      '면접 일정은 내부에서 결정된 날짜와 시간을 서류 합격 여부와 함께 전달드릴 예정입니다. 최대한 면접 기간 동안에는 시간을 비워두시길 바랍니다.',
  },
  {
    category: '면접관련',
    question: '인터뷰 관련한 세부 내용들은 어디서 볼 수 있나요?',
    answer: '서류 합격자에 한해 지원서에 기재한 이메일로 자세한 안내사항을 발송할 예정입니다.',
  },
  {
    category: '면접관련',
    question: '최종 결과는 언제 받아볼 수 있나요?',
    answer: `인터뷰 내용을 꼼꼼히 확인한 후, ${mdw(finalResult.start)}에 차례로 발송될 예정입니다.`,
  },
  {
    category: '활동관련',
    question: `디프만 ${GENERATION}기 정규 세션은 어떻게 진행되나요?`,
    answer: `디프만은 매주 토요일 오후 2시부터 5시까지 정규 세션을 가집니다. 총 ${SESSIONS.length}주간 온라인과 오프라인을 병행하여 만날 예정이에요. 정규 세션외에도 팀원들과 함께 작업하는 시간이 필요하니 반드시 참여 가능한 일정을 확인하고 지원해주세요.`,
  },
  {
    category: '활동관련',
    question: '활동 기간은 어떻게 되나요?',
    answer: `디프만 ${GENERATION}기는 ${mdw(firstSession.date)} OT를 시작으로 ${
      SESSIONS.length
    }주 동안 진행되며, 마지막 세션은 ${ymd(lastSession.date)}에 종료됩니다.`,
  },
  {
    category: '활동관련',
    question: `디프만 ${GENERATION}기의 팀 구성이 궁금해요`,
    answer: `디프만은 총 7개의 팀으로 나뉘어 디자이너, 개발자들이 함께 하나의 서비스를 위해 협업합니다. 팀은 제출하신 서류와 역량을 토대로 ${GENERATION}기 운영진이 구성할 예정입니다.`,
  },
  {
    category: '활동관련',
    question: '정규 세션에서 어떤 활동을 하나요?',
    answer:
      '팀별 작업 외에도 멤버들 간의 교류와 네트워킹을 위해 다양한 세션을 기획하고 있어요. 자세한 내용은 홈페이지 상단 ‘소개’ 페이지를 참고해주세요.',
  },
  {
    category: '활동관련',
    question: '활동비가 있나요?',
    answer: `디프만은 비영리 IT 커뮤니티로 ${GENERATION}기 운영에 필요한 비용 조달 및 활동 지원을 위해 최종 합격 멤버에 한해 활동비를 걷습니다.`,
  },
  {
    category: '활동관련',
    question: '활동비는 얼마인가요?',
    answer: '활동비는 회비와 보증금으로 이루어져 있으며 아직 논의중에 있습니다.',
  },
];

export const RECRUIT: RecruitConfig = {
  generation: GENERATION,
  applyWindow: APPLY_WINDOW,
  steps: STEPS,
  process: [
    { title: '1차. 서류', description: '자기소개서 작성 및 이력서/포트폴리오 제출' },
    { title: '2차. 인터뷰', description: '직무 역량 및 컬처핏 인터뷰' },
  ],
  positions: POSITIONS,
  forms: FORMS,
  sessions: SESSIONS,
  values: [
    {
      id: 'responsibility',
      number: '01',
      titleKo: '책임감',
      titleEn: 'Responsibility',
      description: '맡은 일의 크기와 상관없이 끝까지 완수하려는 태도',
    },
    {
      id: 'ownership',
      number: '02',
      titleKo: '오너쉽',
      titleEn: 'Ownership',
      description: '문제와 결과를 내 일처럼 받아들이는 태도',
    },
    {
      id: 'flexibility',
      number: '03',
      titleKo: '유연성',
      titleEn: 'Flexibility',
      description: '완벽한 계획보다 빠른 실행과 실험을 통해 배우는 태도',
    },
  ],
  stats: [
    { label: '디프만이 탄생한지', value: 10, suffix: '년' },
    { label: '10~18기 런칭 성공률', value: 100, suffix: '%' },
    { label: '5~18기 런칭 서비스', value: 82, suffix: '+' },
    { label: '누적 멤버 수', value: 1000, suffix: '+' },
  ],
  /**
   * 소개 페이지 Session Preview.
   * 목록과 분류는 09/22 디자인파트 회의의 "가치 - 세션 매핑" 확정안을 그대로 따른다 —
   * Challenge 6개 / Fellowship 2개 / Focus 3개이고, 칩이 이 `category`로 목록을 거른다.
   * 순서는 위 `SESSIONS` 일정표와 같은 시간순이다. 일정표의 포커스 위크·방학·OT는
   * 가치 매핑 대상이 아니라서 여기에는 없다(= 어느 칩에서도 보이지 않는다).
   *
   * ⚠ 사진·문구는 19기 것이 아직 없어 17·18기 자산을 재활용한다.
   *   - 이미지 교체 필요: 아이디어톤 / UT / 딮크샵 / 프리 런칭 데이 / 딮크톡 /
   *     커리어 성장 세션 / 최종 발표 (나머지 4개는 18기 사진 그대로)
   *   - 문구 신규 작성(운영진 확정 전): 아이디어톤 / 딮크톡 / 커리어 성장 세션 / 최종 발표
   */
  sessionPreview: [
    {
      id: 'ideathon',
      title: '아이디어톤',
      description:
        '팀이 4개월간 만들 서비스의 첫 아이디어를 하루 만에 구체화해요.\n문제를 정의하고 해결 방향을 잡으며 여정의 출발점을 만들어요.',
      image: '/images/18th/sessions/session-idea.jpg',
      category: 'challenge',
    },
    {
      id: 'networking',
      title: '현직자와의 만남',
      description:
        '취업·이직·실무·협업·커리어 방향성까지!\n현실적인 질문과 경험을 직접 나누는 자리를 가져요.',
      image: '/images/18th/sessions/session-networking.jpg',
      category: 'focus',
    },
    {
      id: 'ut',
      title: 'UT',
      description:
        '각 팀이 선정한 페르소나를 바탕으로,\n제품의 실제 유저군을 대상으로 사용성 테스트를 진행해요.',
      image: '/images/17th/main/session/user-test.png',
      category: 'challenge',
    },
    {
      id: 'deepworkshop',
      title: '딮크샵',
      description:
        '1박 2일 워크샵을 떠나요.\n최고의 프로덕트를 만들어내기 위해 팀워크를 다지는 시간이에요.',
      image: '/images/17th/main/session/DPM-workshop.png',
      category: 'fellowship',
    },
    {
      id: 'pre-launching',
      title: '프리 런칭 데이',
      description:
        '빠르게 MVP를 출시하고 디퍼들에게 소개해요.\n받은 피드백을 바탕으로 프로덕트를 다듬어 나가요.',
      image: '/images/17th/main/session/pre-launching.png',
      category: 'challenge',
    },
    {
      id: 'deepkerthon',
      title: '딮커톤',
      description:
        '1박 2일 간의 밀착 작업을 통해, 프로젝트 완성도를 끌어올려요.\n물론, 작업만 하진 않아요! 중간중간 재미있는 이벤트도 함께 즐겨요.',
      image: '/images/18th/sessions/session-deepkerthon.jpg',
      category: 'challenge',
    },
    {
      // TODO(19th-design): C-7 — 시안의 '딮크톡' 표기·세션 성격 확인 후 문구와 사진 교체
      id: 'deeptalk',
      title: '딮크톡',
      description:
        '디퍼들이 각자의 관심 주제를 꺼내 이야기를 나눠요.\n파트를 넘나드는 대화에서 새로운 시야를 얻어가요.',
      image: '/images/17th/main/session/part-networking.png',
      category: 'focus',
    },
    {
      id: 'launching',
      title: '런칭데이',
      description:
        '4개월간 열심히 준비해온 서비스가 세상에 공개되는 날이에요.\n외부인과 디퍼들에게 멋진 서비스를 선보여요.',
      image: '/images/18th/sessions/session-launching.jpg',
      category: 'challenge',
    },
    {
      id: 'deepcation',
      title: '딮케이션',
      description:
        '팀별로 하루를 함께 보내며 작업과 휴식을 함께 가져가요.\n프로젝트에 잠깐 집중하고, 중간중간 쉬면서 팀원들과 자연스럽게 교류하는 시간을 보내요.',
      image: '/images/18th/sessions/session-deepcation.jpg',
      category: 'fellowship',
    },
    {
      id: 'career',
      title: '커리어 성장 세션',
      description:
        '서로의 커리어 고민과 경험을 나누며 다음 단계를 그려봐요.\n디프만 이후를 함께 준비하는 시간이에요.',
      image: '/images/18th/sessions/session-alumni.jpg',
      category: 'focus',
    },
    {
      /** 회의록 표기는 '최종발표'지만, 사이트의 19기 일정표(`SESSIONS`) 표기를 따른다. */
      id: 'final',
      title: '최종 발표',
      description:
        '4개월간의 여정을 마무리하며 팀별 성과와 배움을 나눠요.\n서로의 성장을 확인하고 다음을 준비하는 자리예요.',
      image: '/images/17th/main/session/launching-day.png',
      category: 'challenge',
    },
  ],
  faq: FAQ,
  /** 운영진 요청: 로고·목록은 현행 유지. "후원사는 나중에 수정하겠다". */
  sponsors: [
    { name: 'elice', logo: '/images/19th/home/sponsor-elice.png' },
    { name: 'Gather', logo: '/images/19th/home/sponsor-gather.png' },
    { name: 'F-Lab', logo: '/images/19th/home/sponsor-f-lab.png' },
    { name: 'FastFive', logo: '/images/19th/home/sponsor-fastfive.png' },
    { name: 'Adelab', logo: '/images/19th/home/sponsor-adelab.png' },
    { name: '직행', logo: '/images/19th/home/sponsor-zighang.png' },
    { name: 'NineHire', logo: '/images/19th/home/sponsor-ninehire.png' },
  ],
};
