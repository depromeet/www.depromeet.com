import projectsData from '../resources/data/projects';

export const calcRows = (isMainPage: boolean, expanded: boolean) => {
  if (isMainPage) {
    return 1;
  }
  return calcProjectPageRows(expanded);
};

const calcProjectPageRows = (expanded: boolean) => {
  if (projectsData.length <= 6) {
    return 1;
  }
  return calcProjectPageMultipleRows(expanded);
};
const calcProjectPageMultipleRows = (expanded: boolean) => {
  if (expanded) {
    return 'auto-fill';
  }
  return 2;
};

const maxColumns = 6;
const maxHeight = 22;
const maxRowGap = 3.2;
export const calcColumns = (isMainPage: boolean): string | number => (isMainPage === true ? 'auto-fill' : maxColumns);
export const calcMaxHeight = (isMainPage: boolean, expanded: boolean): string => {
  const rows = calcRows(isMainPage, expanded);
  const height = isMainPage ? 17 : maxHeight;
  const numRows = rows === 'auto-fill'
    ? (projectsData.length + maxColumns - 1) / maxColumns
    : rows;
  return `${numRows * height + (numRows - 1) * maxRowGap}rem`;
};

// mobile part
const mobileMaxHeightRem = 12.4;
const mobileGapRem = 2.4;
const mobileIconSizeRem = 9.6;
export const mobileIconSize = '9.6rem';
export const mobileMaxHeight = `${mobileMaxHeightRem}rem`;
export const calcMobileMaxHeight = (isMainPage: boolean, expanded: boolean): string => {
  const rows = calcMobileRows(isMainPage, expanded);
  const height = isMainPage ? mobileIconSizeRem : mobileMaxHeightRem;
  const numRows = rows === 'auto-fill'
    ? (projectsData.length + 2) / 3
    : rows;
  return `${numRows * height + (numRows - 1) * mobileGapRem}rem`;
};

export const calcMobileRowHeight = (isMainPage) => {
  if (isMainPage) {
    return mobileIconSize;
  }
  return mobileMaxHeight;
};
export const calcMobileRows = (isMainPage, expanded) => {
  if (isMainPage) {
    return calcMobileMainpageRows();
  }
  return calcMobileProjectpageRows(expanded);
};
const calcMobileMainpageRows = () => {
  if (projectsData.length > 3) {
    return 2;
  }
  return 1;
};
const calcMobileProjectpageRows = (expanded) => {
  if (expanded) {
    return 'auto-fill';
  }
  const rows = (projectsData.length + 2) / 3;
  return rows > 3 ? 3 : rows;
};

export const calcMobileColumns = () => 3;
