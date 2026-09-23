import { describe, expect, it } from 'vitest';

import { Project } from '~/constant/project';

import { ALL_TAB, filterProjectsByTab, parseUnderGenerationTab } from './ProjectContentSection';

const projectOf = (subTitle: string, title = `project-${subTitle}`): Project => ({
  title,
  subTitle,
  description: 'description',
});

describe('parseUnderGenerationTab', () => {
  it('🟢 "~11기"에서 세대 숫자 11을 파싱한다.', () => {
    expect(parseUnderGenerationTab('~11기')).toBe(11);
  });

  it('🔴 정확한 세대 탭("18기")은 null을 반환한다.', () => {
    expect(parseUnderGenerationTab('18기')).toBeNull();
  });

  it('🔴 "전체" 탭은 null을 반환한다.', () => {
    expect(parseUnderGenerationTab(ALL_TAB)).toBeNull();
  });
});

describe('filterProjectsByTab', () => {
  const projects: Project[] = [
    projectOf('18기'),
    projectOf('17기'),
    projectOf('12기'),
    projectOf('11기'),
    projectOf('10기'),
    projectOf('9기'),
  ];

  it('🟢 "~11기" 탭은 11기 이하 프로젝트만 선택한다.', () => {
    const result = filterProjectsByTab(projects, '~11기');

    expect(result.map(project => project.subTitle)).toEqual(['11기', '10기', '9기']);
  });

  it('🟢 "18기" 탭은 18기 프로젝트만 정확히 선택한다.', () => {
    const result = filterProjectsByTab(projects, '18기');

    expect(result).toHaveLength(1);
    expect(result[0].subTitle).toBe('18기');
  });

  it('🟢 "전체" 탭은 모든 프로젝트를 선택한다.', () => {
    const result = filterProjectsByTab(projects, ALL_TAB);

    expect(result).toEqual(projects);
  });
});
