import { Project } from '~/constant/project';

export const MOBILE_PAGE_SIZE = 6;
export const TABLET_PAGE_SIZE = 6;
export const PC_PAGE_SIZE = 9;

export const sliceByPage = <T>(
  projects: T[],
  page: number,
  isTabletSize: boolean,
  isMobileSize: boolean,
  startPage?: number
) => {
  const initialPage = startPage !== undefined ? startPage : page - 1;

  if (isMobileSize) {
    return projects.slice(MOBILE_PAGE_SIZE * initialPage, MOBILE_PAGE_SIZE * page);
  }
  if (isTabletSize) {
    return projects.slice(TABLET_PAGE_SIZE * initialPage, TABLET_PAGE_SIZE * page);
  }

  return projects.slice(PC_PAGE_SIZE * initialPage, PC_PAGE_SIZE * page);
};

export const getTenUnderProjects = (projects: Project[]) =>
  projects.filter(project => Number(project.subTitle.replace('기', '')) <= 10);

export const getCurrentProjects = (projects: Project[], currentTab: string) =>
  projects.filter(project => project.subTitle === String(currentTab));
