import { projects } from './projects';

export const mobileContentWidth = 314;
export const desktopContentWidth = 800;

export const mobileContentHeight = 650;
export const desktopContentHeight = 840;
export const isMobile = (width: number) => width <= 576;

export const getResponsiveContentHeight = (width: number) =>
  isMobile(width) ? mobileContentHeight : desktopContentHeight;
export const getResponsiveContentWidth = (width: number) =>
  isMobile(width) ? mobileContentWidth : desktopContentWidth;

export const getContentItemPosition = (width: number, index: number, originalPos?: string): number => {
  const originalX = parseFloat(originalPos ?? '');
  const horizontalPadding = getCenterPadding(width);
  const contentGap = getContentGap(width);

  return originalX + horizontalPadding + contentGap * index;
};

export const getContentGap = (width: number) => (isMobile(width) ? calcMobileContentGap : calcDesktopContentGap);
export const getCenterPadding = (width: number) =>
  isMobile(width) ? calcMobileCenterPadding(width) : calcDesktopCenterPadding(width);

const calcMobileCenterPadding = (width: number) => (width - mobileContentWidth) / 2;
const calcMobileContentGap = 11;
const calcDesktopCenterPadding = (width: number) => (width - desktopContentWidth) / 2;
const calcDesktopContentGap = 56;

export const calcItemCenterPosition = (index: number, windowWidth: number) => {
  const contentWidth = getResponsiveContentWidth(windowWidth);
  const contentGap = getContentGap(windowWidth);
  return index * (contentWidth + contentGap);
};

export const calcRealListWidth = (windowWidth: number, originalWidth: string) => {
  const padding = getCenterPadding(windowWidth) * 2;
  const contentGap = getContentGap(windowWidth);
  const gap = contentGap * 10 * (projects.length - 1);
  const original = parseFloat(originalWidth);
  return original + gap + padding;
};
