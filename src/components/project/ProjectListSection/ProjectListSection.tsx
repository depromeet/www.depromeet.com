import { useMemo, useState } from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { ClickableButton } from '~/components/common/Clickable';
import useMediaQuery from '~/hooks/use-media-query';
import { colors, mediaQuery } from '~/styles/constants';
import { section36HeadingCss, sectionSmallCss } from '~/styles/css';

import { Project, projects } from '../constants';
import MobileProjectList from '../MobileProjectList';
import ProjectList from '../ProjectList/ProjectList';
import SelectGeneration from '../SelectGeneration';
import SortBottomSheet from '../SortBottomSheet';

export type Order = 'latest' | 'oldest';
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

export default function ProjectListSection() {
  const [generation, setGeneration] = useState<null | Generation>(null);
  const [sortBy, setSortBy] = useState<Order>('latest');
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const isMobile = useMediaQuery('xs');

  const projectData = useMemo(() => {
    if (generation) {
      return organizedProjects[generation];
    } else if (sortBy === 'latest') {
      return sortedByLatestProjects;
    } else {
      return sortedByOldestProjects;
    }
  }, [generation, sortBy]);

  const selectGeneration = (generation: null | Generation) => {
    setGeneration(generation);
    if (!generation) {
      setSortBy('latest');
    }
  };
  const closeBottomSheet = () => {
    setShowBottomSheet(false);
  };

  const sortByLatest = () => {
    setSortBy('latest');
  };

  const sortByOldest = () => {
    setSortBy('oldest');
  };

  return (
    <section css={sectionCss}>
      <small css={smallCss}>PREVIOUS PROJECTS</small>
      <h2 css={headingCss}>지난 프로젝트</h2>
      <SelectGeneration selectGeneration={selectGeneration} selectedGeneration={generation} />

      <div css={sortBtnsAreaCss}>
        {!generation &&
          (isMobile ? (
            <div css={mobileSortBtnsWrapperCss}>
              <div
                css={mobileSortBtnCss}
                onClick={() => {
                  setShowBottomSheet(true);
                }}
              >
                <span>{sortBy === 'latest' ? '최신순' : '오래된순'}</span>
                <Image src={'/project/dropdown.webp'} alt="" width={20} height={20} />
              </div>
            </div>
          ) : (
            <div css={sortBtnsWrapperCss}>
              <ClickableButton onClick={sortByLatest} css={sortBtnCss(sortBy === 'latest')}>
                최신순
              </ClickableButton>
              <div css={dividerCss} />
              <ClickableButton onClick={sortByOldest} css={sortBtnCss(sortBy === 'oldest')}>
                오래된순
              </ClickableButton>
            </div>
          ))}
      </div>

      {isMobile ? (
        <MobileProjectList
          projects={projectData}
          sortBy={sortBy}
          sortByLatest={sortByLatest}
          sortByOldest={sortByOldest}
        />
      ) : (
        <ProjectList projects={projectData} />
      )}

      {isMobile && (
        <SortBottomSheet
          isShowing={showBottomSheet}
          onClose={closeBottomSheet}
          sortBy={sortBy}
          sortByLatest={sortByLatest}
          sortByOldest={sortByOldest}
        />
      )}
    </section>
  );
}

const sectionCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: auto;
  margin-top: 130px;
  margin-bottom: 180px;

  ${mediaQuery('xs')} {
    margin-top: 106px;
    margin-bottom: 150px;
  }
`;

const smallCss = css`
  ${sectionSmallCss}
  margin-bottom: 10px;
`;

const headingCss = css`
  ${section36HeadingCss}
  margin-bottom: 60px;
  ${mediaQuery('xs')} {
    margin-bottom: 20px;
  }
`;

const mobileSortBtnsWrapperCss = css`
  padding: 0 16px;
  position: relative;
`;

const mobileSortBtnCss = css`
  display: flex;
  align-items: center;
  margin-right: 4px;
  position: absolute;
  right: 0;
`;

const sortBtnsAreaCss = css`
  height: 20px;
  margin-bottom: 50px;
  ${mediaQuery('xs')} {
    margin-bottom: 40px;
    width: 343px;
  }
`;

const sortBtnsWrapperCss = css``;

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
