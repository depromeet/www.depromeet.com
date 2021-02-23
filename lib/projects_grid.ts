import projectsData from '../resources/data/projects';

const calcRows = (isMainPage: boolean, expanded: boolean): string | number => {
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
const calcColumns = (isMainPage: boolean): string | number => (isMainPage === true ? 'auto-fill' : maxColumns);
const calcMaxHeight = (isMainPage: boolean, expanded: boolean): string => (isMainPage === true ? '17rem' : (expanded === true ? '100%' : '45.2rem'));

export { calcRows, calcColumns, calcMaxHeight };
