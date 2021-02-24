import projectsData from '../resources/data/projects';

export const calcRows = (isMainPage: boolean, expanded: boolean): string | number => {
  if (isMainPage) {
    return 1;
  }
  return calcProjectPageRows(expanded);
};

const calcProjectPageRows = (expanded: boolean) : string | number => {
  if (projectsData.length <= 6) {
    return 1;
  }
  return calcProjectPageMultipleRows(expanded);
};
const calcProjectPageMultipleRows = (expanded: boolean): string | number => {
  if (expanded) {
    return 'auto-fill';
  }
  return 2;
};

const maxColumns = 6;
const maxHeight = 22;
const maxRowGap = 3.2;
export const calcColumns = (isMainPage: boolean): string | number => (isMainPage === true ? 'auto-fill' : maxColumns);
export const calcMaxHeight = (isMainPage: boolean, expanded: boolean): string => (isMainPage === true ? '17rem' : (expanded === true ? '100%' : `${maxHeight * 2 + maxRowGap}rem`));

// mobile part
export const mobileIconSize = '9.6rem';
export const mobileMaxHeight = '12.4rem';
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
