import projectsData from '../resources/data/projects';

export const mobileContentWidth = 31.4;
export const mobileContentHeight = 57.0;
export const desktopContentWidth = 80;
export const desktopContentHeight = 84;
export const isMobile = (width: number) => width <= 576;

export const getResponsiveContentHeight = (width: number) => (isMobile(width) ? mobileContentHeight : desktopContentHeight);
export const getResponsiveContentWidth = (width: number) => (isMobile(width) ? mobileContentWidth : desktopContentWidth);

export const getContentItemPosition = (width: number, index: number, originalPos):number => {
  const originalX = parseFloat(originalPos.toString());
  const horizontalPadding = getCenterPadding(width);
  const contentGap = getContentGap(width);
  return originalX + horizontalPadding + contentGap * remBase * index;
};
export const getContentGap = (width: number) => (isMobile(width) ? calcMobileContentGap() : calcDesktopContentGap());
export const getCenterPadding = (width: number) => (isMobile(width) ? calcMobileCenterPadding(width) : calcDesktopCenterPadding(width));

const remBase = 10;
const calcMobileCenterPadding = (width) => (width - mobileContentWidth * remBase) / 2;
const calcMobileContentGap = () => 1.1;
const calcDesktopCenterPadding = (width) => (width - desktopContentWidth * remBase) / 2;
const calcDesktopContentGap = () => 5.6;

export const calcItemCenterPosition = (index: number, windowWidth: number) => {
  const contentWidth = getResponsiveContentWidth(windowWidth);
  const contentGap = getContentGap(windowWidth);
  return index * contentWidth * remBase + contentGap * remBase * index;
};

export const calcRealListWidth = (windowWidth: number, originalWidth) => {
  const padding = getCenterPadding(windowWidth) * 2;
  const contentGap = getContentGap(windowWidth);
  const gap = contentGap * remBase * (projectsData.length - 1);
  const original = parseFloat(originalWidth);
  console.log(padding);
  console.log(contentGap);
  return original + gap + padding;
};
