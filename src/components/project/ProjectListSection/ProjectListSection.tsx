import { useMemo, useState } from 'react';
import { css } from '@emotion/react';

import { colors } from '~/styles/constants';
import { section36HeadingCss, sectionSmallCss } from '~/styles/css';

import { Project, projects } from '../constants';
import Pagination from '../Pagination/Pagination';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import SelectGeneration from '../SelectGeneration';

type Order = 'latest' | 'oldest';
export type Generation = 10 | 11 | 12;

// 10기 이상은 이전기수로 통칭한다.
const oldGeneration = 10;
const organizedProjects = projects.reduce<Record<number, Project[]>>((result, project) => {
  const generation = project.generation > oldGeneration ? project.generation : oldGeneration;
  result[generation] = [...(result[generation] ? result[generation] : []), project];
  return result;
}, {});

const sortedByLatestProjects = [...projects].sort((a, b) => {
  return b.generation - a.generation;
});

const sortedByOldestProjects = [...projects].sort((a, b) => {
  return a.generation - b.generation;
});

const sliceByPage = (projects: Project[], page: number) => {
  return projects.slice(9 * (page - 1), 9 * page);
};

export default function ProjectListSection() {
  const [generation, setGeneration] = useState<null | Generation>(null);
  const [sortBy, setSortBy] = useState<Order>('latest');
  const [page, setPage] = useState(1);

  const displayedProjects = useMemo(() => {
    if (generation) {
      return sliceByPage(organizedProjects[generation], page);
    } else if (sortBy === 'latest') {
      return sliceByPage(sortedByLatestProjects, page);
    } else {
      return sliceByPage(sortedByOldestProjects, page);
    }
  }, [generation, page, sortBy]);

  const onClickPage = (page: number) => {
    setPage(page);
  };

  const selectGeneration = (generation: null | Generation) => {
    setGeneration(generation);
    setPage(1);
    if (!generation) {
      setSortBy('latest');
    }
  };

  return (
    <section css={sectionCss}>
      <small css={smallCss}>PREVIOUS PROJECTS</small>
      <h2 css={headingCss}>지난 프로젝트</h2>
      <SelectGeneration selectGeneration={selectGeneration} selectedGeneration={generation} />
      <div css={sortBtnsWrapperCss}>
        {!generation && (
          <>
            <span
              onClick={() => {
                setSortBy('latest');
                setPage(1);
              }}
              css={sortBtnCss(sortBy === 'latest')}
            >
              최신순
            </span>
            <div css={dividerCss} />
            <span
              onClick={() => {
                setSortBy('oldest');
                setPage(1);
              }}
              css={sortBtnCss(sortBy === 'oldest')}
            >
              오래된순
            </span>
          </>
        )}
      </div>
      <ProjectContainer projects={displayedProjects} />
      <Pagination
        onClick={onClickPage}
        numberOfPages={Math.ceil(
          (generation ? organizedProjects[generation] : projects).length / 9
        )}
        currentPage={page}
      />
    </section>
  );
}

const sectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 1200px;
  margin: auto;
  margin-bottom: 180px;
`;

const smallCss = css`
  ${sectionSmallCss}
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss}
  margin-bottom: 60px;
`;

const sortBtnsWrapperCss = css`
  height: 20px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const sortBtnCss = (selected: boolean) => css`
  color: ${selected ? colors.black : colors.gray500};
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
`;

const dividerCss = css`
  display: inline-block;
  margin-left: 22px;
  margin-right: 16px;
  width: 1px;
  height: 12px;
  background-color: ${colors.black};
`;
