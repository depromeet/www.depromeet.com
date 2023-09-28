import { Project } from '~/constant/project';

export const sliceByPage = (projects: Project[], page: number, isTabletSize: boolean) => {
  if (isTabletSize) {
    return projects.slice(6 * (page - 1), 6 * page);
  }

  return projects.slice(9 * (page - 1), 9 * page);
};

export const getTenUnderProjects = (projects: Project[]) =>
  projects.filter(project => Number(project.subTitle.replace('기', '')) <= 10);

export const getCurrentProjects = (projects: Project[], currentTab: string) =>
  projects.filter(project => project.subTitle === String(currentTab));
