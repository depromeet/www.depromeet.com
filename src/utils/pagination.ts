import { Project } from '~/constant/project';

export const MOBILE_PAGE_SIZE = 6;
export const TABLET_PAGE_SIZE = 6;
export const PC_PAGE_SIZE = 9;

export const sliceByPage = (
  projects: Project[],
  page: number,
  isTabletSize: boolean,
  isMobileSize: boolean
) => {
  if (isMobileSize) {
    return projects.slice(0, MOBILE_PAGE_SIZE * page);
  }
  if (isTabletSize) {
    return projects.slice(TABLET_PAGE_SIZE * (page - 1), TABLET_PAGE_SIZE * page);
  }

  return projects.slice(PC_PAGE_SIZE * (page - 1), PC_PAGE_SIZE * page);
};

export const getTenUnderProjects = (projects: Project[]) =>
  projects.filter(project => Number(project.subTitle.replace('기', '')) <= 10);

export const getCurrentProjects = (projects: Project[], currentTab: string) =>
  projects.filter(project => project.subTitle === String(currentTab));
