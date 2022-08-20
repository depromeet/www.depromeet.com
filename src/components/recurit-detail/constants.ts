export const POSITION_TYPE = {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  WEB: 'WEB',
  BACKEND: 'BACKEND',
  DESIGN: 'DESIGN',
} as const;

export type PositionType = keyof typeof POSITION_TYPE;

export const POSTION_DISPLAY_NAME = {
  IOS: 'iOS',
  ANDROID: 'Android',
  WEB: 'Web',
  BACKEND: 'Backend',
  DESIGN: 'UIUX Design',
} as const;

export const ICON_POISION_PATH = {
  DESIGN: '/svg/icon-design.svg',
  IOS: '/svg/icon-ios.svg',
  ANDROID: '/svg/icon-android.svg',
  WEB: '/svg/icon-web.svg',
  BACKEND: '/svg/icon-backend.svg',
};

export const ICON_CATEGORY_PATH = {
  DESIGN: '/svg/icon-designer.svg',
  IOS: '/svg/icon-developer.svg',
  ANDROID: '/svg/icon-developer.svg',
  WEB: '/svg/icon-developer.svg',
  BACKEND: '/svg/icon-developer.svg',
};

export const BANNER_IMG_PATH = {
  DESIGN: '/images/position/banner-design.png',
  IOS: '/images/position/banner-ios.png',
  ANDROID: '/images/position/banner-android.png',
  WEB: '/images/position/banner-web.png',
  BACKEND: '/images/position/banner-backend.png',
};
