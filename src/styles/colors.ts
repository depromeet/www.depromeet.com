export const colors = {
  black: '#000000',
  black800: '#070814',
  black400: '#1D1F2C',
  gray900: '#14141C',
  gray300: '#343744',
  gray200: '#606475',
  gray100: '#A5B2C5',
  gray20: '#E6EDF8',
  white: '#FFFFFF',
  blue500: '#4FA0FF',
  blue400: '#1B84FF',
  blue300: '#0973EE',
  yellow500: '#E3FF3A',
  yellow400: '#C6E413',
  yellow300: '#A1BB00',

  yellow: '#FFEC87',
  purple: '#877BFF',
  blue: '#48A4FF',
  pink: '#FF90FF',
  lightPink: '#FF97FF',
  green: '#1EC4B4',
  lightGray: '#F4F4F4',
  gray: '#999999',
  mint: '#A0EEE9',
  darkMint: '#00CEBA',
  sky: '#48A4FF',

  // NOTE: 16th
  // grey: {
  //   '00': '#FFFFFF',
  //   '100': '#F4F4F5',
  //   '300': '#999999',
  //   '500': '#323232',
  //   '600': '#232323',
  //   '900': '#000000',
  // },

  // primary: {
  //   pink: '#FF90FF',
  //   blue: '#006AFE',
  // },

  sub: {
    sky: '#48A4FF',
    darkMint: '#00CEBA',
    lightPink: '#FF97FF',
    purple: '#877BFF',
    yellow: '#FFEC87',
    lightMint: '#A0EEE9',
  },

  // NOTE : 17th
  grey: {
    '00': '#FFFFFF',
    '100': '#E3E3E6',
    '200': '#D5D5D9',
    '300': '#C7C7CE',
    '400': '#ADADB7',
    '500': '#9595A1',
    '600': '#777783',
    '700': '#50505A',
    '800': '#32323C',
    '900': '#14141C',
  },
  primary: {
    darknavy: '#040C23',
    pink: '#FF90FF',
    blue: '#478AF4',
    gray: '#E3E5EA',
  },

  // NOTE: 18th
  grey18: {
    '00': '#FFFFFF',
    '100': '#F1F2F3',
    '200': '#E3E5E7',
    '300': '#C9CBCF',
    '400': '#ACB2B9',
    '500': '#9198A1',
    '600': '#757E89',
    '700': '#5E656E',
    '800': '#464C52',
    '900': '#2F3337',
  },
  primary18: {
    strong: '#0078E7',
    normal: '#59AEFE',
    light: '#DFEEFE',
    'extra-light': '#F9FBFF',
  },

  /**
   * NOTE: 19th — Figma `203:3412`(Color/Styles)에 등록된 값 그대로.
   * v19 코드에는 hex 리터럴을 쓰지 않고 이 토큰만 참조한다.
   *
   * White 계열은 알파값이라 Figma 변수로는 전부 #FFFFFF로 보인다. 이름의 숫자가
   * 불투명도(001 = 1%)다. Gradient는 solid가 아니라 fill이라 변수로 잡히지 않아
   * 계획 §2.2의 스톱 값으로 옮겼다.
   */
  v19: {
    black: '#111111',

    blue100: '#B9CDF2',
    blue200: '#8BACEA',
    blue300: '#5C8BE2',
    blue400: '#2D6AD9',
    /** 디프만 정체성 강조 텍스트·요소 */
    blue500: '#1659D5',
    blue800: '#092455',
    blue900: '#04122B',

    coolGray100: '#F7F7F8',
    coolGray200: '#D2D4D7',
    coolGray300: '#BCBEC4',
    coolGray400: '#90939C',
    coolGray500: '#636874',
    coolGray600: '#363D4D',
    coolGray700: '#202739',
    coolGray800: '#191D29',
    coolGray900: '#121418',

    white001: 'rgba(255, 255, 255, 0.01)',
    white004: 'rgba(255, 255, 255, 0.04)',
    white010: 'rgba(255, 255, 255, 0.1)',
    white030: 'rgba(255, 255, 255, 0.3)',
    white100: '#FFFFFF',

    gradient: {
      blackBlue: 'linear-gradient(180deg, #1247AA 0%, #0C0E15 100%)',
      /*
       * 히어로 별 배경(`203:1276` 상단)의 바탕. 에셋에서 행별 중앙값을 직선 근사해
       * 뽑은 값이라 `hero-stars.png`와 정확히 맞물린다 — `blackBlue`와 끝색이 미묘하게
       * 달라서(#1247AA vs #124AB3) 대신 쓰면 1920 경계에 띠가 생긴다.
       * 재생성: `node scripts/build-hero-starfield.mjs`
       */
      heroStarfield: 'linear-gradient(180deg, #0D0F16 0%, #124AB3 100%)',
      /*
       * 등록된 "Gradient/White Blue" — Branding 헤드라인(203:1311)의 fill이다.
       * 실측: 방향이 세로가 아니라 **가로에 가깝고**(오른쪽으로 가며 약 18도 내려감),
       * 글자 상자 안에서 보이는 끝색은 #76A2FF다. #3C7AFF까지 가는 구간의 69% 지점이라
       * 그라데이션 핸들이 상자 밖까지 뻗어 있다는 뜻 — 스톱을 145%에 두어 재현한다.
       */
      whiteBlue: 'linear-gradient(108deg, #FFFFFF 0%, #3C7AFF 145%)',
      /*
       * 인재상 카드 `203:2392`의 fill. 빛이 카드 **위쪽 가장자리 가운데**에서 퍼져
       * 아래로 갈수록 흰색이 된다(중앙 기준으로 두면 카드 한가운데가 파래진다).
       * 반지름은 시안 카드(392x400)에서 잰 값 265px ≈ 가로 68% / 세로 66%.
       */
      skyBlueWhite: 'radial-gradient(ellipse 68% 66% at 50% 0%, #B9CDF2 0%, #F6F9FF 100%)',
    },
  },
} as const;
